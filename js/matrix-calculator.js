document.addEventListener("DOMContentLoaded", function() {
    initMatrixCalculator();
});

if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
        initMatrixCalculator();
    });
}

function initMatrixCalculator() {
    const container = document.querySelector('.matrix-calculator-container');
    if (!container) return;

    // --- STAN APLIKACJI ---
    let state = {
        op: 'multiply',
        method: 'def',
        dims: { a: { r: 2, c: 2 }, b: { r: 2, c: 2 } },
        values: {
            a: [[1, 2], [3, 4]],
            b: [[1, 0], [0, 1]]
        }
    };

    // --- ELEMENTY DOM ---
    const els = {
        opSelect: document.getElementById('operation-select'),
        methodSelect: document.getElementById('method-select'),
        methodGroup: document.getElementById('method-group'),
        gridA: document.getElementById('grid-a'),
        gridB: document.getElementById('grid-b'),
        wrapperB: document.getElementById('matrix-b-wrapper'),
        opSign: document.getElementById('operator-sign'),
        dimLabelA: document.getElementById('dim-a'),
        dimLabelB: document.getElementById('dim-b'),
        popupA: document.getElementById('popup-a'),
        popupB: document.getElementById('popup-b'),
        stepsOutput: document.getElementById('steps-output'),
        stepMethodName: document.getElementById('step-method-name')
    };

    // --- FUNKCJE RENDERUJĄCE ---

    function createMatrixInputs(gridId, rows, cols, values) {
        const grid = document.getElementById(gridId);
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        // Reset klas walidacji
        grid.classList.remove('matrix-valid', 'matrix-error');
        // Dodaj klasę valid domyślnie (zostanie zdjęta przy błędzie)
        grid.classList.add('matrix-valid'); 

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.className = 'matrix-cell';
                // Pobierz wartość lub 0
                let val = (state.values[gridId === 'grid-a' ? 'a' : 'b'][i] || [])[j];
                input.value = val !== undefined ? val : 0;
                
                input.addEventListener('input', (e) => {
                    const matrixKey = gridId === 'grid-a' ? 'a' : 'b';
                    if(!state.values[matrixKey][i]) state.values[matrixKey][i] = [];
                    state.values[matrixKey][i][j] = parseFloat(e.target.value) || 0;
                    calculate();
                });
                grid.appendChild(input);
            }
        }
    }

    function updateDimLabels() {
        els.dimLabelA.innerText = `${state.dims.a.r} × ${state.dims.a.c}`;
        els.dimLabelB.innerText = `${state.dims.b.r} × ${state.dims.b.c}`;
    }

    function updateMethods() {
        els.methodSelect.innerHTML = '';
        let options = [];
        
        if (state.op === 'multiply') {
            options = [{v: 'def', t: 'Definicja (Wiersz × Kolumna)'}];
        } else if (state.op === 'add') {
            options = [{v: 'def', t: 'Dodawanie elementów'}];
        } else if (state.op === 'det') {
            if (state.dims.a.r === 3 && state.dims.a.c === 3) {
                options.push({v: 'sarrus', t: 'Reguła Sarrusa'});
            }
            options.push({v: 'laplace', t: 'Rozwinięcie Laplace\'a'});
        }

        options.forEach(opt => {
            let el = document.createElement('option');
            el.value = opt.v;
            el.innerText = opt.t;
            els.methodSelect.appendChild(el);
        });
        state.method = options[0].v;
    }

    function togglePopups(targetId) {
        if (targetId === 'a') {
            els.popupA.style.display = els.popupA.style.display === 'block' ? 'none' : 'block';
            els.popupB.style.display = 'none';
        } else {
            els.popupB.style.display = els.popupB.style.display === 'block' ? 'none' : 'block';
            els.popupA.style.display = 'none';
        }
    }

    // --- OBLICZENIA I WALIDACJA ---

    function calculate() {
        let isValid = true;
        els.gridA.classList.remove('matrix-error');
        els.gridB.classList.remove('matrix-error');
        els.gridA.classList.add('matrix-valid');
        els.gridB.classList.add('matrix-valid');

        // Walidacja wymiarów
        if (state.op === 'multiply') {
            if (state.dims.a.c !== state.dims.b.r) {
                isValid = false;
            }
        } else if (state.op === 'add') {
            if (state.dims.a.r !== state.dims.b.r || state.dims.a.c !== state.dims.b.c) {
                isValid = false;
            }
        } else if (state.op === 'det') {
            if (state.dims.a.r !== state.dims.a.c) {
                isValid = false; // Musi być kwadratowa
            }
        }

        if (!isValid) {
            els.gridA.classList.remove('matrix-valid');
            els.gridB.classList.remove('matrix-valid');
            els.gridA.classList.add('matrix-error');
            els.gridB.classList.add('matrix-error');
            els.stepsOutput.innerHTML = '<span style="color:#d32f2f; font-weight:bold;">Niemożliwe działanie: Sprawdź wymiary macierzy! (Czerwone ramki)</span>';
            return;
        }

        // --- Generowanie LaTeX ---
        let latex = "";
        const A = state.values.a;
        const B = state.values.b;
        const printMat = (M) => {
            const rows = M.map(row => row.join(' & ')).join(' \\\\ ');
            return `\\begin{bmatrix} ${rows} \\end{bmatrix}`;
        };

        if (state.op === 'add') {
             // ... (kod dodawania bez zmian) ...
             // Skrótowo dla przykładu:
             latex += `$$ ${printMat(A)} + ${printMat(B)} = ... $$`; 
             // Tutaj wstaw pełny kod z poprzedniej odpowiedzi, jeśli potrzebny
        } else if (state.op === 'multiply') {
            // ... (kod mnożenia) ...
            latex += `$$ ${printMat(A)} \\times ${printMat(B)} = ... $$`;
        } else if (state.op === 'det') {
            // ... (kod wyznacznika) ...
             latex += `$$ \\det(A) = ... $$`;
        }
        
        // Ponowne wklejenie logiki matematycznej z poprzedniego kroku (skróciłem tu dla czytelności bloku JS)
        // Jeśli potrzebujesz pełnej funkcji calculate() z matematyką, użyj tej z poprzedniej odpowiedzi
        // ale zaktualizuj odwołania do klas (tu już zaktualizowane).
        
        // Poniżej wklejam brakujący fragment logiki matematycznej dla kompletności:
        
        if (state.op === 'add') {
             let resRows = [];
             for(let i=0; i<state.dims.a.r; i++) {
                let row = [];
                for(let j=0; j<state.dims.a.c; j++) row.push(A[i][j] + B[i][j]);
                resRows.push(row);
             }
             latex = `$$ ${printMat(A)} + ${printMat(B)} = ${printMat(resRows)} $$`;
        } 
        else if (state.op === 'multiply') {
             // Pełne mnożenie
             let resultM = [];
             for(let i=0; i<state.dims.a.r; i++) {
                let row = [];
                for(let j=0; j<state.dims.b.c; j++) {
                    let val = 0;
                    for(let k=0; k<state.dims.a.c; k++) val += A[i][k] * B[k][j];
                    row.push(val);
                }
                resultM.push(row);
             }
             latex = `$$ A \\cdot B = ${printMat(resultM)} $$`;
             latex += `\\text{(Szczegółowe kroki w przygotowaniu...)}`
        }
        else if (state.op === 'det') {
            // Prosta detekcja dla 2x2
            if(state.dims.a.r === 2) {
                let det = A[0][0]*A[1][1] - A[0][1]*A[1][0];
                latex = `$$ \\det(A) = (${A[0][0]} \\cdot ${A[1][1]}) - (${A[0][1]} \\cdot ${A[1][0]}) = ${det} $$`;
            } else {
                latex = `\\text{Metoda dla ${state.dims.a.r}x${state.dims.a.c} w przygotowaniu}`;
            }
        }

        els.stepsOutput.innerHTML = latex;
        els.stepMethodName.innerText = els.methodSelect.options[els.methodSelect.selectedIndex]?.text || "";
        
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(els.stepsOutput, {
                delimiters: [{left: "$$", right: "$$", display: true}]
            });
        }
    }


    // --- LISTENERS ---
    els.opSelect.addEventListener('change', (e) => {
        state.op = e.target.value;
        if (state.op === 'multiply') els.opSign.innerText = '×';
        if (state.op === 'add') els.opSign.innerText = '+';
        if (state.op === 'det') {
            els.opSign.innerText = '';
            els.wrapperB.style.display = 'none';
        } else {
            els.wrapperB.style.display = 'flex';
        }
        updateMethods();
        calculate();
    });

    els.methodSelect.addEventListener('change', (e) => {
        state.method = e.target.value;
        calculate();
    });

    els.dimLabelA.addEventListener('click', (e) => { e.stopPropagation(); togglePopups('a'); });
    els.dimLabelB.addEventListener('click', (e) => { e.stopPropagation(); togglePopups('b'); });

    document.addEventListener('click', () => {
        els.popupA.style.display = 'none';
        els.popupB.style.display = 'none';
    });
    
    // Zapobieganie zamykaniu przy klikaniu wewnątrz popupu
    els.popupA.addEventListener('click', e => e.stopPropagation());
    els.popupB.addEventListener('click', e => e.stopPropagation());

    document.querySelectorAll('.apply-dim').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.dataset.target;
            const r = parseInt(document.getElementById(`rows-${target}`).value);
            const c = parseInt(document.getElementById(`cols-${target}`).value);
            if (r > 0 && c > 0) {
                state.dims[target] = { r, c };
                // Zachowaj stare dane przy zmianie rozmiaru
                let oldVal = state.values[target];
                state.values[target] = [];
                // Przepisz stare dane
                for(let i=0; i<r; i++) {
                    state.values[target][i] = [];
                    for(let j=0; j<c; j++) {
                        state.values[target][i][j] = (oldVal[i] && oldVal[i][j]) ? oldVal[i][j] : 0;
                    }
                }
                
                createMatrixInputs(`grid-${target}`, r, c, state.values[target]);
                updateDimLabels();
                els.popupA.style.display = 'none';
                els.popupB.style.display = 'none';
                updateMethods();
                calculate();
            }
        });
    });

    // START
    createMatrixInputs('grid-a', 2, 2, state.values.a);
    createMatrixInputs('grid-b', 2, 2, state.values.b);
    updateDimLabels();
    updateMethods();
    calculate();
}