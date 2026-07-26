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
}