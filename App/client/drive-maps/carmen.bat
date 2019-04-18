echo Map Carmen drives Opscarmen, PC Reports live-trn1-uat1
echo off

Rem Map Carmen drives

net use x: /delete
net use x: \\tubaircargui6\optcarmen  /persistent:yes

net use y: /delete
net use y: \\idpsliveaix\PC_REPORTS  /persistent:yes

net use z: /delete
net use z: \\gostrn1\PC_REPORTS  /persistent:yes

net use a: /delete
net use a: \\gosuat1\PC_REPORTS  /persistent:yes

echo Mapped all Carmen drives
echo -------------------------------------
echo -------------------------------------

echo msgbox "All Carmen drives have been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
