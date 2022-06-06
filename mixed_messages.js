let mixedMessages = ['You can do it!', 'Never give up!', 'Keep your head held high!'];

const newQuote = function(){
    let randomNumber = Math.floor(Math.random() * (mixedMessages.length));
    document.getElementById('quoteDisplay').innerHTML = mixedMessages[randomNumber];
};



for(let i = 0; i < mixedMessages.length; i++ ) {
    console.log(mixedMessages[i])
}