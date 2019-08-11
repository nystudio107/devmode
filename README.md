<p align="center"><a href="https://devMode.fm/" target="_blank"><img width="300" height="300" src="https://devmode.fm/dist/img/favicons/android-chrome-384x384.png" alt="devMode.fm"></a></p>

## About nystudio107/devmode

This is the source code to the [devMode.fm](https://devMode.fm/) website, which is the home for the devMode.fm podcast. It's MIT licensed, so you can do what you like with it, providing the copyright notice & license stay intact.

Pull Requests are welcome, and Issues are welcome as well.

The project is based on [Craft CMS](https://CraftCMS.com) and implements a number of technologies/techniques:
 
* [webpack](https://webpack.js.org/) is used for the build system as per [An Annotated webpack 4 Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-webpack-4-config-for-frontend-web-development)
* [VueJS](https://vuejs.org/) is used for some of the interactive bits on the website as per 
* [Tailwind CSS](https://tailwindcss.com/) for the site-wide CSS
* JSON-LD structured data as per [Annotated JSON-LD Structured Data Examples](https://nystudio107.com/blog/annotated-json-ld-structured-data-examples)
* [Google AMP](https://developers.google.com/amp/) versions of the podcast episode and other pages
* Implements a Service Worker via Google's [Workbox](https://developers.google.com/web/tools/workbox/) as per [Service Workers and Offline Browsing](https://nystudio107.com/blog/service-workers-and-offline-browsing)
* Critical CSS as per [Implementing Critical CSS on your website](https://nystudio107.com/blog/implementing-critical-css)
* Frontend error handling as per [Handling Errors Gracefully in Craft CMS](https://nystudio107.com/blog/handling-errors-gracefully-in-craft-cms)
* A custom site module as per [Enhancing a Craft CMS 3 Website with a Custom Module](https://nystudio107.com/blog/enhancing-a-craft-cms-3-website-with-a-custom-module)
* CLI-based queue as per [Robust queue job handling in Craft CMS](https://nystudio107.com/blog/robust-queue-job-handling-in-craft-cms)
* FastCGI Static Cache as per [Static Page Caching with Craft CMS](https://nystudio107.com/blog/static-caching-with-craft-cms)
* [Craft-Scripts](https://github.com/nystudio107/craft-scripts) as described in the [Database & Asset Syncing Between Environments in Craft CMS](https://nystudio107.com/blog/database-asset-syncing-between-environments-in-craft-cms), [Mitigating Disaster via Website Backups](https://nystudio107.com/blog/mitigating-disaster-via-website-backups) & [Hardening Craft CMS Permissions](https://nystudio107.com/blog/hardening-craft-cms-permissions) articles

...and probably a bunch of other stuff too.

The following Craft CMS plugins are used on this site:
* [Disqus](https://nystudio107.com/plugins/disqus) - for the Disqus comment handling, async loaded
* [FastCGI Cache Bust](https://nystudio107.com/plugins/fastcgi-cache-bust) - to bust the FastCGI cache whenever entries are modified
* [iCalendar](https://nystudio107.com/plugins/icalendar) - for parsing the ICS calendar feed from Trello
* [ImageOptimize](https://nystudio107.com/plugins/imageoptimize) - for the optimized images and `srcset`s used on the site
* [Minify](https://nystudio107.com/plugins/minify) - to minify the HTML and inline JS/CSS
* [Retour](https://nystudio107.com/plugins/retour) - for setting up 404 redirects
* [SEOmatic](https://nystudio107.com/plugins/seomatic) - for handling site-side SEO
* [Transcoder](https://nystudio107.com/plugins/transcoder) - for transcoding the uploaded podcast audio into a format that's optimized for size & quality
* [Twigpack](https://nystudio107.com/plugins/twigpack) - for loading webpack-generated `manifest.json` resources in a modern way
* [Typogrify](https://nystudio107.com/plugins/typogrify) - for smart quotes and other typographic ligatures
* [Webperf](https://nystudio107.com/plugins/webperf) - for monitoring web performance

You can read more about it in the [Setting up a New Craft 3 CMS Project](https://nystudio107.com/blog/setting-up-a-craft-cms-3-project) article.

## About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).

## Roadmap

* Move to containerized builds in buddy.works & atomic deployments
* Move to Amazon S3 for assets, and utilize Cloudfront as well
* Convert local development over to Docker
