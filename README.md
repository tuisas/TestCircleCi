# frontend kickstarter

Automated deployment from a GIT project to a FTP server example code


Features 🚀:
- autoreload on local FTP webserver
- sass and css support
- dist building with minification
- circleci FTP autodeployment (read below)


Requirements:
- node.js (npm)
- npm install -g gulp-cli 
- package.json file for all dependencies
- CircleCi account linked to target project

Files needed on target GIT project:
- gulpfile.js - this file has all logic for copying 
- packages.json
- CircleCi directory called .circleci on root of GIT project contaning deploy.js and config.yml
Copy and adjust files as needed to your project, comments have been added to all key files so code can be understood :)

Note do not set config.yml to latest as it causes gulp to copy files with 0 bytes
on this project we have set the node version to 8.12.0 and it looks like this on the file

- image: circleci/node:8.12.0

This project was oginally created based on blog post: https://blog.polarbits.co/2018/01/24/deploy-static-html-website-from-github-repository-to-the-ftp-server-using-circleci/ 
