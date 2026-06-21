let poppedCount = 0;
function startSurprise() {
    let name = document.getElementById("nameInput").value;

    document.body.innerHTML = `
        <div class="balloon-page">
            <h1>Welcome, ${name}! 🤎</h1>
            <p>Pop the balloons to reveal messages!</p>

            <div class="balloons">
                <div class="balloon" onclick="popBalloon(this,'You are my Hero 🤎')">🎈</div>

                <div class="balloon" onclick="popBalloon(this,'Thank you for everything 🤎')">🎈</div>

                <div class="balloon" onclick="popBalloon(this,'You are my inspiration 🤎')">🎈</div>

                <div class="balloon" onclick="popBalloon(this,'I am nothing without you 🤎')">🎈</div>
            </div>
        </div>
    `;
}

function popBalloon(balloon, text) {

    balloon.innerHTML = `
        <div class="message">
            ${text}
        </div>
    `;

    balloon.classList.add("popped");

    balloon.onclick = null;

    poppedCount++;

    if(poppedCount === 4){

        setTimeout(() => {

            document.querySelector(".balloon-page").innerHTML += `
                <br><br>
                <button onclick="showWishPage()">
                    Continue ✨
                </button>
            `;

        },1000);

    }
}function showWishPage(){

    document.body.innerHTML = `
        <div class="wish-page">

            <h1>Make a Wish ✨</h1>

            <p>Daddy, what is your wish? 🤎</p>

            <input
                type="text"
                id="wishInput"
                placeholder="Type your wish..."
            >

            <br><br>

            <button onclick="showWishResult()">
                Make My Wish 🌟
            </button>

            <div id="wishResult"></div>

        </div>
    `;
}function showWishResult(){

    document.getElementById("wishResult").innerHTML = `
        <h2>
            🌟 Your wish will come true! 🌟
        </h2>

        <button onclick="showMemories()">
            📸 Reveal Memories
        </button>
    `;
}
function showMemories(){

    document.body.innerHTML = `

    <div class="memory-page">

        <h1>Special Memories With You 🤎</h1>

        <p>Tap the cards to reveal my memories.</p>

        <div class="gallery">

            <div class="memory-card"
                 onclick="this.innerHTML='🎒 Thank you for always supporting my education and dreams.'">
                💌 Tap to Reveal
            </div>

            <div class="memory-card"
                 onclick="this.innerHTML='💪 Thank you for working hard every day for our family.'">
                💌 Tap to Reveal
            </div>

            <div class="memory-card"
                 onclick="this.innerHTML='❤️ Thank you for believing in me even when I doubt myself.'">
                💌 Tap to Reveal
            </div>

            <div class="memory-card"
                 onclick="this.innerHTML='🤎 I am nothing without you, Daddy.'">
                💌 Tap to Reveal
            </div>

        </div>

        <br><br>

        <button onclick="showLetter()">
            💌 Open Secret Letter
        </button>

    </div>

    `;
}
function showLetter(){

    document.body.innerHTML = `

        <div class="letter-page">

            <div class="envelope"
                 onclick="openLetter()">

                💌

                <p>Tap to Open</p>

            </div>

        </div>

    `;
}
function openLetter(){

    document.body.innerHTML = `

        <div class="letter-content">

            <h1>To My Daddy 🤎</h1>

            <p>

            Happy Father's Day!

            Thank you for always being my guide,
            my protector and my greatest supporter.

            Whenever I needed help,
            you were always there.

            Whenever I felt weak,
            you gave me strength.

            Whenever I felt lost,
            you showed me the right path.

            I may not always say it,
            but I am truly grateful for everything
            you do for me.

            You are my hero,
            my inspiration,
            and one of the biggest reasons
            behind every success in my life.

            I am nothing without you.

            Thank you for being the best father.

            I love you forever 🤎

            - Your Daughter,
              Yogapriya
              <div class="celebration">
    🎉 🎊 ❤️ 🎉 🎊 ❤️ 🎉
</div>

            </p>

            <h2>
                ❤️ Happy Father's Day Daddy ❤️
            </h2>

        </div>

    `;
}