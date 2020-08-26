class RockPaperScissors {
    constructor(r, p, s){
        this.rock = r;
        this.paper = p;
        this.scissors = s;
        this.unit1 = "";
        this.unit2 = "";
    }

    getUnitCount() {
        return this.rock + this.paper + this.scissors;
    }

    getUnit1(){
        return this.unit1;
    }

    getUnit2(){
        return this.unit2;
    }

    getRock() {
        return this.rock;
    }

    getPaper() {
        return this.paper;
    }

    getScissors() {
        return this.scissors;
    }

    setRock(r) {
        this.rock = r;
    }

    setPaper(p) {
        this.paper = p;
    }

    setScissors(s) {
        this.scissors = s;
    }

    estimate(num) {
        if(num < 1) return [0,0,0];
        let probs = [0,0,0];
        let r = this.rock;
        let p = this.paper;
        let s = this.scissors;
        for(let i = 0; i < num; i++){
            this.simulate();
            if(this.rock === 1){
                probs[0]++;
            } else if(this.paper === 1){
                probs[1]++;
            } else {
                probs[2]++;
            }
            this.setRock(r)
            this.setPaper(p);
            this.setScissors(s);
        }
        return probs.map(el => (el/num)*100)
    }

    simulate() {
        let total = this.getUnitCount();
        for(let i = total; i > 1; i--){
            this.step();
        }
    }

    step() {

        let size = this.getUnitCount();
        if(size <= 1) return;
        let rand = Math.floor(Math.random() * size);
        console.log(this.rock, this.paper, this.scissors)
        console.log(rand);
        if (rand < this.rock) {
            this.rock--;
            this.unit1 = "r"
        } else if (rand < this.rock + this.paper) {
            this.paper--;
            this.unit1 = "p"
        } else {
            this.scissors--;
            this.unit1 = "s"
        }
        rand = Math.floor(Math.random() * (size-1));
        console.log(this.rock, this.paper, this.scissors)
        // console.log(size-1);
        console.log(rand);
        if (rand < this.rock) {
            this.rock--;
            this.unit2 = "r"
        } else if (rand < this.rock + this.paper) {
            this.paper--;
            this.unit2 = "p"
        } else {
            this.scissors--;
            this.unit2 = "s"
        }

        if (this.unit1 === "r") {
            if (this.unit2 === "r") {
                this.scissors++;
            } else if (this.unit2 === "p") {
                this.paper++;
            } else {
                this.rock++;
            }

        } else if (this.unit1 === "p") {
            if (this.unit2 === "r") {
                this.paper++;
            } else if (this.unit2 === "p") {
                this.rock++;
            } else {
                this.scissors++;
            }
        } else {
            if (this.unit2 === "r") {
                this.rock++;
            } else if (this.unit2 === "p") {
                this.scissors++;
            } else {
                this.paper++;
            }
        }

        // return [r, p, s, this.unit1, this.unit2];
    }
}

export default RockPaperScissors;