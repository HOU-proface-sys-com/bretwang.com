<?php
/**
* The default template for displaying content
*/
?>
<?php if (is_single()) : ?>
<article id="post-<?php the_ID(); ?>" <?php post_class('post'); ?>>
	<div class="single-loop">
		<!--<div class="post-details">
			<ul class="post-meta-ul">
				<li class="author"><i class="fa fa-user"></i><?php the_author_posts_link(); ?></li>
				<li class="post-date"><a href=""><i class="fa fa-calendar"></i><?php the_time( get_option('date_format') ); ?></a></li>
			</ul>
		</div>-->
		<!--<div class="post-meta" style="text-align:left">
			<ul>
				<li class="category"><a href=""><i class="fa fa-folder-open-o"></i> <?php echo $category_list = get_the_category_list( __( ', ', 'featuredlite' ) ); ?></a></li>
			</ul>
		</div>-->
		
		<div class="post-title" style="text-align:left">
			<h1><?php the_title(); ?></h1>
		</div>
		<!--<div class="post-meta">
			<ul>
				<li class="category"><a href=""><i class="fa fa-folder-open-o"></i> <?php echo $category_list = get_the_category_list( __( ', ', 'featuredlite' ) ); ?></a></li>
				<li class="comments"><a href=""><i class="fa fa-comments-o"></i><?php featuredlite_comment_number(); ?></a></li>
			</ul>
		</div>-->
		<div class="post-content">
			<?php the_content(); ?>
		</div>
		<div class="clear"></div>
		<!--<nav id="nav-single"> <span class="nav-previous">
			<?php previous_post_link('&laquo; %link'); ?>
		</span> <span class="nav-next">
		<?php next_post_link('%link &raquo;'); ?>
	</span> </nav>-->
	<div class="clear"></div>

		<!-- 横Banner -->
<!-- <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-2970218401600961"
     data-ad-slot="2316578636"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>-->
		
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- t01 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-2970218401600961"
     data-ad-slot="2458883244"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
		
	<div class="multipage-links">
		<?php
			wp_link_pages( array(
						'before'      => '<span class="meta-nav">' . __( 'Pages:', 'featuredlite' ) . '</span>',
						'after'       => '',
						'link_before' => '<span class="active">',
						'link_after'  => '</span>',
					) );
		?>
		<div class="tagcloud"><?php echo the_tags('','',''); ?></div>
	</div>		
</div>
</article>
<?php endif; ?>