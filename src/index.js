import RockPaperScissors from './rock_paper_scissors';

class Index {
    constructor(){
        debugger
        this.game = new RockPaperScissors(0,0,0);
        this.rockIMG = new Image();
        this.rockIMG.src = './assets/rock.png';
        this.paperIMG = new Image();
        this.paperIMG.src = './assets/paper.png'
        this.scissorsIMG = new Image();
        this.scissorsIMG.src = './assets/scissors.png'
        this.xIMG = new Image();
        this.xIMG.src = './assets/x.png'
        this.equalIMG = new Image();
        this.equalIMG.src = './assets/equal.png'
        this.checkIMG = new Image();
        this.checkIMG.src = './assets/check.png'
    }

    setVals(r,p,s){
        this.game.setRock(r);
        this.game.setPaper(p);
        this.game.setScissors(s);
    }
    nextStep(r, p, s){
        this.setVals(r,p,s);
        this.game.step();

    }

    simulate(r, p, s){
        this.setVals(r,p,s);
        this.game.simulate();
    }

    estimate(num, r, p, s){
        this.setVals(r,p,s);
        return this.game.estimate(num);
    }

    draw(ctx){
        debugger;
        console.log("ctx", ctx.height, ctx.width)
        ctx.clearRect(0, 0, 10000, 10000)
        if(this.game.getUnitCount() <= 1){
            debugger;
            ctx.fillStyle = "white";
            if(this.game.getRock() === 1){
                console.log("rock wins")
                ctx.fillStyle = "white";
                ctx.fillText("Rock Wins!", 130, 130);
                ctx.drawImage(this.rockIMG, 80, 0, 150, 150);
            } else if(this.game.getPaper() === 1){
                console.log("paper wins")
                ctx.fillStyle = "white";
                ctx.fillText("Paper Wins!", 130, 142);
                ctx.drawImage(this.paperIMG, 80, 0, 150, 150);
            } else if(this.game.getScissors() === 1){
                console.log("scissors win")
                ctx.fillStyle = "white";
                ctx.fillText("Scissors Win!", 115, 115);
                ctx.drawImage(this.scissorsIMG, 80, 0, 150, 150);
            } else {
                console.log("invalid input")
                ctx.fillStyle = "white";
                ctx.fillText("Invalid Input", 130, 140);
                ctx.drawImage(this.xIMG, 80, 0, 150, 150);
            }
            debugger;
        } else if(this.game.getUnit1() === "r"){
            if(this.game.getUnit2() === "r"){
                ctx.drawImage(this.rockIMG, 0, 35, 80, 80);
                ctx.drawImage(this.rockIMG, 80, 35, 80, 80);
                ctx.drawImage(this.equalIMG, 160, 50, 50, 50)
                ctx.drawImage(this.scissorsIMG, 200, 35, 100, 100);
                ctx.drawImage(this.xIMG, 0, 35, 80, 80);
                ctx.drawImage(this.xIMG, 80, 35, 80, 80);
                ctx.drawImage(this.checkIMG, 200, 35, 100, 100);
            } else if(this.game.getUnit2() === "p"){
                ctx.drawImage(this.rockIMG, 0, 0, 150, 150);
                ctx.drawImage(this.paperIMG, 150, 0, 150, 150);
                ctx.drawImage(this.xIMG, 0, 0, 150, 150);
                ctx.drawImage(this.checkIMG, 150, 0, 150, 150);
            } else {
                ctx.drawImage(this.rockIMG, 0, 0, 150, 150);
                ctx.drawImage(this.scissorsIMG, 150, 0, 150, 150);
                ctx.drawImage(this.checkIMG, 0, 0, 150, 150);
                ctx.drawImage(this.xIMG, 150, 0, 150, 150);
            }
        } else if(this.game.getUnit1() === "p"){
            if (this.game.getUnit2() === "r") {
                ctx.drawImage(this.paperIMG, 0, 0, 150, 150);
                ctx.drawImage(this.rockIMG, 150, 0, 150, 150);
                ctx.drawImage(this.checkIMG, 0, 0, 150, 150);
                ctx.drawImage(this.xIMG, 150, 0, 150, 150);
            } else if (this.game.getUnit2() === "p") {
                ctx.drawImage(this.paperIMG, 0, 35, 80, 80);
                ctx.drawImage(this.paperIMG, 80, 35, 80, 80);
                ctx.drawImage(this.equalIMG, 150, 50, 50, 50)
                ctx.drawImage(this.rockIMG, 200, 35, 100, 100);
                ctx.drawImage(this.xIMG, 0, 35, 80, 80);
                ctx.drawImage(this.xIMG, 80, 35, 80, 80);
                ctx.drawImage(this.checkIMG, 200, 35, 100, 100);
            } else {
                ctx.drawImage(this.paperIMG, 0, 0, 150, 150);
                ctx.drawImage(this.scissorsIMG, 150, 0, 150, 150);
                ctx.drawImage(this.xIMG, 0, 0, 150, 150);
                ctx.drawImage(this.checkIMG, 150, 0, 150, 150);
            }
        } else {
            if (this.game.getUnit2() === "r") {
                ctx.drawImage(this.scissorsIMG, 0, 0, 150, 150);
                ctx.drawImage(this.rockIMG, 150, 0, 150, 150);
                ctx.drawImage(this.xIMG, 0, 0, 150, 150);
                ctx.drawImage(this.checkIMG, 150, 0, 150, 150);
            } else if (this.game.getUnit2() === "p") {
                ctx.drawImage(this.scissorsIMG, 0, 0, 150, 150);
                ctx.drawImage(this.paperIMG, 150, 0, 150, 150);
                ctx.drawImage(this.checkIMG, 0, 0, 150, 150);
                ctx.drawImage(this.xIMG, 150, 0, 150, 150);
            } else {
                ctx.drawImage(this.scissorsIMG, 0, 35, 80, 80);
                ctx.drawImage(this.scissorsIMG, 80, 35, 80, 80);
                ctx.drawImage(this.equalIMG, 160, 50, 50, 50)
                ctx.drawImage(this.paperIMG, 200, 35, 100, 100);
                ctx.drawImage(this.xIMG, 0, 35, 80, 80);
                ctx.drawImage(this.xIMG, 80, 35, 80, 80);
                ctx.drawImage(this.checkIMG, 200, 35, 100, 100);
            }
        }
        console.log(this.game)
        console.log("hi")
        // ctx.clearRect(80, 0, 300, 300);
        debugger;
    }
    render(){
        let index = this;
        document.addEventListener("DOMContentLoaded", function(){
            console.log("okay")
            let rpsCanvas = document.getElementById("rock-paper-scissors");
            const ctx = rpsCanvas.getContext("2d");
            let next = document.getElementById("next");
            let sim = document.getElementById("sim");
            let estimate = document.getElementById("estimate")
            console.log(rocks)
            index.rocks = document.getElementById("rocks")
            index.paper = document.getElementById("paper")
            index.scissors = document.getElementById("scissors")
            index.num = document.getElementById("trialcount")
            index.rockProb = document.getElementById("rock-prob")
            index.paperProb = document.getElementById("paper-prob")
            index.scissorsProb = document.getElementById("scissors-prob")

            console.log(this.rocks, this.paper, this.scissors)
            next.addEventListener("click", () => {
                let rocks = parseInt(index.rocks.value,10);
                let paper = parseInt(index.paper.value,10);
                let scissors = parseInt(index.scissors.value,10);
                console.log("test")
                console.log(index.rocks.value)
                index.nextStep(rocks, paper, scissors);
                console.log(index.game.getRock(), "what")
                debugger
                index.rocks.setAttribute("value", index.game.getRock());
                index.paper.setAttribute("value", index.game.getPaper());
                index.scissors.setAttribute("value", index.game.getScissors());
                // debugger;
                console.log(this)
                index.draw(ctx);
            })
            sim.addEventListener("click", () => {
                let rocks = parseInt(index.rocks.value, 10);
                let paper = parseInt(index.paper.value, 10);
                let scissors = parseInt(index.scissors.value, 10);
                index.simulate(rocks, paper, scissors);
                index.rocks.setAttribute("value", index.game.getRock());
                index.paper.setAttribute("value", index.game.getPaper());
                index.scissors.setAttribute("value", index.game.getScissors());
                index.draw(ctx);
            })
            estimate.addEventListener("click", () => {
                let rocks = parseInt(index.rocks.value, 10);
                let paper = parseInt(index.paper.value, 10);
                let scissors = parseInt(index.scissors.value, 10);
                let num = parseInt(index.num.value, 10);
                let probs = index.estimate(num, rocks, paper, scissors);
                index.rockProb.innerHTML = probs[0];
                index.paperProb.innerHTML = probs[1];
                index.scissorsProb.innerHTML = probs[2];
                console.log("hey")

            })
           
        })
    }
}

let ind = new Index();
ind.render();
// ind.draw(5)