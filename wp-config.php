<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'media_carousel' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7hh+lO%Lk?r 7YoC@T`B6*aDl2kG bG&ho=Rz~ oD07v)HOP<R2EJ:;46`m@hK5>' );
define( 'SECURE_AUTH_KEY',  '.a=HS,H~y{~[9LyF]T$Ifw]{I{1NC1Eh%j0;C8lCUu-6I8+x%eLxF6S;RoL:1A^&' );
define( 'LOGGED_IN_KEY',    'LBdSp1|YUZmYFx]($Sy#p=VfM*]Asu]4I!1d>!^J<:@&ne=+o}ZMl9itioZZk5<>' );
define( 'NONCE_KEY',        'C,k;j:=sTL6u<4$U+i(v5FP7)d9@4- Y!(oVf34)?Xb!M-*ppjG_g368B3@I#wa5' );
define( 'AUTH_SALT',        'w:XX8zCX#w}kR[zfVQ:wO)I^5.cqG6G3iFp?.km11ub8<2/U)W1KAA5eWk1T~wD+' );
define( 'SECURE_AUTH_SALT', '2wr8EkM2M7Yo]QZ%tN|K|m*~tM0+F%yD1V#3L:{@q^f9NOua+;uH^c{;N6t!C47!' );
define( 'LOGGED_IN_SALT',   'j!yUx8=KYGg[|+%hgpA}N4WVaDmWh8S!rwslXN:13ss2HG&pVHnCZPtPw5a9{,c)' );
define( 'NONCE_SALT',       '7nfW)0q<uw85t3NM:j{LMS:5r}Q;-]e]wvY6wYnJVd&liWdzJj5!nU+zdwfa-yoT' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('WP_ENVIRONMENT_TYPE','local');
/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
