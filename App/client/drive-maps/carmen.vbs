On Error Resume Next

Set objNetwork = CreateObject("Wscript.Network")

objNetwork.RemoveNetworkDrive "W:", True, True
objNetwork.RemoveNetworkDrive "X:", True, True
objNetwork.RemoveNetworkDrive "Y:", True, True
Err.Clear
objNetwork.MapNetworkDrive "W:", "\\gostrn1.thomsonuk.dnsroot.biz\PC_REPORTS", True
objNetwork.MapNetworkDrive "X:", "\\gosuat1.thomsonuk.dnsroot.biz\PC_REPORTS", True
objNetwork.MapNetworkDrive "Y:", "\\idpsliveaix.thomsonuk.dnsroot.biz\PC_REPORTS", True

If Err.Number <> 0 Then
	MsgBox "Some drive(s) could not be mapped." & vbNewLine & "You may not have the correct access permissions.", vbExclamation, "Warning"
	
Else
	MsgBox "All Carmen drives have been mapped.", vbInformation, "Success!"
End If