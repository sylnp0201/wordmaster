(function() {
    const grade_2_words = [
        { "word": "feast", "part_of_speech": "n.", "definition": "a large meal, typically one in celebration of something" },
        { "word": "feast", "part_of_speech": "v.", "definition": "eat and drink sumptuously" },
        { "word": "shove", "part_of_speech": "v.", "definition": "to push someone or something in a rough way" },
        { "word": "shove", "part_of_speech": "n.", "definition": "a strong push" },
        { "word": "gleaming", "part_of_speech": "adj.", "definition": "(of a smooth surface) reflecting light, typically because very clean or polished" },
        { "word": "fir", "part_of_speech": "n.", "definition": "an evergreen coniferous tree with upright cones and flat needle-shaped leaves, typically arranged in two rows." },
        { "word": "pause", "part_of_speech": "v.", "definition": "interrupt action or speech briefly" },
        { "word": "pause", "part_of_speech": "n.", "definition": "a temporary stop in action or speech" },
        { "word": "mum", "part_of_speech": "v.", "definition": "call for silence;" },
        { "word": "mum", "part_of_speech": "adj.", "definition": "silent; not saying a word" },
        { "word": "pride", "part_of_speech": "n.", "definition": "a feeling of deep pleasure derived from one’s own achievements" },
        { "word": "pride", "part_of_speech": "v.", "definition": "be especially proud of a quality or skill" },
        { "word": "cram", "part_of_speech": "v.", "definition": "force down something into/down; learn a lot in a short time for an exam" },
        { "word": "glossy", "part_of_speech": "adj.", "definition": "smooth and shiny, highly polished; superficially attractive or expensive" },
        { "word": "glossy", "part_of_speech": "n.", "definition": "a photo printed on a glossy page" },
        { "word": "oak", "part_of_speech": "n.", "definition": "a tree that bears acorns as fruit, and typically has lobed deciduous leaves." },
        { "word": "rank", "part_of_speech": "n.", "definition": "a position in the hierarchy of a grading system" },
        { "word": "rank", "part_of_speech": "v.", "definition": "give a rank or place within a grading system" },
        { "word": "reckless", "part_of_speech": "adj.", "definition": "(of a person or their actions) without thinking or caring about the consequences of an action" },
        { "word": "spat", "part_of_speech": "n.", "definition": "a light quarrel" },
        { "word": "spat", "part_of_speech": "v.", "definition": "past tense of spit" },
        { "word": "ripple", "part_of_speech": "n.", "definition": "a small wave or series of waves on the surface of water" },
        { "word": "ripple", "part_of_speech": "v.", "definition": "(of water) form or flow with a series of small waves on the surface" },
        { "word": "hollow", "part_of_speech": "adj.", "definition": "having a hole or empty space inside" },
        { "word": "hollow", "part_of_speech": "n.", "definition": "a hole in something" },
        { "word": "hollow", "part_of_speech": "v.", "definition": "form by making a hole" },
        { "word": "lair", "part_of_speech": "n.", "definition": "a place where a wild animal, especially a fierce or dangerous one, lives" },
        { "word": "snarl", "part_of_speech": "v.", "definition": "make an aggressive growl with bared teeth; say something in an angry, bad tempered voice" },
        { "word": "snarl", "part_of_speech": "n.", "definition": "an act or sound of snarling" },
        { "word": "snarl", "part_of_speech": "n.", "definition": "a tangle, as of thread, hair, or wire; a complicated or confused condition or matter" },
        { "word": "brimming", "part_of_speech": "adj.", "definition": "to be filled to the brim" },
        { "word": "brimming", "part_of_speech": "adj.", "definition": "be full of a particular quality, feeling, etc" },
        { "word": "acorn", "part_of_speech": "n.", "definition": "the fruit of the oak tree" },
        { "word": "haul", "part_of_speech": "v.", "definition": "to pull or drag with force" },
        { "word": "haul", "part_of_speech": "n.", "definition": "the action of pulling; heavy pull" },
        { "word": "still", "part_of_speech": "adj.", "definition": "not moving or making a sound" },
        { "word": "still", "part_of_speech": "n.", "definition": "deep silence and calm" },
        { "word": "still", "part_of_speech": "adv.", "definition": "up to this time even now as formerly" },
        { "word": "still", "part_of_speech": "v.", "definition": "make or become still" },
        { "word": "gap", "part_of_speech": "n.", "definition": "a break or space in an object or between two objects; an unfilled space or interval; a break in continuity" },
        { "word": "coo", "part_of_speech": "v.", "definition": "a soft murmur sound made by pigeons or doves" },
        { "word": "coo", "part_of_speech": "n.", "definition": "a soft murmur sound made by pigeons or doves" },
        { "word": "gnarled", "part_of_speech": "adj.", "definition": "covered with knots, twisted, and gnarls" },
        { "word": "clan", "part_of_speech": "n.", "definition": "a group of people from the same bloodline, sharing the same surname, and normally living together" },
        { "word": "clan", "part_of_speech": "n.", "definition": "a group of people with a strong common interest" }
    ];

    const grade_3_words = [
        { "word": "knapsack", "part_of_speech": "n.", "definition": "a bag with two straps worn on your back or over your shoulder to carry supplies" },
        { "word": "slink", "v.": "", "definition": "walk stealthily; move smoothly and quietly with gliding steps." },
        { "word": "chockablock", "part_of_speech": "adj.", "definition": "packed full to capacity; crowded; completely filled;" },
        { "word": "chockablock", "part_of_speech": "adv.", "definition": "extremely (full)" },
        { "word": "filly", "part_of_speech": "n.", "definition": "(animals) a female horse or pony under the age of four; a girl or a young women;" },
        { "word": "tote", "part_of_speech": "n.", "definition": "a tote bag" },
        { "word": "tote", "part_of_speech": "v.", "definition": "to carry, convey, or drag" },
    ];

    const card = document.getElementById('flashcard');
    const frontFace = document.getElementById('front-face');
    const backFace = document.getElementById('back-face');
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');
    const indexHistory = []
    let unUsedIndices;
    let word_on_front;
    let words;
    let currentIndex;
    let lastBtnClick;


    function init() {
        if(document.getElementById('words-all').checked) {
            words = [...grade_2_words, ...grade_3_words];
        } else if(document.getElementById('words-3').checked) {
            words = [...grade_3_words];
        }

        word_on_front = document.getElementById('wordfront').checked;
        indexHistory.length = 0;
        unUsedIndices = Array.from({ length: words.length }, (_, i) => i);

        currentIndex = getNextIndex();
        showCard(currentIndex);
    }
    
    function getRandomIndex() {
        if (unUsedIndices.length === 0) {
            throw Error("No more un-used words!");
        }

        const randomIndex = Math.floor(Math.random() * unUsedIndices.length);
        return unUsedIndices[randomIndex];
    }

    function getNextIndex() {
        if (unUsedIndices.length === 0) {
            unUsedIndices = Array.from({ length: words.length }, (_, i) => i);
        }

        currentIndex = getRandomIndex();
        indexHistory.push(currentIndex);
        unUsedIndices = unUsedIndices.filter(function(item) {
            return item !== currentIndex
        });

        return currentIndex;
    }

    function showCard(index) {
        const currentWord = words[index];
        const wordHtml = `<div class="display-4">${currentWord.word}</div>`;
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

    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
    
    nextButton.addEventListener('click', () => {
        if (card.classList.contains('flip')) {
            card.classList.remove('flip');
            setTimeout(() => {
                currentIndex = getNextIndex();
                showCard(currentIndex);
            }, 600);
        } else {
            currentIndex = getNextIndex();
            showCard(currentIndex);
        }

        lastBtnClick = 'next';
    });
    
    backButton.addEventListener('click', () => {
        if (indexHistory.length == 0) {
            return;
        }

        if (lastBtnClick == 'next') {
            // In this case, the immediate last index is the current. We do an extra pop to find the previous index
            indexHistory.pop(); 
        }
        previousIndex = indexHistory.pop();
    
        if (card.classList.contains('flip')) {
            card.classList.remove('flip');
            setTimeout(() => {
                showCard(previousIndex);
            }, 600);
        } else {
            showCard(previousIndex);
        }

        lastBtnClick = 'back';
    });

    document.querySelectorAll('.card-front input[type="radio"]').forEach(radioButton => {
        radioButton.addEventListener('change', function() {
            if (this.checked) {
                word_on_front = this.value === "word";
            }
            showCard(currentIndex);
        });
    });

    document.querySelectorAll('.wordset input[type="radio"]').forEach(radioButton => {
        radioButton.addEventListener('change', function() {
            init();
        });
    });

    init();
})();