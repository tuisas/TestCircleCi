/* Code Author Alejandro Gavilanes
 * version = 1
 * version = Date 18-apr-2019
 * Note = This code is used by CircleCI project to create a Continues delivery from GIT hub project.
 * Code has been adjusted to work with project https://github.com/tuisas/TUILinksPage directory structure
 * ftp-deploy is used to deploy the gulpfile gathered for transfer to FTP server
 * enviroment variables used for FTP user, password and host that are encryted on CircleCi
 * remoteRoot directory has been set to "/htdocs/AlexTest" for testing and must exist on target FTP server
 * When deploying to production adjust remoteRoot path to correct location
 * localRoot directory "/../dist/" is on docker container that is used for deployment on CircleCi
 */
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: process.env.FTPUSERNAME,
    password: process.env.FTPPASS,
    host: process.env.FTPHOST,
    port: 21,
    localRoot: __dirname + "/../dist/",
    remoteRoot: "/htdocs/AlexTest",
    include: ['*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('Deployment completed');
});