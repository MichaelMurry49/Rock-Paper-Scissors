/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rock_paper_scissors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rock_paper_scissors */ \"./src/rock_paper_scissors.js\");\n\n\nclass Index {\n    constructor(){\n        this.game = new _rock_paper_scissors__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0,0);\n        this.rockIMG = new Image();\n        this.rockIMG.src = './assets/rock.png';\n        this.paperIMG = new Image();\n        this.paperIMG.src = './assets/paper.png'\n        this.scissorsIMG = new Image();\n        this.scissorsIMG.src = './assets/scissors.png'\n        this.xIMG = new Image();\n        this.xIMG.src = './assets/x.png'\n        this.equalIMG = new Image();\n        this.equalIMG.src = './assets/equal.png'\n        this.checkIMG = new Image();\n        this.checkIMG.src = './assets/check.png'\n        this.paperwins = new Image();\n        this.paperwins.src = './assets/paperwins.png'\n    }\n\n    setVals(r,p,s){\n        this.game.setRock(r);\n        this.game.setPaper(p);\n        this.game.setScissors(s);\n    }\n    nextStep(r, p, s){\n        this.setVals(r,p,s);\n        this.game.step();\n\n    }\n\n    simulate(r, p, s){\n        this.setVals(r,p,s);\n        this.game.simulate();\n    }\n\n    estimate(num, r, p, s){\n        this.setVals(r,p,s);\n        return this.game.estimate(num);\n    }\n\n    draw(ctx){\n        ctx.clearRect(0, 0, 10000, 10000)\n        ctx.font = \"20px Arial\";\n        if(this.game.getUnitCount() <= 1){\n            ctx.fillStyle = \"white\";\n            if(this.game.getRock() === 1){\n                ctx.fillStyle = \"white\";\n                ctx.fillText(\"Rock Wins!\", 105, 130);\n                ctx.drawImage(this.rockIMG, 80, -10, 150, 150);\n            } else if(this.game.getPaper() === 1){\n                ctx.fillStyle = \"white\";\n                ctx.fillText(\"Paper Wins!\", 100, 142);\n                ctx.drawImage(this.paperIMG, 80, -10, 150, 150);\n            } else if(this.game.getScissors() === 1){\n                ctx.fillStyle = \"white\";\n                ctx.fillText(\"Scissors Win!\", 90, 115);\n                ctx.drawImage(this.scissorsIMG, 80, 0, 150, 150);\n            } else {\n                ctx.fillStyle = \"white\";\n                ctx.fillText(\"Invalid Input\", 100, 140);\n                ctx.drawImage(this.xIMG, 80, -10, 150, 150);\n            }\n        } else if(this.game.getUnit1() === \"r\"){\n            if(this.game.getUnit2() === \"r\"){\n                ctx.drawImage(this.rockIMG, 0, 35, 80, 80);\n                ctx.drawImage(this.rockIMG, 80, 35, 80, 80);\n                ctx.drawImage(this.equalIMG, 160, 50, 50, 50)\n                ctx.drawImage(this.scissorsIMG, 200, 35, 100, 100);\n                ctx.drawImage(this.xIMG, 0, 35, 80, 80);\n                ctx.drawImage(this.xIMG, 80, 35, 80, 80);\n                ctx.drawImage(this.checkIMG, 200, 35, 100, 100);\n            } else if(this.game.getUnit2() === \"p\"){\n                ctx.drawImage(this.rockIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.paperIMG, 150, 0, 150, 150);\n                ctx.drawImage(this.xIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.checkIMG, 150, 0, 150, 150);\n            } else {\n                ctx.drawImage(this.rockIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.scissorsIMG, 150, 0, 150, 150);\n                ctx.drawImage(this.checkIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.xIMG, 150, 0, 150, 150);\n            }\n        } else if(this.game.getUnit1() === \"p\"){\n            if (this.game.getUnit2() === \"r\") {\n                ctx.drawImage(this.paperIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.rockIMG, 150, 0, 150, 150);\n                ctx.drawImage(this.checkIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.xIMG, 150, 0, 150, 150);\n            } else if (this.game.getUnit2() === \"p\") {\n                ctx.drawImage(this.paperIMG, 0, 35, 80, 80);\n                ctx.drawImage(this.paperIMG, 80, 35, 80, 80);\n                ctx.drawImage(this.equalIMG, 150, 50, 50, 50)\n                ctx.drawImage(this.rockIMG, 200, 35, 100, 100);\n                ctx.drawImage(this.xIMG, 0, 35, 80, 80);\n                ctx.drawImage(this.xIMG, 80, 35, 80, 80);\n                ctx.drawImage(this.checkIMG, 200, 35, 100, 100);\n            } else {\n                ctx.drawImage(this.paperIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.scissorsIMG, 150, 0, 150, 150);\n                ctx.drawImage(this.xIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.checkIMG, 150, 0, 150, 150);\n            }\n        } else {\n            if (this.game.getUnit2() === \"r\") {\n                ctx.drawImage(this.scissorsIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.rockIMG, 150, 0, 150, 150);\n                ctx.drawImage(this.xIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.checkIMG, 150, 0, 150, 150);\n            } else if (this.game.getUnit2() === \"p\") {\n                ctx.drawImage(this.scissorsIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.paperIMG, 150, 0, 150, 150);\n                ctx.drawImage(this.checkIMG, 0, 0, 150, 150);\n                ctx.drawImage(this.xIMG, 150, 0, 150, 150);\n            } else {\n                ctx.drawImage(this.scissorsIMG, 0, 35, 80, 80);\n                ctx.drawImage(this.scissorsIMG, 80, 35, 80, 80);\n                ctx.drawImage(this.equalIMG, 160, 50, 50, 50)\n                ctx.drawImage(this.paperIMG, 200, 35, 100, 100);\n                ctx.drawImage(this.xIMG, 0, 35, 80, 80);\n                ctx.drawImage(this.xIMG, 80, 35, 80, 80);\n                ctx.drawImage(this.checkIMG, 200, 35, 100, 100);\n            }\n        }\n    }\n    render(){\n        let index = this;\n        document.addEventListener(\"DOMContentLoaded\", function(){\n            let rpsCanvas = document.getElementById(\"rock-paper-scissors\");\n            const ctx = rpsCanvas.getContext(\"2d\");\n            let next = document.getElementById(\"next\");\n            let sim = document.getElementById(\"sim\");\n            let estimate = document.getElementById(\"estimate\")\n            index.amount = document.getElementById(\"amount\")\n            index.amount2 = document.getElementById(\"amount2\")\n            index.amount3 = document.getElementById(\"amount3\")\n            index.rocks = document.getElementById(\"rocks\")\n            index.paper = document.getElementById(\"paper\")\n            index.scissors = document.getElementById(\"scissors\")\n            index.num = document.getElementById(\"trialcount\")\n            index.rockProb = document.getElementById(\"rock-prob\")\n            index.paperProb = document.getElementById(\"paper-prob\")\n            index.scissorsProb = document.getElementById(\"scissors-prob\")\n\n            next.addEventListener(\"click\", () => {\n                let rocks = parseInt(index.rocks.value,10);\n                let paper = parseInt(index.paper.value,10);\n                let scissors = parseInt(index.scissors.value,10);\n                index.nextStep(rocks, paper, scissors);\n                index.rocks.value = index.game.getRock();\n                index.amount.innerHTML = index.game.getRock();\n                index.paper.value = index.game.getPaper();\n                index.amount2.innerHTML = index.game.getPaper();\n                index.scissors.value = index.game.getScissors();\n                index.amount3.innerHTML = index.game.getScissors();\n                index.draw(ctx);\n            })\n            sim.addEventListener(\"click\", () => {\n                let rocks = parseInt(index.rocks.value, 10);\n                let paper = parseInt(index.paper.value, 10);\n                let scissors = parseInt(index.scissors.value, 10);\n                index.simulate(rocks, paper, scissors);\n                index.rocks.value = index.game.getRock();\n                index.amount.innerHTML = index.game.getRock();\n                index.paper.value = index.game.getPaper();\n                index.amount2.innerHTML = index.game.getPaper();\n                index.scissors.value = index.game.getScissors();\n                index.amount3.innerHTML = index.game.getScissors();\n                index.draw(ctx);\n            })\n            estimate.addEventListener(\"click\", () => {\n                let rocks = parseInt(index.rocks.value, 10);\n                let paper = parseInt(index.paper.value, 10);\n                let scissors = parseInt(index.scissors.value, 10);\n                let num = parseInt(index.num.value, 10);\n                let probs = index.estimate(num, rocks, paper, scissors);\n                index.rockProb.innerHTML = probs[0];\n                index.paperProb.innerHTML = probs[1];\n                index.scissorsProb.innerHTML = probs[2];\n            })\n           \n        })\n    }\n}\n\nlet ind = new Index();\nind.render();\n// ind.draw(5)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rock_paper_scissors.js":
/*!************************************!*\
  !*** ./src/rock_paper_scissors.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass RockPaperScissors {\n    constructor(r, p, s){\n        this.rock = r;\n        this.paper = p;\n        this.scissors = s;\n        this.unit1 = \"\";\n        this.unit2 = \"\";\n    }\n\n    getUnitCount() {\n        return this.rock + this.paper + this.scissors;\n    }\n\n    getUnit1(){\n        return this.unit1;\n    }\n\n    getUnit2(){\n        return this.unit2;\n    }\n\n    getRock() {\n        return this.rock;\n    }\n\n    getPaper() {\n        return this.paper;\n    }\n\n    getScissors() {\n        return this.scissors;\n    }\n\n    setRock(r) {\n        this.rock = r;\n    }\n\n    setPaper(p) {\n        this.paper = p;\n    }\n\n    setScissors(s) {\n        this.scissors = s;\n    }\n\n    estimate(num) {\n        if(num < 1) return [0,0,0];\n        let probs = [0,0,0];\n        let r = this.rock;\n        let p = this.paper;\n        let s = this.scissors;\n        for(let i = 0; i < num; i++){\n            this.simulate();\n            if(this.rock === 1){\n                probs[0]++;\n            } else if(this.paper === 1){\n                probs[1]++;\n            } else {\n                probs[2]++;\n            }\n            this.setRock(r)\n            this.setPaper(p);\n            this.setScissors(s);\n        }\n        return probs.map(el => (el/num)*100)\n    }\n\n    simulate() {\n        let total = this.getUnitCount();\n        for(let i = total; i > 1; i--){\n            this.step();\n        }\n    }\n\n    step() {\n\n        let size = this.getUnitCount();\n        if(size <= 1) return;\n        let rand = Math.floor(Math.random() * size);\n        console.log(this.rock, this.paper, this.scissors)\n        console.log(rand);\n        if (rand < this.rock) {\n            this.rock--;\n            this.unit1 = \"r\"\n        } else if (rand < this.rock + this.paper) {\n            this.paper--;\n            this.unit1 = \"p\"\n        } else {\n            this.scissors--;\n            this.unit1 = \"s\"\n        }\n        rand = Math.floor(Math.random() * (size-1));\n        console.log(this.rock, this.paper, this.scissors)\n        // console.log(size-1);\n        console.log(rand);\n        if (rand < this.rock) {\n            this.rock--;\n            this.unit2 = \"r\"\n        } else if (rand < this.rock + this.paper) {\n            this.paper--;\n            this.unit2 = \"p\"\n        } else {\n            this.scissors--;\n            this.unit2 = \"s\"\n        }\n\n        if (this.unit1 === \"r\") {\n            if (this.unit2 === \"r\") {\n                this.scissors++;\n            } else if (this.unit2 === \"p\") {\n                this.paper++;\n            } else {\n                this.rock++;\n            }\n\n        } else if (this.unit1 === \"p\") {\n            if (this.unit2 === \"r\") {\n                this.paper++;\n            } else if (this.unit2 === \"p\") {\n                this.rock++;\n            } else {\n                this.scissors++;\n            }\n        } else {\n            if (this.unit2 === \"r\") {\n                this.rock++;\n            } else if (this.unit2 === \"p\") {\n                this.scissors++;\n            } else {\n                this.paper++;\n            }\n        }\n\n        // return [r, p, s, this.unit1, this.unit2];\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RockPaperScissors);\n\n//# sourceURL=webpack:///./src/rock_paper_scissors.js?");

/***/ })

/******/ });