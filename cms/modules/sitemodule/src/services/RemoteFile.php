<?php
/**
 * Site module for Craft CMS 3.x
 *
 * Custom site module for the devMode.fm website
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\services;

use Craft;
use craft\base\Component;

/**
 * @author    nystudio107
 * @package   SiteModule
 * @since     1.0.0
 */
class RemoteFile extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * Return the contents of the passed in remote file URL
     *
     * @param string $url
     * @return string|null
     */
    public function fetch(string $url): ?string
    {
        $result = null;
        $client = Craft::$app->api->client;
        try {
            $response = $client->get($url, ['http_errors' => false]);
            $statusCode = $response->getStatusCode();
            if ($statusCode === 200) {
                $result = $response->getBody()->getContents();
            } else {
                $reason = $response->getReasonPhrase();
                Craft::error("Invalid response from API: ${reason} -- ${url}", __METHOD__);
            }
        } catch (\Throwable $e) {
            Craft::error($e->getMessage() . " -- ${url}", 'site-module');
        }

        return $result;
    }
}
