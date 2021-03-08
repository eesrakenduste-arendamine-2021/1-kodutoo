Mina, Sofia Geroiskaja tegin kella näidet. Tegin kolm faili: clock.html, clock.css ja clock.js. 
Minu kell asub keset ekraani ja on teistest elementidest eraldatud borderiga. 
Kell näitab kella, kuupäeva, nädalapäeva ja aastat. 
Kella all on 2 nuppu ja 1 link, vasaku nuppule vajudes randomselt vahetub tausta värv, teisele nuppule vajutades saab teada mitu päeva on möödunud koroona algusest 
ja lingile klõpsates minnakse kodutöö repositooriumile. Lehe all on kirjutatud et Sofia Geroiskaja on autor. 
Kui hõljutada hiirt kella peale siis tausta värv muutub valgeks ja teksti värv mustaks.
Kui hõljutada hiirt nädalapäeva, kuupäeva, aasta või kella peale siis teksti värv muutub.
Praeguse date selgitamiseks kasutasin new Date() ja pärast getDay(), getMonth() jne.
Olen lisanud EventListeneri
Funktsioonidest on display_corona et näidata mitu päeva on möödunud koroona algusest  ja change_color et vahetada background color.
CSS failis kirjutasin kui suured, mis värvi, mis borderiga elemendid peavad olema, kus nad peavad asuma, milline peab olema tekst ja kuidas paigutatud. Lisasin natuke interaktivsust nuppudele, nii et kui keegi hõljutab nende peale, siis nende opacity muutub jne.

<img width="1264" alt="clock1" src="https://user-images.githubusercontent.com/70939482/110295431-c5f9d180-7ff9-11eb-8db2-f32be8ebb5f3.png">
<img width="1347" alt="clock" src="https://user-images.githubusercontent.com/70939482/110295441-c8f4c200-7ff9-11eb-952b-816d407dc899.png">



# 1kodutoo
1. kodutöö Eesrakenduste arendamises.

## Tähtaeg 12.03.2021 23:59

Kujunda kellanäide vastavalt maitsele või kindlale teemale, mahutades kella täisekraanile, et saaks kasutada lauakella või ekraanisäästja asemel. Selleks, et see sobiks paljudele ekraanidele, kasuta kujunduse loomisel protsendilisi väärtusi (nt width: 100%; ) või nt võimalda kella suurust kasutajal muuta.

## Nõuded

1. Veebirakendus töötab. Näitab kella, kuupäeva, nädalapäeva ja aastat.
1. Vastavalt kasutaja tegevusele on võimalik muuta **kolme** lauakella atribuuti muuta.
1. Kasutatud on eventListener'e ja funktsioone.
1. Kell on originaalne ning kasutajaliides on maitsekalt kujundatud kasutades CSS-i - peab olema ise kirjutatud. 
1. Autori ees- ja perenimi on lehel välja toodud
1. Lehel on viide rakenduse repositooriumile
1. `README.md` failis on välja toodud autori nimi, ekraanipilt rakendusest ja kirjeldatud funktsionaalsus

## Mõned ideed võimalikeks täiendusteks (lihtsalt, et mõte hakkaks jooksma)

* Vahetuda võivad taustapildid, taustal võib mängida muusika
* Taustale klikkides muudetakse kella taustaväri
* Kellale klõpsides muudetakse numbrite värvi või numbrite suurust;
* Iga numbri suurust saab eraldi muuta
* Nooleklahvidega saab kella ekraanil liigutada
* Küsi enne kella näitamise alustamist kasutajalt tema lemmikvärv ja tee sellest lähtudes midagi
* Muuda kella ja tausta värvi vastavalt ajale (päev/öö)
* Kella suurus ja asukoht sõltuvad hiire asukohast ekraanil
* Kirjatüüpi saab ka muuta, [google.com/fonts](https://www.google.com/fonts)
* Kasutaja saab lisada või kasutajaöe näidatakse mitu kellaaega erinevatest maailma kohtadest
* Elemendid muudavad asukohta teatud kasutaja käitumise peale.
* Saab vahetada keelt, kellaformaati vms.

## Abimaterjal

* Sündmuste loetelu [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp)
* Ajal põhinevad sündmused [JavaScript Timing Events](http://www.w3schools.com/js/js_timing.asp)
* CSSi muutmine [HTML DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp)
