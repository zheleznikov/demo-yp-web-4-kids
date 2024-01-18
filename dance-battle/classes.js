class Hero {

	constructor(name, level, healthPoints, stats) {
		this.name = name;
		this.level = level;
		this.healthPoints = healthPoints;
		this.stats = stats;
	}

	displayHero() {
		const heroInfo =
			`Имя: ${this.name}` +
			`\Уровень: ${this.level}` +
			`\Жизненные силы: ${this.healthPoints}` +
			`\Сила: ${this.stats.str}` +
			`\Интеллект: ${this.stats.int}` +
			`\Ловкость: ${this.stats.agi}`;

		console.log(heroInfo);
	}
}

class Mage extends Hero {

	constructor(name, level, healthPoints, stats, hasTectonicPotion, mana) {

		super(name, level, healthPoints, stats);
		this.hasTectonicPotion = hasTectonicPotion;
		this.mana = mana;
	}


	healHero(hero) {
		if (this.mana > gameParameters.MIN_STAT) {
			const healAmount = this.level * 10;

			hero.healthPoints += healAmount;
			console.log(this.name + ' продлевает танец ' + hero.name + ' на ' + healAmount + ' единиц.');

			this.mana -= healAmount * (10 / this.level) - this.level;

		} else {
			alert('Недостаточно маны...');
		}
	}


	displayHero() {
		super.displayHero();

		console.log(`Мана: ${this.mana}`);

		if (this.hasTectonicPotion === 'true') {
			console.log('Есть зелье для тектоника');
		}
	}
}



class Knight extends Hero {
	constructor(name, level, healthPoints, stats, isHorseTango, energy) {
		super(name, level, healthPoints, stats);
		this.isHorseTango = isHorseTango;
		this.energy = energy;
	}
	gainAgility(hero) {
		if (this.energy > gameParameters.MIN_STAT) {
			const gainAmount = Math.round((this.level * this.energy) / 30);

			if (hero.stats.agi + gainAmount < gameParameters.MAX_STAT) {
				hero.stats.agi += gainAmount;
				console.log(this.name + ' увеличивает ловкость ' + hero.name + ' на ' + gainAmount + ' единиц.');
			} else {
				hero.stats.agi = gameParameters.MAX_STAT;
			}

			const energyAmount = (gainAmount * 10) / this.level;
			if (this.energy - energyAmount > gameParameters.MIN_STAT) {
				this.energy -= energyAmount;
			} else {
				this.energy = gameParameters.MIN_STAT;
			}

			displayPlayerHero(playerHero);
		} else {
			alert('Недостаточно энергии...');
		}
	}

	displayHero() {
		super.displayHero();

		console.log(`Энергия: ${this.energy}`);

		if (this.isHorseTango === 'true') {
			console.log('Этот герой может танцевать танго на коне');
		}
	}
}
