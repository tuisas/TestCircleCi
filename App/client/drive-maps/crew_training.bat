echo Map Crew Training drives
echo off

Rem Map Crew Training drive
net use T: /delete
net use T: \\By000002-s\Crew Training$ /persistent:yes

echo Crew Training Drive mapped to T
echo -------------------------------------
echo -------------------------------------

echo msgbox "Crew Training drive has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
