# Wyznaczniki

## Wstęp

Wyznacznik (ang. _determinant_) to potężne narzędzie algebry liniowej. To pojedyncza liczba przyporządkowana macierzy kwadratowej, która "streszcza" jej najważniejsze cechy. Mówi nam, czy układ równań ma rozwiązanie, czy wektory są od siebie zależne i jak bardzo macierz "rozciąga" przestrzeń.

---

## 1. Definicja i Intuicja

### Definicja formalna

Wyznacznik to funkcja $\det: M_{n \times n} \to \mathbb{R}$.
Oznaczamy go dwojako:

- $\det(A)$
- $|A|$ (pionowe kreski jak przy wartości bezwzględnej)

### Interpretacja Geometryczna (Co to właściwie jest?)

Wyobraź sobie, że kolumny macierzy to wektory.

1.  **Wymiar 2D:** $|\det(A)|$ to **pole powierzchni** równoległoboku zbudowanego na wektorach z macierzy.
2.  **Wymiar 3D:** $|\det(A)|$ to **objętość** równoległościanu zbudowanego na tych wektorach.
3.  **Znak wyznacznika:** Mówi o "orientacji" przestrzeni (czy układ wektorów jest prawoskrętny czy lewoskrętny).
4.  **$\det(A) = 0$:** To najważniejsza informacja. Oznacza, że figura jest "płaska" (np. w 3D ma objętość zero). W języku algebry: wektory są **liniowo zależne**.

### ❓ Dlaczego tylko macierze kwadratowe?

Często pojawia się pytanie: _Dlaczego nie możemy policzyć wyznacznika dla macierzy $2 \times 3$?_

Odpowiedź wynika z dwóch kluczowych powodów:

1.  **Powód Geometryczny (Problem wymiarów):**
    Wyznacznik to współczynnik **skalowania objętości**.

    - Macierz kwadratowa (np. $3 \times 3$) bierze przestrzeń 3D i przekształca ją w (zmienioną) przestrzeń 3D. Możemy więc zapytać: "Ile razy zmieniła się objętość bryły?".
    - Macierz prostokątna (np. $2 \times 3$) działa jak rzutnik: bierze obiekt 3D i "spłaszcza" go na płaszczyznę 2D. Porównywanie objętości wejściowej (w metrach sześciennych) do pola powierzchni wyjściowej (w metrach kwadratowych) jest matematycznie niemożliwe. To tak, jakby pytać: _"Ile litrów wody mieści się na płaskiej kartce papieru?"_.

2.  **Powód Algebraiczny (Problem odwracalności):**
    Głównym zadaniem wyznacznika jest informowanie nas, czy dla danej macierzy istnieje **macierz odwrotna** (czy proces można odwrócić).
    - Dla macierzy prostokątnych klasyczna macierz odwrotna **nigdy nie istnieje**. Jeśli spłaszczysz trójwymiarowy samochód do płaskiego zdjęcia, tracisz informację o głębi. Nie da się na podstawie samego zdjęcia idealnie odtworzyć bryły samochodu.
    - Skoro odwracanie jest niemożliwe z definicji, wskaźnik odwracalności (wyznacznik) nie ma dla nich sensu.

---

## 2. Kluczowe własności wyznaczników

Zanim zaczniesz liczyć skomplikowane macierze, sprawdź te własności. Często pozwalają podać wynik bez liczenia!

1.  **Macierz jednostkowa:** $\det(I) = 1$.
2.  **Macierz zerowa:** Jeśli w macierzy jest **cały wiersz (lub kolumna) zer**, to wyznacznik wynosi $0$.
3.  **Identyczne wiersze:** Jeśli macierz ma dwa identyczne wiersze (lub kolumny), to $\det(A) = 0$.
4.  **Transpozycja:** Wyznacznik macierzy transponowanej jest taki sam jak oryginalnej.
    $\det(A^T) = \det(A)$
5.  **Iloczyn macierzy:** Wyznacznik iloczynu to iloczyn wyznaczników.
    $\det(A \cdot B) = \det(A) \cdot \det(B)$
6.  **Macierz odwrotna:**
    $\det(A^{-1}) = \frac{1}{\det(A)}$
7.  **Mnożenie przez skalar (PUŁAPKA!):**
    Jeśli pomnożysz macierz $n \times n$ przez liczbę $k$, to wyznacznik rośnie o $k^n$.
    $\det(k \cdot A) = k^n \cdot \det(A)$

## 3. Metody obliczania dla małych macierzy

### A. Macierz $1 \times 1$

Dla macierzy jednoelementowej $A = [a]$, wyznacznik to po prostu ta liczba.
$\det [ -5 ] = -5$

### B. Macierz $2 \times 2$

Używamy reguły "na krzyż".

$$
A = \begin{bmatrix} a & b \\\\ c & d \end{bmatrix} \quad \rightarrow \quad \det(A) = a \cdot d - b \cdot c
$$

### C. Macierz $3 \times 3$ (Reguła Sarrusa)

Metoda ta działa **tylko i wyłącznie** dla macierzy $3 \times 3$. Nie wolno jej stosować dla większych!

Schemat działania:

1.  Dopisujemy dwie pierwsze kolumny z prawej strony macierzy.
2.  Mnożymy trzy przekątne opadające w dół (z plusem).
3.  Mnożymy trzy przekątne wznoszące się w górę (z minusem).
    **Algorytm obliczania wyniku:**

4.  **Oblicz Sumę "W Dół" (Czerwone):**
    Pomnóż liczby na każdej czerwonej linii i dodaj wyniki do siebie.
    $S_{dół} = (a \cdot e \cdot i) + (b \cdot f \cdot g) + (c \cdot d \cdot h)$

5.  **Oblicz Sumę "W Górę" (Niebieskie):**
    Pomnóż liczby na każdej niebieskiej linii i dodaj wyniki do siebie.
    $S_{góra} = (g \cdot e \cdot c) + (h \cdot f \cdot a) + (i \cdot d \cdot b)$

6.  **WYKONAJ ODEJMOWANIE (Finał):**
    Aby otrzymać wyznacznik, odejmij sumę niebieską od sumy czerwonej.

    $\det(A) = S_{dół} - S_{góra}$

Wzór dla macierzy $A = \begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \end{bmatrix}$:

$$
\underbrace{
\begin{array}{ccc|cc}
\color{red}a & \color{red}b & \color{red}c & a & b \\\\
d & \color{red}e & \color{red}f & \color{red}d & e \\\\
g & h & \color{red}i & \color{red}g & \color{red}h
\end{array}
}_{\text{1. Mnożymy w dół (dodajemy) }}
\quad \raisebox{-1em}{\Huge -} \quad
\underbrace{
\begin{array}{ccc|cc}
a & b & \color{blue}c & \color{blue}a & \color{blue}b \\\\
d & \color{blue}e & \color{blue}f & \color{blue}d & e \\\\
\color{blue}g & \color{blue}h & \color{blue}i & g & h
\end{array}
}_{\text{2. Mnożymy w górę (odejmujemy) }}
$$

---

### 📝 Zadanie 1: Reguła Sarrusa w praktyce

Oblicz wyznacznik macierzy $M$:

$$
M = \begin{bmatrix}
1 & 2 & 3 \\\\
-1 & 0 & 4 \\\\
2 & 1 & 5
\end{bmatrix}
$$

**Rozwiązanie:**
Korzystamy ze wzoru Sarrusa:

1.  **Przekątne główne (+):**
    - $1 \cdot 0 \cdot 5 = 0$
    - $2 \cdot 4 \cdot 2 = 16$
    - $3 \cdot (-1) \cdot 1 = -3$
    - _Suma:_ $0 + 16 - 3 = 13$
2.  **Przekątne boczne (-):**
    - $3 \cdot 0 \cdot 2 = 0$
    - $1 \cdot 4 \cdot 1 = 4$
    - $2 \cdot (-1) \cdot 5 = -10$
    - _Suma:_ $0 + 4 - 10 = -6$
3.  **Wynik (Główne minus Boczne):**
    $\det(M) = 13 - (-6) = 13 + 6 = 19$

---

---

## 4. 🧠 Rozwinięcie Laplace'a – Kompletna Teoria

Metoda Laplace’a to uniwersalny sposób obliczania wyznacznika dla macierzy każdego stopnia ($3 \times 3, 4 \times 4, \dots, n \times n$).
Jej siła polega na **rekurencji**: zamieniamy jeden trudny problem (duży wyznacznik) na kilka łatwiejszych (mniejsze wyznaczniki).

---

### A. Główny Wzór

Wyznacznik macierzy $A$ obliczamy, wybierając **jeden dowolny wiersz (lub kolumnę)** i sumując iloczyny elementów tego wiersza przez ich tzw. dopełnienia algebraiczne.

Dla rozwinięcia względem $i$-tego wiersza wzór wygląda tak:

$$
\det(A) = a_{i1} \cdot A_{i1} + a_{i2} \cdot A_{i2} + \dots + a_{in} \cdot A_{in}
$$

Aby zastosować metodę Laplace'a, musisz rozróżniać dwa pojęcia:

**1. Minor ($M_{ij}$)**
To "surowy" wyznacznik mniejszej macierzy, która zostaje po skreśleniu wiersza $i$ oraz kolumny $j$.

**2. Dopełnienie Algebraiczne ($A_{ij}$)**
To Minor z dołączonym znakiem z naszego wzoru $(-1)^{i+j}$.

$$
\underbrace{A_{ij}}_{\text{Dopełnienie}} = \underbrace{(-1)^{i+j}}_{\text{Znak z szachownicy}} \cdot \underbrace{M_{ij}}_{\text{Minor (mniejszy wyznacznik)}}
$$

#### 🔍 Co to jest MINOR ($M_{ij}$)?

**Definicja:**
Minor elementu $a_{ij}$ (oznaczany jako $M_{ij}$) to **wyznacznik** mniejszej macierzy, którą otrzymujemy po **skreśleniu** $i$-tego wiersza oraz $j$-tej kolumny z oryginalnej macierzy.

> **Zapamiętaj:** Minor to zawsze **LICZBA**, a nie tabelka!

**Przykład obliczania Minora krok po kroku:**

Mamy macierz $A = \begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \end{bmatrix}$.

Chcemy obliczyć minor dla elementu **4** (znajduje się on w **2. wierszu** i **1. kolumnie**, czyli szukamy $M_{21}$).

1.  **Skreślamy** wiersz 2 i kolumnę 1 (tam, gdzie stoi nasza czwórka).

    $$
    \begin{bmatrix}
    \color{lightgray}\xcancel{1} & 2 & 3 \\\\
    \color{red}\mathbf{4} & \color{lightgray}\xcancel{5} & \color{lightgray}\xcancel{6} \\\\
    \color{lightgray}\xcancel{7} & 8 & 9
    \end{bmatrix}
    $$

2.  **Wypisujemy to, co zostało** (niezakryte liczby).
    Powstaje mała macierz: $\begin{bmatrix} 2 & 3 \\\\ 8 & 9 \end{bmatrix}$.

3.  **Obliczamy wyznacznik** tej małej macierzy.
    $M_{21} = \det \begin{bmatrix} 2 & 3 \\\\ 8 & 9 \end{bmatrix} = (2 \cdot 9) - (3 \cdot 8) = 18 - 24 = -6$

**Wynik:** Minor $M_{21}$ wynosi **-6**.

---

#### Tajemnica czynnika $(-1)^{i+j}$ – Skąd to się bierze?

Najważniejszym elementem dopełnienia algebraicznego jest ustalenie znaku (plus lub minus). Odpowiada za to ten wzór:

$$
\text{Znak} = (-1)^{i+j}
$$

### B. Dlaczego akurat tak?

W matematyce znak $(-1)$ podniesiony do potęgi działa jak przełącznik:

- $(-1)^{\text{parzysta}} = \mathbf{1}$ (Plus)
- $(-1)^{\text{nieparzysta}} = \mathbf{-1}$ (Minus)

Wykladnik potęgi to suma współrzędnych elementu:

- $i$ = numer wiersza.
- $j$ = numer kolumny.

#### Analiza krok po kroku (Skąd się bierze szachownica?)

Sprawdźmy to na przykładzie macierzy $3 \times 3$.

**1. Lewy górny róg (wiersz 1, kolumna 1):**
$i=1, j=1 \quad \rightarrow \quad i+j = 2 \text{ (parzysta)}$
$(-1)^2 = \mathbf{1} \quad (\text{Znak PLUS})$

**2. Środek góry (wiersz 1, kolumna 2):**
$i=1, j=2 \quad \rightarrow \quad i+j = 3 \text{ (nieparzysta)}$
$(-1)^3 = \mathbf{-1} \quad (\text{Znak MINUS})$

**3. Prawy górny róg (wiersz 1, kolumna 3):**
$i=1, j=3 \quad \rightarrow \quad i+j = 4 \text{ (parzysta)}$
$(-1)^4 = \mathbf{1} \quad (\text{Znak PLUS})$

#### Wizualizacja (Szachownica)

Gdy rozpiszemy $(-1)^{i+j}$ dla każdego pola macierzy, otrzymujemy wzór szachownicy. To nie jest magia – to prosty wynik dodawania numeru wiersza i kolumny.

$$
\begin{bmatrix}
(-1)^{1+1} & (-1)^{1+2} & (-1)^{1+3} \\\\
(-1)^{2+1} & (-1)^{2+2} & (-1)^{2+3} \\\\
(-1)^{3+1} & (-1)^{3+2} & (-1)^{3+3}
\end{bmatrix}
=
\begin{bmatrix}
\color{green}+ & \color{red}- & \color{green}+ \\\\
\color{red}- & \color{green}+ & \color{red}- \\\\
\color{green}+ & \color{red}- & \color{green}+
\end{bmatrix}
$$

---

---

### D. Przykład praktyczny (Krok po kroku)

Obliczmy wyznacznik macierzy $A$ rozwijając ją względem **drugiego wiersza**.

$$
A = \begin{bmatrix}
3 & 2 & 4 \\\\
\mathbf{1} & \mathbf{0} & \mathbf{5} \\\\
4 & 3 & 2
\end{bmatrix}
$$

Wybieramy 2. wiersz: $[1, 0, 5]$.
Wzór: $\det(A) = -1 \cdot M_{21} + 0 \cdot M_{22} - 5 \cdot M_{23}$

**Dlaczego takie znaki?**

- Dla $1$ (wiersz 2, kolumna 1): $2+1=3$ (nieparzysta) $\rightarrow$ Minus.
- Dla $0$ (wiersz 2, kolumna 2): $2+2=4$ (parzysta) $\rightarrow$ Plus.
- Dla $5$ (wiersz 2, kolumna 3): $2+3=5$ (nieparzysta) $\rightarrow$ Minus.

**Obliczenia:**

1.  **Element 1:** Skreślamy 2. wiersz i 1. kolumnę.
    $$M_{21} = \det \begin{bmatrix} 2 & 4 \\\\ 3 & 2 \end{bmatrix} = (2\cdot2 - 4\cdot3) = 4 - 12 = -8$$
    Wkład do sumy: $(-1) \cdot 1 \cdot (-8) = \mathbf{8}$

2.  **Element 0:**
    Mnożenie przez zero zawsze daje zero, więc nawet nie liczymy Minora.
    Wkład do sumy: $\mathbf{0}$

3.  **Element 5:** Skreślamy 2. wiersz i 3. kolumnę.
    $$M_{23} = \det \begin{bmatrix} 3 & 2 \\\\ 4 & 3 \end{bmatrix} = (3\cdot3 - 2\cdot4) = 9 - 8 = 1$$
    Wkład do sumy: $(-1) \cdot 5 \cdot (1) = \mathbf{-5}$

**Wynik końcowy:**
$\det(A) = 8 + 0 - 5 = 3$

---

---

## 5. Metoda Gaussa (Eliminacja)

Dla ogromnych macierzy Laplace też jest zbyt wolny. Najszybsza metoda to **Metoda Gaussa**.
Polega na sprowadzeniu macierzy do **postaci trójkątnej górnej** (same zera pod przekątną) za pomocą operacji elementarnych.

\*\*1. Operacje Elementarne (Wewnątrz Macierzy)

Są to działania wykonywane na całych wierszach. Są fundamentem **Metody Gaussa** (liczenie wyznaczników, rzędu macierzy, rozwiązywanie układów równań).

Mamy tylko 3 dozwolone ruchy:

### I. Zamiana Wierszy ($W_i \leftrightarrow W_j$)

Możemy zamienić dwa wiersze miejscami.

- **Wpływ na wyznacznik:** Zmienia znak wyznacznika na przeciwny (np. z $5$ na $-5$).

### II. Skalowanie Wiersza ($k \cdot W_i$)

Możemy pomnożyć cały wiersz przez liczbę niezerową.

- **Wpływ na wyznacznik:** Wyznacznik mnoży się przez tę liczbę $k$.

### III. Kombinacja Liniowa ($W_i + k \cdot W_j$)

To "Królowa Operacji". Do jednego wiersza dodajemy inny wiersz pomnożony przez jakąś liczbę.

- **Przykład:** "Do drugiego wiersza dodaj pierwszy pomnożony przez -2" (aby zrobić zero).
- **Wpływ na wyznacznik:** 🔥 **BRAK ZMIANY!** (Wyznacznik pozostaje taki sam). Dlatego tej operacji używamy najczęściej.

  Gdy macierz jest już trójkątna, wyznacznik to **iloczyn elementów na przekątnej**.

$$
\det \begin{bmatrix}
\mathbf{a} & b & c \\\\
0 & \mathbf{d} & e \\\\
0 & 0 & \mathbf{f}
\end{bmatrix} = a \cdot d \cdot f
$$

---

## 6. Zastosowanie: Układy Równań (Wzory Cramera)

Jeśli masz układ równań, w którym liczba niewiadomych równa jest liczbie równań, możesz użyć wyznaczników.

Układ:
$\begin{cases} 2x + y = 5 \\\\ x - 3y = -1 \end{cases}$

Tworzymy macierz główną $A$ oraz macierze "podmienione" $A_x, A_y$:

1.  $A = \begin{bmatrix} 2 & 1 \\\\ 1 & -3 \end{bmatrix}$ (współczynniki przy x i y)
2.  $A_x = \begin{bmatrix} 5 & 1 \\\\ -1 & -3 \end{bmatrix}$ (kolumnę X zastępujemy wynikami równań)
3.  $A_y = \begin{bmatrix} 2 & 5 \\\\ 1 & -1 \end{bmatrix}$ (kolumnę Y zastępujemy wynikami równań)

Obliczamy wyznaczniki:

- $W = \det(A) = (2 \cdot -3) - (1 \cdot 1) = -7$
- $W_x = \det(A_x) = (5 \cdot -3) - (1 \cdot -1) = -15 + 1 = -14$
- $W_y = \det(A_y) = (2 \cdot -1) - (5 \cdot 1) = -2 - 5 = -7$

Rozwiązanie:
$x = \frac{W_x}{W} = \frac{-14}{-7} = 2$
$y = \frac{W_y}{W} = \frac{-7}{-7} = 1$

---

## 7. Wyznaczniki w Programowaniu

W Pythonie (biblioteka NumPy) obliczanie wyznaczników jest zoptymalizowane, ale trzeba uważać na błędy zaokrągleń (floating point error). Komputer czasem policzy $0.00000000001$ zamiast idealnego $0$.

```python
import numpy as np

# Definicja macierzy 3x3
A = np.array([
    [6, 1, 1],
    [4, -2, 5],
    [2, 8, 7]
])

# 1. Obliczanie wyznacznika
det = np.linalg.det(A)
print(f"Wyznacznik: {det}")

# 2. Praktyczne zastosowanie: Sprawdzenie odwracalności
# Zamiast sprawdzać if det == 0, bezpieczniej użyć przybliżenia
if np.isclose(det, 0):
    print("Macierz osobliwa - brak odwrotności, układ sprzeczny lub nieoznaczony.")
else:
    print("Macierz odwracalna.")
    inv = np.linalg.inv(A) # Obliczenie macierzy odwrotnej
```
