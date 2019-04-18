echo Map Training drive
echo off

Rem Map Training drive
net use T: /delete
net use T: \\by000002-s\AOTraining

echo Training mapped to T
echo -------------------------------------
echo -------------------------------------

echo msgbox "Training drive has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"