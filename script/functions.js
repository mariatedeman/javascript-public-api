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

        // CONVERT UNICODE TO EMOJI
        let codePoint = parseInt(category[random].unicode[0].replace("U+", ""), 16);
        let randomEmoji = String.fromCodePoint(codePoint);
                        
        // PUT EVEN NUMBERS IN POSITIVE AND UNEVEN IN NEGATIVE DIV CONTAINER
        if (i % 2 == 0) {
            positiveEmojis += `${randomEmoji} `;
        } else {
            negativeEmojis += `${randomEmoji} `;
        }
                        
        positiveSigns.textContent = positiveEmojis;
        negativeSigns.textContent = negativeEmojis;
    }
}