1) Cel
    Wyświetlanie przebiegu ilości rowerów na wybranej stacji w interwałach 5-minutowych za ostatnie 24h

2) Struktura
    a) cron task ze strony cron-job.org, co 5 minut puszcza requesta na endpointa  https://wetu.nabu13.now.sh
    b) uruchamia to skrypt (index.js), ściągający dane z gdzieturilo.pl i wrzucający je na mLaba
    c) w apce vue, user wybiera adres stacji i ściągane są jej dane z mLaba

3) Konfiguracja
    a) uruchom skrypt ściągająco-ładujący (index.js) na now
    b) stwórz bazę i 2 kolekcje na mLabie (patrz nazwy w pliku ajax.js)
    c) stwórz cron joba na cron-job.org
    d) odpal apkę vue

4) Troubleshooting
     a) yarn start - pozwala odpalić z ręki skrypt ściągająco-ładujący (index.js) i sprawdzić czy zapisał dane na mLabie
     b) w panelu strony cron-job.org, można zobaczyć czy zadanie wykonało się, a jeśli nie, jaki błąd zwróciło




