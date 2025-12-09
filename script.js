const emojiUrl = 'https://emojihub.yurace.pro/api/all';
const adviceUrl = 'https://api.adviceslip.com/advice';
const button = document.querySelector('button');
const selectAndButton = document.querySelector('.select-button');
const section = document.querySelector('section');
const dropdown = document.getElementById('dropdown');
const categories = [];

////////////////////////////////////////////////////////////

// TODAY'S READING
button.addEventListener('click', function (event) {

    section.style.display = "flex";
    selectAndButton.style.display = "none";

    fetch(adviceUrl) // FETCH ADVICE API
        .then ((response) => {
            return response.json();
        })
        .then ((advice) => {
            console.log(advice['slip']['advice']);
            advice = advice['slip']['advice'];
    
            adviceContainer = document.getElementById("advice");
            adviceContainer.innerHTML = advice;
        });

////////////////////////////////////////////////////////////

    fetch(emojiUrl) // FETCH EMOJI API
        .then ((response) => {
            return response.json()
        })
        .then ((emojis) => {

            // CREATE ARRAYS FOR EVERY CATEGORY
            const cat0 = []; // ALL EMOJIS
            const cat1 = []; // SMILEYS AND PEOPLE
            const cat2 = []; // ANIMALS AND NATURE
            const cat3 = []; // FOOD AND DRINK
            const cat4 = []; // TRAVEL AND PLACES
            const cat5 = []; // ACTIVITIES
            const cat6 = []; // OBJECTS

            emojis.forEach(emoji => {
                if (emoji.category === "symbols" || emoji.category === "flags") return; // IGNORE SYMBOLS AND FLAGS
                if (emoji.name.includes('type')) return; // ONLY ACCEPT DEFAULT EMOJI
                
                // FILL CATEGORY ARRAYS WITH CORRECT EMOJIS
                cat0.push(emoji);

                if (emoji.category === 'smileys and people') {
                    cat1.push(emoji);
                } else if (emoji.category === 'animals and nature') {
                    cat2.push(emoji);
                } else if (emoji.category === 'food and drink') {
                    cat3.push(emoji);
                } else if (emoji.category === 'travel and places') {
                    cat4.push(emoji);
                } else if (emoji.category === 'activities') {
                    cat5.push(emoji);
                } else if (emoji.category === 'objects') {
                    cat6.push(emoji);
                }
            });

            const categories = [cat0, cat1, cat2, cat3, cat4, cat5, cat6];

            const dropdownValue = dropdown.value;
            const category = categories[dropdownValue];
            
            getRandomEmojis(category);

        });
})    

