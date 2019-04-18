Option Explicit
' See: Command-Line Switches for Windows Explorer
' located at http://support.microsoft.com/kb/130510

Const vbNormalFocus = 1
Const PathToOpen = "\\10.145.125.41\zfs4_GOS_UAT_smb\cron\output\pc_reports\CARMEN_EXTRACT_OUTPUT"

WScript.CreateObject("WScript.Shell").Run _
	"explorer.exe /n,/root,""" & PathToOpen & """", vbNormalFocus