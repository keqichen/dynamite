// const randomBot = require("./randomBot");

class Bot {
    makeMove(gamestate) {
        var counterForDynamiteP2=0;
        var counterForDynamiteP1=0;

        var counterForWaterP2=0;


        for (let round of gamestate.rounds){
            
            if (round.p1==="D"){
                counterForDynamiteP1++;
            }

            if (round.p2==="D"){
                counterForDynamiteP2++;
            }       

            if (round.p2==="W"){
                counterForWaterP2++;
            }
        }

        if (gamestate.rounds.length < 100) {  
            if (counterForWaterP2 > 10){
                let randomIndex = Math.floor(3 * Math.random())
                return ['R', 'P', 'S'][randomIndex]                
            } else {
                return "D";  
            }
         } else {

                if (counterForDynamiteP1==100){
                    let randomIndex = Math.floor(3 * Math.random())
                        return ['R', 'P', 'S'][randomIndex] 
                } else if (counterForDynamiteP1<100){
                    return "D";
                } {
                        // need to improve this section. Now it's just random;
                        if (counterForDynamiteP2==100){
                            let randomIndex = Math.floor(3 * Math.random())
                            return ['R', 'P', 'S'][randomIndex] 
                        } else {
                            let randomIndex = Math.floor(4 * Math.random())
                            return ['R', 'P', 'S', 'W'][randomIndex]       
                    }
                }

            }
        }
    }


module.exports = new Bot();
