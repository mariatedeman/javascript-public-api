const url = 'https://emojihub.yurace.pro/api/all';

fetch(url)
    .then ((response) => {
        return response.json()
    })
    .then ((emojis) => {
        console.log(emojis);
        
        // EMOJI CONTAINER DIV
        const emojiContainer = document.getElementById("emoji");



        // RANDOMIZER
        // let randomEmoji = Math.round(Math.random() * emojis.length);
        // console.log(randomEmoji);
        // emojiContainer.innerHTML = emojis[randomEmoji].htmlCode[0];



        for (let i = 0; i <= 9; i++) {
            const positiveSigns = document.getElementById('positive-signs');
            const negativeSigns = document.getElementById('negative-signs');

            let randomEmoji = Math.round(Math.random() * emojis.length);
            console.log(randomEmoji);
            

            if (i % 2 == 0) {
                positiveSigns.innerHTML += emojis[randomEmoji].htmlCode[0];
            } else {
                negativeSigns.innerHTML += emojis[randomEmoji].htmlCode[0];
            }
        }

        


        // ALL EMOJIS
        // emojis.forEach(emoji => {
        //     const emojiIcon = emoji.htmlCode[0];
            
        //     // EMOJI DISPLAYED IN CONTAINER
        //     emojiContainer.innerHTML += emojiIcon;
        // })
    });

