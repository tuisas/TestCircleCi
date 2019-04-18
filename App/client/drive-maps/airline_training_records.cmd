echo Map Airline Training Records drive
echo off

Rem Map Airline Training Records drive
net use X: /delete
net use X: \\by000002-s\AirlineTrainingRecords /persistent:yes

echo Airline Training Records drive mapped to X
echo -------------------------------------
echo -------------------------------------

echo msgbox "Airline Training Records drive has been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"