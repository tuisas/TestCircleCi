echo Map all users drive
echo off

Rem Map All Users drive
net use J: /delete
net use J: \\by000001-s\allusers /persistent:yes
echo Mapped J drive All Users
echo -------------------------------------
echo -------------------------------------

echo msgbox "J drive is mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
