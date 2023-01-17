class Bot {
    makeMove(gamestate) {
        let randomIndex = Math.floor(3 * Math.random())
        return ['R', 'P', 'S'][randomIndex];
    }
}

module.exports = new Bot();
