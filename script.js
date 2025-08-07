const wordProbabilities = {
    "הילד": [
        { word: "הלך", prob: 0.5 },
        { word: "רץ", prob: 0.21 },
        { word: "אכל", prob: 0.12 },
        { word: "צחק", prob: 0.07 },
        { word: "קרא", prob: 0.05 },
        { word: ".", prob: 0.05 }
    ],
    "הילדה": [
        { word: "שרה", prob: 0.34 },
        { word: "שיחקה", prob: 0.34 },
        { word: "ישבה", prob: 0.13 },
        { word: "קראה", prob: 0.09 },
        { word: "רצה", prob: 0.05 },
        { word: ".", prob: 0.05 }
    ],
    "הכלב": [
        { word: "נבח", prob: 0.5 },
        { word: "רץ", prob: 0.2 },
        { word: "ישן", prob: 0.15 },
        { word: "אכל", prob: 0.1 },
        { word: ".", prob: 0.05 }
    ],
    "החתול": [
        { word: "ישן", prob: 0.5 },
        { word: "שיחק", prob: 0.2 },
        { word: "אכל", prob: 0.15 },
        { word: "קפץ", prob: 0.1 },
        { word: ".", prob: 0.05 }
    ],
    "הלך": [
        { word: "אל", prob: 0.44 },
        { word: "לחבר", prob: 0.2 },
        { word: "הביתה", prob: 0.16 },
        { word: "הספריה", prob: 0.13 },
        { word: ".", prob: 0.07 }
    ],
    "רצה": [
        { word: "בגן", prob: 0.5 },
        { word: "אחרי", prob: 0.25 },
        { word: "הביתה", prob: 0.17 },
        { word: ".", prob: 0.08 }
    ],
    "רץ": [
        { word: "בגן", prob: 0.45 },
        { word: "הביתה", prob: 0.23 },
        { word: "לאמא", prob: 0.15 },
        { word: "אחרי", prob: 0.12 },
        { word: ".", prob: 0.05 }
    ],
    "אכל": [
        { word: "עוגה", prob: 0.4 },
        { word: "תפוח", prob: 0.2 },
        { word: "גלידה", prob: 0.13 },
        { word: "לחם", prob: 0.13 },
        { word: "שוקולד", prob: 0.09 },
        { word: ".", prob: 0.05 }
    ],
    "צחק": [
        { word: "בקול", prob: 0.6 },
        { word: "עם חברים", prob: 0.25 },
        { word: ".", prob: 0.15 }
    ],
    "קרא": [
        { word: "ספר", prob: 0.6 },
        { word: "עיתון", prob: 0.3 },
        { word: ".", prob: 0.1 }
    ],
    "קראה": [
        { word: "ספר", prob: 0.7 },
        { word: "שיר", prob: 0.2 },
        { word: ".", prob: 0.1 }
    ],
    "שרה": [
        { word: "שיר", prob: 0.8 },
        { word: "בקול", prob: 0.15 },
        { word: ".", prob: 0.05 }
    ],
    "שיחקה": [
        { word: "בגן", prob: 0.6 },
        { word: "עם חברים", prob: 0.25 },
        { word: "בבית", prob: 0.1 },
        { word: ".", prob: 0.05 }
    ],
    "ישבה": [
        { word: "בכיתה", prob: 0.7 },
        { word: "על הספסל", prob: 0.15 },
        { word: "בבית", prob: 0.1 },
        { word: ".", prob: 0.05 }
    ],
    "נבח": [
        { word: "בקול", prob: 0.7 },
        { word: "על החתול", prob: 0.2 },
        { word: ".", prob: 0.1 }
    ],
    "ישן": [
        { word: "במיטה", prob: 0.6 },
        { word: "על השטיח", prob: 0.25 },
        { word: ".", prob: 0.15 }
    ],
    "שיחק": [
        { word: "עם כדור", prob: 0.6 },
        { word: "בגן", prob: 0.25 },
        { word: ".", prob: 0.15 }
    ],
    "קפץ": [
        { word: "על השולחן", prob: 0.7 },
        { word: "מהחלון", prob: 0.2 },
        { word: ".", prob: 0.1 }
    ],
    "אל": [
        { word: "הבית", prob: 0.6 },
        { word: "החנות", prob: 0.18 },
        { word: "הספריה", prob: 0.15 },
        { word: ".", prob: 0.07 }
    ],
    "לחבר": [
        { word: "הטוב", prob: 0.8 },
        { word: ".", prob: 0.2 }
    ],
    "הביתה": [
        { word: ".", prob: 1.0 }
    ],
    "הספריה": [
        { word: ".", prob: 1.0 }
    ],
    "בגן": [
        { word: ".", prob: 1.0 }
    ],
    "לאמא": [
        { word: ".", prob: 1.0 }
    ],
    "אחרי": [
        { word: "החתול", prob: 0.5 },
        { word: "הכדור", prob: 0.4 },
        { word: ".", prob: 0.1 }
    ],
    "עוגה": [
        { word: ".", prob: 1.0 }
    ],
    "תפוח": [
        { word: ".", prob: 1.0 }
    ],
    "גלידה": [
        { word: ".", prob: 1.0 }
    ],
    "לחם": [
        { word: ".", prob: 1.0 }
    ],
    "שוקולד": [
        { word: ".", prob: 1.0 }
    ],
    "בקול": [
        { word: ".", prob: 1.0 }
    ],
    "עם חברים": [
        { word: ".", prob: 1.0 }
    ],
    "ספר": [
        { word: ".", prob: 1.0 }
    ],
    "עיתון": [
        { word: ".", prob: 1.0 }
    ],
    "שיר": [
        { word: ".", prob: 1.0 }
    ],
    "על הספסל": [
        { word: ".", prob: 1.0 }
    ],
    "בבית": [
        { word: ".", prob: 1.0 }
    ],
    "על החתול": [
        { word: ".", prob: 1.0 }
    ],
    "במיטה": [
        { word: ".", prob: 1.0 }
    ],
    "על השטיח": [
        { word: ".", prob: 1.0 }
    ],
    "עם כדור": [
        { word: ".", prob: 1.0 }
    ],
    "על השולחן": [
        { word: ".", prob: 1.0 }
    ],
    "מהחלון": [
        { word: ".", prob: 1.0 }
    ],
    "הבית": [
        { word: ".", prob: 1.0 }
    ],
    "החנות": [
        { word: ".", prob: 1.0 }
    ],
    "הטוב": [
        { word: ".", prob: 1.0 }
    ],
    "החתול": [
        { word: ".", prob: 1.0 }
    ],
    "הכדור": [
        { word: ".", prob: 1.0 }
    ]
};

function capitalize(word) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// צבע דינאמי לאחוז (0 = אדום, 0.5 = צהוב, 1 = ירוק)
function probToColor(prob) {
    let p = prob;
    if (p > 1) p = p / 100.0;
    let r, g, b = 0;
    if (p < 0.5) {
        // Red -> Yellow
        r = 255;
        g = Math.round(510 * p);
    } else {
        // Yellow -> Green
        r = Math.round(510 * (1 - p));
        g = 255;
    }
    return `rgb(${r},${g},0)`;
}

const startWordInput = document.getElementById('startWord');
const startWordSelect = document.getElementById('startWordSelect');
const sentenceDisplay = document.getElementById('sentenceDisplay');
const optionsSection = document.getElementById('optionsSection');
const endMessage = document.getElementById('endMessage');
const resetBtn = document.getElementById('resetBtn');
const cumulativeProbDiv = document.getElementById('cumulativeProb');

let sentence = [];
let lastWord = "";
let gameStarted = false;
let probabilities = [];           // step-by-step probabilities
let chosenWordsAnalysis = [];     // [{word, prob, cumulative}]

function resetGame() {
    sentence = [];
    lastWord = "";
    gameStarted = false;
    probabilities = [];
    chosenWordsAnalysis = [];
    sentenceDisplay.textContent = "";
    cumulativeProbDiv.textContent = "";
    optionsSection.innerHTML = "";
    endMessage.textContent = "";
    startWordInput.value = "";
    startWordInput.disabled = false;
    startWordSelect.value = "";
    startWordSelect.disabled = false;
}

function startGame(firstWord) {
    firstWord = capitalize(firstWord);
    sentence = [firstWord];
    lastWord = firstWord;
    gameStarted = true;
    probabilities = [1]; // initial probability
    chosenWordsAnalysis = [{word: firstWord, prob: 1, cumulative: 1}];
    updateSentenceDisplay();
    updateCumulativeProb();
    startWordInput.disabled = true;
    startWordSelect.disabled = true;
    showNextOptions();
}

function updateSentenceDisplay() {
    sentenceDisplay.textContent = sentence.join(' ');
}

function updateCumulativeProb() {
    let cumulative = probabilities.reduce((acc, p) => acc * p, 1);
    cumulativeProbDiv.innerHTML = `הסתברות מצטברת למשפט: <span class="prob-colored" style="color:${probToColor(cumulative)};">${(cumulative * 100).toFixed(2)}%</span>`;
}

function showWordsAnalysisTable() {
    let analysisTable = document.createElement('table');
    analysisTable.className = "word-table";
    let thead = document.createElement('thead');
    let trHead = document.createElement('tr');
    let thWord = document.createElement('th');
    thWord.textContent = "מילה";
    let thProb = document.createElement('th');
    thProb.textContent = "הסתברות";
    let thCumulative = document.createElement('th');
    thCumulative.textContent = "הסתברות מצטברת לאחר מילה זו";
    trHead.appendChild(thWord);
    trHead.appendChild(thProb);
    trHead.appendChild(thCumulative);
    thead.appendChild(trHead);
    analysisTable.appendChild(thead);

    let tbody = document.createElement('tbody');
    chosenWordsAnalysis.forEach((item, idx) => {
        let tr = document.createElement('tr');
        let tdWord = document.createElement('td');
        tdWord.textContent = item.word;
        let tdProb = document.createElement('td');
        tdProb.innerHTML = `<span class="prob-colored" style="color:${probToColor(item.prob)};">${(item.prob * 100).toFixed(2)}%</span>`;
        let tdCumulative = document.createElement('td');
        tdCumulative.innerHTML = `<span class="prob-colored" style="color:${probToColor(item.cumulative)};">${(item.cumulative * 100).toFixed(2)}%</span>`;
        tr.appendChild(tdWord);
        tr.appendChild(tdProb);
        tr.appendChild(tdCumulative);
        tbody.appendChild(tr);
    });
    analysisTable.appendChild(tbody);
    return analysisTable;
}

function showNextOptions() {
    optionsSection.innerHTML = "";
    endMessage.textContent = "";

    if (sentence.length > 0 && sentence[sentence.length - 1] === ".") {
        // End - show final score and analysis
        let cumulative = probabilities.reduce((acc, p) => acc * p, 1);
        endMessage.innerHTML = `המשפט הסתיים!<br>הניקוד הסופי שלך: <span class="prob-colored" style="color:${probToColor(cumulative)};">${(cumulative * 100).toFixed(2)}%</span>`;
        endMessage.appendChild(document.createElement('br'));
        let analysisTitle = document.createElement('div');
        analysisTitle.style.marginTop = "10px";
        analysisTitle.style.fontWeight = "bold";
        analysisTitle.textContent = "פירוט המילים שבחרת, ההסתברות שלהן וההשפעה על ההסתברות הסופית:";
        endMessage.appendChild(analysisTitle);
        endMessage.appendChild(showWordsAnalysisTable());
        return;
    }

    const options = wordProbabilities[lastWord];

    if (!options) {
        let cumulative = probabilities.reduce((acc, p) => acc * p, 1);
        endMessage.innerHTML = `אין עוד אפשרויות. סוף.<br>הניקוד הסופי שלך: <span class="prob-colored" style="color:${probToColor(cumulative)};">${(cumulative * 100).toFixed(2)}%</span>`;
        endMessage.appendChild(document.createElement('br'));
        let analysisTitle = document.createElement('div');
        analysisTitle.style.marginTop = "10px";
        analysisTitle.style.fontWeight = "bold";
        analysisTitle.textContent = "פירוט המילים שבחרת, ההסתברות שלהן וההשפעה על ההסתברות הסופית:";
        endMessage.appendChild(analysisTitle);
        endMessage.appendChild(showWordsAnalysisTable());
        return;
    }

    let sortedOptions = options.slice().sort((a, b) => b.prob - a.prob);

    let table = document.createElement('table');
    table.className = "word-table";
    let thead = document.createElement('thead');
    let trHead = document.createElement('tr');
    let thWord = document.createElement('th');
    thWord.textContent = "מילה";
    let thProb = document.createElement('th');
    thProb.textContent = "הסתברות";
    let thChoose = document.createElement('th');
    thChoose.textContent = "בחר";
    trHead.appendChild(thWord);
    trHead.appendChild(thProb);
    trHead.appendChild(thChoose);
    thead.appendChild(trHead);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    sortedOptions.forEach(option => {
        let tr = document.createElement('tr');
        let tdWord = document.createElement('td');
        tdWord.textContent = option.word;
        let tdProb = document.createElement('td');
        tdProb.innerHTML = `<span class="prob-colored" style="color:${probToColor(option.prob)};">${(option.prob * 100).toFixed(1)}%</span>`;
        let tdBtn = document.createElement('td');
        let btn = document.createElement('button');
        btn.className = "word-select-btn";
        btn.textContent = "בחר";
        btn.onclick = () => {
            if (option.word === ".") {
                sentence.push(option.word);
                probabilities.push(option.prob);
                let prevCumulative = chosenWordsAnalysis.length > 0 ? chosenWordsAnalysis[chosenWordsAnalysis.length - 1].cumulative : 1;
                chosenWordsAnalysis.push({word: option.word, prob: option.prob, cumulative: prevCumulative * option.prob});
                updateSentenceDisplay();
                updateCumulativeProb();
                showNextOptions();
                return;
            }
            if (sentence.length > 0 && sentence[sentence.length - 1] === ".") return;
            sentence.push(option.word);
            lastWord = option.word;
            probabilities.push(option.prob);
            let prevCumulative = chosenWordsAnalysis.length > 0 ? chosenWordsAnalysis[chosenWordsAnalysis.length - 1].cumulative : 1;
            chosenWordsAnalysis.push({word: option.word, prob: option.prob, cumulative: prevCumulative * option.prob});
            updateSentenceDisplay();
            updateCumulativeProb();
            showNextOptions();
        };
        tdBtn.appendChild(btn);

        tr.appendChild(tdWord);
        tr.appendChild(tdProb);
        tr.appendChild(tdBtn);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    optionsSection.appendChild(table);
}

// אירועים
startWordInput.addEventListener("keypress", function(e) {
    if (gameStarted) return;
    if (e.key === "Enter") {
        let val = startWordInput.value.trim();
        if (val) {
            startGame(val);
        }
    }
});
startWordInput.addEventListener("blur", function() {
    if (gameStarted) return;
    let val = startWordInput.value.trim();
    if (val) {
        startGame(val);
    }
});
startWordInput.addEventListener("input", function(e) {
    if (e.target.value) {
        startWordSelect.value = "";
    }
});

startWordSelect.addEventListener("change", function(e) {
    if (gameStarted) return;
    if (e.target.value) {
        startWordInput.value = "";
        startGame(e.target.value);
    }
});

resetBtn.addEventListener("click", resetGame);

resetGame();