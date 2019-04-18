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
var portalDesc = new Array() // Tab 1 (Links) - Portal select box
  portalDesc[0] = "http://wotcitrix.tui.de.insite";
  portalDesc[1] = "https://crewportal.tui.co.uk";
  portalDesc[2] = "Crewing Toolkit database";
  portalDesc[3] = "Crew leave team database";
  // portalDesc[4] = "https://uki.tuismile.com";

var miscApps = new Array() // Tab 1 (Links) - Miscellaneous select box
  miscApps[0] = "http://aqdportal-live.thomsonuk.dnsroot.biz/AQDPORTAL";
  miscApps[1] = "https://signin.webex.com/collabs/auth";
  miscApps[2] = "PDF form for Crew Data";
  miscApps[3] = "https://tui.efosweb.com";
  miscApps[4] = "https://tuicrewroster.tuigroup.com/crew-app/page/index.html";
  miscApps[5] = "\\\\idpsliveaix.thomsonuk.dnsroot.biz\\PC_REPORTS\\eJL_IDPS_Extract\\Backup";
  miscApps[6] = "http://openreports.thomsonuk.dnsroot.biz:8080/openreports";
  miscApps[7] = "http://idpsapp.tui.de/xmlpserver/servlet/home";
  miscApps[8] = "http://idpsapp.tui.de.insite/discoverer/plus";
  miscApps[9] = "https://thomson.frmsc.com";
  miscApps[10] = "http://partnerweb/beplanned/Mainstream/Departments/Airline/AirlineOPS/default.aspx";
  miscApps[11] = "http://tuwigmws20ylj32.tuiad.net:8080";
  miscApps[12] = "PDF form for requesting access to an IDPS system";
  miscApps[13] = "http://tapreports.thomsonuk.dnsroot.biz/tap_live/Login.aspx";
  miscApps[14] = "http://hajas600uamp1.tuid.msds.insite/CourionARMS/AspxCommon/Login.aspx";

var appDesc = new Array() // Tab 1 (Links) - IDPS select box
  appDesc[0] = "http://hajas600ris01.tuid.msds.insite/idpsais/flights";
  appDesc[1] = "http://idpsapp.tui.de/sso/pls/idps/f?p=125:14";
  appDesc[2] = "http://arcomhlf.hlf.de.insite/arcomhist/";
  appDesc[3] = "http://hajas600cap2.tuid.msds.insite:8080/cap/webstart/app.jnlp";
  appDesc[4] = "https://efile.tuifly.com/coursetfl_prod/webstart/app.jnlp";
  appDesc[5] = "https://efile.tuifly.com/coursetom_prod/webstart/app.jnlp";
  appDesc[6] = "https://efile.tuifly.com/coursetui_prod/webstart/app.jnlp";
  appDesc[7] = "https://efile.tuifly.com/coursejaf_prod/webstart/app.jnlp";
  appDesc[8] = "https://efile.tuifly.com/courseblx_prod/webstart/app.jnlp";
  appDesc[9] = "https://efile.tuifly.com/coursetfl_prod/web";
  appDesc[10] = "https://efile.tuifly.com/coursetom_prod/web";
  appDesc[11] = "https://efile.tuifly.com/coursetui_prod/web";
  appDesc[12] = "https://efile.tuifly.com/coursejaf_prod/web";
  appDesc[13] = "https://efile.tuifly.com/courseblx_prod/web";
  appDesc[14] = "https://tui-staging.efosweb.com";
  appDesc[15] = "http://idpsapp.tui.de.insite/pls/idps/f?p=114";
  appDesc[16] = "http://idpsapp.tui.de.insite/pls/idps/f?p=133:1:::::P1_P_NR,P1_P_OWNER:214117,BAL";
  appDesc[17] = "http://hajas600oa24.tuid.msds.insite:8080/cdd3/chooseDutySheets.do?airlineX=BAL&opsManServer=corbaloc:iiop:hajas600oa36.tuid.msds.insite:8852";
  appDesc[18] = "http://vlx0257.tui.de.insite/fileXchange/public";
  appDesc[19] = "https://atqp.tuifly.com/atqptom/webstart/app.jnlp";
  appDesc[20] = "https://atqp.tuifly.com/atqptom/start_atqp.html";
  appDesc[21] = "https://services.prodefis.de/atqpblx/blx/blx.jnlp";
  appDesc[22] = "https://services.prodefis.de/atqpblx/start_atqp.html";
  appDesc[23] = "http://hajas600ris01.tuid.msds.insite/idpsais/roster";
  appDesc[24] = "http://idpsapp.tui.de/skycon_prod";
  appDesc[25] = "https://analytics.tui.de.insite";

var driveMaps = new Array() // Tab 1 (Links) - Drive Maps select box
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

var carmenApps = new Array() // Tab 2 (Carmen) - Other Jeppesen Carmen Links select box
  carmenApps[0] = "http://password.jepphost.com";
  carmenApps[1] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/train_duty/index.php";
  carmenApps[2] = "https://crew.tom.jepphost.com";
  carmenApps[3] = "http://tuwigmap32.thomsonuk.dnsroot.biz/idps/carmenextract/crew_expiry_live/index.php";
  carmenApps[4] = "http://airlineapps.thomsonuk.dnsroot.biz/onestopshopd/app/crewfinder";
  carmenApps[5] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/crewroom/flights.php";
  carmenApps[6] = "http://airlineapps.thomsonuk.dnsroot.biz/onestopshopd/app/idpscodes";
  carmenApps[7] = "https://vpn.tom.jepphost.com/?src=connect";
  carmenApps[8] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/carmenextract/nsaexclusion/index.php";
  carmenApps[9] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/pami/askops.php";
  carmenApps[10] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/Tinc/LoadCourse.php";
  carmenApps[11] = "http://airlineapps.thomsonuk.dnsroot.biz/idps/Tinc/init.php";

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
  displayDescription(document.portal.portalSelector, portalDesc, 'portalSelected');
  displayDescription(document.app.appSelector, appDesc, 'appSelected');
  displayDescription(document.miscApp.miscAppSelector, miscApps, 'miscAppsSelected');
  displayDescription(document.driveMap.driveMapSelector, driveMaps, 'driveMapSelected')
  displayDescription(document.carmen.carmenSelector, carmenApps, 'carmenSelected');
});

// Dynamically changes the title of the browser window, depending on what tab is selected
function setTitle(title) {
  // Does nothing if the window title is already set to the selected tab.
  if (document.title != title) {
    document.title = title;
  }
}