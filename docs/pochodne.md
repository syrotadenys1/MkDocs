# Pochodne

## Definicja

Pochodna funkcji w punkcie opisuje tempo zmian wartości funkcji względem zmiennej. Jeśli funkcja $f$ jest zdefiniowana w sąsiedztwie punktu $x$, to jej pochodną w tym punkcie definiuje się jako granicę:

$$
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
$$

Jeżeli granica istnieje, to mówi się, że funkcja jest różniczkowalna w punkcie $x$.

## Przykłady

Dla funkcji $f(x)=x^2$ pochodna wynosi $f'(x)=2x$. Ogólny wzór dla potęgi to:

$$
\frac{d}{dx}x^n = n x^{n-1}
$$

## Podstawowe reguły różniczkowania

### Reguła sumy i różnicy

Pochodna sumy (lub różnicy) funkcji jest sumą (lub różnicą) ich pochodnych.

$$
(f(x) \pm g(x))' = f'(x) \pm g'(x)
$$

### Reguła iloczynu

Pochodna iloczynu dwóch funkcji:

$$
(f(x) \cdot g(x))' = f'(x)g(x) + f(x)g'(x)
$$

### Reguła ilorazu

Pochodna ilorazu dwóch funkcji:

$$
\left(\frac{f(x)}{g(x)}\right)' = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

### Reguła łańcuchowa

Służy do obliczania pochodnej funkcji złożonej.

$$
(f(g(x)))' = f'(g(x)) \cdot g'(x)
$$

## Pochodne podstawowych funkcji

| Funkcja $f(x)$ | Pochodna $f'(x)$     |
| :------------- | :------------------- |
| $c$ (stała)    | $0$                  |
| $x^n$          | $n x^{n-1}$          |
| $e^x$          | $e^x$                |
| $a^x$          | $a^x \ln a$          |
| $\ln x$        | $\frac{1}{x}$        |
| $\log_a x$     | $\frac{1}{x \ln a}$  |
| $\sin x$       | $\cos x$             |
| $\cos x$       | $-\sin x$            |
| $\tan x$       | $\frac{1}{\cos^2 x}$ |

## Zastosowania pochodnych

Pochodne są jednym z najważniejszych narzędzi analizy matematycznej i mają szerokie zastosowanie, na przykład do:

- **Analizy przebiegu zmienności funkcji:** znajdowanie przedziałów monotoniczności (gdzie funkcja rośnie lub maleje).
- **Znajdowania ekstremów lokalnych:** wyznaczanie maksimów i minimów funkcji.
- **Obliczania prędkości i przyspieszenia:** w fizyce, pochodna położenia względem czasu to prędkość, a pochodna prędkości to przyspieszenie.
- **Aproksymacji funkcji:** przybliżanie skomplikowanych funkcji za pomocą prostszych (np. wielomianów Taylora).
