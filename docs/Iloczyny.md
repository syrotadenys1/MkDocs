# Podręcznik Iloczynów Wektorowych: Teoria i Zastosowania

Ten podręcznik szczegółowo omawia iloczyn skalarny, wektorowy i mieszany. Prezentuje ich definicje, fundamentalne właściwości, interpretacje geometryczne oraz kluczowe zastosowania w matematyce, fizyce i grafice komputerowej.

---

## 1. Iloczyn Skalarny (Dot Product)

Iloczyn skalarny, znany również jako iloczyn punktowy, to operacja na dwóch wektorach, której wynikiem jest **skalar** (liczba rzeczywista). Jest to jedno z najważniejszych narzędzi w algebrze liniowej, pozwalające przełożyć informacje geometryczne (długość, kąty) na język algebry.

### Definicje Formalne

Iloczyn skalarny definiuje się na dwa równoważne sposoby:

!!! success "Definicja algebraiczna"
Dla wektorów \\(\vec{a} = [a_x, a_y, a_z]\\) i \\(\vec{b} = [b_x, b_y, b_z]\\) w przestrzeni \\(R^3\\), iloczyn skalarny jest sumą iloczynów ich odpowiednich współrzędnych:
\\[
\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z
\\]
Definicja ta naturalnie rozszerza się na dowolną liczbę wymiarów.

!!! success "Definicja geometryczna"
\\[
\vec{a} \cdot \vec{b} = \|\vec{a}\| \|\vec{b}\| \cos(\theta)
\\]
gdzie \\(\|\vec{a}\|\\) i \\(\|\vec{b}\|\\) to długości (normy) wektorów, a \\(\theta\\) to kąt między nimi (\\(0 \le \theta \le \pi\\)).

### Własności algebraiczne

Iloczyn skalarny spełnia następujące właściwości:

1.  **Przemienność (Commutativity):**
    \\[ \vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a} \\]
2.  **Rozdzielność względem dodawania wektorów (Distributivity):**
    \\[ \vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c} \\]
3.  **Łączność z mnożeniem przez skalar:**
    \\[ (c\vec{a}) \cdot \vec{b} = c(\vec{a} \cdot \vec{b}) = \vec{a} \cdot (c\vec{b}) \\]
4.  **Związek z normą:** Iloczyn skalarny wektora przez samego siebie jest równy kwadratowi jego długości.
    \\[ \vec{a} \cdot \vec{a} = \|\vec{a}\|^2 \\]

### Interpretacja i Zastosowania

!!! info "Rzut Wektora (Projekcja)"
Jednym z kluczowych zastosowań iloczynu skalarnego jest obliczanie **rzutu wektora** na inny wektor. Rzut wektora \\(\vec{a}\\) na \\(\vec{b}\\) to "cień", jaki \\(\vec{a}\\) rzuca na linię, wzdłuż której leży \\(\vec{b}\\).Długość tego rzutu (skalar) wynosi:
\\[\text{comp}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{\|\vec{b}\|}\\]
Wektor rzutu obliczamy, mnożąc długość rzutu przez wersor wektora \\(\vec{b}\\):
\\[
\text{proj}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{\|\vec{b}\|^2} \vec{b}
\\]

Znak iloczynu skalarnego mówi o kącie między wektorami:

- **Wynik > 0:** Kąt jest ostry ( < 90° ). Wektory "wskazują z grubsza w tę samą stronę".
- **Wynik < 0:** Kąt jest rozwarty ( > 90° ). Wektory "wskazują w przeciwne strony".
- **Wynik = 0:** Wektory są prostopadłe (ortogonalne).

!!! example "Rozszerzony Przykład"
Dane są wektory \\(\vec{a} = [1, 2, 3]\\) i \\(\vec{b} = [4, -5, 6]\\). 1. **Iloczyn skalarny:**
\\[
\vec{a} \cdot \vec{b} = (1 \cdot 4) + (2 \cdot -5) + (3 \cdot 6) = 4 - 10 + 18 = 12
\\] 2. **Długości wektorów:**
\\[
\|\vec{a}\| = \sqrt{1^2 + 2^2 + 3^2} = \sqrt{1+4+9} = \sqrt{14}
\\]
\\[
\|\vec{b}\| = \sqrt{4^2 + (-5)^2 + 6^2} = \sqrt{16+25+36} = \sqrt{77}
\\] 3. **Kąt między wektorami:**
\\[
\cos(\theta) = \frac{12}{\sqrt{14} \sqrt{77}} \approx \frac{12}{32.83} \approx 0.365
\\]
\\[
\theta = \arccos(0.365) \approx 68.6^\circ
\\]
Jak przewidzieliśmy, kąt jest ostry.

---

## 2. Iloczyn Wektorowy (Cross Product)

!!! warning "Tylko dla 3D"
Iloczyn wektorowy jest operacją zdefiniowaną **wyłącznie dla wektorów w przestrzeni trójwymiarowej**.

Wynikiem iloczynu wektorowego dwóch wektorów \\(\vec{a}\\) i \\(\vec{b}\\) jest **nowy wektor**, który jest prostopadły do płaszczyzny wyznaczonej przez wektory wejściowe.

### Definicja i Właściwości

!!! success "Wzór algebraiczny (wyznacznik)"
Najłatwiejszym sposobem obliczenia jest rozwinięcie Laplace'a symbolicznego wyznacznika:
\\[
\vec{a} \times \vec{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix} = [a_y b_z - a_z b_y, \ a_z b_x - a_x b_z, \ a_x b_y - a_y b_x]
\\]
gdzie \\(\mathbf{i}, \mathbf{j}, \mathbf{k}\\) to wersory (wektory jednostkowe) osi \\(X, Y, Z\\).

Kluczowe właściwości:

- **Antyprzemienność:** Kolejność ma fundamentalne znaczenie.
  \\[ \vec{a} \times \vec{b} = -(\vec{b} \times \vec{a}) \\]
- **Brak łączności:** Na ogół \\((\vec{a} \times \vec{b}) \times \vec{c} \neq \vec{a} \times (\vec{b} \times \vec{c})\\).
- **Rozdzielność względem dodawania:**
  \\[ \vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c} \\]
- **Tożsamość Jacobiego:**
  \\[ \vec{a} \times (\vec{b} \times \vec{c}) + \vec{b} \times (\vec{c} \times \vec{a}) + \vec{c} \times (\vec{a} \times \vec{b}) = \vec{0} \\]

### Interpretacja Geometryczna

- **Kierunek i zwrot:** Wynikowy wektor \\(\vec{a} \times \vec{b}\\) jest ortogonalny do \\(\vec{a}\\) oraz do \\(\vec{b}\\). Jego zwrot określa **reguła prawej dłoni**: jeśli palce prawej dłoni zginają się od \\(\vec{a}\\) do \\(\vec{b}\\), kciuk wskaże kierunek \\(\vec{a} \times \vec{b}\\).
- **Długość (Magnitude):** Długość wektora wynikowego jest równa **polu równoległoboku** rozpiętego na wektorach \\(\vec{a}\\) i \\(\vec{b}\\).
  \\[
  \|\vec{a} \times \vec{b}\| = \|\vec{a}\| \|\vec{b}\| \sin(\theta)
  \\]
- **Warunek równoległości:** Iloczyn wektorowy dwóch niezerowych wektorów jest wektorem zerowym (\\(\vec{0}\\)) wtedy i tylko wtedy, gdy wektory te są równoległe (kolinearne). Wtedy \\(\sin(\theta) = 0\\).

---

## 3. Iloczyn Mieszany (Scalar Triple Product)

Iloczyn mieszany jest naturalnym rozszerzeniem operacji na wektorach w przestrzeni 3D, łącząc w sobie iloczyn wektorowy i skalarny. Jego wynik jest **skalarem** i niesie ze sobą bogatą informację geometryczną.

### Definicja i Obliczanie

!!! success "Definicja formalna"
Dla trzech wektorów \\(\vec{a}, \vec{b}, \vec{c}\\), iloczyn mieszany jest zdefiniowany jako iloczyn skalarny wektora \\(\vec{c}\\) z wynikiem iloczynu wektorowego \\(\vec{a} \times \vec{b}\\).
\\[
(\vec{a}, \vec{b}, \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}
\\]

!!! tip "Metoda obliczeniowa: Wyznacznik"
Najbardziej praktyczną metodą obliczenia jest użycie wyznacznika macierzy 3x3, której wiersze (lub kolumny) składają się ze współrzędnych wektorów:
\\[
(\vec{a} \times \vec{b}) \cdot \vec{c} = \begin{vmatrix} a_x & a_y & a_z \\ b_x & b_y & b_z \\ c_x & c_y & c_z \end{vmatrix}
\\]
Rozwinięcie tego wyznacznika (np. metodą Sarrusa) daje bezpośrednio wartość iloczynu mieszanego.

### Interpretacja Geometryczna: Objętość i Orientacja

!!! info "Objętość Równoległościanu"
Najważniejszą interpretacją geometryczną iloczynu mieszanego jest objętość. Wartość bezwzględna \\(|(\vec{a} \times \vec{b}) \cdot \vec{c}|\\) jest równa **objętości równoległościanu** rozpiętego na wektorach \\(\vec{a}, \vec{b}, \vec{c}\\).

    **Dlaczego tak jest?**
    1.  Długość wektora \\(\|\vec{a} \times \vec{b}\|\\) to pole powierzchni podstawy równoległościanu (równoległoboku rozpiętego na \\(\vec{a}\\) i \\(\vec{b}\\)).
    2.  Wektor \\(\vec{n} = \vec{a} \times \vec{b}\\) jest prostopadły do tej podstawy.
    3.  Iloczyn skalarny \\(\vec{n} \cdot \vec{c} = \|\vec{n}\| \|\vec{c}\| \cos(\phi)\\) oblicza rzut wektora \\(\vec{c}\\) na wektor normalny \\(\vec{n}\\). Ten rzut, \\(\|\vec{c}\| \cos(\phi)\\), jest dokładnie wysokością \\(h\\) równoległościanu.
    4.  Ostatecznie, mnożymy pole podstawy przez wysokość, otrzymując objętość: \\(V = (\text{Pole podstawy}) \cdot h = \|\vec{a} \times \vec{b}\| \cdot (\|\vec{c}\| \cos(\phi)) = (\vec{a} \times \vec{b}) \cdot \vec{c}\\).

!!! info "Orientacja Układu Wektorów"
Znak iloczynu mieszanego (przed wzięciem wartości bezwzględnej) określa orientację układu wektorów: - **Wynik > 0:** Układ \\((\vec{a}, \vec{b}, \vec{c})\\) jest **prawoskrętny**. Oznacza to, że wektory te zachowują się podobnie do standardowych osi \\((X, Y, Z)\\). - **Wynik < 0:** Układ jest **lewoskrętny**. - **Wynik = 0:** Wektory są **współpłaszczyznowe (koplanarne)**. Nie tworzą one bryły o niezerowej objętości. Jest to najważniejszy test na współpłaszczyznowość.

### Właściwości Algebraiczne

Właściwości iloczynu mieszanego wynikają bezpośrednio z właściwości wyznaczników:

- **Niezmienność cykliczna:** Cykliczna zamiana kolejności wektorów nie zmienia wartości iloczynu.
  \\[ (\vec{a} \times \vec{b}) \cdot \vec{c} = (\vec{b} \times \vec{c}) \cdot \vec{a} = (\vec{c} \times \vec{a}) \cdot \vec{b} \\]
- **Anty-symetria przy zamianie sąsiadów:** Zamiana miejscami dwóch sąsiednich wektorów zmienia znak iloczynu (co odpowiada zamianie dwóch wierszy w wyznaczniku).
  \\[ (\vec{a} \times \vec{b}) \cdot \vec{c} = - (\vec{b} \times \vec{a}) \cdot \vec{c} \\]

!!! example "Przykład: Objętość i Współpłaszczyznowość"
**1. Oblicz objętość równoległościanu** rozpiętego na wektorach \\(\vec{a}=[2,0,0]\\), \\(\vec{b}=[1,3,0]\\) i \\(\vec{c}=[1,2,4]\\).
\\[
V = |(\vec{a}, \vec{b}, \vec{c})| = \left| \begin{vmatrix} 2 & 0 & 0 \\ 1 & 3 & 0 \\ 1 & 2 & 4 \end{vmatrix} \right|
\\]
Rozwijając względem pierwszego wiersza:
\\[
= |2 \cdot \begin{vmatrix} 3 & 0 \\ 2 & 4 \end{vmatrix} - 0 + 0| = |2 \cdot (3 \cdot 4 - 0 \cdot 2)| = |2 \cdot 12| = 24
\\]
Objętość wynosi 24 jednostki sześcienne.

    **2. Sprawdź, czy wektory** \\(\vec{u}=[1,2,3]\\), \\(\vec{v}=[4,5,6]\\), i \\(\vec{w}=[7,8,9]\\) są współpłaszczyznowe.
    *(To jest przykład z poprzedniej wersji, powtórzony dla kompletności)*
    \\[
    (\vec{u}, \vec{v}, \vec{w}) = \begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}
    = 1(45-48) - 2(36-42) + 3(32-35) = -3 + 12 - 9 = 0
    \\]
    Wynik wynosi 0, zatem wektory są współpłaszczyznowe.

---

## 4. Zastosowania w Nauce i Technice

### Fizyka

- **Praca mechaniczna:** Praca \\(W\\) jest iloczynem skalarnym siły \\(\vec{F}\\) i przesunięcia \\(\vec{d}\\) (\\(W = \vec{F} \cdot \vec{d}\\)). Tylko składowa siły równoległa do ruchu wykonuje pracę.
- **Moment siły:** Wektor momentu siły \\(\vec{\tau}\\), powodujący obrót, jest iloczynem wektorowym wektora ramienia \\(\vec{r}\\) i siły \\(\vec{F}\\) (\\(\vec{\tau} = \vec{r} \times \vec{F}\\)).
- **Siła Lorentza:** Siła działająca na ładunek \\(q\\) poruszający się z prędkością \\(\vec{v}\\) w polu magnetycznym \\(\vec{B}\\) jest dana iloczynem wektorowym: \\(\vec{F} = q(\vec{v} \times \vec{B})\\).
- **Strumień magnetyczny:** Strumień \\(\Phi_B\\) przez powierzchnię jest iloczynem skalarnym pola \\(\vec{B}\\) i wektora powierzchni \\(\vec{A}\\) (\\(\Phi_B = \vec{B} \cdot \vec{A}\\)).

### Grafika Komputerowa

- **Oświetlenie 3D:** Iloczyn skalarny między wektorem normalnym powierzchni a wektorem kierunku światła decyduje o jasności powierzchni (model Lamberta). Im bardziej są do siebie równoległe, tym jaśniejsza powierzchnia.
- **Wektor normalny:** Iloczyn wektorowy dwóch wektorów leżących na powierzchni trójkąta (krawędzi) daje wektor normalny do tej powierzchni, kluczowy dla oświetlenia, odbić i detekcji kolizji.
- **Back-face culling:** Iloczyn skalarny wektora normalnego powierzchni i wektora "do kamery" pozwala określić, czy dana ściana jest widoczna dla obserwatora. Jeśli kąt jest rozwarty, ściana jest "odwrócona tyłem" i nie musi być renderowana, co optymalizuje wydajność.
