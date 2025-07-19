export default class Actor {
    constructor(name) {
        this.name = name;
        this.abilities = new Map();
    }

    whoCan(...abilities) {
        for (const ability of abilities) {
            this.abilities.set(ability.constructor, ability);
        }
        return this;
    }

    abilityTo(AbilityClass) {
        const ability = this.abilities.get(AbilityClass);
        if (!ability) {
            throw new Error(`${this.name} does not have the ability to ${AbilityClass.name}`);
        }
        return ability;
    }

    async attemptsTo(...tasks) {
        for (const task of tasks) {
            await task.performAs(this);
        }
    }

    async asks(question) {
        return question.answeredBy(this);
    }
}