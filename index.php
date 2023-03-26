<?php

get_header(); ?>
<?php

if (have_posts()) :

    if (is_home() && !is_front_page()) : ?>
    <?php
    endif;

    /* Start the Loop */
    while (have_posts()) : the_post(); ?>

    <h1><?php var_dump(get_post()); ?></h1>

    <?php endwhile;

else: ?>

    <h1>No content</h1>

<?php endif; ?>
<?php
get_footer();
