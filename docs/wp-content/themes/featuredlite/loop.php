<!-- Start the Loop. -->
<?php
if (have_posts()) : while (have_posts()) : the_post(); ?>
<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="blog-loop">
        <?php if ( 'post' == get_post_type() ) : ?>

    <!--<div class="post-details">
      <ul class="post-meta-ul">
        <li class="author"><i class="fa fa-user"></i><?php the_author_posts_link(); ?></li>
        <li class="post-date"><a href="<?php esc_url(the_permalink()); ?>"><i class="fa fa-calendar"></i><?php echo get_the_date(); ?></li>
      </ul>
    </div>-->
	  
    <!--<div class="post-meta" style="text-align:left">
      <ul>
        <li class="category"><i class="fa fa-folder-open-o"></i><?php the_category(' / '); ?></li>
      </ul>
    </div>-->
	  
      <?php endif; ?>

    <div class="post-title" style="text-align:left">
      <h1><?php the_title();?></h1>
    </div>
      <?php if ( 'post' == get_post_type() ) : ?>

    <!--<div class="post-meta">
      <ul>
        <li class="category"><i class="fa fa-folder-open-o"></i><?php the_category(' / '); ?></li>
        <li class="comments"><a href="<?php comments_link(); ?>"><i class="fa fa-comments-o"></i><?php comments_number(__('No Comments', 'featuredlite'), __('One Comment', 'featuredlite'),  __('% Comments', 'featuredlite') ); ?></a></li>
      </ul>
    </div>-->
	  
  <?php endif; ?>
    <div class="post-content">
      <a href="<?php the_permalink() ?>"> <?php the_post_thumbnail('featuredlite-custom-thumb'); ?> </a>
      <?php the_excerpt();?>
    </div>
    <div class="read-more"><a class="read_more" href="<?php the_permalink() ?>"><?php echo _e('Read More','featuredlite'); ?></a></div>
    
  </div>
</div>
<?php
endwhile;?>

<?php
featuredlite_pagination();
else:?>
<div class="post-none">
  <p>
    <?php _e('sorry no post matched your criteria!', 'featuredlite'); ?>
  </p>
</div>
<?php endif; ?>
<!--End post-->


<div style="margin-top:50px">
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

</div>