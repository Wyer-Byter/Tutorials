new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        healthYou: 100,
        healthMonster: 100,
        maxAttack: 15,
        maxSpecialAttack: 30,
        maxHeal: 15,
        attackLog: []
    },
    methods: {
        attack: function() {
            var yourAttack = this.randomGen(this.maxAttack);
            var monsterAttack = this.randomGen(this.maxAttack);

            this.healthMonster = this.healthMonster - yourAttack;
            this.healthYou = this.healthYou - monsterAttack;
        },
        specialAttack: function() {
            var yourAttack = this.randomGen(this.maxSpecialAttack);
            var monsterAttack = this.randomGen(this.maxAttack);

            this.healthMonster = this.healthMonster - yourAttack;
            this.healthYou = this.healthYou - monsterAttack;
        },
        heal: function() {
            var yourHeal = this.randomGen(this.maxAttack);
            var monsterAttack = this.randomGen(this.maxAttack);

            this.healthYou = this.healthYou - monsterAttack + yourHeal;
        },
        randomGen: function(maxNumber) {
            return Math.floor(Math.random() * (maxNumber + 1));
        }
    }
})