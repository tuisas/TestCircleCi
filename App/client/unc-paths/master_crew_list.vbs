Option Explicit
' See: Command-Line Switches for Windows Explorer
' located at http://support.microsoft.com/kb/130510

Const vbNormalFocus = 1
Const PathToOpen = "\\by000002-s.thomsonuk.dnsroot.biz\CrewPlanning\SYSTEMS & ANALYSIS\TUIsite\Share\FrontEnd\Master_Crew_List.accdb"

WScript.CreateObject("WScript.Shell").Run _
	"explorer.exe /n,/root,""" & PathToOpen & """", vbNormalFocus