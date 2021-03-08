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


Esimene kodutöö "Kellad". Elena Dunajeva.

Teema: lemmik filmid. Ma olin valinud kolm oma lemmik filme ja nende baasil tegin disainitud kellad oma funktsionaalsusega, kasutatud HTML, JS, CSS. Kõik kellaajad vastavad Eesti ajale.




Esimene kell "Back to the future". "Back to the future" on vana ameerika film, mis mulle väga meeldib.

![Screenshot_2021-03-08 Back to the future](https://user-images.githubusercontent.com/55079917/110261034-392e2400-7fb7-11eb-9049-7363833ff4e0.png)
Pildil saab näha nupp"Kell "Ticket to Vegas", nupp "On the sea", kell, kuupäev, nupp "vaheta tausta värv", nupp "season 1", nupp "season 3", all on tekst koos dünaamilise elemendiga, repositoorium koos nimega.

Nupp "Ticket to Vegas" ja "On the sea" - kui neid klikkida, siis nad viivad teistele kelladele.

![Screenshot_2021-03-08 Back to the future(2)](https://user-images.githubusercontent.com/55079917/110261171-ce311d00-7fb7-11eb-8fd4-5ebc769cd7ca.png)
Kasutatud on spetsiaalselt valitud google font, mis sobiks just 80-aastate kellade disaini jaoks. Kell näitab Eesti aja.

![Screenshot_2021-03-08 Back to the future(3)](https://user-images.githubusercontent.com/55079917/110261245-14867c00-7fb8-11eb-92a5-48aeb43e0b43.png)
Kuupäeva disain on sama moodi spetsiaalselt valitud.

![Screenshot_2021-03-08 Back to the future(5)](https://user-images.githubusercontent.com/55079917/110261319-67f8ca00-7fb8-11eb-84c3-a22c17cd0439.png)
![Screenshot_2021-03-08 Back to the future(4)](https://user-images.githubusercontent.com/55079917/110261326-73e48c00-7fb8-11eb-9d06-3817f45367b9.png)
Tausta värvi saab muuta vajutades nuppule "Vaheta tausta värv". Vajutades nupule muutub tema värv.

![Screenshot_2021-03-08 Back to the future(6)](https://user-images.githubusercontent.com/55079917/110261350-95de0e80-7fb8-11eb-9036-583fe6e9b161.png)
Nuppud "Season 3" ja "Season 1" lasevad muuta filmi pilt kahe pildi vahel.

![Screenshot_2021-03-08 Back to the future(7)](https://user-images.githubusercontent.com/55079917/110261417-cf167e80-7fb8-11eb-9c90-93bccfa2ae80.png)
Siin kahjuks ei saa näha, aga vajutades tekstile: "Kell "Back to the future" filmi järgi" tekib roheline joon, mis näeb välja nagu välk.

Lehel all saab leida autori nimi ja repositoorium.




Teine kell: "Ticket to Vegas". "Ticket to Vegas" on uus vene komöödia, mis mulle väga meeldib. Väga lihtsa disainiga kell.

![Screenshot_2021-03-08 Ticket to Vegas(1)](https://user-images.githubusercontent.com/55079917/110261787-354fd100-7fba-11eb-9cc5-d489569b0aa9.png)

Nupp "ÖÖ" ja "Päev" lasevad kasutajal muuta teemat (tume ja hele teema).

Nupp "Back to the future" ja "On the sea" viivad teistele kelladele.

Nuppud "Rohelist värvi kuupäev", "Punast värvi kuupäev", jne, lasevad kasutajat muuta kuupäeva teksti värvi.

Lehel on olemas ka SlideShow, mis sisaldab kolm pilti filmist. SlideShow on automatiseeritud. Piltide all on pildi kirjeldus.

Lehel all olemas autori nimi ja repositoorium.




Kolmas kell "On the Sea". Film "On the Sea" on vene komöödia, mis on üks mu lemmikatest elus.

![Screenshot_2021-03-08 On The Sea](https://user-images.githubusercontent.com/55079917/110262120-536a0100-7fbb-11eb-8e4e-e5ee97aefa1f.png)

![Screenshot_2021-03-08 On The Sea(1)](https://user-images.githubusercontent.com/55079917/110262373-2702b480-7fbc-11eb-98a1-207df8066be8.png)
Nupud "Ticket to Vegas" ja "Back to the future" viivad teistele kelladele. Nuppule vajutades muutub tema värv.

![Screenshot_2021-03-08 On The Sea(2)](https://user-images.githubusercontent.com/55079917/110262425-50bbdb80-7fbc-11eb-9fbe-4c38215a1f64.png)
Vorm laseb kasutajat sisestada värv inglise keeles ning vastavalt sellele muutub kella ja kuupäeva teksti värv.
![Screenshot_2021-03-08 On The Sea(3)](https://user-images.githubusercontent.com/55079917/110262475-7f39b680-7fbc-11eb-9106-b8a17487bca8.png)

Lehele on lisatud kaks pilti filmist ning filmi lühikirjeldus.

Samuti saab leida kolm laulu filmist ning kuulata neid. Heli saab muuta.
![Screenshot_2021-03-08 On The Sea(4)](https://user-images.githubusercontent.com/55079917/110262535-b314dc00-7fbc-11eb-82ae-77102cf4324f.png)

Lehe all saab leida autori nimi ning repositoorium.
