const jsonData = {
    "sections": [
        {
            "items": [
                {
                    "type": "TEXT",
                    "content": "<h1>Ściernica talerzowa PFR 125 Z40 PFERD SGP Curve M 5 z ziarnem Korund cyrkonowy Z, do pachwin - wykonanie M do obróbki węższych spawów&nbsp;powyżej 5 mm</h1>"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/1168ad/65886cf34df0841e42bd297dd2fc"
                },
                {
                    "type": "TEXT",
                    "content": "<p>Specjalna linia SGP Ściernice listkowe POLIFAN Stal/INOX - Wykonanie Z SGP CURVE STEELOX (Korund cyrkonowy Z)</p><p>Obszary zastosowania:</p><p>Stal ⬤</p><p>stal nierdzewna (INOX) ⬤</p>"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "TEXT",
                    "content": "<p><b>Specyfikacja</b></p><p>POLIFAN®-CURVE jest innowacją firmy PFERD przy obróbce spawów pachwinowych. Oprócz wykonania SGP ZIRKON-CURVE PFERD oferuje to niezwykle wydajne narzędzie także z listkami ściernymi z ziarnem ceramicznym. Jedyny w swoim rodzaju kształt radialny (PFR) poprzez specjalne ułożenie listków ściernych zapewnia wiele zalet przy najtrudniejszych i najbardziej złożonych problemach obróbczych spawów pachwinowych:</p><ul><li>Wysoka wydajność skrawania dzięki szybkiemu, agresywnemu szlifowi i wynikająca z tego znaczna oszczędność kosztów pracy.</li><li>Precyzyjne i optymalne uwydatnienie geometrii szlifu spawu pachwinowego.</li><li>Stabilność kształtu – wysoka jakość pracy.</li><li>Znakomita żywotność przy obróbce spawów pachwinowych.</li><li>Optymalne wykorzystanie materiału ściernego na promieniach.</li><li>Precyzyjne i optymalne uwydatnienie geometrii szlifu spawu pachwinowego.</li></ul>"
                },
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/11e0b8/8c3fa0d746e78bc7e3e5e3975bc9"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/11bcba/40a84e4e4625aaef89c182051fc8"
                },
                {
                    "type": "TEXT",
                    "content": "<p><b>Korzyści</b></p><p>Wysoce wydajna ściernica listkowa SGP ZIRKON-CURVE do najbardziej złożonych zadań obróbczych o bardzo dobrych właściwościach skrawania na stali i stali nierdzewnej (INOX).</p>"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "TEXT",
                    "content": "<p><b>Zadania z zakresu obróbki:</b></p><ul><li>odgratowywanie</li><li>fazowanie</li><li>obróbka krawędzi</li><li>obróbka spawów</li><li>obróbka spawów pachwinowych</li></ul><p>Najlepsze rezultaty osiąga się na mocnych szlifierkach kątowych.</p><p>Dostępne również wykonanie L do obróbki szerszych spawów&nbsp;powyżej 8 mm</p>"
                },
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/11ddb3/e907ac3844359e39c9744f72fbd1"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "TEXT",
                    "content": "<p><b>Wykonanie M</b>:</p><p>Do obróbki promieni pachwinowych powyżej 5 mm i wymiarze <b>a</b> do 6 mm przy kącie 90°</p><p><b>Szerokość promienia:</b> 11 mm</p><p><b>Ziarno ścierne:</b> korund cyrkonowy Z</p><p><b>Granulacja:</b> 40</p><p><b>Proces:</b> Obróbka spawów pachwinowych, fazowanie, odgratowywanie</p><p>link do filmu: youtu.be/pVcKaB8QT74</p>"
                },
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/11e198/83f190754a65b330ca991ecd668f"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/113839/625b614e4d97bb5c339862aa8bae"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "TEXT",
                    "content": "<p>Specjalizujemy się w hurtowej oraz detalicznej sprzedaży materiałów ściernych.</p><p>Jesteśmy autoryzowanym dystrybutorem marek:<b>&nbsp;Pferd, Klingspor, Saint-Gobain Norton</b>.</p><p>Nasze atuty - to co nas wyróżnia:</p><ul><li>25 lat doświadczenia</li><li>Ponad 3500 produktów dostępnych od ręki</li><li>Indywidualne podejście do każdego klienta</li><li>Optymalizacja procesów produkcyjnych i dobór towarów pod konkretne potrzeby</li><li>Atrakcyjne ceny</li><li>Krótkie terminy realizacji</li><li>Fachowe doradztwo</li></ul>"
                },
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/110fe5/098277534873b7666c8f5f6c62db"
                }
            ]
        },
        {
            "items": [
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/11e496/ada606904b8f84b67e02dafe23c1"
                },
                {
                    "type": "IMAGE",
                    "url": "https://a.allegroimg.com/original/117adf/00ffcdec44ba818e536d1685468f"
                }
            ]
        }
    ]
}

function convertJsonToHtml (data) {
    let html = "";
    data.sections.forEach ((sections) => {
        section.items.forEach ((item) => {
            if (item.type === 'TEXT') {
                html += item.content;
            }
        });
    });
    html = html.replace(/<p>Specjalizujemy się w hurtowej oraz detalicznej sprzedaży materiałów ściernych\.<\/p>[\s\S]+?<ul>[\s\S]+?<\/ul>/, '');

    return html;
}

console.log(convertJsonToHtml(jsonData));