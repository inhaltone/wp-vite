<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <!--Fonts-->
    <link rel="stylesheet" href="https://use.typekit.net/ngr5zpi.css">
    <link rel="stylesheet" href="https://use.typekit.net/ngr5zpi.css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="app">
<header>
    <!--    --><?php //wp_nav_menu(array('theme_location' => 'primary_menu', 'menu_id' => 'primary-menu')); ?>
    <?php get_template_part('template-parts/header/navbar') ?>
</header>
