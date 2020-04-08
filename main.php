<?php
/**
 * Plugin Name: Contact Form 7 for bootScore
 * Plugin URI: https://bootscore.me/plugins/contact-form-7-for-bootscore/
 * Description: Adds Bootstrap Alerts to Contact Form 7
 * Author: Bastian Kreiter
 * Author URI: https://crftwrk.de
 * Version: 1.0.2
 */


// Register Styles and Scripts
function contact_scripts() {
    
    wp_enqueue_script( 'contactform-script', plugins_url( '/js/contactform-script.js', __FILE__ ));
    
    wp_register_style( 'contactform-style', plugins_url('css/contactform-style.css', __FILE__) );
        wp_enqueue_style( 'contactform-style' );
    }

add_action('wp_enqueue_scripts','contact_scripts');

//Adjust contact form 7 radios and checkboxes to match bootstrap 4 custom radio structure.
add_filter('wpcf7_form_elements', function ($content) {
    $content = preg_replace('/<label><input type="(checkbox|radio)" name="(.*?)" value="(.*?)" \/><span class="wpcf7-list-item-label">/i', '<label class="custom-control custom-\1"><input type="\1" name="\2" value="\3" class="custom-control-input"><span class="wpcf7-list-item-label custom-control-label">', $content);

    return $content;
});

// Disable Contactform 7 Styles
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );
function wps_deregister_styles() {
    wp_deregister_style( 'contact-form-7' );
}