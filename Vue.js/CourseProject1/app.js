new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        healthMax: 100,
        healthYou: 100,
        healthMonster: 100,
        maxAttack: 15,
        maxSpecialAttack: 30,
        maxHeal: 15,
        maxMonsterAttack: 20,
        minAttack: 2,
        minSpecialAttack: 15,
        minMonsterAttack: 3,
        attackLogs: []
    },
    methods: {
        attack: function() {
            var yourAttack = this.randomGen(this.minAttack, this.maxAttack);
            this.healthMonster -= yourAttack;
            this.attackLogs.unshift({isPlayer: true, text: "Player hits Monster for " + yourAttack});
            if (this.hasWon()) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function() {
            var yourAttack = this.randomGen(this.minSpecialAttack, this.maxSpecialAttack);
            this.healthMonster -= yourAttack;
            this.attackLogs.unshift({isPlayer: true, text: "Player hits Monster hard for " + yourAttack});
            if (this.hasWon()) {
                return;
            }
            
            this.monsterAttack();
        },
        heal: function() {
            if (this.healthYou < this.healthMax - this.maxHeal) {
                this.healthYou += this.maxHeal;
            } else {
                this.healthYou = this.healthMax;
            }
            this.attackLogs.unshift({isPlayer: true, text: "Player healse for " + this.maxHeal});

            this.monsterAttack();
        },
        randomGen: function(minNumber, maxNumber) {
            var range = (maxNumber - minNumber) + 1
            return Math.floor((Math.random() * range) + minNumber);
        },
        monsterAttack: function() {
            var damage = this.randomGen(this.minMonsterAttack, this.maxMonsterAttack);
            this.healthYou -= damage;
            this.attackLogs.unshift({isPlayer: false, text: "Monster hits Player for " + damage});
            if (this.hasWon()) {
                return;
            }
        },
        startGame: function() {
            this.gameStarted = true;
            this.healthYou = this.healthMax;
            this.healthMonster = this.healthMax;
            this.attackLogs = [];
        },
        giveUp: function() {
            this.gameStarted = false;
        },
        hasWon: function() {
            if (this.healthMonster <= 0) {
                if (confirm("You won! New game?")) {
                    this.startGame();  
                } else {
                    this.gameStarted = false;
                }

                return true;
            } else if (this.healthYou <= 0) {
                if (confirm("You lost! New game?")) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }

                return true;
            }
            
            return false;
        }
    }
})