const quotes = {
    noun: [
        "you must ",
        "you shoud ",
        "you have to ",
        "Don't stop ",
        "At least, ",
        "Try to ",
    ],
    verb: ["love in ", "believe in ", "trust in "],
    objective: [
        "fate",
        "destiny",
        "passion",
        "goal",
        "target",
        "future",
        "yourself",
    ],
    randomQuote() {
        return (
            this.noun[this.randomNumber(this.noun.length)] +
            this.verb[this.randomNumber(this.verb.length)] +
            this.objective[this.randomNumber(this.objective.length)]
        );
    },
    randomNumber(number) {
        return Math.floor(Math.random() * number);
    },
};

console.log(quotes.randomQuote());