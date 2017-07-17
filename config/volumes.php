<?php

/**
 * Asset Volume Configuration
 *
 * All of your system's volume configuration settings go in here.
 * Put the Asset Volume handle in `ASSET_HANDLE` key, and put the path
 * to the asset in `ASSET_PATH`. Create an array for each Asset Volume
 * your website uses.
 */

// $_ENV constants are loaded by craft3-multi-environment from .env.php via web/index.php
return [

    // All environments
    '*' => [
        'ASSET_HANDLE' => [
            'url' => getenv('CRAFTENV_BASE_URL') . 'ASSET_PATH',
            'path' => getenv('CRAFTENV_BASE_PATH') . 'ASSET_PATH',
        ],
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
