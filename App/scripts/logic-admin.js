// Background image crossfade logic
// First, set the current image to null
currentImage = null;

// Calculate the browser window dimensions
$(window).on('load', function(){
  $('img.bgfade').hide();
  var dg_H = $(window).height();
  var dg_W = $(window).width();
  $('#wrap').css({'height':dg_H,'width':dg_W});
  // Set the first background image to a default
  anim('bg1');})
// Handle the browser window resize appropriately
$(window).resize(function(){window.location.href=window.location.href})

// Crossfade animation between images
function anim(id) {
  // Here, we check if the current image already the same as the parameter variable
  if (id != currentImage) {
    // If it isn't then we do the animation
    $("#" + currentImage).appendTo('#wrap').fadeOut(1500);
    $("#" + id).fadeIn(1500);
    // Update the current image variable
    currentImage = id;
  }
}

// CUSTOMIZE TEXT DESCRIPTIONS FOR LINKS ABOVE
// These arrays hold the text for the select boxes. This may not be the actual link to where the select box goes to.
var carmenProdApps = new Array() // Tab 1 (Links - Prod) - Carmen select box
  carmenProdApps[0] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenextract/carmen_extract.php";
  carmenProdApps[1] = "\\\\idpsliveaix.thomsonuk.dnsroot.biz\\PC_REPORTS\\CARMEN_EXTRACT_OUTPUT";
  carmenProdApps[2] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenimport/carmenimport_live/index.php";
  carmenProdApps[3] = "http://airlineapps.thomsonuk.dnsroot.biz/Airline/app/GOS/carmen.php";
  carmenProdApps[4] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/train_duty/index.php";
  carmenProdApps[5] = "http://password.jepphost.com";
  carmenProdApps[6] = "\\\\idpsliveaix.thomsonuk.dnsroot.biz\\PC_REPORTS\\Carmen_Solution";
  carmenProdApps[7] = "https://crew.tom.jepphost.com";
  carmenProdApps[8] = "http://airlineapps.thomsonuk.dnsroot.biz/onestopshopd/app/crewfinder";
  carmenProdApps[9] = "https://vpn.tom.jepphost.com/?src=connect";
  carmenProdApps[10] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenextract/nsaexclusion/index.php";
  carmenProdApps[11] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/pami/askops.php";

var miscProdApps = new Array() // Tab 1 (Links - Prod) - Miscellaneous select box
  miscProdApps[0] = "https://accessmanagementportal.thomsonuk.dnsroot.biz/CourionARMS/AspxCommon/PortalHome.aspx";
  miscProdApps[1] = "http://aqdportal-live.thomsonuk.dnsroot.biz/AQDPORTAL";
  miscProdApps[2] = "https://signin.webex.com/collabs/auth";
  miscProdApps[3] = "https://tui.efosweb.com";
  miscProdApps[4] = "https://tuicrewroster.tuigroup.com/crew-app/page/index.html";
  miscProdApps[5] = "\\\\idpsliveaix.thomsonuk.dnsroot.biz\\PC_REPORTS\\eJL_IDPS_Extract\\Backup";
  miscProdApps[6] = "http://openreports.thomsonuk.dnsroot.biz:8080/openreports";
  miscProdApps[7] = "http://idpsapp.tui.de/xmlpserver/servlet/home";
  miscProdApps[8] = "http://idpsapp.tui.de.insite/discoverer/plus";
  miscProdApps[9] = "https://tuiuk.qtestnet.com";
  miscProdApps[10] = "https://thomson.frmsc.com";
  miscProdApps[11] = "http://partnerweb/beplanned/Mainstream/Departments/Airline/AirlineOPS/default.aspx";
  miscProdApps[12] = "http://tapreports.thomsonuk.dnsroot.biz/tap_live/Login.aspx";
  miscProdApps[13] = "http://hajas600uamp1.tuid.msds.insite/CourionARMS/AspxCommon/Login.aspx";

var appProdDesc = new Array() // Tab 1 (Links - Prod) - IDPS select box
  appProdDesc[0] = "http://hajas600ris01.tuid.msds.insite/idpsais/flights";
  appProdDesc[1] = "http://idpsapp.tui.de/sso/pls/idps/f?p=125:14";
  appProdDesc[2] = "http://arcomhlf.hlf.de.insite/arcomhist/";
  appProdDesc[3] = "http://hajas600cap2.tuid.msds.insite:8080/cap/webstart/app.jnlp";
  appProdDesc[4] = "https://efile.tuifly.com/coursetfl_prod/webstart/app.jnlp";
  appProdDesc[5] = "https://efile.tuifly.com/coursetom_prod/webstart/app.jnlp";
  appProdDesc[6] = "https://efile.tuifly.com/coursetui_prod/webstart/app.jnlp";
  appProdDesc[7] = "https://efile.tuifly.com/coursejaf_prod/webstart/app.jnlp";
  appProdDesc[8] = "https://efile.tuifly.com/courseblx_prod/webstart/app.jnlp";
  appProdDesc[9] = "https://efile.tuifly.com/coursetfl_prod/web";
  appProdDesc[10] = "https://efile.tuifly.com/coursetom_prod/web";
  appProdDesc[11] = "https://efile.tuifly.com/coursetui_prod/web";
  appProdDesc[12] = "https://efile.tuifly.com/coursejaf_prod/web";
  appProdDesc[13] = "https://efile.tuifly.com/courseblx_prod/web";
  appProdDesc[14] = "https://tui-staging.efosweb.com";
  appProdDesc[15] = "http://idpsapp.tui.de.insite/pls/idps/f?p=114";
  appProdDesc[16] = "http://idpsapp.tui.de.insite/pls/idps/f?p=133:1:::::P1_P_NR,P1_P_OWNER:214117,BAL";
  appProdDesc[17] = "http://hajas600oa24.tuid.msds.insite:8080/cdd3/chooseDutySheets.do?airlineX=BAL&opsManServer=corbaloc:iiop:hajas600oa36.tuid.msds.insite:8852";
  appProdDesc[18] = "http://vlx0257.tui.de.insite/fileXchange/public";
  appProdDesc[19] = "https://atqp.tuifly.com/atqptom/webstart/app.jnlp";
  appProdDesc[20] = "https://atqp.tuifly.com/atqptom/start_atqp.html";
  appProdDesc[21] = "https://services.prodefis.de/atqpblx/blx/blx.jnlp";
  appProdDesc[22] = "https://services.prodefis.de/atqpblx/start_atqp.html";
  appProdDesc[23] = "http://hajas600ris01.tuid.msds.insite/idpsais/roster";
  appProdDesc[24] = "http://idpsapp.tui.de/skycon_prod";
  appProdDesc[25] = "https://analytics.tui.de.insite";

var portalDesc = new Array() // Tab 1 (Links - Prod) - Portal select box
  portalDesc[0] = "http://wotcitrix.tui.de.insite";
  portalDesc[1] = "https://crewportal.tui.co.uk";
  portalDesc[2] = "https://uki.tuismile.com";
  portalDesc[3] = "https://sas.on.spiceworks.com";
  portalDesc[4] = "http://tuwigmws20ylj32.tuiad.net:8080/ticket_dashboard";
  portalDesc[5] = "http://tuwigmws20ylj32.tuiad.net:8080";

var carmenTestApps = new Array() // Tab 2 (Links - UAT) - Carmen select box
  carmenTestApps[0] = "https://test-rh7.tom.jepphost.com/etx/";
  carmenTestApps[1] = "https://crewbid-dev.tom.jepphost.com";
  carmenTestApps[2] = "https://crewtest.tom.jepphost.com/dr";
  carmenTestApps[3] = "https://crewtest.tom.jepphost.com/site";
  carmenTestApps[4] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenextract/Carmen_Extract_trn1_nsa.php";
  carmenTestApps[5] = "\\\\gostrn1.thomsonuk.dnsroot.biz\\PC_REPORTS\\CARMEN_EXTRACT_OUTPUT";
  carmenTestApps[6] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenimport/carmenimport_NR/index.php";
  carmenTestApps[7] = "http://airlineapps.thomsonuk.dnsroot.biz/Airline/app/GOS/carmen_NR.php";
  carmenTestApps[8] = "\\\\gostrn1.thomsonuk.dnsroot.biz\\PC_REPORTS\\Carmen_Solution";
  carmenTestApps[9] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenextract/nsaexclusion_trn1/index.php";
  carmenTestApps[10] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenextract/Carmen_Extract_uat1.php";
  carmenTestApps[11] = "\\\\10.145.125.41\\zfs4_GOS_UAT_smb\\cron\\output\\pc_reports\\CARMEN_EXTRACT_OUTPUT";
  carmenTestApps[12] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenimport/carmenimport_UAT1/index.php";
  carmenTestApps[13] = "http://airlineapps.thomsonuk.dnsroot.biz/Airline/app/GOS/carmen_CR.php";
  carmenTestApps[14] = "\\\\10.145.125.41\\zfs4_GOS_UAT_smb\\cron\\output\\pc_reports\\Carmen_Solution";

var miscTestApps = new Array() // Tab 2 (Links - UAT) - Miscellaneous select box
  miscTestApps[0] = "http://aqdportal-uat.thomsonuk.dnsroot.biz/AQDPORTAL";
  miscTestApps[1] = "https://testthomson.efosweb.com/Web/FDCrew/LoginV2.aspx";
  miscTestApps[2] = "https://crewportal.tuiprjuat.co.uk";
  miscTestApps[3] = "https://tuicrewrostertest.tuigroup.com/crew-app/page/index.html";
  miscTestApps[4] = "https://tuiuk.qtestnet.com/p/40762/portal/project";
  miscTestApps[5] = "http://tuwigmejl01.thomsonuk.dnsroot.biz/tapuat/login.aspx";
  miscTestApps[6] = "http://hajas600uam1.tuid.msds.insite/CourionARMS/AspxCommon/Login.aspx";

var appTestDesc = new Array() // Tab 2 (Links - UAT) - IDPS select box
  appTestDesc[0] = "http://hajas600bac1.tuid.msds.insite/idpsais/flights";
  appTestDesc[1] = "http://idpsapp.tui.de/sso/pls/idpsn/f?p=125:14";
  appTestDesc[2] = "http://hajas600bac1.tuid.msds.insite:8208/captom_test/webstart/app.jnlp";
  appTestDesc[3] = "https://efile.tuifly.com/coursetfl_test/webstart/app.jnlp";
  appTestDesc[4] = "https://efile.tuifly.com/coursetom_test/webstart/app.jnlp";
  appTestDesc[5] = "https://efile.tuifly.com/coursetui_test/webstart/app.jnlp";
  appTestDesc[6] = "https://efile.tuifly.com/coursejaf_test/webstart/app.jnlp";
  appTestDesc[7] = "https://efile.tuifly.com/courseblx_test/webstart/app.jnlp";
  appTestDesc[8] = "https://efile.tuifly.com/coursetfl_test/web";
  appTestDesc[9] = "https://efile.tuifly.com/coursetom_test/web";
  appTestDesc[10] = "https://efile.tuifly.com/coursetui_test/web";
  appTestDesc[11] = "https://efile.tuifly.com/coursejaf_test/web";
  appTestDesc[12] = "https://efile.tuifly.com/courseblx_test/web";
  appTestDesc[13] = "https://tui-test.efosweb.com";
  appTestDesc[14] = "http://idpsapp.tui.de.insite/pls/idpsn/f?p=114";
  appTestDesc[15] = "http://idpsapp.tui.de.insite/pls/idpsn/f?p=133:1:0::::P1_P_NR,P1_P_OWNER:217225,BAL";
  appTestDesc[16] = "http://hajas600oa38.tuid.msds.insite:8080/cdd3/chooseDutySheets.do?airlineX=BAL&opsManServer=corbaloc:iiop:hajas600oa38.tuid.msds.insite:8852";
  appTestDesc[17] = "http://hajas600oa27.tuid.msds.insite:8080/cdd3/chooseDutySheets.do?airlineX=BAL&opsManServer=corbaloc:iiop:hajas600oa27.tuid.msds.insite:8852";
  appTestDesc[18] = "http://vlx0156.tui.de.insite/fileXchange/public";
  appTestDesc[19] = "https://atqp.tuifly.com/atqptom_test/webstart/app.jnlp";
  appTestDesc[20] = "https://atqp.tuifly.com/atqptom_test/start_atqp.html";
  appTestDesc[21] = "https://test.prodefis.de/atqp-blx-test/webstart/app.jnlp";
  appTestDesc[22] = "https://test.prodefis.de/atqp-blx-test/start_atqp.html";
  appTestDesc[23] = "http://hajas600bac1.tuid.msds.insite/idpsais/roster";
  appTestDesc[24] = "http://idpsapp.tui.de/skycon_current";
  appTestDesc[25] = "http://idpsapp.tui.de/skycon_idpsv";
  appTestDesc[26] = "http://idpsapp.tui.de/skycon_next";

var jiraLinks = new Array() // Tab 2 (Links - UAT) - JIRA select box
  jiraLinks[0] = "https://jira.jeppesensystems.com";
  jiraLinks[1] = "https://jira.jeppesensystems.com/crowd/console/forgottenlogindetails!default.action";
  jiraLinks[2] = "https://trackspace.lhsystems.com";
  jiraLinks[3] = "https://alm-tuigroup.atlassian.net";
  jiraLinks[4] = "http://hajas600jir1.tuid.msds.insite";

var driveMaps = new Array() // Tab 3 (Links) - Drive Maps select box
  driveMaps[0] = "Maps all network drives";
  driveMaps[1] = "Maps the Carmen network drives";
  driveMaps[2] = "Maps the Crew Catering drives";
  driveMaps[3] = "Batch Legality Analyser drive, known as the 'B' drive";
  driveMaps[4] = "All Users drive, known as the 'J' drive";
  driveMaps[5] = "Hotac drive, known as the 'L' drive";
  driveMaps[6] = "Crew Planning drive, known as the 'P' drive";
  driveMaps[7] = "Cabin Crew drive, known as the 'R' drive";
  driveMaps[8] = "Establishment drive, known as the 'S' drive";
  driveMaps[9] = "Crew Training drive, known as the 'T' drive";
  driveMaps[10] = "Training drive, also known as the 'T' drive";
  driveMaps[11] = "Airline Training Records drive, known as the 'X' drive"

var daveApps = new Array() // Tab 3 (Links) - Dave's Apps select box
  daveApps[0] = "Ad hoc APIS";
  daveApps[1] = "Configure APIS destinations";
  daveApps[2] = "Batch Checker";
  daveApps[3] = "Batch Reporter";
  daveApps[4] = "Discretion Dashboard";

var systemsTeamMembers = new Array() // Tab 3 (Contacts) - Systems team select box
  systemsTeamMembers[0] = "Mobile: <a href=\"tel:+447984515473\">+44 7984 515473</a><br />Mobile: <a href=\"tel:+447812508523\">+44 7812 508523</a>";
  systemsTeamMembers[1] = "Mobile: <a href=\"tel:+447906916327\">+44 7906 916327</a>";
  systemsTeamMembers[2] = "Mobile: <a href=\"tel:+447465998645\">+44 7465 998645</a>";
  systemsTeamMembers[3] = "Mobile: <a href=\"tel:+447807525945\">+44 7494 939615</a>";

var serviceTeamMembers = new Array() // Tab 3 (Contacts) - IDPS team select box
  serviceTeamMembers[0] = "Phone: <a href=\"tel:+495119727817\">+49 511 9727 817</a>";
  serviceTeamMembers[1] = "Phone: <a href=\"tel:+495119727627\">+49 511 9727 627</a>";
  serviceTeamMembers[2] = "Phone: <a href=\"tel:+495119727662\">+49 511 9727 662</a><br />Mobile: <a href=\"tel:+491755352492\">+49 175 535 2492</a>";
  serviceTeamMembers[3] = "Phone: <a href=\"tel:+495119727629\">+49 511 9727 629</a>";
  serviceTeamMembers[4] = "Phone: <a href=\"tel:+495119727352\">+49 511 9727 352</a><br />Mobile: <a href=\"tel:+4915157120711\">+49 151 5712 0711</a>";

var emailLists = new Array() // Tab 3 (Contacts) - Email a distribution list select box
  emailLists[0] = "Report a technical issue or service interruption regarding Carmen";
  emailLists[1] = "Report a technical issue or service interruption regarding OpsMan";
  emailLists[2] = "Report a technical issue or service interruption with Citrix-based systems";
  emailLists[3] = "Report a technical issue or service interruption with other IDPS systems";
  emailLists[4] = "Report a technical issue or service interruption with phones";
  emailLists[5] = "Report a technical issue or service interruption with a Prodefis system";
  emailLists[6] = "Report a technical issue or service interruption with a Evoke system";
// Displays the form information text for the selected element on each form
function displayDescription(which, descriptionArray, container) {
  if (document.getElementById) {
    document.getElementById(container).innerHTML = descriptionArray[which.selectedIndex];
  }
}

// Opens the link for the selected element on each form
function jumpToLink(what) {
  var selectedOpt = what.options[what.selectedIndex];
  if (document.getElementById && selectedOpt.getAttribute("target") == "_blank") {
    window.open(selectedOpt.value);
  }
  else {
    window.location = selectedOpt.value;
  }
}

/*  Call function displayDescription() for each drop down menu you have on the page
*   This function displays the initial description for the selected menu item when the page loads
*   displayDescription(name of select menu, name of corresponding text array, ID of SPAN container tag):
*   Don't forget to remove the calls not in use (ie: 2nd line below if there's only 1 menu on your page)
*   We use $( document ).ready() here to ensure that the page is loaded before manipulating data
*   This avoids any undefined references */
$(document).ready(function() {
  displayDescription(document.carmenProd.carmenProdSelector, carmenProdApps, 'carmenProdSelected');
  displayDescription(document.appProd.appProdSelector, appProdDesc, 'appProdSelected');
  displayDescription(document.miscProd.miscProdSelector, miscProdApps, 'miscProdSelected');
  displayDescription(document.portal.portalSelector, portalDesc, 'portalSelected');
  displayDescription(document.carmenTest.carmenTestSelector, carmenTestApps, 'carmenTestSelected');
  displayDescription(document.appTest.appTestSelector, appTestDesc, 'appTestSelected');
  displayDescription(document.miscTest.miscTestSelector, miscTestApps, 'miscTestSelected');
  displayDescription(document.jiraLink.jiraLinkSelector, jiraLinks, 'jiraLinkSelected');
  displayDescription(document.driveMap.driveMapSelector, driveMaps, 'driveMapSelected')
  displayDescription(document.daveApp.daveAppSelector, daveApps, 'daveAppSelected');
  displayDescription(document.systemsTeam.systemsTeamSelector, systemsTeamMembers, 'systemsTeamSelected');
  displayDescription(document.serviceTeam.serviceTeamSelector, serviceTeamMembers, 'serviceTeamSelected');
  displayDescription(document.emailList.emailListSelector, emailLists, 'emailListSelected');
});

// Dynamically changes the title of the browser window, depending on what tab is selected
function setTitle(title) {
  // Does nothing if the window title is already set to the selected tab.
  if (document.title != title) {
    document.title = title;
  }
}