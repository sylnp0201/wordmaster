(function() {

    const card = document.getElementById('flashcard');
    const frontFace = document.getElementById('front-face');
    const backFace = document.getElementById('back-face');
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');
    let word_on_front;
    let words;
    let currentIndex;
    let totalCount;
    
    const FLIP_ANIMATION_DURATION = 600;


    function init() {
        if(document.getElementById('words-all').checked) {
            words = [...vocabularyData.fall_2024, ...vocabularyData.winter_2024, ...vocabularyData.spring_2025];
        } else if(document.getElementById('words-latest').checked) {
            words = [...vocabularyData.spring_2025];
        }

        totalCount = words.length;
        shuffleArray(words);

        word_on_front = document.getElementById('wordfront').checked;
        currentIndex = 0;
        renderCard(currentIndex);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function updateCounter() {
        document.querySelector(".counter").innerHTML = `${currentIndex+1}/${totalCount}`;
    }

    function setCardHTML(index) {
        const currentWord = words[index];
        const wordHtml = `<div class="display-4">${currentWord.word} (${currentWord.part_of_speech})</div>`;
        const defHtml = `
            <div>
                (${currentWord.part_of_speech}) ${currentWord.definition}
            </div>`;

        if (word_on_front) {
            frontFace.innerHTML = wordHtml;
            backFace.innerHTML = defHtml;
        } else {
            frontFace.innerHTML = defHtml;
            backFace.innerHTML = wordHtml;
        }
    }

    function renderCard(index) {
        if (card.classList.contains('flip')) {
            card.classList.remove('flip');
            setTimeout(() => {
                setCardHTML(index);
            }, FLIP_ANIMATION_DURATION);
        } else {
            setCardHTML(index);
        }
        updateCounter();
    }

    function onclickNext() {
        if (currentIndex == totalCount - 1) {
            shuffleArray(words);
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        
        renderCard(currentIndex);
    }

    function onclickBack() {
        if (currentIndex == 0) {
            return;
        }

        currentIndex--;
        renderCard(currentIndex);
    }

    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
    
    nextButton.addEventListener('click', onclickNext);
    backButton.addEventListener('click', onclickBack);

    document.querySelectorAll('.card-front input[type="radio"]').forEach(radioButton => {
        radioButton.addEventListener('change', function() {
            if (this.checked) {
                word_on_front = this.value === "word";
            }
            renderCard(currentIndex);
        });
    });

    document.querySelectorAll('.wordset input[type="radio"]').forEach(radioButton => {
        radioButton.addEventListener('change', function() {
            init();
        });
    });

    init();
})();