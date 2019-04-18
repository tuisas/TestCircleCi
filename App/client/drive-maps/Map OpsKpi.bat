echo Map Training drive
echo off

Rem Map Training drive
net use k: /delete
net use k: \\by000002-s\OpsKpi$ /persistent:yes

echo Training mapped to K
echo -------------------------------------
echo -------------------------------------

echo msgbox "Training drive has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
