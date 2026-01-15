# Kalkulator Macierzy

<div class="matrix-calculator-container">
    
    <div class="calc-top-bar">
        <div class="calc-select-wrapper">
            <select id="operation-select" class="clean-select">
                <option value="multiply">Mnożenie macierzy</option>
                <option value="add">Dodawanie macierzy</option>
                <option value="det">Wyznacznik macierzy (Det)</option>
            </select>
            <span class="select-arrow"></span>
        </div>

        <div class="calc-select-wrapper" id="method-group">
            <select id="method-select" class="clean-select">
                </select>
            <span class="select-arrow"></span>
        </div>
    </div>

    <div class="matrix-stage">

        <div class="matrix-block">
            <div class="dim-label-wrapper">
                <span id="dim-a" class="dim-clickable">2 × 2</span>
                <div class="dim-popup" id="popup-a">
                    <div class="popup-content">
                        <input type="number" min="1" max="5" value="2" id="rows-a">
                        <span>×</span>
                        <input type="number" min="1" max="5" value="2" id="cols-a">
                        <button class="apply-dim" data-target="a">OK</button>
                    </div>
                </div>
            </div>

            <div class="matrix-grid" id="grid-a">
                </div>
        </div>

        <div class="operator-sign" id="operator-sign">×</div>

        <div class="matrix-block" id="matrix-b-wrapper">
            <div class="dim-label-wrapper">
                <span id="dim-b" class="dim-clickable">2 × 2</span>
                <div class="dim-popup" id="popup-b">
                    <div class="popup-content">
                        <input type="number" min="1" max="5" value="2" id="rows-b">
                        <span>×</span>
                        <input type="number" min="1" max="5" value="2" id="cols-b">
                        <button class="apply-dim" data-target="b">OK</button>
                    </div>
                </div>
            </div>

            <div class="matrix-grid" id="grid-b">
                </div>
        </div>

    </div>

    <div class="result-box">
        <div class="result-header">
            Krok po kroku (<span id="step-method-name">Standard</span>)
        </div>
        <div class="result-content" id="steps-output">
            Wprowadź dane...
        </div>
    </div>

</div>
