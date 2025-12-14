# Macierze Odwrotne

## Wstęp

W arytmetyce liczb rzeczywistych, jeśli mamy równanie $5 \cdot x = 10$, to intuicyjnie dzielimy obie strony przez 5, aby otrzymać $x = 2$.
Ale w świecie macierzy **dzielenie nie istnieje**. Nie możemy po prostu napisać $\frac{A}{B}$.

### 🚫 Dlaczego nie możemy dzielić macierzy?

Może Cię kusić, aby zapisać $X = \frac{B}{A}$, ale w algebrze liniowej taki zapis jest **surowo zabroniony**. Wynika to z trzech głównych powodów:

**A. Problem Przemienności (Lewo vs Prawo)**
W liczbach kolejność mnożenia nie ma znaczenia ($2 \cdot 5 = 10$ i $5 \cdot 2 = 10$).
W macierzach mnożenie **nie jest przemienne** ($A \cdot B \neq B \cdot A$).
Gdybyśmy napisali "podziel $B$ przez $A$", to byłoby to niejednoznaczne matematycznie. Czy chodzi o:

- Pomnożenie przez odwrotność z **lewej** strony? ($A^{-1} \cdot B$)
- Pomnożenie przez odwrotność z **prawej** strony? ($B \cdot A^{-1}$)

Te dwa działania dają zazwyczaj **zupełnie inne wyniki**! Znak ułamka nie precyzuje, o którą stronę chodzi, dlatego go nie używamy.

**B. Problem "Dzielenia przez Zero" (Macierze Osobliwe)**
Tak jak nie każdą liczbę można odwrócić (nie istnieje $\frac{1}{0}$), tak samo nie każdą macierz można odwrócić.
Jeśli macierz ma wyznacznik równy $0$ ($\det(A) = 0$), nazywamy ją **macierzą osobliwą**. Próba "dzielenia" przez taką macierz jest błędem matematycznym równoważnym dzieleniu przez zero.

**C. Natura działania**
W świecie macierzy operacja $A^{-1} \cdot B$ to złożenie przekształceń (np. odwrócenie obrotu), a nie arytmetyczne dzielenie wielkości.

> **Zapamiętaj:**
> Zamiast mówić "dzielę przez $A$", mów zawsze precyzyjnie:
>
> - "Mnożę **lewostronnie** przez macierz odwrotną $A^{-1}$" (np. przy rozwiązywaniu $A \cdot x = b$ otrzymujemy $x = A^{-1} \cdot b$).
>
> * lub "Mnożę **prawostronnie** przez macierz odwrotną $A^{-1}$".

Zamiast dzielenia, używamy mnożenia przez odwrotność.

- Dla liczb: Zamiast dzielić przez 5, mnożymy przez odwrotność $\frac{1}{5}$ (czyli $5^{-1}$).
- Dla macierzy: Zamiast dzielić przez macierz $A$, mnożymy przez **Macierz Odwrotną** $A^{-1}$.

---

## 1. Koncepcja i Intuicja

### Czym jest macierz odwrotna?

Macierz odwrotna do macierzy $A$ (oznaczana jako $A^{-1}$) to taka unikalna macierz, która po pomnożeniu przez $A$ daje **Macierz Jednostkową ($I$)**.

Można to porównać do liczb:

- Liczba: $5 \cdot 5^{-1} = 1$
- Macierz: $A \cdot A^{-1} = I$

> **Przypomnienie:** Macierz Jednostkowa ($I$) to macierz z jedynkami na przekątnej i zerami wszędzie indziej. Pełni ona rolę "jedynki" w świecie macierzy.
> $$I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

### Kluczowa definicja

Macierz $B$ jest odwrotna do $A$, jeśli spełniony jest warunek:

$$
 A \cdot B = B \cdot A = I
$$

Oznacza to, że mnożenie musi dać wynik jednostkowy niezależnie od kolejności (choć zazwyczaj mnożenie macierzy nie jest przemienne, tutaj jest to wyjątek).

### Macierz Osobliwa vs Nieosobliwa

Nie każdą macierz da się odwrócić (tak jak nie można dzielić przez zero).

1.  **Macierz Osobliwa:** To macierz, której wyznacznik wynosi 0 ($\det(A) = 0$). Taka macierz **NIE POSIADA** macierzy odwrotnej. Jest to odpowiednik liczby 0 w mnożeniu.
2.  **Macierz Nieosobliwa:** To macierz, której wyznacznik jest różny od zera ($\det(A) \neq 0$). Taka macierz **POSIADA** macierz odwrotną.

> **Ważne:** Odwracać możemy TYLKO macierze kwadratowe ($2 \times 2, 3 \times 3, \dots$).

### ❓ Dlaczego odwracamy TYLKO macierze kwadratowe?

To fundamentalne pytanie. Dlaczego nie istnieje odwrotność dla macierzy $2 \times 3$ albo $10 \times 2$?
Powody są trzy: geometryczny, algebraiczny i obliczeniowy.

#### 1. Powód Geometryczny: Utrata informacji (Efekt "Zdjęcia")

Macierze to funkcje, które przekształcają przestrzeń.

- **Macierz Kwadratowa ($n \times n$):** Przekształca przestrzeń w inną przestrzeń **tego samego wymiaru** (np. 3D $\to$ 3D). Jeśli nie "zgnieciemy" przestrzeni do zera (czyli $\det \neq 0$), to każdy punkt ma swoje unikalne miejsce i możemy wrócić do punktu wyjścia.
- **Macierz Prostokątna ($m \times n$):** Zmienia wymiar przestrzeni.
  - Np. macierz $2 \times 3$ rzutuje świat 3D na płaszczyznę 2D. To jak zrobienie zdjęcia: trójwymiarowy budynek staje się płaskim obrazkiem.
  - **Problem:** Na podstawie płaskiego zdjęcia nie da się idealnie odtworzyć głębi budynku. Informacja została bezpowrotnie utracona ("spłaszczona"). Nie ma drogi powrotnej – dlatego nie ma macierzy odwrotnej.

#### 2. Powód Algebraiczny: "W obie strony to samo"

Definicja macierzy odwrotnej jest bardzo surowa. Macierz $B$ jest odwrotnością $A$ tylko wtedy, gdy działa w **obie strony**:

$$
A \cdot B = I \quad \text{ORAZ} \quad B \cdot A = I
$$

Rozważmy macierz prostokątną $A$ o wymiarach $2 \times 3$.
Aby mnożenie było w ogóle możliwe, potencjalna "odwrotność" $B$ musiałaby mieć wymiary $3 \times 2$.
Sprawdźmy, co się stanie:

1.  **Mnożenie $A \cdot B$:**
    $(2 \times \mathbf{3}) \cdot (\mathbf{3} \times 2) \rightarrow$ Wynik to macierz $2 \times 2$ (Mała macierz jednostkowa $I_2$).
2.  **Mnożenie $B \cdot A$:**
    $(3 \times \mathbf{2}) \cdot (\mathbf{2} \times 3) \rightarrow$ Wynik to macierz $3 \times 3$ (Duża macierz jednostkowa $I_3$).

**Wniosek:** Skoro $I_2 \neq I_3$, to warunek $A \cdot B = B \cdot A$ nigdy nie może być spełniony. Dlatego "prawdziwa" odwrotność nie istnieje.

#### 3. Powód ze Wzoru (Brak Wyznacznika)

Najprostszy powód wynika z samej metody obliczania

$$
A^{-1} = \frac{1}{\det(A)} \cdot (A^D)^T
$$

We wzorze musimy podzielić przez wyznacznik.
Z definicji **wyznacznik liczymy tylko dla macierzy kwadratowych**.
Dla macierzy prostokątnej wyznacznik nie istnieje, więc nie mamy przez co "podzielić".

---

---

## 2. Metoda I: Metoda Dopełnień Algebraicznych (Wyznacznikowa)

Jest to klasyczna, "wzoryczna" metoda znajdowania macierzy odwrotnej. Jest idealna dla małych macierzy ($2 \times 2$, czasem $3 \times 3$), ale bardzo pracochłonna dla większych.

### Wzór ogólny

$$
 A^{-1} = \frac{1}{\det(A)} \cdot (A^D)^T
$$

Gdzie:

- $\det(A)$ – wyznacznik macierzy $A$.
- $(A^D)^T$ – transponowana macierz dopełnień algebraicznych (nazywana też **Macierzą Dołączoną** $A^{adj}$).

### Algorytm krok po kroku

Proces składa się z 5 dokładnych kroków. Przeanalizujmy je teoretycznie, a potem na przykładzie.

1.  **Oblicz Wyznacznik ($\det(A)$):** Sprawdź, czy jest różny od zera. Jeśli wyjdzie 0, kończymy zadanie – macierz odwrotna nie istnieje.
2.  **Stwórz Macierz Minorów:** Dla każdego pola macierzy oblicz wyznacznik po skreśleniu jego wiersza i kolumny.
3.  **Stwórz Macierz Dopełnień (Szachownica):** Nałóż na macierz minorów znaki plus/minus zgodnie z zasadą "szachownicy" ($(-1)^{i+j}$).
4.  **Transpozycja (Macierz Dołączona):** Zamień wiersze na kolumny w macierzy dopełnień.
5.  **Mnożenie:** Pomnóż każdy element powstałej macierzy przez ułamek $\frac{1}{\det(A)}$.

---

### 🎓 Przykład Praktyczny (Metoda Dopełnień)

Weźmy macierz $A$ z pliku źródłowego:

$$ A = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix} $$

**Krok 1: Obliczamy wyznacznik**
$\det(A) = (2 \cdot 3) - (1 \cdot 5) = 6 - 5 = 1$
Wyznacznik wynosi 1 (różny od zera), więc macierz odwrotna istnieje.

**Krok 2 i 3: Minory i Dopełnienia**
Dla macierzy $2 \times 2$ jest to proste:

- Dla elementu 2 (skreślamy wiersz 1, kol 1) $\to$ zostaje 3. Znak (+) $\to$ **3**.
- Dla elementu 1 (skreślamy wiersz 1, kol 2) $\to$ zostaje 5. Znak (-) $\to$ **-5**.
- Dla elementu 5 (skreślamy wiersz 2, kol 1) $\to$ zostaje 1. Znak (-) $\to$ **-1**.
- Dla elementu 3 (skreślamy wiersz 2, kol 2) $\to$ zostaje 2. Znak (+) $\to$ **2**.

Macierz dopełnień:

$$ A^D = \begin{bmatrix} 3 & -5 \\ -1 & 2 \end{bmatrix} $$

**Krok 4: Transpozycja (Macierz Dołączona)**
Zamieniamy wiersze z kolumnami w macierzy $A^D$.

$$ (A^D)^T = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix} $$

**Krok 5: Mnożenie przez $1/\det(A)$**
Ponieważ $\det(A) = 1$, mnożymy przez $1/1$, co nic nie zmienia.

$$ A^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix} $$

> **Sprawdzenie:**
> Pomnóżmy $A \cdot A^{-1}$:
> $$\begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix} \cdot \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix} = \begin{bmatrix} (6-5) & (-2+2) \\ (15-15) & (-5+6) \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$
> Wynik to $I$. Obliczenia są poprawne!

---

## 3. Metoda II: Eliminacja Gaussa-Jordana (Bezwyznacznikowa)

Ta metoda jest bardziej "algorytmiczna". Jest powszechnie stosowana w komputerach i przy większych macierzach, ponieważ wymaga mniej mnożeń niż metoda wyznacznikowa.

### Idea metody

Nie liczymy wyznacznika ani minorów. Zamiast tego budujemy **Macierz Rozszerzoną** (blokową):

$$ [ A \mid I ] $$

Po lewej stronie mamy naszą macierz, po prawej macierz jednostkową.
Nasz cel to za pomocą **Operacji Elementarnych na Wierszach** przekształcić lewą stronę w macierz jednostkową. Wtedy prawa strona "magicznie" zamieni się w macierz odwrotną.

$$ [ A \mid I ] \xrightarrow{\text{Operacje wierszowe}} [ I \mid A^{-1} ] $$

### Dozwolone Operacje Elementarne

1.  Zamiana dwóch wierszy miejscami.
2.  Pomnożenie wiersza przez liczbę różną od zera.
3.  Dodanie do jednego wiersza innego wiersza pomnożonego przez liczbę (najważniejsza operacja!).

### 🎓 Przykład Praktyczny (Gauss-Jordan)

Znajdźmy odwrotność tej samej macierzy:

$$ A = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix} $$

**Krok 1: Budujemy macierz rozszerzoną $[A|I]$**

$$ \left[ \begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 5 & 3 & 0 & 1 \end{array} \right] $$

**Krok 2: Robimy "jedynkę" w lewym górnym rogu ($a_{11}$)**
Podzielmy Wiersz 1 przez 2 ($W_1 \leftarrow W_1 \cdot 0.5$):

$$ \left[ \begin{array}{cc|cc} 1 & 0.5 & 0.5 & 0 \\ 5 & 3 & 0 & 1 \end{array} \right] $$

**Krok 3: Robimy "zero" pod jedynką ($a_{21}$)**
Od Wiersza 2 odejmijmy 5 razy Wiersz 1 ($W_2 \leftarrow W_2 - 5 \cdot W_1$):

- $5 - 5(1) = 0$
- $3 - 5(0.5) = 3 - 2.5 = 0.5$
- $0 - 5(0.5) = -2.5$
- $1 - 5(0) = 1$

$$ \left[ \begin{array}{cc|cc} 1 & 0.5 & 0.5 & 0 \\ 0 & 0.5 & -2.5 & 1 \end{array} \right] $$

**Krok 4: Robimy "jedynkę" w prawym dolnym rogu ($a_{22}$)**
Pomnóżmy Wiersz 2 przez 2 ($W_2 \leftarrow W_2 \cdot 2$):

$$ \left[ \begin{array}{cc|cc} 1 & 0.5 & 0.5 & 0 \\ 0 & 1 & -5 & 2 \end{array} \right] $$

**Krok 5: Robimy "zero" nad jedynką ($a_{12}$)**
Od Wiersza 1 odejmijmy 0.5 raza Wiersz 2 ($W_1 \leftarrow W_1 - 0.5 \cdot W_2$):

- $1 - 0.5(0) = 1$
- $0.5 - 0.5(1) = 0$
- $0.5 - 0.5(-5) = 0.5 + 2.5 = 3$
- $0 - 0.5(2) = -1$

$$ \left[ \begin{array}{cc|cc} \mathbf{1} & \mathbf{0} & \mathbf{3} & \mathbf{-1} \\ \mathbf{0} & \mathbf{1} & \mathbf{-5} & \mathbf{2} \end{array} \right] $$

**Wynik:**
Po lewej mamy macierz jednostkową $I$. Zatem to, co stoi po prawej, to $A^{-1}$:

$$ A^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix} $$

Wynik jest identyczny jak w poprzedniej metodzie!

---

## 4. Zastosowania Macierzy Odwrotnej

Dlaczego zadajemy sobie tyle trudu, żeby to liczyć?

### A. Rozwiązywanie Układów Równań

Mamy układ równań zapisany w postaci macierzowej:
$A \cdot x = b$
Gdzie $A$ to macierz współczynników, $x$ to wektor niewiadomych, a $b$ to wektor wyników.

Aby znaleźć $x$, mnożymy obie strony lewostronnie przez $A^{-1}$:
$A^{-1} \cdot A \cdot x = A^{-1} \cdot b$
Ponieważ $A^{-1} \cdot A = I$, otrzymujemy:
$I \cdot x = A^{-1} \cdot b$
$x = A^{-1} \cdot b$

Metoda ta jest bardzo elegancka teoretycznie, ale dla ogromnych układów (np. 1000 zmiennych) bywa wolna i niestabilna numerycznie.

### B. Implementacja w Pythonie (NumPy)

W praktyce inżynierskiej nikt nie liczy odwrotności ręcznie. Używamy bibliotek.

```python
import numpy as np

# Definicja macierzy
A = np.array([[2, 1],
              [5, 3]])

# Obliczenie odwrotności
# Funkcja linalg.inv robi całą czarną robotę (zazwyczaj metodą Gaussa)
A_inv = np.linalg.inv(A)

print("Macierz odwrotna:")
print(A_inv)

# Sprawdzenie (Mnożenie macierzy: A @ A_inv)
print("Sprawdzenie (powinno być Identity):")
print(A @ A_inv)
```

```

```
