<?php

if ( ! defined( 'ABSPATH' ) )
    exit;

define('IS_VITE_DEVELOPMENT', true);


include "inc/vite.php";

if ( ! function_exists( 'register_custom_menus' ) ) {
    function register_custom_menus(){
        register_nav_menus( array(
            'primary_menu' => __( 'Primary Menu', 'main_menu' ),
            'footer_menu'  => __( 'Footer Menu', 'footer_menu' ),
        ) );
    }
    add_action( 'after_setup_theme', 'register_custom_menus', 0 );
}

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page();
}
