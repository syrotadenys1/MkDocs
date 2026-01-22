# Relacje i Funkcje: Analiza Matematycznych Zależności

Pojęcia relacji i funkcji stanowią fundament wielu dziedzin matematyki wyższej. Umożliwiają one formalny opis zależności i powiązań między elementami zbiorów. Niniejsza notatka przedstawia te koncepcje w sposób usystematyzowany, wprowadzając kluczowe definicje i własności.

---

## 1. Relacja: Formalna Definicja

Aby precyzyjnie zdefiniować relację, musimy najpierw wprowadzić pojęcie **iloczynu kartezjańskiego**.

!!! definition "Iloczyn Kartezjański (Produkt Kartezjański)"
Dla danych dwóch zbiorów $X$ i $Y$, ich iloczyn kartezjański, oznaczany jako $X \times Y$, to zbiór wszystkich możliwych uporządkowanych par $(x, y)$, takich że $x \in X$ oraz $y \in Y$.

$$
X \times Y = \{ (x, y) : x \in X \land y \in Y \}
$$

**Przykład:** Jeśli $X = \{1, 2\}$ i $Y = \{a, b\}$, to $X \times Y = \{(1, a), (1, b), (2, a), (2, b)\}$.

Mając tę definicję, możemy formalnie określić, czym jest relacja.

!!! success "Definicja Relacji"
**Relacją** $R$ ze zbioru $X$ do zbioru $Y$ nazywamy dowolny podzbiór iloczynu kartezjańskiego $X \times Y$.
$$ R \subseteq X \times Y $$
Jeśli para $(x, y)$ należy do relacji $R$, mówimy, że element $x$ jest w relacji z elementem $y$, co zapisujemy jako $xRy$.

---

## 2. Własności Relacji

Relacje zdefiniowane na jednym zbiorze (tzn. $R \subseteq X \times X$) mogą posiadać pewne charakterystyczne własności.

!!! abstract "Własność: Zwrotność (Reflexivity)"
Relacja jest zwrotna, jeśli każdy element jest w relacji sam ze sobą.
$$ \forall\_{x \in X}: xRx $$
    *Przykład:* Relacja "mniejszy lub równy" ($\le$) na zbiorze liczb rzeczywistych, ponieważ dla każdej liczby $x$, zachodzi $x \le x$.

!!! abstract "Własność: Symetria (Symmetry)"
Relacja jest symetryczna, jeśli dla dowolnych dwóch elementów, bycie w relacji działa w obie strony.
$$ \forall\_{x, y \in X}: (xRy \implies yRx) $$
_Przykład:_ Relacja "bycia rodzeństwem" w zbiorze ludzi. Jeśli Ania jest siostrą Bartka, to Bartek jest bratem Ani.

!!! abstract "Własność: Przechodniość (Transitivity)"
Relacja jest przechodnia, jeśli można ją "przenosić" przez wspólny element.
$$ \forall\_{x, y, z \in X}: (xRy \land yRz \implies xRz) $$
    *Przykład:* Relacja "bycia wyższym" ($>$) na zbiorze ludzi. Jeśli Jan jest wyższy od Piotra, a Piotr jest wyższy od Adama, to Jan jest wyższy od Adama.

!!! important "Relacja Równoważności"
Relacja, która jest jednocześnie **zwrotna, symetryczna i przechodnia**, nazywana jest **relacją równoważności**. Dzieli ona zbiór na rozłączne podzbiory, nazywane klasami abstrakcji.
_Klasyczny przykład:_ Relacja przystawania modulo $n$ (np. $x \equiv y \pmod{3}$ oznacza, że $x$ i $y$ dają tę samą resztę z dzielenia przez 3).

---

## 3. Funkcja: Szczególny Typ Relacji

Funkcja to jeden z najważniejszych obiektów w matematyce. Jest to specjalny rodzaj relacji, który spełnia bardzo rygorystyczne warunki. Dzięki tym warunkom funkcje są przewidywalne i pozwalają na modelowanie szerokiego zakresu zjawisk.

!!! success "Definicja Formalna Funkcji"
**Funkcją** $f$ ze zbioru $X$ w zbiór $Y$, co oznaczamy zapisem $f: X \to Y$, nazywamy taką relację, w której **każdemu elementowi ze zbioru $X$** przyporządkowany jest **dokładnie jeden element ze zbioru $Y$**.

Warunek ten można zapisać formalnie:
$$
\forall_{x \in X}\ \exists!_{y \in Y}: (x,y) \in f
$$
Symbol $\exists!$ oznacza "istnieje dokładnie jeden". W kontekście funkcji, zamiast pisać $(x,y) \in f$, używamy wygodniejszej notacji $y = f(x)$.

---

## 4. Anatomia Funkcji: Kluczowe Pojęcia

Aby w pełni zrozumieć i analizować funkcje, musimy zdefiniować zbiory, na których operują, oraz ich kluczowe właściwości.

### 4.1. Dziedzina, Przeciwdziedzina i Zbiór Wartości

Każda funkcja jest zdefiniowana przez trzy fundamentalne zbiory:

- **Dziedzina (ang. _domain_)**: Oznaczana jako $D_f$, to zbiór $X$ wszystkich dopuszczalnych argumentów ("wejść") dla funkcji. To z tego zbioru bierzemy $x$.
- **Przeciwdziedzina (ang. _codomain_)**: To zbiór $Y$, który określa typ wartości, jakie funkcja _może_ zwracać. Jest to zadeklarowany zbiór "potencjalnych wyników".
- **Zbiór wartości (ang. _range_ lub _image_)**: To podzbiór przeciwdziedziny ($f(X) \subseteq Y$) składający się ze wszystkich wartości, które funkcja _faktycznie_ przyjmuje. Jest to zbiór wszystkich $y=f(x)$ dla każdego $x$ z dziedziny.

!!! example "Różnica między Przeciwdziedziną a Zbiorem Wartości"
Wyobraźmy sobie maszynę do napojów.
_ **Dziedzina** to przyciski, które możemy nacisnąć (np. {Cola, Sprite, Woda}).
_ **Przeciwdziedzina** to wszystkie możliwe napoje, które _teoretycznie_ mogą być w maszynie (np. {Cola, Sprite, Woda, Sok Jabłkowy, Sok Pomarańczowy}). To jest "deklaracja" możliwości maszyny.
* **Zbiór wartości** to napoje, które *faktycznie\* znajdują się w maszynie i możemy je otrzymać (np. {Cola, Woda}). Może się okazać, że Sprite się skończył, a soków nigdy nie było.

**Przykład matematyczny:**
Rozważmy funkcję $f: \mathbb{R} \to \mathbb{R}$ (z liczb rzeczywistych w liczby rzeczywiste) zdefiniowaną wzorem $f(x) = x^2$.
*   **Dziedzina:** $\mathbb{R}$ (możemy podnieść do kwadratu dowolną liczbę rzeczywistą).
*   **Przeciwdziedzina:** $\mathbb{R}$ (zadeklarowaliśmy, że wyniki będą liczbami rzeczywistymi).
*   **Zbiór wartości:** $[0, \infty)$, czyli zbiór liczb rzeczywistych nieujemnych. Kwadrat dowolnej liczby rzeczywistej jest zawsze nieujemny.

Widać tu wyraźnie, że zbiór wartości ($[0, \infty)$) jest właściwym podzbiorem przeciwdziedziny ($\mathbb{R}$). Liczba $-5$ należy do przeciwdziedziny, ale nie do zbioru wartości, bo nie istnieje liczba rzeczywista $x$ taka, że $x^2 = -5$.

### 4.2. Wizualna Reprezentacja: Wykres Funkcji

Dla funkcji, których dziedzina i przeciwdziedzina to podzbiory liczb rzeczywistych (np. $f: \mathbb{R} \to \mathbb{R}$), możemy stworzyć jej graficzną reprezentację w układzie współrzędnych.

!!! note "Wykres w Kartezjańskim Układzie Współrzędnych"
**Wykres funkcji** to zbiór wszystkich punktów o współrzędnych $(x, y)$, dla których spełniona jest zależność $y = f(x)$.
$$ W_f = \{ (x, f(x)) : x \in D_f \} $$
Oś pozioma (oś OX) reprezentuje dziedzinę funkcji, a oś pionowa (oś OY) jej wartości. Wykres pozwala na intuicyjne zrozumienie zachowania funkcji: jej wzrostu, spadku, punktów charakterystycznych itp.

**Test Linii Pionowej:** Krzywa na płaszczyźnie jest wykresem funkcji wtedy i tylko wtedy, gdy każda prosta pionowa przecina ją w co najwyżej jednym punkcie. Ten test jest bezpośrednią konsekwencją definicji funkcji, która wymaga, aby jednemu argumentowi $x$ odpowiadała dokładnie jedna wartość $y$.

### 4.3. Miejsce Zerowe Funkcji

Jednym z najważniejszych zadań w analizie funkcji jest znalezienie jej miejsc zerowych.

!!! definition "Miejsce Zerowe (Pierwiastek Funkcji)"
**Miejscem zerowym** funkcji $f$ nazywamy taki argument $x_0$ należący do jej dziedziny, dla którego wartość funkcji wynosi zero.
$$ f(x_0) = 0 $$
    Geometrycznie, miejsca zerowe to pierwsze współrzędne (odcięte) punktów, w których wykres funkcji przecina oś OX. Funkcja może nie mieć miejsc zerowych (np. $f(x) = x^2 + 1$), mieć jedno, kilka, a nawet nieskończenie wiele (np. $f(x) = \sin(x)$).

### 4.4. Monotoniczność Funkcji

Monotoniczność to fundamentalna własność opisująca, jak wartości funkcji zmieniają się wraz ze wzrostem argumentów. Analizujemy ją na określonych przedziałach zawartych w dziedzinie.

!!! abstract "Definicje Monotoniczności"
Niech $f$ będzie funkcją, a $P$ pewnym przedziałem zawartym w jej dziedzinie. Dla dowolnych argumentów $x_1, x_2 \in P$ takich, że $x_1 < x_2$:

*   Funkcja jest **rosnąca** na przedziale $P$, jeśli $f(x_1) < f(x_2)$.
*(Wraz ze wzrostem argumentów rosną wartości funkcji).*
*   Funkcja jest **malejąca** na przedziale $P$, jeśli $f(x_1) > f(x_2)$.
*(Wraz ze wzrostem argumentów wartości funkcji maleją).*
*   Funkcja jest **stała** na przedziale $P$, jeśli $f(x_1) = f(x_2)$.
*(Wartości funkcji pozostają niezmienne).*
*   Funkcja jest **niemalejąca** na przedziale $P$, jeśli $f(x_1) \le f(x_2)$.
*(Dopuszcza wzrost lub utrzymanie stałej wartości).*
*   Funkcja jest **nierosnąca** na przedziale $P$, jeśli $f(x_1) \ge f(x_2)$.
*(Dopuszcza spadek lub utrzymanie stałej wartości).*

Funkcje, które są tylko rosnące lub tylko malejące na danym przedziale, nazywamy **ściśle monotonicznymi**.

---

## 5. Rodzaje Funkcji ze względu na Mapowanie

Sposób, w jaki funkcja mapuje elementy dziedziny na elementy przeciwdziedziny, pozwala wyróżnić jej trzy ważne typy.

!!! question "Typ Funkcji: Iniekcja (funkcja różnowartościowa)"
Funkcja jest iniekcją, jeśli nie ma dwóch różnych argumentów, które przyjmowałyby tę samą wartość. Każdy element ze zbioru wartości jest przypisany do co najwyżej jednego argumentu.
$$
\forall\_{x_1, x_2 \in X}: (x_1 \neq x_2 \implies f(x_1) \neq f(x_2))
$$
**Test Linii Poziomej:** Funkcja jest różnowartościowa, jeśli każda prosta pozioma przecina jej wykres w co najwyżej jednym punkcie.

!!! question "Typ Funkcji: Suriekcja (funkcja 'na')"
Funkcja jest suriekcją, jeśli jej zbiór wartości jest równy całej przeciwdziedzinie ($f(X) = Y$). Oznacza to, że każdy element z przeciwdziedziny jest wartością funkcji dla co najmniej jednego argumentu.
$$
\forall*{y \in Y} \exists*{x \in X}: f(x) = y
$$

!!! question "Typ Funkcji: Bijekcja (funkcja wzajemnie jednoznaczna)"
Funkcja jest bijekcją, jeśli jest jednocześnie **iniekcją i suriekcją**. Tworzy idealne "parowanie" jeden do jednego między elementami zbiorów $X$ i $Y$. Bijekcje są kluczowe, ponieważ tylko dla nich istnieją funkcje odwrotne.

---

## 6. Składanie Funkcji

Funkcje można łączyć w procesie zwanym składaniem, tworząc w ten sposób nowe, bardziej złożone funkcje.

!!! definition "Złożenie Funkcji (Superpozycja)"
Jeśli mamy dwie funkcje, $f: X \to Y$ oraz $g: Z \to W$, i zbiór wartości funkcji $f$ jest zawarty w dziedzinie funkcji $g$ ($f(X) \subseteq Z$), to możemy zdefiniować ich **złożenie** $g \circ f$ (czyt. "_g_ złożone z _f_"). Jest to funkcja z $X$ do $W$.
$$ (g \circ f)(x) = g(f(x)) $$
    Działanie złożenia polega na tym, że wynik funkcji wewnętrznej ($f$) staje się argumentem dla funkcji zewnętrznej ($g$).

!!! example "Przykład Złożenia Funkcji"
Niech $f: \mathbb{R} \to \mathbb{R}$, $f(x) = 2x+1$ oraz $g: \mathbb{R} \to \mathbb{R}$, $g(x) = x^2 - 3$.

*   **Złożenie $g \circ f$:**
        $(g \circ f)(x) = g(f(x)) = g(2x+1) = (2x+1)^2 - 3 = (4x^2 + 4x + 1) - 3 = 4x^2 + 4x - 2$.
*   **Złożenie $f \circ g$:**
        $(f \circ g)(x) = f(g(x)) = f(x^2 - 3) = 2(x^2 - 3) + 1 = 2x^2 - 6 + 1 = 2x^2 - 5$.

Jak widać na przykładzie, składanie funkcji na ogół **nie jest przemienne**: $g \circ f \neq f \circ g$.

---

## 7. Ciągi jako Specjalny Rodzaj Funkcji 🚂

Pomyśl o ciągu jak o **ponumerowanej liście** lub **kolejce** elementów. W matematyce ciąg to nic innego jak funkcja, ale... bardzo wybredna co do swoich argumentów!

!!! tip "Dlaczego ciąg to funkcja?"
    Ciąg liczbowy to funkcja, która przyporządkowuje wartości **tylko dla liczb naturalnych dodatnich**.
    
    Wyobraź sobie numerki w szatni. Nie ma numerka "2 i pół" ani numerka "-5". Są tylko 1, 2, 3, 4 itd.
    
    *   **Dziedzina ($D$)**: To zawsze zbiór liczb naturalnych dodatnich $\mathbb{N}_+ = \{1, 2, 3, 4, \dots\}$. Argumenty oznaczamy literą $n$ (zamiast $x$), co kojarzy się z "numerem".
    *   **Zbiór wartości**: To liczby, które stoją "pod numerkami". Mogą to być dowolne liczby rzeczywiste $\mathbb{R}$ (ujemne, ułamki, pierwiastki).

### Wzór Ogólny Ciągu ($a_n$)

Wzór ogólny $a_n$ to **instrukcja (przepis)**, która mówi nam, jaka liczba stoi na $n$-tym miejscu. To odpowiednik wzoru funkcji $f(x)$.

!!! example "Obliczanie wyrazów ciągu"
    Weźmy ciąg zdefiniowany wzorem:
    
    $$ a_n = 2n + 1 $$
    
    Ten wzór mówi: *"Aby znaleźć liczbę na miejscu n, pomnóż numer miejsca przez 2 i dodaj 1"*.
    
    Sprawdźmy, jakie liczby stoją na pierwszych trzech miejscach (podstawiamy $1, 2, 3$ za $n$):
    
    1.  **Dla $n=1$ (pierwszy wyraz):**
        $$ a_1 = 2 \cdot 1 + 1 = 3 $$
        *(Na pierwszym miejscu stoi liczba 3)*
    
    2.  **Dla $n=2$ (drugi wyraz):**
        $$ a_2 = 2 \cdot 2 + 1 = 5 $$
        *(Na drugim miejscu stoi liczba 5)*
    
    3.  **Dla $n=3$ (trzeci wyraz):**
        $$ a_3 = 2 \cdot 3 + 1 = 7 $$
        *(Na trzecim miejscu stoi liczba 7)*
    
    Otrzymaliśmy więc ciąg liczb nieparzystych: $3, 5, 7, \dots$.
