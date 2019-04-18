echo Map Batch Legality Analyser drive
echo off

Rem Map All Users drive

net use B: /delete
net use B: \\by000002-s\BLA /persistent:yes

echo Mapped B drive Batch Legality Analyser
echo -------------------------------------
echo -------------------------------------

echo msgbox "Batch Legality Analyser drive is mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
