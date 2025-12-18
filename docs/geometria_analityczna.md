# Geometria Analityczna: Proste i Płaszczyzny (Wersja Kompletna)

Ten podręcznik w sposób wyczerpujący omawia analityczny opis prostych i płaszczyzn w przestrzeni 3D. Skupia się na ich definicjach wektorowych, różnych formach równań, szczegółowych metodach badania wzajemnego położenia, obliczania odległości i kątów, oraz kluczowych zastosowaniach w nauce i technologii.

---

## 1. Analityczny Opis Prostej

Prostą w przestrzeni można sobie wyobrazić jako nieskończenie długą, cienką nić. Do jej matematycznego opisu wystarczy nam jeden punkt, przez który przechodzi ("punkt zaczepienia") oraz wektor, który wyznacza jej kierunek.

!!! info "Intuicja: Ruch wzdłuż wektora"
Równanie parametryczne prostej można interpretować jako opis ruchu. Wyobraź sobie, że w chwili \(t=0\) jesteś w punkcie \(P_0\). Wektor \(\vec{v}\) to Twoja stała prędkość. Równanie \(\vec{P}(t) = \vec{P_0} + t\vec{v}\) mówi, gdzie będziesz w dowolnej chwili \(t\). Dla \(t>0\) poruszasz się "do przodu", a dla \(t<0\) "do tyłu" wzdłuż tego samego kierunku. Zbiór wszystkich możliwych pozycji tworzy prostą.

### Równanie Parametryczne Prostej

Jest to najbardziej fundamentalna i uniwersalna forma opisu prostej w każdej liczbie wymiarów.

!!! success "Wzór na równanie parametryczne"
Jeśli prosta \(L\) przechodzi przez punkt \(P_0 = (x_0, y_0, z_0)\) i ma wektor kierunkowy \(\vec{v} = [a, b, c]\), to dowolny punkt \(P=(x,y,z)\) na tej prostej opisuje układ równań (gdzie \(t \in \mathbb{R}\) to parametr):
\[
L: \begin{cases}
x = x_0 + at \\
y = y_0 + bt \\
z = z_0 + ct
\end{cases}
\]

### Inne Formy Równania Prostej

- **Równanie kierunkowe (kanoniczne):** Powstaje przez wyeliminowanie parametru \(t\). Jest to forma mniej ogólna, ale użyteczna do szybkiego sprawdzania przynależności punktów.
  \[
  t = \frac{x - x_0}{a}, \quad t = \frac{y - y_0}{b}, \quad t = \frac{z - z_0}{c}
  \]
  Przyrównując, otrzymujemy:
  \[
  \frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}
  \]
  !!! warning "Co jeśli współrzędna wektora kierunkowego jest zerowa?"
  Jeśli np. \(a=0\), wektor kierunkowy jest postaci \([0, b, c]\) i prosta jest prostopadła do osi OX (równoległa do płaszczyzny YZ). Dzielenie przez zero jest niemożliwe, więc równanie przybiera formę mieszaną, która pokazuje, że współrzędna x jest stała: \(x = x_0\) oraz \(\frac{y-y_0}{b} = \frac{z-z_0}{c}\).

- **Równanie ogólne (krawędziowe) w 3D:** Prostą w 3D można również przedstawić jako część wspólną (krawędź) dwóch nierównoległych płaszczyzn. Opisuje ją wtedy układ dwóch równań ogólnych płaszczyzn:
  \[
  \begin{cases}
  A_1x + B_1y + C_1z + D_1 = 0 \\
  A_2x + B_2y + C_2z + D_2 = 0
  \end{cases}
  \]
  Wektor kierunkowy takiej prostej jest prostopadły do obu wektorów normalnych tych płaszczyzn, więc można go obliczyć jako \(\vec{v} = \vec{n_1} \times \vec{n_2}\).

---

## 2. Analityczny Opis Płaszczyzny

Płaszczyzna to nieskończony, płaski, dwuwymiarowy obiekt zanurzony w przestrzeni 3D. Do jej opisu wystarczy jeden punkt oraz wektor normalny (prostopadły), który definiuje jej orientację.

!!! info "Intuicja: Warunek prostopadłości"
Wyobraź sobie, że stoisz w punkcie \(P_0\) na ogromnej podłodze (płaszczyźnie). Nieważne, do którego innego punktu \(P\) na tej podłodze poprowadzisz wektor \(\vec{P_0P}\), będzie on zawsze prostopadły do wektora \(\vec{n}\) sterczącego pionowo z podłogi. Iloczyn skalarny dwóch wektorów prostopadłych jest zawsze zerem, stąd warunek \(\vec{n} \cdot \vec{P_0P} = 0\) jest spełniony dla _każdego_ punktu na płaszczyźnie i _tylko_ dla nich.

### Równanie Ogólne (Normalne) Płaszczyzny

!!! success "Wyprowadzenie i Wzór"
Warunek prostopadłości \(\vec{n} \cdot \vec{P_0P} = 0\) dla \(\vec{n}=[A,B,C]\), \(P=(x,y,z)\) i \(P_0=(x_0,y_0,z_0)\) prowadzi do równania:
\[
A(x-x_0) + B(y-y_0) + C(z-z_0) = 0
\]
Po przegrupowaniu otrzymujemy **równanie ogólne**:
\[
\pi: Ax + By + Cz + D = 0
\]
gdzie \(D = -Ax_0 - By_0 - Cz_0\). Współczynniki \(A, B, C\) są współrzędnymi wektora normalnego.

### Równanie Parametryczne Płaszczyzny

Jest to alternatywna forma, bardziej zbliżona do opisu prostej. Zamiast jednego wektora kierunkowego, potrzebujemy dwóch, które "rozpinają" płaszczyznę.

!!! success "Wzór na równanie parametryczne płaszczyzny"
Jeśli płaszczyzna przechodzi przez punkt \(P_0\) i jest rozpięta na dwóch nierównoległych wektorach \(\vec{u}\) i \(\vec{w}\), to dowolny punkt \(P\) opisują dwa parametry \(s, t \in \mathbb{R}\):
\[
\vec{P}(s,t) = \vec{P_0} + s\vec{u} + t\vec{w}
\]
Wektor normalny do takiej płaszczyzny można zawsze znaleźć, obliczając iloczyn wektorowy \(\vec{n} = \vec{u} \times \vec{w}\).

---

## 3. Odległości Między Obiektami

Obliczanie odległości jest jednym z fundamentalnych zadań geometrii analitycznej.

!!! success "Odległość punktu od płaszczyzny"
Odległość punktu \(Q\) od płaszczyzny \(\pi: Ax+By+Cz+D=0\) to długość rzutu prostokątnego wektora \(\vec{P_0Q}\) (gdzie \(P_0\) to dowolny punkt na płaszczyźnie) на wektor normalny \(\vec{n}=[A,B,C]\). Wzór upraszcza się do:
\[
d(Q, \pi) = \frac{|Ax_Q + By_Q + Cz_Q + D|}{\sqrt{A^2 + B^2 + C^2}}
\]

!!! success "Odległość punktu od prostej (w 3D)"
Odległość punktu \(Q\) od prostej \(L\) przechodzącej przez \(P_0\) z wektorem kierunkowym \(\vec{v}\) to wysokość równoległoboku rozpiętego na wektorach \(\vec{P_0Q}\) i \(\vec{v}\). Pole tego równoległoboku to \(\|\vec{P_0Q} \times \vec{v}\|\), a długość jego podstawy to \(\|\vec{v}\|\). Zatem:
\[
d(Q, L) = \frac{\|\vec{P_0Q} \times \vec{v}\|}{\|\vec{v}\|}
\]

!!! success "Odległość między dwiema prostymi skośnymi"
Dla dwóch prostych skośnych \(L_1(\vec{v_1}, P_1)\) i \(L_2(\vec{v_2}, P_2)\), ich odległość jest rzutem wektora \(\vec{P_1P_2}\) na wektor \(\vec{n} = \vec{v_1} \times \vec{v_2}\), który jest prostopadły do obu prostych.
\[
d(L_1, L_2) = \frac{|(\vec{P_1P_2}, \vec{v_1}, \vec{v_2})|}{\|\vec{v_1} \times \vec{v_2}\|}
\]

---

## 4. Wzajemne Położenie i Kąty

Badanie relacji między obiektami analitycznymi sprowadza się do badania relacji między ich wektorami.

- **Dwie płaszczyzny:** \(\pi_1, \pi_2\) o wektorach normalnych \(\vec{n_1}, \vec{n_2}\).

  - **Kąt:** Kąt między płaszczyznami to kąt ostry między ich wektorami normalnymi: \(\cos\alpha = \frac{|\vec{n_1} \cdot \vec{n_2}|}{\|\vec{n_1}\| \|\vec{n_2}\|}\).
  - **Równoległość:** \(\vec{n_1} = k \cdot \vec{n_2}\).
  - **Prostopadłość:** \(\vec{n_1} \cdot \vec{n_2} = 0\).
  - **Przecinanie się:** Wektor kierunkowy krawędzi przecięcia: \(\vec{v} = \vec{n_1} \times \vec{n_2}\).

- **Prosta i płaszczyzna:** Prosta \(L(\vec{v}, P_0)\) i płaszczyzna \(\pi(\vec{n}, Q_0)\).
  - **Kąt:** Kąt \(\alpha\) między prostą a płaszczyzną to dopełnienie do 90° kąta \(\beta\) między wektorem kierunkowym \(\vec{v}\) a wektorem normalnym \(\vec{n}\). Stąd: \(\sin\alpha = \cos\beta = \frac{|\vec{v} \cdot \vec{n}|}{\|\vec{v}\| \|\vec{n}\|}\).
  - **Równoległość:** \(\vec{v} \cdot \vec{n} = 0\).
  - **Prostopadłość:** \(\vec{v} = k \cdot \vec{n}\).

!!! example "Przykład: Krawędź przecięcia dwóch płaszczyzn"
Znajdź równanie parametryczne prostej będącej przecięciem płaszczyzn \(\pi_1: x+y+z=1\) i \(\pi_2: x-2y+3z=1\). 1. **Znajdź wektor kierunkowy prostej.** \(\vec{n_1}=[1,1,1]\), \(\vec{n_2}=[1,-2,3]\).
\[
\vec{v} = \vec{n_1} \times \vec{n_2} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 1 & 1 \\ 1 & -2 & 3 \end{vmatrix} = [5, -2, -3]
\] 2. **Znajdź dowolny punkt na prostej.** Musi on spełniać oba równania. Możemy arbitralnie założyć np. \(z=0\), co upraszcza układ:
\[
\begin{cases} x+y=1 \\ x-2y=1 \end{cases}
\]
Odejmując stronami, otrzymujemy \(3y=0 \implies y=0\), a stąd \(x=1\). Punkt \(P_0=(1,0,0)\) należy do obu płaszczyzn, a więc i do prostej. 3. **Zapisz równanie prostej:**
\[
L: \begin{cases} x = 1 + 5t \\ y = -2t \\ z = -3t \end{cases}
\]

- **Dwie proste w 3D:** \(L_1(\vec{v_1}, P_1)\), \(L_2(\vec{v_2}, P_2)\).
  - **Równoległe:** \(\vec{v_1} = k \cdot \vec{v_2}\).
  - **Przecinające się:** Nie są równoległe, a iloczyn mieszany \((\vec{P_1P_2}, \vec{v_1}, \vec{v_2}) = 0\).
  - **Skośne:** Nie są równoległe, a \((\vec{P_1P_2}, \vec{v_1}, \vec{v_2}) \neq 0\).

---

## 5. Zastosowania - Głębsze Spojrzenie

- **Grafika Komputerowa - Ray Tracing:** Każdy piksel na ekranie to "okno", przez które wirtualna kamera "patrzy" na scenę. Dla każdego piksela wysyłany jest promień (matematycznie: prosta parametryczna \(P(t) = O + tD\), gdzie \(O\) to pozycja kamery, a \(D\) to kierunek). Algorytm sprawdza, które obiekty (trójkąty, sfery) na scenie ten promień przecina jako pierwsze. Obliczenie punktu przecięcia prostej z płaszczyzną trójkąta to fundamentalna operacja, powtarzana miliony razy przy renderowaniu jednej klatki.
- **Robotyka i CAD - Przestrzenie Konfiguracyjne:** Położenie i orientacja ramienia robota są opisane w tzw. przestrzeni konfiguracyjnej. Przeszkody w świecie rzeczywistym (np. stół) mapują się na skomplikowane "zakazane" regiony w tej przestrzeni, często ograniczone przez hiperpłaszczyzny (uogólnienie płaszczyzn). Planowanie ruchu to szukanie ścieżki (krzywej), która omija te regiony.
