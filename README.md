<p align="center"><a href="https://devMode.fm/" target="_blank"><img width="300" height="300" src="https://devmode.fm/dist/img/favicons/android-chrome-384x384.png" alt="devMode.fm"></a></p>

## About nystudio107/devmode

This is the source code to the [devMode.fm](https://devMode.fm/) website, which is the home for the devMode.fm podcast. It's MIT licensed, so you can do what you like with it, providing the copyright notice & license stay intact.

Pull Requests are welcome, and Issues are welcome as well.

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fdevmode.fm%2F&tab=mobile)

### Vite buildchain

This project uses a [Vite.js](https://vitejs.dev/) for the build system as per [Vite.js Next Generation Frontend Tooling + Craft CMS](https://nystudio107.com/blog/using-vite-js-next-generation-frontend-tooling-with-craft-cms), as opposed to the usual webpack buildchain.

Vite is _fast_ ⚡

There is also a [modular webpack 5 buildchain](https://github.com/nystudio107/devmode/tree/devmode-webpack) of this project available (which is what was used prior to switching to Vite).

## Try devMode.fm Yourself!

### Initial setup

You'll need [Docker desktop](https://www.docker.com/products/docker-desktop) for your platform installed to run devMode in local development

Ensure no other local development environments are running that might have port conflicts, then:

1. Clone the git repo with:
```
git clone https://github.com/nystudio107/devmode.git
```

2. Go into the project's directory:
```
   cd devmode
```

3. Start up the site by typing this in the project's root directory:
```
make dev
```
(the first build will be somewhat lengthy, ignore the warnings from `queue_1`).

If it appears to hang at `Building php_xdebug`, your PhpStorm or other IDE is likely waiting for an Xdebug connection; quit PhpStorm or stop it from listening for Xdebug during the initial build.

4. Once the site is up and running (see below), navigate to:
```
http://localhost:8000
```

The `vite-dev-server` for Hot Module Replacement (HMR) serving of static resources runs off of `http://localhost:3000`

🎉 You're now up and running Node 16, Vite, Nginx, PHP, Postgres, Redis, xdebug, & ffmpeg without having to do any devops!

The first time you do `make dev` it will be slow, because it has to build all of the Docker images.

Subsequent `make dev` commands will be much faster, but still a little slow because we intentionally do a `composer install` and an `npm install` each time, to keep our dependencies in sync.

Wait until you see the following to indicate that the PHP container is ready:

```
php_1         | Craft is installed.
php_1         | Applying changes from your project config files ... done
php_1         | [01-Dec-2020 18:38:46] NOTICE: fpm is running, pid 22
php_1         | [01-Dec-2020 18:38:46] NOTICE: ready to handle connections
```

...and the following to indicate that the Vite container is ready:
```
vite_1           |   vite v2.7.2 dev server running at:
vite_1           | 
vite_1           |   > Local:    http://localhost:3000/
vite_1           |   > Network:  http://172.22.0.3:3000/
vite_1           | 
vite_1           |   ready in 1607ms.
```

All of the Twig files, JavaScript, Vue components, CSS, and even the Vite config itself will reflect changes immediately Hot Module Replacement and `vite-dev-server`, so feel free to edit things and play around.

A password-scrubbed seed database will automatically be installed; you can log into the CP at `http://localhost:8000/admin` via these credentials:

**User:** `andrew@nystudio107.com` \
**Password:** `password`

### Makefile Project Commands

This project uses Docker to shrink-wrap the devops it needs to run around the project.

To make using it easier, we're using a Makefile and the built-in `make` utility to create local aliases. You can run the following from terminal in the project directory:

- `make dev` - starts up the local dev server listening on `http://localhost:8000/`
- `make build` - builds the static assets via the Vite buildchain
- `make clean` - removes the `cms/composer.lock` & the entire `cms/vendor/` directory as well as the `buildchain/package-lock.json` & the entire `buildchain/node_modules/` directory
- `make composer xxx` - runs the `composer` command passed in, e.g. `make composer install`
- `make craft xxx` - runs the `craft` [console command](https://craftcms.com/docs/3.x/console-commands.html) passed in, e.g. `make craft project-config/apply` in the php container
- `make npm xxx` - runs the `npm` command passed in, e.g. `make npm install`
- `make nuke` - restarts the project from scratch by running `make clean` (above), then shuts down the Docker containers, removes any mounted volumes (including the database), and then rebuilds the containers from scratch
- `make ssh` - opens up a Unix shell inside the PHP container for the project

**Tip:** If you try a command like `make craft project-config/apply --force` you’ll see an error, because the shell thinks the `--force` flag should be applied to the `make` command. To side-step this, use the `--` (double-dash) to disable further option processing, like this: `make -- craft project-config/apply --force`

### Things you can try

With the containers up and running, here are a few things you can try:

* Edit a CSS file such as `src/css/components/global.pcss` to add something like this, and change the colors to see the CSS change instantly via HRM:
```css
* {
  border: 3px solid red;
}
```

* Edit the `src/vue/DevmodePlayer.vue` vue component, changing the `currentSeconds` [data prop](https://github.com/nystudio107/devmode/blob/master/src/vue/DevmodePlayer.vue#L135) from `0` to `1000` and see your changes instantly via HMR (the slider will move)

* Set up the `.env.sh` file in the `scripts/` directory if you want to use the scripts there by running this in your terminal from the project root: `cp scripts/example.env.sh scripts/.env.sh`
  
* Build the production assets by typing `make build` to build the critical CSS, fonts, and other production assets. They will appear in `cms/web/dist/` (just double-click on the `report-legacy.html` and `report-modern.html` files to view them)

 **N.B.:** Without authorization & credentials (which are private), the `make pulldb` will not work (it just runs `scripts/docker_pull_db.sh`). It's provided here for instructional purposes, and for devMode.fm hosts

### Other notes

To update to the latest Composer packages (as constrained by the `cms/composer.json` semvers) and latest npm packages (as constrained by the `buildchain/package.json` semvers), do:
```
make update
```

To start from scratch by removing `buildchain/node_modules/` & `cms/vendor/`, then update to the latest Composer packages (as constrained by the `cms/composer.json` semvers) and latest npm packages (as constrained by the `buildchain/package.json` semvers), do:
```
make update-clean
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
            "port": 9003,
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

[buddy.works](https://buddy.works/) is used for atomic deployments where the Vite build and `composer install` are done in Buddy.works Docker containers. Then the results are then deployed to the Forge-provisioned VPS vis [rsync](https://buddy.works/docs/deployments/rsync).

Forge Daemon Queue Runner: 

```
/usr/bin/nice -n 10 /usr/bin/php /home/forge/devmode.fm/current/craft queue/listen --verbose
```

## Techniques and Technologies

The project is based on [Craft CMS](https://CraftCMS.com) using a unique `templates/_boilerplate` system for web/AJAX/AMP pages, and implements a number of technologies/techniques:

* [Docker](https://www.docker.com/) Docker is used for local development; see **Setting Up Local Dev** below for details
* A base Twig templating setup as described in [An Effective Twig Base Templating Setup](https://nystudio107.com/blog/an-effective-twig-base-templating-setup)
* [Vite.js](https://vitejs.dev/) is used for the build system as per [Vite.js Next Generation Frontend Tooling + Craft CMS](https://nystudio107.com/blog/using-vite-js-next-generation-frontend-tooling-with-craft-cms)
* [TypeScript](https://www.typescriptlang.org/) for strictly typed JavaScript code
* [VueJS](https://vuejs.org/) is used for some of the interactive bits on the website
* [Tailwind CSS](https://tailwindcss.com/) for the site-wide CSS using the [@tailwindcss/jit](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css)
* JSON-LD structured data as per [Annotated JSON-LD Structured Data Examples](https://nystudio107.com/blog/annotated-json-ld-structured-data-examples)
* [xdebug via dual containers](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development#xdebug-performance) for better performance
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
* [Vite](https://nystudio107.com/plugins/vite) - for loading Vite-generated `manifest.json` resources in a modern way
* [Typogrify](https://nystudio107.com/plugins/typogrify) - for smart quotes and other typographic ligatures
* [Webperf](https://nystudio107.com/plugins/webperf) - for monitoring web performance

You can read more about it in the [Setting up a New Craft 3 CMS Project](https://nystudio107.com/blog/setting-up-a-craft-cms-3-project) article.

## About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).

## Roadmap

* Update to Vue.js `^3.0.0`
