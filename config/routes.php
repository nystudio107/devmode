<?php
/**
 * Site URL Rules
 *
 * You can define custom site URL rules here, which Craft will check in addition
 * to any routes you’ve defined in Settings → Routes.
 *
 * See http://www.yiiframework.com/doc-2.0/guide-runtime-routing.html for more
 * info about URL rules.
 *
 * In addition to Yii’s supported syntaxes, Craft supports a shortcut syntax for
 * defining template routes:
 *
 *     'blog/archive/<year:\d{4}>' => ['template' => 'blog/_archive'],
 *
 * That example would match URIs such as `/blog/archive/2012`, and pass the
 * request along to the `blog/_archive` template, providing it a `year` variable
 * set to the value `2012`.
 */

return [
    /**
     * Handler for URLs of the format https://devMode.fm/<episodeNumber>
     * which are unfortunately used in the `guid` field in the RSS feed
     * and so get crawled by Google, yet cannot be changed or RSS readers
     * will think they are new episodes, and download them.
     */
    '<episodeNumber:\d+>' => ['template' => 'episodes/_entry'],
    '<episodeNumber:\d+>/amp' => ['template' => 'episodes/_amp-entry'],
    // Player card for Twitter cards handler
    'player-card/<slug:[^/]+>' => ['template' => 'player-card'],
    // Google AMP handlers
    'episodes/<slug:[^/]+>/amp' => ['template' => 'episodes/_amp-entry'],
    'about/amp' => ['template' => 'about/amp-index'],
    'calendar/amp' => ['template' => 'calendar/amp-index'],
    'episodes/amp' => ['template' => 'episodes/amp-index'],
    'amp' => ['template' => 'amp-index'],
];
