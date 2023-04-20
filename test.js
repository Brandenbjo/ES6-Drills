let func = (movie, me = "Tommy Wiseau") => {
    console.log(`my name is ${me} and my favorite movie is ${movie}`);
    if (movie === undefined) {
        movie = "The Room"
    };
}
func("Star Wars", 'branden')

let getFirstName = (name1) => {
    if (name1 === "Branden Ortiz") {
        name1 = "Branden"
        console.log(name1)

    }
};

let getFirstNameConcise = (name2) => {
    if (name2 === "Jason Layton") {
        name2 = "Jason"
    }
    console.log(name2)

};

getFirstName("Branden Ortiz")
getFirstNameConcise("Jason Layton")

let doMath = (num1, num2) => {
    let math = {
        exponent: num1 ^ num2,
        product: num1 * num2,
    }

    console.log(math.exponent)
    console.log(math.product)
}
doMath()