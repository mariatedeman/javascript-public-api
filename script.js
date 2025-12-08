const emojiUrl = 'https://emojihub.yurace.pro/api/all';
const adviceUrl = 'https://api.adviceslip.com/advice';
const button = document.querySelector('button');
const section = document.querySelector('section');


button.addEventListener('click', function (event) {

    section.style.display = "flex";
    button.style.display = "none";

    fetch(adviceUrl)
        .then ((response) => {
            return response.json();
        })
        .then ((advice) => {
            console.log(advice['slip']['advice']);
            advice = advice['slip']['advice'];
    
            adviceContainer = document.getElementById("advice");
            adviceContainer.innerHTML = advice;
        });
    
    fetch(emojiUrl)
        .then ((response) => {
            return response.json()
        })
        .then ((emojis) => {
            console.log(emojis);

            const positiveSigns = document.getElementById('positive-signs');
            const negativeSigns = document.getElementById('negative-signs');
            
            let positiveEmojis = "";
            let negativeEmojis = "";
            let usedEmojis = [];

            

            // EMOJI RANDOMIZER
            for (let i = 0; i <= 5; i++) {

                // GET RANDOM NUMBER, DO IT AGAIN IF NUMBER ALREADY HAS BEEN USED
                let random = Math.round(Math.random() * 1163);
                
                while (usedEmojis.includes(random)) {
                    random = Math.round(Math.random() * 1163);
                }
                usedEmojis.push(random);

                let randomEmoji = emojis[random].htmlCode[0];
                
    
                // PUT EVEN NUMBERS IN POSITIVE AND UNEVEN IN NEGATIVE DIV CONTAINER
                if (i % 2 == 0) {
                    positiveEmojis += `${randomEmoji} `;
                } else {
                    negativeEmojis += `${randomEmoji} `;
                }

                positiveSigns.innerHTML = positiveEmojis;
                negativeSigns.innerHTML = negativeEmojis;

            }
    
            
            // RANDOMIZER
            // let randomEmoji = Math.round(Math.random() * emojis.length);
            // console.log(randomEmoji);
            // emojiContainer.innerHTML = emojis[randomEmoji].htmlCode[0];
    
    
            // ALL EMOJIS
            // emojis.forEach(emoji => {
            //     const emojiIcon = emoji.htmlCode[0];
                
            //     // EMOJI DISPLAYED IN CONTAINER
            //     emojiContainer.innerHTML += emojiIcon;
            // })
        });

})    

