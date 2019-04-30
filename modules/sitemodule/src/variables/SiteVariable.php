<?php
/**
 * Site module for Craft CMS 3.x
 *
 * An example module for Craft CMS 3 that lets you enhance your websites with a custom site module
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\variables;

use modules\sitemodule\SiteModule;

/**
 * @author    nystudio107
 * @package   SiteModule
 * @since     1.0.0
 */
class SiteVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Return the URL to the calendar feed
     *
     * @return string
     */
    public function getCalendarFeedUrl(): string
    {
        return SiteModule::$instance->calendar->getCalendarFeedUrl();
    }
}
