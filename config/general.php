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
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in src/config/GeneralConfig.php
 */

return [

    // All environments
    '*' => [
        // Craft defined config settings
        'cacheDuration' => false,
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),
        'enableCsrfProtection' => true,
        'generateTransformsBeforePageLoad' => true,
        'omitScriptNameInUrls' => true,
        'securityKey' => getenv('CRAFTENV_SECURITY_KEY'),
        'siteUrl' => getenv('CRAFTENV_SITE_URL'),
        'useEmailAsUsername' => true,
        'usePathInfo' => true,
        // Custom site-specific config settings
        'custom' => [
            'basePath' => getenv('CRAFTENV_BASE_PATH'),
            'baseUrl' => getenv('CRAFTENV_BASE_URL'),
            'craftEnv' => CRAFT_ENVIRONMENT,
            'staticAssetsVersion' => 1,
        ]
    ],

    // Live (production) environment
    'live' => [
        // Craft defined config settings
        'allowAutoUpdates' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
        'isSystemOn' => true,
        // Custom site-specific config settings
        'custom' => [
        ]
    ],

    // Staging (pre-production) environment
    'staging' => [
        // Craft defined config settings
        'allowAutoUpdates' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
        'isSystemOn' => false,
        // Custom site-specific config settings
        'custom' => [
        ]
    ],

    // Local (development) environment
    'local' => [
        // Craft defined config settings
        'allowAutoUpdates' => true,
        'backupOnUpdate' => true,
        'devMode' => true,
        'enableTemplateCaching' => false,
        'isSystemOn' => true,
        // Custom site-specific config settings
        'custom' => [
            'staticAssetsVersion' => time(),
        ]
    ],
];
