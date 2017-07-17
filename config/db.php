<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in src/config/defaults/db.php
 */

// $_ENV constants are loaded by craft3-multi-environment from .env.php via web/index.php
return [

    // All environments
    '*' => [
        'driver' => getenv('CRAFTENV_DB_DRIVER'),
        'server' => getenv('CRAFTENV_DB_SERVER'),
        'user' => getenv('CRAFTENV_DB_USER'),
        'password' => getenv('CRAFTENV_DB_PASSWORD'),
        'database' => getenv('CRAFTENV_DB_DATABASE'),
        'schema' => getenv('CRAFTENV_DB_SCHEMA'),
        'tablePrefix' => getenv('CRAFTENV_DB_TABLE_PREFIX'),
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
