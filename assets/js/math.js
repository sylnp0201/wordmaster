(function() {

    const card = document.getElementById('flashcard');
    const frontFace = document.getElementById('front-face');
    const backFace = document.getElementById('back-face');
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');
    let questions;
    let currentIndex;
    let totalCount;
    
    const FLIP_ANIMATION_DURATION = 600;


    function init() {
        if(document.getElementById('grades-all').checked) {
            questions = [...mathData.grade1, ...mathData.grade2, ...mathData.grade3];
        } else if(document.getElementById('grades-latest').checked) {
            questions = [...mathData.grade3];
        }

        totalCount = questions.length;
        shuffleArray(questions);

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
        const currentQuestion = questions[index];
        const questionHtml = `<div class="display-5">${currentQuestion.question}</div>`;
        const answerHtml = `
            <div>
                <div class="display-5">${currentQuestion.answer}</div>
                <div class="mt-2 text-muted">${currentQuestion.topic}</div>
            </div>`;

        frontFace.innerHTML = questionHtml;
        backFace.innerHTML = answerHtml;
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
            shuffleArray(questions);
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

    document.querySelectorAll('.gradeset input[type="radio"]').forEach(radioButton => {
        radioButton.addEventListener('change', function() {
            init();
        });
    });

    init();
})();