/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import './table.css';
import { List } from '../list/listWidget.js';
import { $, append, clearNode, createStyleSheet } from '../../dom.js';
import { SplitView } from '../splitview/splitview.js';
import { Emitter, Event } from '../../../common/event.js';
class TableListRenderer {
    constructor(columns, renderers, getColumnSize) {
        this.columns = columns;
        this.getColumnSize = getColumnSize;
        this.templateId = TableListRenderer.TemplateId;
        this.renderedTemplates = new Set();
        const rendererMap = new Map(renderers.map(r => [r.templateId, r]));
        this.renderers = [];
        for (const column of columns) {
            const renderer = rendererMap.get(column.templateId);
            if (!renderer) {
                throw new Error(`Table cell renderer for template id ${column.templateId} not found.`);
            }
            this.renderers.push(renderer);
        }
    }
    renderTemplate(container) {
        const rowContainer = append(container, $('.monaco-table-tr'));
        const cellContainers = [];
        const cellTemplateData = [];
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            const cellContainer = append(rowContainer, $('.monaco-table-td', { 'data-col-index': i }));
            cellContainer.style.width = `${this.getColumnSize(i)}px`;
            cellContainers.push(cellContainer);
            cellTemplateData.push(renderer.renderTemplate(cellContainer));
        }
        const result = { container, cellContainers, cellTemplateData };
        this.renderedTemplates.add(result);
        return result;
    }
    renderElement(element, index, templateData, height) {
        for (let i = 0; i < this.columns.length; i++) {
            const column = this.columns[i];
            const cell = column.project(element);
            const renderer = this.renderers[i];
            renderer.renderElement(cell, index, templateData.cellTemplateData[i], height);
        }
    }
    disposeElement(element, index, templateData, height) {
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            if (renderer.disposeElement) {
                const column = this.columns[i];
                const cell = column.project(element);
                renderer.disposeElement(cell, index, templateData.cellTemplateData[i], height);
            }
        }
    }
    disposeTemplate(templateData) {
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            renderer.disposeTemplate(templateData.cellTemplateData[i]);
        }
        clearNode(templateData.container);
        this.renderedTemplates.delete(templateData);
    }
    layoutColumn(index, size) {
        for (const { cellContainers } of this.renderedTemplates) {
            cellContainers[index].style.width = `${size}px`;
        }
    }
}
TableListRenderer.TemplateId = 'row';
function asListVirtualDelegate(delegate) {
    return {
        getHeight(row) { return delegate.getHeight(row); },
        getTemplateId() { return TableListRenderer.TemplateId; },
    };
}
class ColumnHeader {
    constructor(column, index) {
        this.column = column;
        this.index = index;
        this._onDidLayout = new Emitter();
        this.onDidLayout = this._onDidLayout.event;
        this.element = $('.monaco-table-th', { 'data-col-index': index, title: column.tooltip }, column.label);
    }
    get minimumSize() { var _a; return (_a = this.column.minimumWidth) !== null && _a !== void 0 ? _a : 120; }
    get maximumSize() { var _a; return (_a = this.column.maximumWidth) !== null && _a !== void 0 ? _a : Number.POSITIVE_INFINITY; }
    get onDidChange() { var _a; return (_a = this.column.onDidChangeWidthConstraints) !== null && _a !== void 0 ? _a : Event.None; }
    layout(size) {
        this._onDidLayout.fire([this.index, size]);
    }
}
export class Table {
    constructor(user, container, virtualDelegate, columns, renderers, _options) {
        this.virtualDelegate = virtualDelegate;
        this.domId = `table_id_${++Table.InstanceCount}`;
        this.cachedHeight = 0;
        this.domNode = append(container, $(`.monaco-table.${this.domId}`));
        const headers = columns.map((c, i) => new ColumnHeader(c, i));
        const descriptor = {
            size: headers.reduce((a, b) => a + b.column.weight, 0),
            views: headers.map(view => ({ size: view.column.weight, view }))
        };
        this.splitview = new SplitView(this.domNode, {
            orientation: 1 /* HORIZONTAL */,
            scrollbarVisibility: 2 /* Hidden */,
            getSashOrthogonalSize: () => this.cachedHeight,
            descriptor
        });
        this.splitview.el.style.height = `${virtualDelegate.headerRowHeight}px`;
        this.splitview.el.style.lineHeight = `${virtualDelegate.headerRowHeight}px`;
        const renderer = new TableListRenderer(columns, renderers, i => this.splitview.getViewSize(i));
        this.list = new List(user, this.domNode, asListVirtualDelegate(virtualDelegate), [renderer], _options);
        this.columnLayoutDisposable = Event.any(...headers.map(h => h.onDidLayout))(([index, size]) => renderer.layoutColumn(index, size));
        this.styleElement = createStyleSheet(this.domNode);
        this.style({});
    }
    get onDidChangeFocus() { return this.list.onDidChangeFocus; }
    get onDidChangeSelection() { return this.list.onDidChangeSelection; }
    get onMouseDblClick() { return this.list.onMouseDblClick; }
    get onPointer() { return this.list.onPointer; }
    get onDidFocus() { return this.list.onDidFocus; }
    get onDidDispose() { return this.list.onDidDispose; }
    updateOptions(options) {
        this.list.updateOptions(options);
    }
    splice(start, deleteCount, elements = []) {
        this.list.splice(start, deleteCount, elements);
    }
    getHTMLElement() {
        return this.domNode;
    }
    style(styles) {
        const content = [];
        content.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.virtualDelegate.headerRowHeight + 1}px;
			height: calc(100% - ${this.virtualDelegate.headerRowHeight}px);
		}`);
        this.styleElement.textContent = content.join('\n');
        this.list.style(styles);
    }
    getSelectedElements() {
        return this.list.getSelectedElements();
    }
    setSelection(indexes, browserEvent) {
        this.list.setSelection(indexes, browserEvent);
    }
    getSelection() {
        return this.list.getSelection();
    }
    getFocus() {
        return this.list.getFocus();
    }
    dispose() {
        this.splitview.dispose();
        this.list.dispose();
        this.columnLayoutDisposable.dispose();
    }
}
Table.InstanceCount = 0;
