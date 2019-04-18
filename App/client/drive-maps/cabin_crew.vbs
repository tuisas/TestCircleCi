On Error Resume Next

Set objNetwork = CreateObject("Wscript.Network")

objNetwork.RemoveNetworkDrive "R:", True, True
Err.Clear
objNetwork.MapNetworkDrive "R:", "\\by000002-s.thomsonuk.dnsroot.biz\cabin-crew$", True

If Err.Number <> 0 Then
	MsgBox "The drive could not be mapped." & vbNewLine & "You may not have the correct access permissions.", vbCritical, "Error"
Else
	MsgBox "The Cabin Crew drive has been mapped.", vbInformation, "Success!"
End If