# Wektory: Kompendium Wiedzy

Wektory są jednym z najbardziej fundamentalnych pojęć w matematyce, fizyce i informatyce. Służą do opisu wielkości, które, w przeciwieństwie do zwykłych liczb (skalarów), posiadają nie tylko **wartość**, ale również **kierunek** i **zwrot**.

!!! info "Intuicja"
Wyobraź sobie, że chcesz opisać ruch samochodu. Nie wystarczy powiedzieć, że porusza się z prędkością 50 km/h. Pełna informacja musi zawierać również kierunek (np. wzdłuż autostrady A2) i zwrot (np. na wschód, w stronę Warszawy). Prędkość w tym ujęciu jest wektorem. Podobnie siła, z jaką pchasz przedmiot – liczy się nie tylko jak mocno, ale też w którą stronę.

---

## 1. Podstawowe Pojęcia i Definicje

Zanim przejdziemy do operacji, zdefiniujmy precyzyjnie, czym jest wektor i jak go zapisujemy.

### Reprezentacja Wektora

Wektor w przestrzeni n-wymiarowej (\\(R^n\\)) jest najczęściej reprezentowany jako uporządkowana lista liczb, nazywanych jego **współrzędnymi** lub **składowymi**.

- W przestrzeni 2D (\\(R^2\\)), wektor \\(\vec{v}\\) ma postać: \\(\vec{v} = [v_x, v_y]\\)
- W przestrzeni 3D (\\(R^3\\)), wektor \\(\vec{u}\\) ma postać: \\(\vec{u} = [u_x, u_y, u_z]\\)

!!! tip "Zapis"
Wektory oznaczamy małą literą ze strzałką na górze (np. \\(\vec{v}\\)), a w druku często używa się pogrubionej czcionki (**v**).

Graficznie wektor przedstawia się jako **strzałkę**. Jej długość odpowiada wartości wektora, a grot wskazuje jego zwrot.

### Wektor Zaczepiony vs Swobodny

- **Wektor zaczepiony:** Ma ściśle określony punkt początkowy (zaczepienia) i końcowy.
- **Wektor swobodny:** Nie ma konkretnego punktu zaczepienia. Ważny jest tylko jego kierunek, zwrot i długość. Dwa wektory swobodne są równe, jeśli można je na siebie nałożyć przez przesunięcie równoległe. W naszych notatkach będziemy zajmować się głównie wektorami swobodnymi.

### Współrzędne Wektora

Jeśli wektor \\(\vec{AB}\\) ma początek w punkcie \\(A = (a_x, a_y)\\) i koniec w punkcie \\(B = (b_x, b_y)\\), jego współrzędne obliczamy, odejmując współrzędne początku od współrzędnych końca.

\\[
\vec{AB} = [b_x - a_x, b_y - a_y]
\\]

!!! example "Przykład"
Obliczmy współrzędne wektora o początku w \\(A=(2, 5)\\) i końcu w \\(B=(-1, 8)\\).

\\[
\vec{AB} = [-1 - 2, 8 - 5] = [-3, 3]
\\]

### Wektor Zerowy i Wektor Przeciwny

- **Wektor zerowy** \\(\vec{0}\\) to wektor, którego wszystkie współrzędne są równe zero: \\(\vec{0} = [0, 0, \dots]\\). Jego długość wynosi 0 i nie ma on określonego kierunku ani zwrotu.
- **Wektor przeciwny** do wektora \\(\vec{v}\\) to wektor \\(-\vec{v}\\), który ma tę samą długość i kierunek, ale przeciwny zwrot. Jego współrzędne mają przeciwne znaki.
  \\[
  -\vec{v} = [-v_x, -v_y]
  \\]

---

## 2. Długość Wektora (Norma)

Długość wektora, nazywana również jego **normą euklidesową** lub magnitudą, to jego wartość liczbowa. Jest to odległość od jego początku do końca. Oblicza się ją z uogólnionego twierdzenia Pitagorasa.

!!! success "Wzór na długość wektora"
Dla wektora \\(\vec{v} = [v_x, v_y]\\) w 2D, długość \\(\|\vec{v}\|\\) wynosi:

\\[
\|\vec{v}\| = \sqrt{v_x^2 + v_y^2}
\\]

Dla wektora \\(\vec{u} = [u_x, u_y, u_z]\\) w 3D, długość \\(\|\vec{u}\|\\) wynosi:

\\[
\|\vec{u}\| = \sqrt{u_x^2 + u_y^2 + u_z^2}
\\]

### Własności Normy

1.  \\(\|\vec{v}\| \ge 0\\) (długość jest zawsze nieujemna)
2.  \\(\|\vec{v}\| = 0 \iff \vec{v} = \vec{0}\\) (tylko wektor zerowy ma długość 0)
3.  \\(\|c \cdot \vec{v}\| = |c| \cdot \|\vec{v}\|\\) (mnożenie przez skalar skaluje długość)

---

## 3. Wersor (Wektor Jednostkowy)

!!! info "Definicja"
**Wersor** to wektor o długości równej 1. Wskazuje on tylko na kierunek i zwrot. Każdy wektor (oprócz wektora zerowego) można przekształcić w wersor. Proces ten nazywa się **normalizacją**.

Normalizacja polega na podzieleniu wektora przez jego długość.

!!! success "Wzór na wersor"
Wersor \\(\hat{v}\\) wektora \\(\vec{v}\\) obliczamy ze wzoru:

\\[
\hat{v} = \frac{\vec{v}}{\|\vec{v}\|} = \left[ \frac{v_x}{\|\vec{v}\|}, \frac{v_y}{\|\vec{v}\|}, \dots \right]
\\]

!!! example "Przykład: Normalizacja wektora"
Znajdźmy wersor wektora \\(\vec{w} = [3, -4]\\).

1.  **Obliczamy długość wektora \\(\vec{w}\\):**

\\[
\|\vec{w}\| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5
\\]

2.  **Dzielimy wektor przez jego długość:**

\\[
\hat{w} = \frac{\vec{w}}{5} = \left[ \frac{3}{5}, \frac{-4}{5} \right]
\\]

3.  **Sprawdzenie (opcjonalne):** Czy długość wersora wynosi 1?

\\[
\|\hat{w}\| = \sqrt{\left(\frac{3}{5}\right)^2 + \left(\frac{-4}{5}\right)^2} = \sqrt{\frac{9}{25} + \frac{16}{25}} = \sqrt{\frac{25}{25}} = \sqrt{1} = 1
\\]

Wynik się zgadza. Wersorem wektora \\([3, -4]\\) jest \\(\left[ \frac{3}{5}, -\frac{4}{5} \right]\\).

---

## 4. Operacje na Wektorach

### 4.1. Dodawanie i Odejmowanie

Operacje te wykonuje się "po współrzędnych".

\\[
\vec{a} + \vec{b} = [a_x + b_x, a_y + b_y]
\\]

\\[
\vec{a} - \vec{b} = [a_x - b_x, a_y - b_y]
\\]

**Interpretacja geometryczna:**

- **Dodawanie (reguła równoległoboku):** Jeśli wektory \\(\vec{a}\\) i \\(\vec{b}\\) zaczepimy w tym samym punkcie, ich suma \\(\vec{a} + \vec{b}\\) będzie wektorem tworzącym przekątną równoległoboku rozpiętego na tych wektorach.
- **Odejmowanie:** Wektor \\(\vec{a} - \vec{b}\\) to wektor \\(\vec{a} + (-\vec{b})\\). Geometrycznie jest to druga przekątna równoległoboku.

### 4.2. Mnożenie przez Skalar

Mnożenie wektora przez liczbę (skalar) \\(c\\) polega na pomnożeniu każdej jego współrzędnej przez tę liczbę.

\\[
c \cdot \vec{v} = [c \cdot v_x, c \cdot v_y]
\\]

**Interpretacja geometryczna:**

- Jeśli \\(|c| > 1\\), wektor jest "wydłużany".
- Jeśli \\(0 < |c| < 1\\), wektor jest "skracany".
- Jeśli \\(c < 0\\), wektor zmienia zwrot na przeciwny.

### 4.3. Iloczyn Skalarny (Dot Product)

Iloczyn skalarny dwóch wektorów to operacja, której wynikiem jest **skalar (liczba)**.

!!! success "Wzór algebraiczny"

$$
    \vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z
$$

!!! success "Wzór geometryczny"

$$
    \vec{a} \cdot \vec{b} = \|\vec{a}\| \|\vec{b}\| \cos(\theta)
$$

gdzie $\theta$ to kąt między wektorami $\vec{a}$ i $\vec{b}$.

**Główne zastosowania iloczynu skalarnego:**

1.  **Obliczanie kąta między wektorami.**
2.  **Sprawdzanie prostopadłości (ortogonalności).**
3.  **Obliczanie rzutu (projekcji) wektora na inny wektor.**

#### 4.3.1. Rzut wektora (Projekcja)

Rzut wektora $\vec{a}$ na wektor $\vec{b}$ to "cień", jaki $\vec{a}$ rzuca na linię, na której leży $\vec{b}$. Wynikiem jest wektor równoległy do $\vec{b}$.

!!! success "Wzór na rzut wektora"
Rzut wektorowy $\vec{a}$ na $\vec{b}$, oznaczany jako $\text{proj}_{\vec{b}}\vec{a}$, obliczamy ze wzoru:

$$
    \text{proj}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{\|\vec{b}\|^2} \vec{b}
$$

!!! example "Przykład: Rzut wektora"
Obliczmy rzut wektora $\vec{a} = [2, 3]$ na wektor $\vec{b} = [4, 0]$.

1. **Obliczamy iloczyn skalarny** $\vec{a} \cdot \vec{b}$:

\\[
\vec{a} \cdot \vec{b} = (2 \cdot 4) + (3 \cdot 0) = 8
\\]

2.  **Obliczamy kwadrat długości wektora** $\vec{b}$:

\\[
\|\vec{b}\|^2 = 4^2 + 0^2 = 16
\\]

3.  **Wstawiamy wartości do wzoru na rzut:**

\\[
\text{proj}\_{\vec{b}}\vec{a} = \frac{8}{16} \vec{b} = \frac{1}{2} [4, 0] = [2, 0]
\\]

4.  **Interpretacja:** Wynik $[2, 0]$ jest wektorem, który jest "cieniem" wektora $[2, 3]$ na osi X (na której leży wektor $[4, 0]$).

### 4.4. Iloczyn Wektorowy (Cross Product)

!!! warning "Uwaga"
Ta operacja jest zdefiniowana tylko dla wektorów w przestrzeni **3D**.

Wynikiem iloczynu wektorowego dwóch wektorów $\vec{a}$ i $\vec{b}$ jest nowy **wektor** $\vec{c}$, który jest prostopadły do obu wektorów wejściowych.

!!! success "Wzór algebraiczny (metoda wyznacznika)"

$$
\vec{a} \times \vec{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix} = [a_y b_z - a_z b_y, a_z b_x - a_x b_z, a_x b_y - a_y b_x]
$$

gdzie $\mathbf{i}, \mathbf{j}, \mathbf{k}$ to wersory osi układu współrzędnych: $\mathbf{i}=[1,0,0]$, $\mathbf{j}=[0,1,0]$, $\mathbf{k}=[0,0,1]$.

**Interpretacja geometryczna:**

- **Kierunek i zwrot:** Wektor \\(\vec{a} \times \vec{b}\\) jest prostopadły do płaszczyzny wyznaczonej przez wektory \\(\vec{a}\\) i \\(\vec{b}\\). Jego zwrot określa **reguła prawej dłoni**.
- **Długość:** Długość wektora wynikowego jest równa **polu równoległoboku** rozpiętego na wektorach \\(\vec{a}\\) i \\(\vec{b}\\).

\\[
\|\vec{a} \times \vec{b}\| = \|\vec{a}\| \|\vec{b}\| \sin(\theta)
\\]

!!! warning "Warunek równoległości (kolinearności)"
Dwa niezerowe wektory są równoległe wtedy i tylko wtedy, gdy ich iloczyn wektorowy jest wektorem zerowym.

$$
    \vec{a} \parallel \vec{b} \iff \vec{a} \times \vec{b} = \vec{0}
$$

---

## 5. Zadania z Rozwiązaniami

!!! question "Zadanie 1: Działania podstawowe i długość"
Dane są wektory \\(\vec{a} = [2, -5]\\) i \\(\vec{b} = [-3, 4]\\). Oblicz:

a) \\(\vec{a} + \vec{b}\\)

b) \\(3\vec{a} - 2\vec{b}\\)

c) Długość wektora \\(\vec{a}\\), czyli \\(\|\vec{a}\|\\)

d) Wersor wektora \\(\vec{b}\\)

!!! tip "Rozwiązanie krok po kroku"
**a) Suma wektorów:**

\\[
\vec{a} + \vec{b} = [2 + (-3), -5 + 4] = [-1, -1]
\\]

**b) Kombinacja liniowa:**

Najpierw mnożymy wektory przez skalary:

\\[
3\vec{a} = 3 \cdot [2, -5] = [6, -15]
\\]

\\[
2\vec{b} = 2 \cdot [-3, 4] = [-6, 8]
\\]

Następnie odejmujemy wyniki:

\\[
3\vec{a} - 2\vec{b} = [6 - (-6), -15 - 8] = [12, -23]
\\]

**c) Długość wektora \\(\vec{a}\\):**

\\[
\|\vec{a}\| = \sqrt{2^2 + (-5)^2} = \sqrt{4 + 25} = \sqrt{29}
\\]

Długość wynosi \\(\sqrt{29}\\).

**d) Wersor wektora \\(\vec{b}\\):**

1.  Obliczamy długość \\(\|\vec{b}\|\\):

\\[
\|\vec{b}\| = \sqrt{(-3)^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5
\\]

2.  Dzielimy wektor \\(\vec{b}\\) przez jego długość:

\\[
\hat{b} = \frac{\vec{b}}{\|\vec{b}\|} = \frac{[-3, 4]}{5} = \left[-\frac{3}{5}, \frac{4}{5}\right]
\\]

---

!!! question "Zadanie 2: Iloczyn skalarny i kąt między wektorami"
Dla wektorów \\(\vec{u} = [1, \sqrt{3}]\\) i \\(\vec{v} = [-2, 0]\\):

a) Oblicz iloczyn skalarny \\(\vec{u} \cdot \vec{v}\\).

b) Oblicz kąt \\(\theta\\) między tymi wektorami.

!!! tip "Rozwiązanie krok po kroku"
**a) Iloczyn skalarny:**

Korzystamy ze wzoru algebraicznego:

\\[
\vec{u} \cdot \vec{v} = (1 \cdot -2) + (\sqrt{3} \cdot 0) = -2 + 0 = -2
\\]

**b) Kąt między wektorami:**

1.  Potrzebujemy długości obu wektorów:

\\[
\|\vec{u}\| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = \sqrt{4} = 2
\\]

\\[
\|\vec{v}\| = \sqrt{(-2)^2 + 0^2} = \sqrt{4} = 2
\\]

2.  Korzystamy ze wzoru na cosinus kąta:

\\[
\cos(\theta) = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \|\vec{v}\|} = \frac{-2}{2 \cdot 2} = \frac{-2}{4} = -\frac{1}{2}
\\]

3.  Znajdujemy kąt, dla którego cosinus wynosi \\(-1/2\\):

Z tablic wartości trygonometrycznych lub z wykresu funkcji cosinus wiemy, że \\(\cos(120^\circ) = -1/2\\).
Możemy też podać odpowiedź w radianach: \\(\theta = \frac{2\pi}{3}\\).

Odpowiedź: Kąt między wektorami wynosi \\(120^\circ\\) lub \\(\frac{2\pi}{3}\\) rad.

---

!!! question "Zadanie 3: Iloczyn wektorowy i pole równoległoboku"
Dane są wektory w przestrzeni 3D: \\(\vec{p} = [2, 1, -1]\\) i \\(\vec{q} = [1, -1, 3]\\).

a) Oblicz ich iloczyn wektorowy \\(\vec{p} \times \vec{q}\\).

b) Oblicz pole równoległoboku rozpiętego na tych wektorach.

!!! tip "Rozwiązanie krok po kroku"
**a) Iloczyn wektorowy:**

Użyjemy metody wyznacznika:

\\[
\vec{p} \times \vec{q} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 1 & -1 \\ 1 & -1 & 3 \end{vmatrix}
\\]

Rozwijamy wyznacznik:

\\[
= \mathbf{i}(1 \cdot 3 - (-1) \cdot (-1)) - \mathbf{j}(2 \cdot 3 - (-1) \cdot 1) + \mathbf{k}(2 \cdot (-1) - 1 \cdot 1)
\\]

\\[
= \mathbf{i}(3 - 1) - \mathbf{j}(6 + 1) + \mathbf{k}(-2 - 1)
\\]

\\[
= 2\mathbf{i} - 7\mathbf{j} - 3\mathbf{k}
\\]

W postaci współrzędnych, wynik to: \\([2, -7, -3]\\).

**b) Pole równoległoboku:**

Pole jest równe długości wektora uzyskanego z iloczynu wektorowego.

\\[
\text{Pole} = \|\vec{p} \times \vec{q}\| = \|[2, -7, -3]\|
\\]

\\[
= \sqrt{2^2 + (-7)^2 + (-3)^2} = \sqrt{4 + 49 + 9} = \sqrt{62}
\\]

Odpowiedź: Pole równoległoboku wynosi \\(\sqrt{62}\\) jednostek kwadratowych.
