# Układy Równań Liniowych i Algebra Macierzy

Niniejsza notatka stanowi kompletny przewodnik po teorii układów równań liniowych w ujęciu algebry liniowej. Przechodzimy tutaj od szkolnych podstaw do akademickiego zrozumienia przestrzeni, transformacji i algorytmów.

---

## 1. Fundamenty: Od Równań do Struktury $Ax=b$

### 1.1. Ewolucja zapisu

W szkole średniej uczymy się rozwiązywać układy równań metodą podstawiania lub przeciwnych współczynników. Metody te są skuteczne dla małych układów (2-3 zmienne), ale stają się koszmarem obliczeniowym przy większej liczbie niewiadomych.

Rozważmy układ trzech równań z trzema niewiadomymi:

$$
\begin{cases}
{\color{red}1}x + {\color{blue}2}y - {\color{orange}1}z = {\color{green}4} \\
{\color{red}3}x + {\color{blue}8}y + {\color{orange}2}z = {\color{green}8} \\
{\color{red}4}x + {\color{blue}9}y - {\color{orange}1}z = {\color{green}13}
\end{cases}
$$

Algebra liniowa proponuje, aby nie patrzeć na to jak na „trzy osobne zdania logiczne”, ale jak na **jedną strukturę**. Separujemy liczby (dane) od symboli (niewiadome).

Zapiszmy to w postaci macierzowej $A \cdot x = b$:

$$
\underbrace{
\begin{bmatrix}
\color{red}1 & \color{blue}2 & \color{orange}-1 \\
\color{red}3 & \color{blue}8 & \color{orange}2 \\
\color{red}4 & \color{blue}9 & \color{orange}-1
\end{bmatrix}
}_{\text{Macierz } A}
\cdot
\underbrace{
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
}_{\text{Wektor } x}
=
\underbrace{
\begin{bmatrix}
\color{green}4 \\
\color{green}8 \\
\color{green}{13}
\end{bmatrix}
}_{\text{Wektor } b}
$$

### 1.2. Głęboka analiza składników

#### **Macierz Współczynników $A$ (Operator)**

Macierz $A$ to obiekt, który przechowuje informację o **relacjach** między zmiennymi.

- **Wymiar:** $m \times n$ (gdzie $m$ to liczba równań, a $n$ to liczba niewiadomych). W naszym przykładzie to macierz kwadratowa $3 \times 3$.
- **Interpretacja:** Macierz ta działa jak **operator transformacji**. Przekształca ona przestrzeń wejściową (przestrzeń niewiadomych) w przestrzeń wyjściową (przestrzeń wyników).
- **Kolumny macierzy:** Każda kolumna odpowiada jednej zmiennej. Kolumna pierwsza ($\color{red}{1, 3, 4}$) mówi nam, jak zmienna $x_1$ wpływa na każde z równań.

#### **Wektor Niewiadomych $x$ (Input)**

To wektor poszukiwany. Geometrycznie jest to punkt w $n$-wymiarowej przestrzeni, który po "przemieleniu" przez maszynę $A$ da nam wynik $b$.

#### **Wektor Wyrazów Wolnych $b$ (Output)**

To nasz cel. Wektor $b$ leży w przestrzeni wyników. Rozwiązanie układu równań sprowadza się do pytania: _„Czy wektor $b$ można zbudować z kolumn macierzy $A$?”_.

---

## 2. Dwie Perspektywy: Wierszowa vs Kolumnowa

Dlaczego zapis macierzowy jest tak potężny? Ponieważ pozwala nam patrzeć na problem na dwa sposoby. Zrozumienie różnicy między nimi to klucz do „oświecenia” w algebrze liniowej.

### 2.1. Perspektywa Wierszowa (Geometryczna - Przecięcia)

Patrząc na wiersze macierzy, każde równanie definiuje **płaszczyznę** (w 3D) lub **prostą** (w 2D).

- Równanie $x_1 + 2x_2 - x_3 = 4$ to nieskończona płaszczyzna w przestrzeni trójwymiarowej.
- Szukamy punktu $(x_1, x_2, x_3)$, który leży na przecięciu **wszystkich trzech płaszczyzn** jednocześnie.
- Jest to trudne do wyobrażenia w wyższych wymiarach (np. przecięcie dziesięciu 10-wymiarowych hiperpłaszczyzn).

### 2.2. Perspektywa Kolumnowa (Kombinacje Liniowe)

To jest „prawdziwe” spojrzenie algebry liniowej. Mnożenie $Ax$ to tak naprawdę **kombinacja liniowa kolumn macierzy $A$**:

$$
x_1 \begin{bmatrix} \color{red}1 \\ \color{red}3 \\ \color{red}4 \end{bmatrix} +
x_2 \begin{bmatrix} \color{blue}2 \\ \color{blue}8 \\ \color{blue}9 \end{bmatrix} +
x_3 \begin{bmatrix} \color{orange}-1 \\ \color{orange}2 \\ \color{orange}-1 \end{bmatrix} =
\begin{bmatrix} \color{green}4 \\ \color{green}8 \\ \color{green}{13} \end{bmatrix}
$$

**Pytanie brzmi:** Ile muszę wziąć wektora czerwonego ($x_1$), ile niebieskiego ($x_2$) i ile pomarańczowego ($x_3$), aby po ich zsumowaniu (metodą równoległoboku/wieloboku) trafić w punkt zielony ($b$)?

**Korzyści tego zapisu:**

1.  **Zwięzłość:** Jeden symbol $A$ zastępuje setki liczb.
2.  **Operacje algebraiczne:** Możemy przekształcać równania tak prosto, jak liczby ($Ax=b \to x=A^{-1}b$).
3.  **Analiza istnienia rozwiązań:** Jeśli wektor $b$ nie leży w przestrzeni rozpiętej przez kolumny $A$ (tzw. _Column Space_), rozwiązanie nie istnieje.

---

## 3. Metoda Macierzy Odwrotnej

Metoda ta opiera się na analogii do równania skalarnego $ax=b \implies x=a^{-1}b$. W świecie macierzy dzielenie nie istnieje, ale istnieje **odwracanie**.

### 3.1. Algorytm Postępowania

1.  Oblicz wyznacznik $\det(A)$. Jeśli wynosi 0, STOP – metoda nie zadziała.
2.  Wyznacz macierz dopełnień algebraicznych (macierz kofaktorów).
3.  Transponuj macierz dopełnień (powstaje tzw. macierz dołączona $A^D$).
4.  Pomnóż macierz dołączoną przez odwrotność wyznacznika.
5.  Oblicz $x = A^{-1} \cdot b$.

### 3.2. Szczegółowy przykład ($2 \times 2$)

Niech $A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}, \quad b = \begin{bmatrix} -2 \\ 4 \end{bmatrix}$.

1.  **Wyznacznik:**
    $\det(A) = (4 \cdot 6) - (7 \cdot 2) = 24 - 14 = 10$
    Jest różny od zera, macierz jest odwracalna.

2.  **Macierz Odwrotna:**
    Dla $2 \times 2$ zamieniamy elementy na przekątnej i zmieniamy znaki pozostałych:
    $A^{-1} = \frac{1}{10} \begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}$

3.  **Mnożenie $x = A^{-1}b$:**
    $\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix} \cdot \begin{bmatrix} -2 \\ 4 \end{bmatrix}$
    $x_1 = (0.6 \cdot -2) + (-0.7 \cdot 4) = -1.2 - 2.8 = -4$
    $x_2 = (-0.2 \cdot -2) + (0.4 \cdot 4) = 0.4 + 1.6 = 2$

**Wynik:** $x = \begin{bmatrix} -4 \\ 2 \end{bmatrix}$.

### 3.3. Ograniczenia i Warunki

- **Warunek konieczny:** Macierz $A$ musi być kwadratowa i nieosobliwa ($\det(A) \neq 0$).
- **Koszt obliczeniowy:** Obliczanie macierzy odwrotnej dla dużych układów ($N > 1000$) jest niezwykle kosztowne obliczeniowo ($O(N^3)$) i obarczone błędami zaokrągleń komputera. W praktyce inżynierskiej rzadko odwraca się macierze wprost – stosuje się rozkłady (np. LU).

---

## 4. Wzory Cramera (Metoda Wyznaczników)

Metoda Gabriela Cramera jest piękna teoretycznie, ponieważ daje jawny wzór na każdą zmienną. Pozwala obliczyć np. tylko $x_{17}$ bez liczenia pozostałych 99 zmiennych.

### 4.1. Definicja Formalna

Jeśli $\det(A) \neq 0$, to rozwiązanie układu dane jest wzorami:
$x_k = \frac{\det(A_k)}{\det(A)}$
gdzie $A_k$ to macierz powstała przez zastąpienie $k$-tej kolumny macierzy $A$ wektorem wyrazów wolnych $b$.

### 4.2. Rozbudowany przykład ($3 \times 3$)

Wróćmy do naszego układu z początku:
$A = \begin{bmatrix} 1 & 2 & -1 \\ 3 & 8 & 2 \\ 4 & 9 & -1 \end{bmatrix}, \quad b = \begin{bmatrix} 4 \\ 8 \\ 13 \end{bmatrix}$

**Krok 1: Wyznacznik główny $W$ (Metoda Sarrusa)**
Dopisujemy dwie pierwsze kolumny:

$$
\begin{matrix}
1 & 2 & -1 & | & 1 & 2 \\
3 & 8 & 2 & | & 3 & 8 \\
4 & 9 & -1 & | & 4 & 9
\end{matrix}
$$

$W = (1\cdot8\cdot(-1)) + (2\cdot2\cdot4) + ((-1)\cdot3\cdot9) - [((-1)\cdot8\cdot4) + (1\cdot2\cdot9) + (2\cdot3\cdot(-1))]$
$W = (-8 + 16 - 27) - (-32 + 18 - 6)$
$W = -19 - (-20) = \mathbf{1}$

**Krok 2: Wyznacznik dla $x_1$ ($W_{x1}$)**
Podmieniamy **pierwszą** kolumnę na wektor $b$:
$A_1 = \begin{bmatrix} \color{green}4 & 2 & -1 \\ \color{green}8 & 8 & 2 \\ \color{green}{13} & 9 & -1 \end{bmatrix}$
Licząc analogicznie (Sarrus lub rozwinięcie Laplace'a):
$\det(A_1) = (4\cdot8\cdot(-1)) + (2\cdot2\cdot13) + ((-1)\cdot8\cdot9) - [((-1)\cdot8\cdot13) + (4\cdot2\cdot9) + (2\cdot8\cdot(-1))]$
$\det(A_1) = (-32 + 52 - 72) - (-104 + 72 - 16)$
$\det(A_1) = -52 - (-48) = -4$

Stąd: **$x_1 = \frac{-4}{1} = -4$**.

**Krok 3: Wyznacznik dla $x_2$ ($W_{x2}$)**
Podmieniamy **drugą** kolumnę na wektor $b$:
$A_2 = \begin{bmatrix} 1 & \color{green}4 & -1 \\ 3 & \color{green}8 & 2 \\ 4 & \color{green}{13} & -1 \end{bmatrix}$
Po obliczeniach: $\det(A_2) = 6$.
Stąd: **$x_2 = \frac{6}{1} = 6$**.

**Krok 4: Wyznacznik dla $x_3$ ($W_{x3}$)**
Podmieniamy **trzecią** kolumnę:
$A_3 = \begin{bmatrix} 1 & 2 & \color{green}4 \\ 3 & 8 & \color{green}8 \\ 4 & 9 & \color{green}{13} \end{bmatrix}$
Po obliczeniach: $\det(A_3) = 4$.
Stąd: **$x_3 = \frac{4}{1} = 4$**.

**Rozwiązanie:** $x = (-4, 6, 4)$.

---

## 5. Metoda Eliminacji Gaussa (Najpotężniejsze Narzędzie)

Podczas gdy Cramer i Macierz Odwrotna są "eleganckie", Gauss jest "roboczy" i uniwersalny. To algorytm, który systematycznie upraszcza macierz, nie dbając o to, czy wyznacznik jest zerem.

### 5.1. Idea Macierzy Schodkowej

Celem jest doprowadzenie macierzy do postaci, w której pod „przekątną” (schodkami) są same zera. Pozwala to na rozwiązanie układu metodą „podstawiania wstecznego” (back substitution).

Operacje dozwolone (operacje elementarne na wierszach - ERO):

1.  $R_i \leftrightarrow R_j$ (Zamiana wierszy).
2.  $k \cdot R_i$ (Skalowanie wiersza).
3.  $R_i + k \cdot R_j$ (Dodanie do wiersza wielokrotności innego).

### 5.2. Analiza typów rozwiązań (Rząd Macierzy)

Kluczem do zrozumienia Gaussa jest pojęcie **Rzędu Macierzy (Rank)**. Rząd to liczba liniowo niezależnych wierszy (schodków) po redukcji.

Oznaczmy:

- $r(A)$ – rząd macierzy współczynników.
- $r(U)$ – rząd macierzy uzupełnionej (razem z kolumną $b$).
- $n$ – liczba niewiadomych.

Twierdzenie Kroneckera-Capellego w praktyce:

#### **PRZYPADEK A: Układ Oznaczony (Jedno rozwiązanie)**

Warunek: $r(A) = r(U) = n$.
Ostatni wiersz ma postać:
$[\begin{array}{ccc|c} 0 & 0 & \mathbf{5} & 10 \end{array}] \implies 5z = 10 \implies z=2$
Każda zmienna ma swój "schodek". Układ jest stabilny.

#### **PRZYPADEK B: Układ Sprzeczny (Brak rozwiązań)**

Warunek: $r(A) < r(U)$.
Występuje „schodek” w kolumnie wyrazów wolnych.
Przykład po redukcji:

$$
\left[ \begin{array}{ccc|c}
1 & 2 & 3 & 5 \\
0 & 4 & 1 & 2 \\
\color{red}0 & \color{red}0 & \color{red}0 & \color{red}7
\end{array} \right]
$$

**Analiza:** Ostatni wiersz oznacza równanie: $0x_1 + 0x_2 + 0x_3 = 7$, czyli $0 = 7$.
To jest **fałsz**. Oznacza to, że nasze wymagania są sprzeczne (np. szukamy punktu przecięcia dwóch równoległych, rozłącznych płaszczyzn).

#### **PRZYPADEK C: Układ Nieoznaczony (Nieskończenie wiele rozwiązań)**

Warunek: $r(A) = r(U) < n$.
Tracimy jeden lub więcej wierszy (zerują się całkowicie).
Przykład po redukcji:

$$
\left[ \begin{array}{ccc|c}
1 & 2 & 3 & 5 \\
0 & 4 & 1 & 2 \\
\color{blue}0 & \color{blue}0 & \color{blue}0 & \color{blue}0
\end{array} \right]
$$

**Analiza:** Ostatni wiersz to $0=0$. Jest to prawda (tautologia), ale nie daje informacji.
Mamy efektywnie 2 równania na 3 niewiadome.
Musimy wprowadzić **parametr**.
Niech $x_3 = t$ (gdzie $t \in \mathbb{R}$).
Wtedy z drugiego wiersza: $4x_2 + t = 2 \implies x_2 = \frac{2-t}{4}$.
Rozwiązaniem jest cała prosta w przestrzeni 3D.

---

## 6. Wielkie Porównanie Metod: Kiedy użyć której?

Poniższa tabela pomoże Ci podjąć decyzję w zależności od problemu, z którym się mierzysz.

| Kryterium                   | Metoda Macierzy Odwrotnej ($X=A^{-1}B$) | Wzory Cramera (Wyznaczniki)                 | Metoda Eliminacji Gaussa              |
| :-------------------------- | :-------------------------------------- | :------------------------------------------ | :------------------------------------ |
| **Typ układu**              | Tylko kwadratowe ($N=M$)                | Tylko kwadratowe ($N=M$)                    | Dowolne (kwadratowe, prostokątne)     |
| **Wymóg**                   | $\det(A) \neq 0$                        | $\det(A) \neq 0$                            | Brak (działa zawsze)                  |
| **Złożoność**               | $O(n^3)$ (bardzo wolna)                 | $O(n! \cdot n)$ (eksplozja kombinatoryczna) | $O(n^3)$ (najszybszy standard)        |
| **Wygoda ręczna**           | Dobra dla $2 \times 2$                  | Dobra dla $3 \times 3$, tragiczna wyżej     | Najlepsza dla dużych układów          |
| **Zastosowanie**            | Równania macierzowe $AX=B$, teoria grup | Fizyka teoretyczna, wyprowadzanie wzorów    | Algorytmy komputerowe, inżynieria     |
| **Wykrywanie sprzeczności** | Niemożliwe (dzielenie przez zero)       | Niemożliwe (dzielenie przez zero)           | **Intuicyjne** (widzisz wiersz $0=k$) |

### Wnioski końcowe

1.  Uczysz się **Cramera**, aby zrozumieć definicje i zdać egzamin z teorii.
2.  Uczysz się **Macierzy Odwrotnej**, aby umieć przekształcać skomplikowane wzory algebraiczne.
3.  Uczysz się **Eliminacji Gaussa**, aby rozwiązywać rzeczywiste problemy. To Gauss jest tym algorytmem, który "siedzi w środku" programów takich jak MATLAB, Python (NumPy) czy w silnikach gier 3D.
