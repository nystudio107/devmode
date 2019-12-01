<?php
/**
 * Site module for Craft CMS 3.x
 *
 * Custom site module for the devMode.fm website
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\variables;

use Craft;
use craft\helpers\Json;

use yii\base\Exception;

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
     * @param string $url
     *
     * @return mixed|null
     */
    public function webmentions(string $url)
    {
        $client = Craft::$app->api->client;
        $result = null;
        try {
            $response = $client->get($url);
            $statusCode = $response->getStatusCode();
            if ($statusCode === 200) {
                $result = $response->getBody()->getContents();
                if ($result) {
                    $result = Json::decodeIfJson($result);
                }
                // Return null if the JSON decode fails
                if (\is_string($result)) {
                    $result = null;
                }
            } else {
                $reason = $response->getReasonPhrase();
                throw new Exception("Invalid response from API: ${reason} -- ${url}", $statusCode);
            }
        } catch (\Exception $e) {
            Craft::error($e->getMessage() . " -- ${url}", 'site-module');
        }

        return $result;
    }

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
