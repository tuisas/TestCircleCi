echo Map Cabin Crew drive
echo off

Rem Map Cabin Crew drive
net use r: /delete
net use r: \\by000002-s\cabin-crew$ /persistent:yes
echo Mapped R drive Cabin Crew drive
echo -------------------------------------
echo -------------------------------------

echo msgbox "Cabin Crew drive R has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
