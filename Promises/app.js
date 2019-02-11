
function startGame() {
    let counter = 0;
    document.querySelectorAll('#promise')[0].addEventListener('click', () => {

        ++counter;
        console.log(`Clicked ${counter} times`);

    });
    /**
     * 
     setTimeout(() => {
         if (counter > 5) {
             console.log('You won!');
            } else {
                console.log('You lost!')
            }
            console.log('2 seconds passed!');
        }, 2000)
        */
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (counter > 5) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

startGame()
.then(()=> alert('You win!'))
.catch(() => alert('You lost!'));