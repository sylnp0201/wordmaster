(function() {
    const fall_2024_words = [
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

    const winter_2024_words = [
        { "word": "knapsack", "part_of_speech": "n.", "definition": "a bag with two straps worn on your back or over your shoulder to carry supplies" },
        { "word": "slink", "part_of_speech": "v.", "definition": "walk stealthily; move smoothly and quietly with gliding steps." },
        { "word": "chockablock", "part_of_speech": "adj.", "definition": "packed full to capacity; crowded; completely filled;" },
        { "word": "chockablock", "part_of_speech": "adv.", "definition": "extremely (full)" },
        { "word": "filly", "part_of_speech": "n.", "definition": "(animals) a female horse or pony under the age of four; a girl or a young women;" },
        { "word": "tote", "part_of_speech": "n.", "definition": "a tote bag" },
        { "word": "tote", "part_of_speech": "v.", "definition": "to carry, convey, or drag" },
        { "word": "trample", "part_of_speech": "v.", "definition": "to stamp or walk roughly (on)" },
        { "word": "eavesdropper", "part_of_speech": "n.", "definition": "Someone who listens to a private conversation without the knowledge of the people involved." },
        { "word": "eavesdrop", "part_of_speech": "v.", "definition": "To listen secretly to the private conversation of others" },
        { "word": "stampede", "part_of_speech": "n.", "definition": "A sudden frenzied rush of panic-stricken animals" },
        { "word": "stampede", "part_of_speech": "v.", "definition": "To rush wildly in a sudden panic" },
        { "word": "dash", "part_of_speech": "n.", "definition": "An act of running somewhere suddenly" },
        { "word": "dash", "part_of_speech": "v.", "definition": "Run or travel somewhere in a rush" },
        { "word": "lope", "part_of_speech": "n.", "definition": "A long steady gait or stride" },
        { "word": "lope", "part_of_speech": "v.", "definition": "Run or move with a long bounding stride" },
        { "word": "knotty", "part_of_speech": "adj.", "definition": "Full of knots; Difficult to understand or solve" },
        { "word": "heifer", "part_of_speech": "n.", "definition": "A young cow, especially one that has not yet given birth to a calf" },
        { "word": "swarm", "part_of_speech": "n.", "definition": "A large number of insects, especially when in motion" },
        { "word": "swarm", "part_of_speech": "v.", "definition": "Move about or proceed in large numbers" },
        { "word": "numb", "part_of_speech": "adj.", "definition": "Deprived of the power to feel or move normally" },
        { "word": "numb", "part_of_speech": "v.", "definition": "To make insensitive or lacking sensation" },
        { "word": "kin", "part_of_speech": "n.", "definition": "One's family and relatives" },
        { "word": "kin", "part_of_speech": "adj.", "definition": "Related genetically or in the same family" },
        { "word": "lug", "part_of_speech": "n.", "definition": "A box for shipping fruit or vegetables" },
        { "word": "lug", "part_of_speech": "v.", "definition": "To drag or haul (an object) laboriously; To pull or drag with short jerks" },
        { "word": "smudged", "part_of_speech": "v.", "definition": "(past tense) Cause something to be messily smeared by rubbing it." },
        { "word": "latch", "part_of_speech": "n.", "definition": "A metal bar with a catch used for fastening something like a door or gate" },
        { "word": "latch", "part_of_speech": "v.", "definition": "Fasten with a latch" },
        { "word": "bolt", "part_of_speech": "n.", "definition": "A bar that slides into a socket" },
        { "word": "bolt", "part_of_speech": "v.", "definition": "To secure or lock with or as with a bolt or bolts" },
        { "word": "sooty", "part_of_speech": "adj.", "definition": "Covered with or as if with soot" },
        { "word": "soot", "part_of_speech": "n.", "definition": "A black substance rising in fine flakes in smoke" },
        { "word": "reservoir", "part_of_speech": "n.", "definition": "A natural or artificial pond or lake used for the storage and regulation of water" },
        { "word": "snoop", "part_of_speech": "v.", "definition": "To pry into the private affairs of others, especially by prowling about; Watch, observe, or inquire secretly" },
        { "word": "snoop", "part_of_speech": "n.", "definition": "A spy who makes uninvited inquiries into the private affairs of others; A fugitive investigation" },
        { "word": "vacant", "part_of_speech": "adj.", "definition": "Containing nothing; empty; Not occupied or put to use" },
        { "word": "shamble", "part_of_speech": "v.", "definition": "To walk in an awkward, lazy, or unsteady manner, shuffling the feet." },
        { "word": "shamble", "part_of_speech": "n.", "definition": "A shuffling gait" },
        { "word": "gait", "part_of_speech": "n.", "definition": "Manner of walking, stepping, or running; the ways a horse moves" },
    ];

    const spring_2025_words = [
        { "word": "glint", "part_of_speech": "v.", "definition": "To gleam or give out small flashes of light, usually by reflection" },
        { "word": "glint", "part_of_speech": "n.", "definition": "A momentary flash of light; a sparkle; A faint or fleeting indication" },
        { "word": "shuffle", "part_of_speech": "v.", "definition": "To move with short sliding steps, without or barely lifting the feet; To mix playing cards, tiles, or dominoes together so as to make their order random." },
        { "word": "shuffle", "part_of_speech": "n.", "definition": "A short sliding step or movement, or a walk characterized by such steps" },
        { "word": "frosty", "part_of_speech": "adj.", "definition": "Cold enough for frost; Covered with frost" },
        { "word": "horde", "part_of_speech": "n.", "definition": "A large group or crowd; a swarm" },
        { "word": "horde", "part_of_speech": "v.", "definition": "To gather in a horde" },
        { "word": "tremble", "part_of_speech": "v.", "definition": "To shake involuntarily, as from excitement or anger; quake; To feel fear or anxiety; To vibrate or quiver" },
        { "word": "tremble", "part_of_speech": "n.", "definition": "The act or an instance of trembling" },
        { "word": "gritty", "part_of_speech": "adj.", "definition": "Showing resolution and fortitude; plucky; Containing, covered with, or resembling grit" },
        { "word": "aerie", "part_of_speech": "n.", "definition": "The nest of a bird, such as an eagle, built on a cliff or other high place." },
        { "word": "fling", "part_of_speech": "n.", "definition": "The act or an instance of flinging; toss; throw" },
        { "word": "fling", "part_of_speech": "v.", "definition": "To throw with force; To throw/cast aside" },
        { "word": "molten", "part_of_speech": "adj.", "definition": "Made liquid by heat; melted" },
        { "word": "molten", "part_of_speech": "v.", "definition": "The past participle of melt; Made by melting and casting in a mold" },
        { "word": "lodge", "part_of_speech": "n.", "definition": "A place to live in make or become firmly fixed; a den of an animal" },
        { "word": "lodge", "part_of_speech": "v.", "definition": "To live in a place temporarily.; To rent accommodations, especially for sleeping" },
        { "word": "flinch", "part_of_speech": "n.", "definition": "An act or instance of starting, wincing, or recoiling" },
        { "word": "flinch", "part_of_speech": "v.", "definition": "To start or wince involuntarily, as from surprise or pain; To recoil, as from something unpleasant or difficult; shrink" },
        { "word": "deserted", "part_of_speech": "adj.", "definition": "No longer occupied or used; abandoned" },
        { "word": "fleece", "part_of_speech": "v.", "definition": "To strip money or belongings" },
        { "word": "fleece", "part_of_speech": "n.", "definition": "The coat of wool of a sheep or similar animal; A soft woolly covering or mass" },
        { "word": "hurl", "part_of_speech": "v.", "definition": "To throw with great force; fling; To send with great vigor; thrust" },
        { "word": "hurl", "part_of_speech": "n.", "definition": "A forcible or violent throw; fling" },
        { "word": "downy", "part_of_speech": "adj.", "definition": "Covered with soft fine hair or feathers; light, soft, and fluffy" },
        { "word": "chatter", "part_of_speech": "v.", "definition": "To talk rapidly, incessantly, and on trivial subjects; jabbe" },
        { "word": "chatter", "part_of_speech": "n.", "definition": "Idle or foolish talk; gossip" },
        { "word": "spark", "part_of_speech": "v.", "definition": "To emit or produce sparks" },
        { "word": "spark", "part_of_speech": "n.", "definition": "A small bit of fire; A flash of light" },
        { "word": "misty", "part_of_speech": "adj.", "definition": "Consisting of or marked by mist; not clearly seen or outlined" },
        { "word": "shin", "part_of_speech": "n.", "definition": "The front part of the leg below the knee and above the ankle" },
        { "word": "shin", "part_of_speech": "v.", "definition": "To climb (a rope or pole, for example) by gripping and pulling alternately with the hands and legs." },
        { "word": "throb", "part_of_speech": "v.", "definition": "To beat rapidly or violently, as the heart; pound." },
        { "word": "throb", "part_of_speech": "n.", "definition": "A beating, pulsating, or vibration." },
        { "word": "petty", "part_of_speech": "adj.", "definition": "Of small importance; trivial" },
        { "word": "forearm", "part_of_speech": "n.", "definition": "The part of the arm between the wrist and the elbow" },
        { "word": "babble", "part_of_speech": "n.", "definition": "Meaningless talk or sounds" },
        { "word": "babble", "part_of_speech": "v.", "definition": "To utter a meaningless confusion of words or sounds; To talk foolishly or idly; chatter" },
        { "word": "puny", "part_of_speech": "adj.", "definition": "Of inferior size, strength, or significance; weak" },
        { "word": "stockpile", "part_of_speech": "n.", "definition": "A supply stored for future use, usually carefully accrued and maintained" },
        { "word": "stockpile", "part_of_speech": "v.", "definition": "To acquire and store a large quantity of (something)" },
    ];
    // { "word": "", "part_of_speech": ".", "definition": "" },

    const card = document.getElementById('flashcard');
    const frontFace = document.getElementById('front-face');
    const backFace = document.getElementById('back-face');
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');
    let unUsedIndices;
    let word_on_front;
    let words;
    let currentIndex;
    let lastBtnClick;
    let totalCount;


    function init() {
        if(document.getElementById('words-all').checked) {
            words = [...fall_2024_words, ...winter_2024_words, ...spring_2025_words];
        } else if(document.getElementById('words-latest').checked) {
            words = [...spring_2025_words];
        }

        totalCount = words.length;
        shuffleArray(words);

        word_on_front = document.getElementById('wordfront').checked;
        unUsedIndices = Array.from({ length: words.length }, (_, i) => i);

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
        const counter = document.querySelector(".counter").innerHTML = `${currentIndex+1}/${totalCount}`;
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
            }, 600);
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
        lastBtnClick = 'next';
    }

    function onclickBack() {
        if (currentIndex == 0) {
            return;
        }

        currentIndex--;
        renderCard(currentIndex);
        lastBtnClick = 'back';
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