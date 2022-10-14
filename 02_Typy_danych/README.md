![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)



## Napisy

Stwórzcie dwie zmienne:

- `greeting`
- `techonology` 

zawierające kolejno takie teksty: "Hello", "JS".


W nowej zmiennej (`result`) **połączcie** te dwa teksty, ale mają one być oddzielone spacją (użycie `+` - konkatenacji).

Stworzony napis **wypiszcie w konsoli**.


## Zmienne

Stwórz 6 zmiennych. Wstaw do nich następujące dane:

- `numberValue`: liczbę
- `stringValue`: string
- `mixedValue`: liczbę + string np. (2 + "dwa")
- `logicValue`: wartość logiczną
- `nullValue`: wartość null - `null`

Dodaj do każdej zmiennej komentarz z informacją, jaki typ danych przechowuje ta zmienna (do sprawdzenia typu wykorzystaj operator ```typeof```) oraz wypisz w konsoli wartości tych zmiennych.


Przykład:
```js
// Ta zmienna jest typu number i przechowuje wartość 25
const numberValue = 25;
console.log(numberValue);
console.log(typeof numberValue);


// Ta zmienna jest typu string i przechowuje wartość "Coders Lab"
const stringValue = "Coders Lab";
// itd.
```





## Tablice z imionami

### Część 1

Zdefiniujcie tablicę w zmiennej `users` zawierającą kolejne imiona: 

```
John
Marie
Kate
Paul
Steven
```

Na koniec wypiszcie w terminalu w kolejnych liniach:

- drugi element
- piąty element
- długość tablicy


### Część 2

Zdefiniujcie pustą tablicę w zmiennej `guests`, a następnie **pojedynczo** (jedno po drugim) dodajcie do niej następujące imiona:

```
Chauncey
Ling
Ona
Nicole
Michaele
```

Na koniec wypiszcie w terminalu:

- pierwszy element
- trzeci element
- długość tablicy


## Tablica 2D

### Część 1

Utwórzcie tablicę dwuwymiarową - 3 wiersze na 4 kolumny (w zmiennej `numbers`).

W kolejnych kolumnach mają wystąpić kolejne liczby całkowite, czyli powinno to wyglądać następująco:
```
1, 2, 3, 4
5, 6, 7, 8
9, 10, 11, 12
```

Wyświetlcie:

- drugi element z pierwszego wiersza
- drugi wiersz (drugi element z pierwszego wymiaru)
- długość trzeciego wiersza


### Część 2

Utwórzcie tablicę dwuwymiarową (w zmiennej `mixedValues`) odpowiednio składającą się z:

- tablicy z imionami: `Keli`, `Walter`, `Heriberto`
- tablicy z wartościami liczbowymi: `1, 2, 3, 4, 5, 6`

Wyświetlcie:

- trzeci element z pierwszego wiersza
- piąty element z drugiego wiersza
- długość drugiego wiersza


## Obiekty

### Samochód

W zmiennej `car` utwórzcie obiekt opisujący samochód.

Ma on mieć następujące atrybuty:

- `type` o wartości "sedan"
- `color` o wartości "green"
- `engine` o wartości 2.5

Stwórzcie zmienną `carDescription`. Ma ona zawierać informacje o obiekcie poprzez konkatenację (z wykorzystaniem spacji) z wartości w jego atrybutach `type`, `color`, `engine` (należy użyć operatora `+` do konkatenacji).


Wyświetlcie zmienną `carDescription` w konsoli. Wynik:

```
sedan green 2.5
```


### Kolor

W zmiennej `color` utwórzcie obiekt opisujący kolor.

Ma on mieć następujące atrybuty:
- **red** o wartości 100
- **green** o wartości 0
- **blue** o wartości 50

Poprzez zmienną **referenceColor** zmodyfikujcie wcześniej utworzony obiekt,
ustawicie mu:

- **red** na wartość 50
- **green** na wartość 50

