function choose(userpick) {
    const userimg = document.getElementById("user-img");
    const letsStartText = document.getElementById('lets-start');
    letsStartText.textContent = "Choosing...";

    if (userpick === 'paper') {
        userimg.src = 'assets/Paper.png';
    }
    else if (userpick === 'rock') {
        userimg.src = 'assets/rock.png';
    }

    else if (userpick === 'scissors') {
        userimg.src = 'assets/Scissors.png';
    }

// random display

    const e5tyarat = ['assets/Paper.png', 'assets/rock.png', 'assets/Scissors.png']
    const computerimg = document.getElementById('computer-img');

    const randomizeloop = setInterval(() => {
        const choice = Math.floor(Math.random() * e5tyarat.length);
        computerimg.src = e5tyarat[choice];
        computerimg.src = e5tyarat[randomIndex];
    }, 150);

    setTimeout(() => {
        clearInterval(randomizeloop);
    }, 3000);

// disable
    const paper = document.getElementById("paper");
    const rock = document.getElementById("rock");
    const scissors = document.getElementById("scissors");

// condtion el wara2a 

    if (userpick === 'paper') {
        rock.style.pointerEvents = 'none';
        rock.style.opacity = '0.5';

        scissors.style.pointerEvents = 'none';
        scissors.style.opacity = '0.5';
        randomizeloop;

        setTimeout(function() {
            rock.style.pointerEvents = 'auto';
            rock.style.opacity = '1';

            scissors.style.pointerEvents = 'auto';
            scissors.style.opacity = '1';
            letsStartText.textContent = "Let's start";
        }, 3000);
    }

// condtion el toba 
        if (userpick === 'rock') {
        paper.style.pointerEvents = 'none';
        paper.style.opacity = '0.5';

        scissors.style.pointerEvents = 'none';
        scissors.style.opacity = '0.5';

        randomizeloop;

        setTimeout(function() {
            paper.style.pointerEvents = 'auto';
            paper.style.opacity = '1';

            scissors.style.pointerEvents = 'auto';
            scissors.style.opacity = '1';
            letsStartText.textContent = "Let's start";
        }, 3000);
    }

// condtion el ma2as

        if (userpick === 'scissors') {
        rock.style.pointerEvents = 'none';
        rock.style.opacity = '0.5';

        paper.style.pointerEvents = 'none';
        paper.style.opacity = '0.5';

        randomizeloop;

        setTimeout(function() {
            rock.style.pointerEvents = 'auto';
            rock.style.opacity = '1';

            paper.style.pointerEvents = 'auto';
            paper.style.opacity = '1';
            letsStartText.textContent = "Let's start";
        }, 3000);
    }
    }