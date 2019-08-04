<?php

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function andesign_twbs_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {

  // Vertical tabs
  $form['andesign'] = [
    '#type'          => 'vertical_tabs',
    '#prefix'        => '<h2><small>' . t('andesign Settings') . '</small></h2>',
    '#weight'        => -10,
  ];

/**
 * Layout
 */
  $form['layout'] = array(
    '#type'          => 'details',
    '#title'         => t('Layout'),
    '#weight'        => 0,
    '#group'         => 'andesign',
  );

  // Header Containers
  $form['layout']['header'] = array(
    '#type'          => 'details',
    '#title'         => t('Header'),
    '#weight'        => 0,
  );

  // Sticky Header
  $form['layout']['header']['sticky_header'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Sticky Header'),
    '#prefix'        => '<h2><small>' . t('Sticky Header') . '</small></h2>',
    '#description'   => t('Check to make header sticky.'),
    '#default_value' => theme_get_setting('sticky_header'),
    '#weight'        => 0,
  );

  // Header Container
  $form['layout']['header']['container_header'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Header Container') . '</small></h2>',
    '#description'   => t('Check if header width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_header'),
    '#weight'        => 0,
  );

  // Navigation Containers
  $form['layout']['navigation'] = array(
    '#type'          => 'details',
    '#title'         => t('Navigation'),
    '#weight'        => 1,
  );

  $form['layout']['navigation']['container_navigation'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Navigation Container') . '</small></h2>',
    '#description'   => t('Check if navigation width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_navigation'),
    '#weight'        => 0,
  );

  // Highlighted Container
  $form['layout']['highlighted'] = array(
    '#type'          => 'details',
    '#title'         => t('Highlighted'),
    '#weight'        => 2,
  );

  $form['layout']['highlighted']['container_highlighted'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Highlighted Container') . '</small></h2>',
    '#description'   => t('Check if highlighted width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_highlighted'),
    '#weight'        => 0,
  );

  // Content Containers
  $form['layout']['content'] = array(
    '#type'          => 'details',
    '#title'         => t('Content'),
    '#weight'        => 3,
  );

  // Title Content Container
  $form['layout']['content']['container_content_title'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Content Title Container') . '</small></h2>',
    '#description'   => t('Check if title content width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_content_title'),
    '#weight'        => 0,
  );

  // Main Content Container
  $form['layout']['content']['container_content_main'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Main Content Container') . '</small></h2>',
    '#description'   => t('Check if main content width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_content_main'),
    '#weight'        => 1,
  );

  // Bottom Content Container
  $form['layout']['content']['container_content_bottom'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Bottom Content Container') . '</small></h2>',
    '#description'   => t('Check if bottom content width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_content_bottom'),
    '#weight'        => 2,
  );

  // Footer Containers
  $form['layout']['footer'] = array(
    '#type'          => 'details',
    '#title'         => t('Footer'),
    '#weight'        => 4,
  );

  // Top Footer Container
  $form['layout']['footer']['container_footer_top'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Top Footer Container') . '</small></h2>',
    '#description'   => t('Check if top footer width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_footer_top'),
    '#weight'        => 0,
  );

  // Main Footer Container
  $form['layout']['footer']['container_footer_main'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Main Footer Container') . '</small></h2>',
    '#description'   => t('Check if main footer width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_footer_main'),
    '#weight'        => 1,
  );

  // Bottom Footer Container
  $form['layout']['footer']['container_footer_bottom'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Container Width'),
    '#prefix'        => '<h2><small>' . t('Bottom Footer Container') . '</small></h2>',
    '#description'   => t('Check if bottom footer width will be inside container or fluid width.'),
    '#default_value' => theme_get_setting('container_footer_bottom'),
    '#weight'        => 2,
  );

/**
 * Navigation
 */
  $form['navigation'] = array(
    '#type'          => 'details',
    '#title'         => t('Navigation'),
    '#weight'        => 1,
    '#group'         => 'andesign',
  );

  // Mobile Menu
  $form['navigation']['mobile_menu_position'] = array(
    '#type'          => 'select',
    '#prefix'        => '<h2><small>' . t('Mobile Menu') . '</small></h2>',
    '#options'       => array(
    'left'           => t('Left'),
    'right'          => t('Right'),
    'cover'          => t('Cover'),
    ),
    '#description'   => t('Set the mobile menu position.'),
    '#default_value' => theme_get_setting('mobile_menu_position'),
    '#weight'        => 0,
  );

/**
 * Breadcrumbs
 */
  $form['breadcrumbs'] = array(
    '#type'          => 'details',
    '#title'         => t('Breadcrumbs'),
    '#weight'        => 2,
    '#group'         => 'andesign',
  );

  // Breadcrumbs
  $form['breadcrumbs']['breadcrumb_trail'] = array(
    '#type'          => 'radios',
    '#prefix'        => '<h2><small>' . t('Breadcrumbs') . '</small></h2>',
    '#options'       => [
    '0'              => 'Show <em>Home</em> in breadcrumb trail (Drupal’s default behavior)',
    '1'              => 'Remove <em>Home</em> from breadcrumb trail',
    '2'              => 'Remove <em>Home</em> when it is the only breadcrumb in trail',
      ],
    '#default_value' => theme_get_setting('breadcrumb_trail', 'andesign_twbs'),
    '#weight'        => 0,
  );

/**
 * Footer Settings
 */
  $form['footer_settings'] = array(
    '#type'          => 'details',
    '#title'         => t('Footer'),
    '#weight'        => 3,
    '#group'         => 'andesign',
  );

  $form['footer_settings']['copyright_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Enter copyright text'),
    '#prefix'        => '<h2><small>' . t('Footer Settings') . '</small></h2>',
    '#default_value' => theme_get_setting('copyright_text'),
    '#description' => t('Use @year placeholder for define current year.'),
    '#weight'        => 0,
  );


/**
 * User Experience
 */
  $form['ux'] = array(
    '#type'          => 'details',
    '#title'         => t('User Experience'),
    '#weight'        => 4,
    '#group'         => 'andesign',
  );

  // Scroll Top
  $form['ux']['scroll_top'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Scroll To Top'),
    '#prefix'        => '<h2><small>' . t('Scroll To Top') . '</small></h2>',
    '#description'   => t('Enable the scroll to top button.'),
    '#default_value' => theme_get_setting('scroll_top'),
    '#weight'        => 0,
  );

/**
 * Theming
 */
  $form['theming'] = array(
    '#type'          => 'details',
    '#title'         => t('Theming'),
    '#weight'        => 5,
    '#group'         => 'andesign',
  );

  // Viewport Size
  $form['theming']['viewport_size'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Enable Viewport Size'),
    '#prefix'        => '<h2><small>' . t('Viewport Size') . '</small></h2>',
    '#description'   => t('Show the viewport width, height, breakpoint and device. Use durring theme development,'),
    '#default_value' => theme_get_setting('viewport_size'),
    '#weight'        => 0,
  );

}
