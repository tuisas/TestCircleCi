Option Explicit
' See: Command-Line Switches for Windows Explorer
' located at http://support.microsoft.com/kb/130510

Const vbNormalFocus = 1
Const PathToOpen = "\\idpsliveaix.thomsonuk.dnsroot.biz\PC_REPORTS\eJL_IDPS_Extract\Backup"

WScript.CreateObject("WScript.Shell").Run _
	"explorer.exe /n,/root,""" & PathToOpen & """", vbNormalFocus