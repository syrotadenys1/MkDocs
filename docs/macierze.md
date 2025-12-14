# Macierze

## Wstęp

Macierze to fundamentalne narzędzie w matematyce wyższej, inżynierii i informatyce. Choć na pierwszy rzut oka wyglądają jak zwykłe tabelki z liczbami, kryją w sobie potężny aparat do przekształcania przestrzeni, rozwiązywania układów równań i przetwarzania danych.

---

## 1. Czym jest macierz? Definicje i podstawy

### Definicja formalna

Macierzą nazywamy prostokątną tablicę elementów (najczęściej liczb rzeczywistych), ustawionych w **wierszach** (poziomo) i **kolumnach** (pionowo).

Macierz oznaczamy zazwyczaj wielką literą, np. $A$. Jeśli macierz ma $m$ wierszy i $n$ kolumn, mówimy, że jest wymiaru $m \times n$.

Zapis ogólny macierzy $A$ o wymiarach $m \times n$:

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{bmatrix}
$$

### Indeksowanie (Adresowanie)

Każdy element macierzy ma swój unikalny "adres" zapisywany jako $a_{ij}$, gdzie:

- $i$ – numer wiersza,
- $j$ – numer kolumny.

> **Uwaga:** W matematyce zazwyczaj indeksujemy od 1, natomiast w programowaniu (np. C++, Python, Java) indeksowanie zaczyna się od 0.

### Równość macierzy

Dwie macierze $A$ i $B$ są równe wtedy i tylko wtedy, gdy:

1.  Mają **identyczne wymiary**.
2.  Wszystkie odpowiadające sobie elementy są takie same ($a_{ij} = b_{ij}$ dla każdego $i, j$).

---

### 📝 Zadanie 1: Wymiary i Równość

Dane są trzy macierze:

$$
A = \begin{bmatrix} 2 & x \\ 5 & -1 \end{bmatrix}, \quad
B = \begin{bmatrix} 2 & 4 \\ 5 & -1 \end{bmatrix}, \quad
C = \begin{bmatrix} 2 & 4 \\ 5 & -1 \\ 0 & 0 \end{bmatrix}
$$

**Polecenie:**

1. Określ wymiary macierzy $A$ i $C$.
2. Czy macierz $A$ może być równa macierzy $C$?
3. Dla jakiego $x$ macierz $A$ jest równa macierzy $B$?

**Rozwiązanie krok po kroku:**

1.  **Wymiary:**
    - Macierz $A$ ma 2 wiersze i 2 kolumny $\rightarrow$ Wymiar $2 \times 2$.
    - Macierz $C$ ma 3 wiersze i 2 kolumny $\rightarrow$ Wymiar $3 \times 2$.
2.  **Porównanie $A$ i $C$:**
    - Macierze mają różne wymiary ($2 \times 2 \neq 3 \times 2$).
    - **Wniosek:** Nie mogą być równe, niezależnie od wartości w środku.
3.  **Równość $A = B$:**
    - Wymiary są zgodne ($2 \times 2$).
    - Porównujemy element po elemencie:
      - $a_{11}=2, b_{11}=2$ (OK)
      - $a_{21}=5, b_{21}=5$ (OK)
      - $a_{22}=-1, b_{22}=-1$ (OK)
      - $a_{12}=x, b_{12}=4$
    - Aby macierze były równe, $x$ musi być równe $4$.

---

## 2. Klasyfikacja: Macierze specjalne

Wyróżniamy wiele typów macierzy, które mają unikalne własności.

### A. Macierz Kwadratowa

Liczba wierszy jest równa liczbie kolumn ($m=n$). Tylko dla takich macierzy możemy liczyć wyznacznik (determinant).
Przykład ($3 \times 3$):
$$\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}$$

### B. Macierz Zerowa ($O$ lub $\Theta$)

Wszystkie elementy są równe zero. W dodawaniu macierzy pełni rolę elementu neutralnego (jak liczba 0 w arytmetyce).
$$O = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$$

### C. Macierz Jednostkowa ($I$)

Macierz kwadratowa, która ma **jedynki na głównej przekątnej** i zera poza nią.
$$I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$
**Własność:** Mnożenie dowolnej macierzy przez macierz jednostkową nie zmienia jej ($A \cdot I = A$).

### D. Macierz Diagonalna

Macierz kwadratowa, która ma wartości niezerowe tylko na przekątnej. Macierz jednostkowa jest szczególnym przypadkiem macierzy diagonalnej.
$$D = \begin{bmatrix} 5 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & 3 \end{bmatrix}$$

### E. Macierz Transponowana ($A^T$)

Powstaje poprzez zamianę wierszy na kolumny. Pierwszy wiersz staje się pierwszą kolumną, drugi wiersz drugą kolumną itd.
**Własność:** $(A^T)^T = A$.

---

### 📝 Zadanie 2: Transpozycja macierzy niesymetrycznej

Dana jest macierz $K$ o wymiarze $2 \times 3$:

$$
K = \begin{bmatrix}
3 & 0 & 1 \\
-2 & 5 & 8
\end{bmatrix}
$$

**Polecenie:** Wyznacz $K^T$. Jaki będzie jej nowy wymiar?

**Rozwiązanie krok po kroku:**

1.  **Analiza wymiaru:** Skoro $K$ to $2 \times 3$, to $K^T$ będzie miała wymiar $3 \times 2$ (odwracamy liczby).
2.  **Transpozycja wierszy:**
    - Wiersz 1 macierzy $K$: $[3, 0, 1]$ $\rightarrow$ staje się Kolumną 1 macierzy $K^T$.
    - Wiersz 2 macierzy $K$: $[-2, 5, 8]$ $\rightarrow$ staje się Kolumną 2 macierzy $K^T$.
3.  **Zapis wyniku:**
    $$
    K^T = \begin{bmatrix}
    3 & -2 \\\\
    0 & 5 \\\\
    1 & 8
    \end{bmatrix}
    $$

---

## 3. Arytmetyka Macierzy: Dodawanie i Skalowanie

### Dodawanie i Odejmowanie

Działania te są możliwe **tylko** dla macierzy o **tych samych wymiarach**. Działamy "pozycjami": dodajemy element $a_{11}$ do $b_{11}$ itd.

**Własności dodawania:**

- Przemienność: $A + B = B + A$
- Łączność: $(A + B) + C = A + (B + C)$

### Mnożenie przez skalar

Skalar to w algebrze liniowej po prostu liczba (rzeczywista). Mnożąc macierz przez liczbę $k$, mnożymy **każdy** jej element przez $k$.

$$k \cdot A = [k \cdot a_{ij}]$$

---

### 📝 Zadanie 3: Kombinacja liniowa macierzy

Dane są macierze:

$$
A = \begin{bmatrix} 1 & -2 \\ 3 & 0 \end{bmatrix}, \quad
B = \begin{bmatrix} 4 & 2 \\ 0 & -1 \end{bmatrix}
$$

**Polecenie:** Oblicz macierz $X = 3A - \frac{1}{2}B$.

**Rozwiązanie krok po kroku:**

1.  **Krok 1: Obliczamy $3A$** (mnożymy każdy element A przez 3):
    $$3A = \begin{bmatrix} 1\cdot3 & -2\cdot3 \\ 3\cdot3 & 0\cdot3 \end{bmatrix} = \begin{bmatrix} 3 & -6 \\ 9 & 0 \end{bmatrix}$$

2.  **Krok 2: Obliczamy $\frac{1}{2}B$** (dzielimy każdy element B przez 2):
    $$\frac{1}{2}B = \begin{bmatrix} 4\cdot0.5 & 2\cdot0.5 \\ 0\cdot0.5 & -1\cdot0.5 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ 0 & -0.5 \end{bmatrix}$$

3.  **Krok 3: Odejmowanie wyników** ($3A - \frac{1}{2}B$):
    $$X = \begin{bmatrix} 3 & -6 \\ 9 & 0 \end{bmatrix} - \begin{bmatrix} 2 & 1 \\ 0 & -0.5 \end{bmatrix}$$
    $$X = \begin{bmatrix} 3-2 & -6-1 \\ 9-0 & 0-(-0.5) \end{bmatrix}$$

**Wynik:**
$$X = \begin{bmatrix} 1 & -7 \\ 9 & 0.5 \end{bmatrix}$$

---

## 4. Mnożenie Macierzy (Iloczyn Cauchy’ego)

To najbardziej złożona, ale i najważniejsza operacja. W przeciwieństwie do dodawania, nie mnożymy "elementu przez element".

### Warunek wykonalności

Aby pomnożyć macierz $A$ przez macierz $B$, liczba **kolumn** macierzy $A$ musi być równa liczbie **wierszy** macierzy $B$.
$$(m \times \mathbf{n}) \cdot (\mathbf{n} \times p) = (m \times p)$$
Macierz wynikowa ma liczbę wierszy z pierwszej macierzy i liczbę kolumn z drugiej.

### Algorytm ("Wiersz razy Kolumna")

Element $c_{ij}$ macierzy wynikowej to suma iloczynów elementów $i$-tego wiersza macierzy $A$ i $j$-tej kolumny macierzy $B$.

Wzór:
$$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{in}b_{nj}$$

### Kluczowa własność

Mnożenie macierzy **nie jest przemienne**!
$$A \cdot B \neq B \cdot A$$
Często zdarza się, że $A \cdot B$ istnieje, a $B \cdot A$ w ogóle nie da się wykonać ze względu na wymiary.

---

### 📝 Zadanie 4: Mnożenie macierzy prostokątnych

Dane są macierze:

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \quad (wymiar: 2 \times 3)
$$

$$
B = \begin{bmatrix} 7 & 8 \\ 9 & 1 \\ 2 & 3 \end{bmatrix} \quad (wymiar: 3 \times 2)
$$

**Polecenie:** Oblicz $C = A \cdot B$. Jaki będzie wymiar wyniku?

**Rozwiązanie krok po kroku:**

1.  **Sprawdzenie wymiarów:** $(2 \times \mathbf{3}) \times (\mathbf{3} \times 2)$. Wewnętrzne liczby są równe (3), więc mnożenie jest możliwe. Wynik będzie wymiaru **2x2**.

2.  **Element $c_{11}$ (Wiersz 1 z A $\times$ Kolumna 1 z B):**
    $$(1\cdot7) + (2\cdot9) + (3\cdot2) = 7 + 18 + 6 = \mathbf{31}$$

3.  **Element $c_{12}$ (Wiersz 1 z A $\times$ Kolumna 2 z B):**
    $$(1\cdot8) + (2\cdot1) + (3\cdot3) = 8 + 2 + 9 = \mathbf{19}$$

4.  **Element $c_{21}$ (Wiersz 2 z A $\times$ Kolumna 1 z B):**
    $$(4\cdot7) + (5\cdot9) + (6\cdot2) = 28 + 45 + 12 = \mathbf{85}$$

5.  **Element $c_{22}$ (Wiersz 2 z A $\times$ Kolumna 2 z B):**
    $$(4\cdot8) + (5\cdot1) + (6\cdot3) = 32 + 5 + 18 = \mathbf{55}$$

**Wynik:**

$$
C = \begin{bmatrix} 31 & 19 \\ 85 & 55 \end{bmatrix}
$$

---

## 5. Zastosowanie Macierzy: Technologia i Świat

Macierze to język, w którym "rozmawiają" komputery wykonujące obliczenia.

### 🏛 1. Grafika Komputerowa 3D (GameDev)

Wszystko, co widzisz w grach komputerowych (postacie, budynki), jest opisane za pomocą wierzchołków. Aby przesunąć postać, obrócić kamerę lub powiększyć obiekt, komputer mnoży współrzędne punktów przez **macierze transformacji**.

- **Macierz rotacji:** Odpowiada za obrót punktu wokół osi.
- **Macierz translacji:** Przesuwa punkt w przestrzeni.

### 🧠 2. Sztuczna Inteligencja i Deep Learning

Sieci neuronowe (np. ChatGPT) to w uproszczeniu gigantyczne zestawy macierzy wag.

- Proces "uczenia się" sieci to ciągła aktualizacja wartości w macierzach.
- Karty graficzne (GPU) są tak cenne w AI, ponieważ są zaprojektowane do wykonywania mnożenia macierzy tysiące razy szybciej niż zwykłe procesory (CPU).

### 🕸 3. Teoria Grafów i Social Media

Relacje w sieciach społecznościowych można zapisać jako macierz (tzw. **Macierz sąsiedztwa**).

- Jeśli Jan (wiersz 1) zna Annę (kolumna 2), wpisujemy $1$.
- Jeśli nie zna, wpisujemy $0$.
  Podnoszenie takiej macierzy do potęgi pozwala np. znaleźć "znajomych znajomych" (sugerowane kontakty na Facebooku).

### 🔐 4. Kryptografia

Algorytmy szyfrowania (jak Hill Cipher) używają mnożenia macierzy do zakodowania wiadomości. Aby ją odczytać, odbiorca musi użyć **macierzy odwrotnej** ($A^{-1}$), która działa jak klucz.

---

## 6. Macierze w Kodingu (Implementacja)

W programowaniu rzadko piszemy mnożenie macierzy ręcznie (pętle `for` w pętlach `for`). Używamy do tego zoptymalizowanych bibliotek.

### Python i biblioteka NumPy

To standard w Data Science.

```python
import numpy as np

# Definicja macierzy 2x3
A = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

# Transpozycja
print(A.T)

# Macierz jednostkowa 4x4
I = np.eye(4)

# Mnożenie macierzy (dot product)
B = np.array([[1], [0], [1]]) # Wektor kolumnowy 3x1
wynik = A @ B  # Operator @ służy do mnożenia macierzy w Pythonie
```
