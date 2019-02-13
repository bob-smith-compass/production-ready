window.onload = start;
function start() {
    console.log('DOM Loaded');
    /**
     * Not working
     */
    // document.querySelectorAll('body')[0].addEventListener('click', function () {
    //     console.log('Mlicked!');
    // });

    document.querySelectorAll('#divClick').addEventListener('click', function () {
        console.log('Div Clicked!');
    });
}

// document.querySelectorAll('body').addEventListener('click', function() {
//     console.log('Clicked!');
// });
document.querySelectorAll('body')[0].addEventListener('click', function () {
    console.log('Mlicked!');
});
let div = document.querySelectorAll('#divClick');
div.addEventListener('click', function () {
    console.log('Div Clicked!');
});
console.log(div);