
echo Auto Map all drives
echo off

Rem batch legality Analyser drive
net use B: /delete
net use B: \\by000002-s\BLA /persistent:yes
echo Mapped batch legality Analyser drive
echo -------------------------------------
echo -------------------------------------
Rem Map Cabin crew drive
net use r: /delete
net use r: \\by000002-s\cabin-crew$ /persistent:yes
echo Mapped Cabin crew drive
echo -------------------------------------
echo -------------------------------------

Rem Map Carmen drives
net use x: /delete
net use x: \\tubaircargui6\optcarmen  /persistent:yes
echo Mapped Carmen tubaircargui6\optcarmen
echo -------------------------------------
echo -------------------------------------
net use y: /delete 
net use y: \\idpsliveaix\PC_REPORTS  /persistent:yes
echo Mapped Carmen idpsliveaix\PC_REPORTS
echo -------------------------------------
echo -------------------------------------
net use z: /delete
net use z: \\gostrn1\PC_REPORTS  /persistent:yes
echo mapped Carmen gostrn1\PC_REPORTS
echo -------------------------------------
echo -------------------------------------
net use a: /delete
net use a: \\gosuat1\PC_REPORTS  /persistent:yes
echo Mapped Carmen gosuat1\PC_REPORTS
echo -------------------------------------
echo -------------------------------------

Rem Catering drive
net use V: /delete
net use V: \\TUBAIRCSC2\VELOXYS /persistent:yes
echo Mapped Catering VELOXYS
echo -------------------------------------
echo -------------------------------------
net use s: /delete
net use s: \\by000002-s\CATERING /persistent:yes
echo Mapped CATERING CATERING
echo -------------------------------------
echo -------------------------------------
net use q: /delete
net use q: \\tubaircsc2\DOWNLOAD /persistent:yes
echo Mapped CATERING DOWNLOAD
echo -------------------------------------
echo -------------------------------------
net use o: /delete
net use o: \\tubairsm1\SITA_Q /persistent:yes
echo Mapped CATERING SITA_Q
echo -------------------------------------
echo -------------------------------------


Rem Crew Planning  drive 
net use p: /delete
net use p: \\by000002-s\CrewPlanning /persistent:yes
echo Mapped CrewPlanning
echo -------------------------------------
echo -------------------------------------

Rem Map Crew Training drive
net use T: /delete
net use T: \\By000002-s\Crew Training$ /persistent:yes
echo Mapped Crew Training
echo -------------------------------------
echo -------------------------------------

Rem Map ESTABLISHMENT drive
net use s: /delete
net use s: \\by000002-s\ESTABLISHMENT /persistent:yes
echo Mapped ESTABLISHMENT drive
echo -------------------------------------
echo -------------------------------------

Rem map HOTAC drive
net use L: /delete
net use L: \\By000001-s\Hotac /persistent:yes
Echo Mapped HOTAC drive
echo -------------------------------------
echo -------------------------------------

Rem Map AllUsers drive
net use J: /delete
net use J: \\by000001-s\allusers /persistent:yes
echo Mapped AllUsers drive
echo -------------------------------------
echo -------------------------------------

Rem Map OperationsManagers drive
net use M: /delete
net use M: \\by000002-s\OperationsManagers$ /persistent:yes
echo Mapped OperationsManagers drive
echo -------------------------------------
echo -------------------------------------

Rem Map OpsKpi drive
net use k: /delete
net use k: \\by000002-s\OpsKpi$ /persistent:yes
echo Mapped OpsKpi drive
echo -------------------------------------
echo -------------------------------------

Rem Map AOTraining drive
net use T: /delete
net use T: \\by000002-s\AOTraining
echo Mapped AOTraining drive
echo -------------------------------------
echo -------------------------------------

Rem JourneyLognew drive
net use F: /delete
net use F: \\by000002-s\journeylognew
echo Mapped AOTraining drive
echo -------------------------------------
echo -------------------------------------
echo -------------------------------------
echo -------------------------------------


echo msgbox "All Thomson Ops Drives mapped!"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"
