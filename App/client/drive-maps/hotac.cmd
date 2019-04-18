echo Map Hotac drive
echo off

Rem Map Hotac drive
net use L: /delete
net use L: \\By000001-s\Hotac /persistent:yes

echo Hotac mapped to L
echo -------------------------------------
echo -------------------------------------

echo msgbox "Hotac drive has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
