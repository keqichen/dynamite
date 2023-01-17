// const randomBot = require("./randomBot");

// This bot, for some reason, can beat the draw strategy.

class Bot {
    makeMove(gamestate) {
        var counterForDynamiteP2 = 0;
        var counterForDynamiteP1 = 0;

        var counterForWaterP2 = 0;


        for (let round of gamestate.rounds) {

            if (round.p1 === "D") {
                counterForDynamiteP1++;
            }

            if (round.p2 === "D") {
                counterForDynamiteP2++;
            }

            if (round.p2 === "W") {
                counterForWaterP2++;
            }
        }

        if (gamestate.rounds.length < 100) {
            if (counterForWaterP2 > 10) {
                let randomIndex = Math.floor(3 * Math.random())
                return ['R', 'P', 'S'][randomIndex]
            } else {
                return "D"; // heavily used D at the beginning may not be a great idea;
            }
        } else {

            if (counterForDynamiteP1 == 100) {
                let randomIndex = Math.floor(3 * Math.random())
                return ['R', 'P', 'S'][randomIndex]
            } else if (counterForDynamiteP1 < 100) {
                return "D";
            } {
                // need to improve this section. Now it's just random; 
                // think of more sophisticated way to beat the randomness;
                if (counterForDynamiteP2 == 100) {
                    let randomIndex = Math.floor(3 * Math.random())
                    return ['R', 'P', 'S'][randomIndex]
                }
            }

        }
    }
}


module.exports = new Bot();
