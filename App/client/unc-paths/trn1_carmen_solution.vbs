Option Explicit
' See: Command-Line Switches for Windows Explorer
' located at http://support.microsoft.com/kb/130510

Const vbNormalFocus = 1
Const PathToOpen = "\\gostrn1.thomsonuk.dnsroot.biz\PC_REPORTS\Carmen_Solution"

WScript.CreateObject("WScript.Shell").Run _
	"explorer.exe /n,/root,""" & PathToOpen & """", vbNormalFocus