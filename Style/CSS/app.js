var less = require('less');
less.render(lessContnet, function(e, css) {
    console.log(css)
});

(function f(){
    console.log(`Working`);
    return this;
})();