class Utility {
    constructor(){
        this.numbers = [1,2,3,4,5,6]
    }
    sum() {
        console.log(this.numbers.reduce((init, next) => init + next))
    }
}
console.log(new Utility());
console.log(new Utility().sum());
