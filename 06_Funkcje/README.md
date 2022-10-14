![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)



## Tworzenie tablicy

Stwórzcie funkcję `createArray(rows)` która tworzy i **zwraca** tablicę. Jej rozmiar ma być zgodny z parametrem `rows`, a każdy kolejny element zawiera kolejne liczby całkowite począwszy od `1`.

Wywołajcie tę funkcję z argumentem `5`.



## Wyświetlanie tablicy

Stwórzcie funkcję `printArray(array)`, która wyświetla wszystkie wartości z przekazanej tablicy.
 
Przekażcie do funkcji tablicę, która jest pod zmienną `people` i sprawdźcie wynik w konsoli.

W funkcji należy wykorzystać pętlę `for`.



## Wyświetlanie tablicy 2D

Stwórzcie funkcję `print2DArray(array)`, która wyświetla kolejne wszystkie imiona z przekazanej tablicy dwu wymiarowej. Każde imię powinno zostać wyświetlone w osobnej linii w konsoli.

Przekażcie do funkcji tablicę, która jest pod zmienną `users` i sprawdźcie wynik w konsoli.

W funkcji należy wykorzystać dwie zagnieżdżone w sobie pętle `for`.

## Wartość maksymalna

Stwórz funkcję `maxFromArray(numbers)` która przyjmuje tablicę liczb. Funkcja ma **zwracać** największą wartość ze zbioru (zmienna `randomNumbers`);

Wynik działania przypiszcie do zmiennej (`result`) i wyświetlcie w konsoli.


## Powtarzająca się wartość

Stwórz funkcję `indexOfRepeatedValue(array)`. Prześlij do niej tablicę z 10 liczbami które są zapisane w zmiennej `numbers`. 

Stwórz w tej funkcji zmienną ```firstIndex```. W pętli ```for``` sprawdź, która z liczb powtarza się jako pierwsza i przypisz jej indeks do zmiennej ```firstIndex```. Następnie wypisz w konsoli tą zmienną, poza pętlą ```for```.

Przykładowa tablica:

```js
const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];
```

W tej tablicy jako pierwsza powtarza się liczba 2, więc zmienna ```firstIndex``` powinna mieć wartość 0, ponieważ jest to pierwsza liczba w tablicy, która ma gdzieś swojego sobowtóra.
Przetestuj Twój skrypt z różnymi wartościami w tablicy.

Zwróć wartość `firstIndex` z funkcji.

*Podpowiedź: pamiętaj o odpowiednim przerwaniu pętli.*

