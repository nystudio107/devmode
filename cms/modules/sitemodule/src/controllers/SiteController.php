<?php
/**
 * Site module for Craft CMS 3.x
 *
 * An example module for Craft CMS 3 that lets you enhance your websites with a custom site module
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\controllers;

use Craft;
use craft\elements\Entry;
use craft\web\Controller;

use Stringy\Stringy;
use yii\web\Response;

/**
 * @author    nystudio107
 * @package   SiteModule
 * @since     1.0.0
 */
class SiteController extends Controller
{
    // Protected Properties
    // =========================================================================

    protected $allowAnonymous = ['episodes', 'get-csrf'];

    // Public Methods
    // =========================================================================

    /**
     * Handle requests for the performance detail table
     *
     * @param string $sort
     * @param int    $page
     * @param int    $per_page
     * @param string $filter
     *
     * @return Response
     */
    public function actionEpisodes(
        string $sort = 'postDate|DESC',
        int $page = 1,
        int $per_page = 20,
        $filter = ''
    ): Response {
        $data = [];
        $sortField = 'postDate';
        $sortType = 'DESC';
        // Figure out the sorting type
        if ($sort !== '') {
            if (strpos($sort, '|') === false) {
                $sortField = $sort;
            } else {
                list($sortField, $sortType) = explode('|', $sort);
            }
        }
        // Query the db table
        $offset = ($page - 1) * $per_page;
        $query = Entry::find()
            ->section('episodes')
            ->offset($offset)
        ;
        if ($filter !== '') {
            $query
                ->search($filter)
            ;
        }
        $query
            ->orderBy("{$sortField} {$sortType}")
            ->limit($per_page)
        ;
        $episodes = $query->all();
        if ($episodes) {
            $stats = [];
            foreach ($episodes as $episode) {
                $stat = [];
                $stat['title'] = $episode->title;
                $stat['url'] = $episode->url;
                $stat['episodeNumber'] = $episode->episodeNumber;
                $stat['postDate'] = $episode->postDate->format('Y-m-d');
                $summary = $episode->episodeSummary;
                $summary = (string)Stringy::create($summary)->safeTruncate(
                    200,
                    '…'
                );
                $stat['summary'] = $summary;
                $stats[] = $stat;
            }
            // Format the data for the API
            $data['data'] = $stats;
            $count = $query->count();
            $data['links']['pagination'] = [
                'total' => $count,
                'per_page' => $per_page,
                'current_page' => $page,
                'last_page' => ceil($count / $per_page),
                'next_page_url' => null,
                'prev_page_url' => null,
                'from' => $offset + 1,
                'to' => $offset + ($count > $per_page ? $per_page : $count),
            ];
        }

        return $this->asJson($data);
    }

    /**
     * @return Response
     */
    public function actionGetCsrf(): Response
    {
        return $this->asJson([
            'name' => Craft::$app->getConfig()->getGeneral()->csrfTokenName,
            'value' => Craft::$app->getRequest()->getCsrfToken(),
        ]);
    }
}
