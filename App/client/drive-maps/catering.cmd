echo Map Catering drives Veloxys, Catering, DownLoad, diskette
echo off

Rem Map Crew Planning drive

net use V: /delete
net use V: \\TUBAIRCSC2\VELOXYS /persistent:yes

net use s: /delete
net use s: \\by000002-s\CATERING /persistent:yes

net use q: /delete
net use q: \\tubaircsc2\DOWNLOAD /persistent:yes

net use o: /delete
net use o: \\tubairsm1\SITA_Q /persistent:yes

net use a: /delete
net use a: \\tubaircsc2\diskette /persistent:yes
 
echo Mapped all Catering drives
echo -------------------------------------
echo -------------------------------------

echo msgbox "All Catering drives have been mapped :)"> "%temp%\popup.vbs"
wscript.exe "%temp%\popup.vbs"



