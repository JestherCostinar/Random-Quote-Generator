const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".sound"),
twitterBtn = document.querySelector(".twitter");

// random quote function
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
        quoteBtn.classList.remove("loading");
    })
}

soundBtn.addEventListener("click", () => {
    // Initialize SpeechSysnthesisUtterance a web speech apo that represent a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // Speak method of speechSynthesis
});

copyBtn.addEventListener("click", () => {
   navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
 });
 

quoteBtn.addEventListener("click", randomQuote);