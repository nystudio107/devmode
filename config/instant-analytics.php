<?php
/**
 * Instant Analytics plugin for Craft CMS 3.x
 *
 * Instant Analytics brings full Google Analytics support to your Twig templates
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2017 nystudio107
 */

/**
 * Instant Analytics config.php
 *
 * This file exists only as a template for the Instant Analytics settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'instant-analytics.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [

    // All environments
    '*' => [
        /**
         * The default Google Analytics tracking ID
         */
        'googleAnalyticsTracking' => '',

        /**
         * Should the query string be stripped from the page tracking URL?
         */
        'stripQueryString' => true,

        /**
         * Should page views be sent automatically when a page view happens?
         */
        'autoSendPageView' => true,

        /**
         * The field in a Commerce Product Variant that should be used for the category
         */
        'productCategoryField' => '',

        /**
         * The field in a Commerce Product Variant that should be used for the brand
         */
        'productBrandField' => '',

        /**
         * Whether add to cart events should be automatically sent
         */
        'autoSendAddToCart' => true,

        /**
         * Whether remove from cart events should be automatically sent
         *
         * @var bool
         */
        'autoSendRemoveFromCart' => true,

        /**
         * Whether purchase complete events should be automatically sent
         */
        'autoSendPurchaseComplete' => true,

        /**
         * Controls whether Instant Analytics will send analytics data.
         */
        'sendAnalyticsData' => true,

        /**
         * Controls whether Instant Analytics will send analytics data when `devMode` is on.
         */
        'sendAnalyticsInDevMode' => true,

        /**
         * Controls whether we should filter out bot UserGents.
         */
        'filterBotUserAgents' => true,

        /**
         * Controls whether we should exclude users logged into an admin account from Analytics tracking.
         */
        'adminExclude' => false,

        /**
         * Controls whether analytics that blocked from being sent should be logged to
         * storage/logs/web.log
         * These are always logged if `devMode` is on
         */
        'logExcludedAnalytics' => true,

        /**
         * Contains an array of Craft user group handles to exclude from Analytics tracking.  If there's a match
         * for any of them, analytics data is not sent.
         */
        'groupExcludes' => array(
            'some_user_group_handle',
        ),

        /**
         * Contains an array of keys that correspond to $_SERVER[] super-global array keys to test against.
         * Each item in the sub-array is tested against the $_SERVER[] super-global key via RegEx; if there's
         * a match for any of them, analytics data is not sent.  This allows you to filter based on whatever
         * information you want.
         * Reference: http://php.net/manual/en/reserved.variables.server.php
         * RegEx tester: http://regexr.com
         */
        'serverExcludes' => array(
            'REMOTE_ADDR' => array(
                '/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/',
            ),
        ),
    ],

    // Live (production) environment
    'live'  => [
        /**
         * The default Google Analytics tracking ID
         */
        'googleAnalyticsTracking' => 'UA-69117511-5',

        /**
         * Should the query string be stripped from the page tracking URL?
         */
        'stripQueryString' => true,

        /**
         * Should page views be sent automatically when a page view happens?
         */
        'autoSendPageView' => false,
    ],

    // Staging (pre-production) environment
    'staging'  => [
    ],

    // Local (development) environment
    'local'  => [
    ],
];
