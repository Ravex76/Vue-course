function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const app=Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logMessages: []
		};
	},
	computed: {
		monsterBarStyles() {
			if (this.monsterHealth < 0) {
				return {width: '0%'};
			}
			return {width: this.monsterHealth + '%'};
		},
		playerBarStyles() {
			if (this.playerHealth < 0) {
				return {width: '0%'};
			}
			return {width: this.playerHealth + '%'};
		},
		isSpecialAttackNotAvailable() {
			return this.currentRound % 3 !== 0;
		}
	},
	watch: {
		playerHealth(value) {
			if (value <= 0) {
				if (this.monsterHealth <= 0) {
					this.winner = 'draw';
				} else {
					this.winner = 'monster';
				}
			}
		},
		monsterHealth(value) {
			if (value <= 0) {
				if (this.playerHealth <= 0) {
					this.winner = 'draw';
				} else {
					this.winner = 'player';
				}
			}
		}
	},
	methods: {
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandom(5, 12);
			this.monsterHealth -= attackValue;
			this.addLogMessage('player', 'attack', attackValue);
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandom(5, 12);
			this.playerHealth -= attackValue;
			this.addLogMessage('monster', 'attack', attackValue);
		},
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandom(10, 24);
			this.monsterHealth -= attackValue;
			this.addLogMessage('player', 'special attack', attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healValue = getRandom(8, 20);
			this.playerHealth += healValue;
			if (this.playerHealth > 100) {
				this.playerHealth = 100;
			}
			this.addLogMessage('player', 'heal', healValue);
			this.attackPlayer();
		},
		startNew() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.winner = null;
			this.currentRound = 0;
			this.logMessages = [];
		},
		surrender() {
			this.winner = 'monster';
		},
		addLogMessage(who, what, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value
			});
		}
	}
});

app.mount('#game');