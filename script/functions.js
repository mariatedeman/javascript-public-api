// FUNCTION
function getRandomEmojis(category) {

    const positiveSigns = document.getElementById('positive-signs');
    const negativeSigns = document.getElementById('negative-signs');
    let positiveEmojis = "";
    let negativeEmojis = "";
    let usedEmojis = [];

    for (let i = 0; i < 6 ; i++) {
        // GET RANDOM NUMBER, DO IT AGAIN IF NUMBER ALREADY HAS BEEN USED
        let random = Math.floor(Math.random() * category.length);
                        
        while (usedEmojis.includes(random)) {
            random = Math.floor(Math.random() * category.length);
        }
        usedEmojis.push(random);
                    
        let randomEmoji = category[random].htmlCode[0];
                        
        // PUT EVEN NUMBERS IN POSITIVE AND UNEVEN IN NEGATIVE DIV CONTAINER
        if (i % 2 == 0) {
            positiveEmojis += `${randomEmoji} `;
        } else {
            negativeEmojis += `${randomEmoji} `;
        }
                        
        positiveSigns.innerHTML = positiveEmojis;
        negativeSigns.innerHTML = negativeEmojis;
    }
}