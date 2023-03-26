<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Wordify
 */

get_header(); ?>
    <div id="app"></div>
<?php

if (have_posts()) :

    if (is_home() && !is_front_page()) : ?>
        <header>
            <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
            <p>testing hello ssss</p>
        </header>

    <?php
    endif;

    /* Start the Loop */
    while (have_posts()) : the_post();

        get_post_format();

    endwhile;

else: ?>

    <h1>No content</h1>

<?php endif; ?>

<?php
get_footer();
