
![Logo](https://tdjneate.github.io/img/watch-your-language-thumbnail.png)



# Watch Your Language: Using Smartwatches To Support Communication



## Installation

- Clone the repo.
- use 'npm install'/'npm i' to retrieve all required packages.
- use 'npm run dev' to view a local version of the site. Make sure you are in the correct subdirectory, otherwise this command will not work.

```bash
  npm i
  npm run dev
```
    
## Navigating codebase

- The 'public' folder contains all site static assets. This is generally where you will find all site images/svg files. In the code, to access these files you simply provide a relative path and it will automatically find the image. For example: './images.jpg' looks in the 'public' folder for a image called 'images.jpg'.

#### src:
- The top-most 'components' file contains a few components which are needed in all site pages. This includes the footer, navbar, template for the site modals and the dark/light mode switcher.
- Each subpage has been logically defined in its own folder located in 'pages'. If you want to change anything about a specific page, you will find the appropriately named subpage there. These page folders contain:
1) The components which are used on that single page.
2) The TSX file for the page itself, normally found as soon as you open the folder.
3) For some subpages, there are files which allow you to enter text to change the values of reusable components. This includes files like 'watchOut'InFeatureList' and 'timelineCardContents'. I hope this makes it much easier when it comes to changing text - for these situations you will be able to simply change the text there and all layout-related things will be taken care of automatically.
## Deployment Instructions

Deployment is handled via the [gh-pages](https://www.npmjs.com/package/gh-pages) npm package. By following a few steps you will be able to set up deployment with a few commands.

1) gh-pages should already be installed if you have ran 'npm install'.
2) In package.json, under 'homepage', change the username to your github username and REPONAME to the name of the repo.
3) Run:
```bash
  npm run deploy
```
4) Go to the github repo > settings > pages and hopefully you should see a green popup.
5) Select source branch to 'gh-pages'

The site should then be successfully deployed! Any time you want to push new changes to the deployed version simply run the same command (should be quicker after the first time)


## Authors

- [Site created by @JSusak](https://github.com/JSusak)
- Research project led by Dr. Timothy Neate and Mr. Humphrey Curtis.
