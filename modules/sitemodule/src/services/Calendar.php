<?php
/**
 * Site module for Craft CMS 3.x
 *
 * An example module for Craft CMS 3 that lets you enhance your websites with a custom site module
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\services;

use craft\base\Component;

/**
 * @author    nystudio107
 * @package   SiteModule
 * @since     1.0.0
 */
class Calendar extends Component
{
    // Constants
    // =========================================================================

    const SHOW_ICS_FEED_URL = "https://trello.com/calendar/58818099de7afeb3eccf53c3/596c082de8b3646b91fe224c/a33556c5da5218fe3ed14f368b6b77bc.ics";

    // Public Methods
    // =========================================================================

    /**
     * Return the URL to the calendar feed
     *
     * @return string
     */
    public function getCalendarFeedUrl(): string
    {
        return self::SHOW_ICS_FEED_URL;
    }
}
