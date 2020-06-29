<p align="center"><a href="https://devMode.fm/" target="_blank"><img width="300" height="300" src="https://devmode.fm/dist/img/favicons/android-chrome-384x384.png" alt="devMode.fm"></a></p>

## About nystudio107/devmode

This is the source code to the [devMode.fm](https://devMode.fm/) website, which is the home for the devMode.fm podcast. It's MIT licensed, so you can do what you like with it, providing the copyright notice & license stay intact.

Pull Requests are welcome, and Issues are welcome as well.

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fdevmode.fm%2F&tab=mobile)

## Techniques and Technologies

The project is based on [Craft CMS](https://CraftCMS.com) using a unique `templates/_boilerplate` system for web/AJAX/AMP pages, and implements a number of technologies/techniques:
 
* [Docker](https://www.docker.com/) Docker is used for local development; see **Setting Up Local Dev** below for details
* A base Twig templating setup as described in [An Effective Twig Base Templating Setup](https://nystudio107.com/blog/an-effective-twig-base-templating-setup)
* [webpack](https://webpack.js.org/) is used for the build system as per [An Annotated webpack 4 Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-webpack-4-config-for-frontend-web-development)
* [TypeScript](https://www.typescriptlang.org/) for strictly typed JavaScript code
* [VueJS](https://vuejs.org/) is used for some of the interactive bits on the website
* [Tailwind CSS](https://tailwindcss.com/) for the site-wide CSS
* JSON-LD structured data as per [Annotated JSON-LD Structured Data Examples](https://nystudio107.com/blog/annotated-json-ld-structured-data-examples)
* [Google AMP](https://developers.google.com/amp/) versions of the podcast episode and other pages
* Static assets are stored in AWS S3 buckets with CloudFront as the CDN, as per the [Setting Up AWS S3 Buckets + CloudFront CDN for your Assets](https://nystudio107.com/blog/using-aws-s3-buckets-cloudfront-distribution-with-craft-cms) article
* Image transforms are done via a [Serverless Image Handler](https://aws.amazon.com/solutions/serverless-image-handler/) lambda function, as described in the [Setting Up Your Own Image Transform Service](https://nystudio107.com/blog/setting-up-your-own-image-transform-service) article
* Implements a Service Worker via Google's [Workbox](https://developers.google.com/web/tools/workbox/) as per [Service Workers and Offline Browsing](https://nystudio107.com/blog/service-workers-and-offline-browsing)
* Critical CSS as per [Implementing Critical CSS on your website](https://nystudio107.com/blog/implementing-critical-css)
* Frontend error handling as per [Handling Errors Gracefully in Craft CMS](https://nystudio107.com/blog/handling-errors-gracefully-in-craft-cms)
* A custom site module as per [Enhancing a Craft CMS 3 Website with a Custom Module](https://nystudio107.com/blog/enhancing-a-craft-cms-3-website-with-a-custom-module)
* CLI-based queue as per [Robust queue job handling in Craft CMS](https://nystudio107.com/blog/robust-queue-job-handling-in-craft-cms)
* FastCGI Static Cache as per [Static Page Caching with Craft CMS](https://nystudio107.com/blog/static-caching-with-craft-cms)
* [buddy.works](http://buddy.works/) atomic deployments

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

## Setting Local Dev

You'll need Docker desktop for your platform installed to run devMode in local development

* Clone the git repo with `git clone https://github.com/nystudio107/devmode.git`
* Set up a `.env` file in the `cms/` directory, based off of the provided `example.env`
* Set up a `.env.sh.` file in the `scripts/` directory, based off of the provided `example.env.sh`
* Start up the site with `docker-compose up` (the first build will be somewhat lengthy)
* Import the remote db the first time from the `scripts/` dir with `./docker_pull_db.sh`
* Navigate to `http://localhost:8000` to use the site; the `webpack-dev-server` runs off of `http://localhost:8080`

**N.B.:** Without authorization & credentials (which are private), the `./docker_pull_db.sh` will not work. It's provided here for instructional purposes, and for devMode.fm hosts

To update to the latest Composer packages (as constrained by the `cms/composer.json` semvers), do:
```
rm cms/composer.lock
docker-compose up
```

To update to the latest npm packages (as constrained by the `docker-config/webpack-dev-devmode/package.json` semvers), do:
```
rm docker-config/webpack-dev-devmode/package-lock.json
docker-compose up
```

To use Xdebug with VSCode install the [PHP Debug extension](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug ) and use the following configuration:
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9001,
            "log": true,
            "externalConsole": false,
            "pathMappings": {
                "/var/www/project/cms": "${workspaceRoot}/cms"
            },
            "ignore": ["**/vendor/**/*.php"]
        }
    ]
}
```

## Deployment

[buddy.works](https://buddy.works/) is used for atomic deployments where the webpack build and `composer install` are done in buddy.works Docker containers. The the results are then deployed to the Forge-provisioned VPS vis [rsync](https://buddy.works/docs/deployments/rsync).

Forge Daemon Queue Runner: 

```
/usr/bin/nice -n 10 /usr/bin/php /home/forge/devmode.fm/current/craft queue/listen --verbose
```

## About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).

## Roadmap

* Move to containerized builds in buddy.works & atomic deployments
