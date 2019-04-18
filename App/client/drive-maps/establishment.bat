echo Map Establishment drive
echo off

Rem Map Establishment drive
net use s: /delete
net use s: \\by000002-s\ESTABLISHMENT /persistent:yes

echo Establishment mapped to S
echo -------------------------------------
echo -------------------------------------

echo msgbox "Establishment drive has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
