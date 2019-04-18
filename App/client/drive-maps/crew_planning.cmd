echo Map Crew Planning drive
echo off

Rem Map Crew Planning drive

net use p: /delete
net use p: \\by000002-s\CrewPlanning /persistent:yes
echo Mapped P drive Crew Planning drive
echo -------------------------------------
echo -------------------------------------

echo msgbox "Crew Planning drive P has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
