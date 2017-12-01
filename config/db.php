<?php
/**
 * Craft 3 Multi-Environment
 * Efficient and flexible multi-environment config for Craft 3 CMS
 *
 * $_ENV constants are loaded by craft3-multi-environment from .env.php via
 * ./web/index.php for web requests, and ./craft for console requests
 *
 * @author    nystudio107
 * @copyright Copyright (c) 2017 nystudio107
 * @link      https://nystudio107.com/
 * @package   craft3-multi-environment
 * @since     1.0.5
 * @license   MIT
 */

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in src/config/DbConfig.php
 */

return [

    // All environments
    '*' => [
        'database' => getenv('CRAFTENV_DB_DATABASE'),
        'driver' => getenv('CRAFTENV_DB_DRIVER'),
        'server' => getenv('CRAFTENV_DB_SERVER'),
        'user' => getenv('CRAFTENV_DB_USER'),
        'password' => getenv('CRAFTENV_DB_PASSWORD'),
        'schema' => getenv('CRAFTENV_DB_SCHEMA'),
        'tablePrefix' => getenv('CRAFTENV_DB_TABLE_PREFIX'),
        'port' => getenv('CRAFTENV_DB_PORT'),
    ],

    // Live (production) environment
    'live'  => [
    ],

    // Staging (pre-production) environment
    'staging'  => [
    ],

    // Local (development) environment
    'local'  => [
    ],
];
