# Cvičení na použití CSS přechodů

Ukázkové řešení je na adrese:
https://web.microsoftstream.com/video/d976eb3f-4a77-46de-a847-e1c25f0a248a

Aktivace akcí je navázána na *najetí myší*.

## Časování po aktivaci:
(1) Náhled obrázku se rozmaže CSS vlastností (`[filter: blur(3px);]`)
(2) Od spodního okraje do středu obrazovky během 1 sekundy "najede" název obrázku
(3) Následně se během 1/4 sekundy otočí o jednu otáčku po směru hodinových ručiček symbol hvězdičky a postavy včetně čísla vedle nich

## Časování po deaktivaci
(1) Po dobu 1,5 sekundy se nestane žádná vizuální akce
(2) Ihned je zrušen efekt rozmazání
(3) Během 1/2 sekundy název "odejde" pod dolní okraj
