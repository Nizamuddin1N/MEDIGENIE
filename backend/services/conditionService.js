const Condition = require('../models/Condition');

class ConditionService {
    async getAllConditions() {
        return await Condition.find({});
    }

    async getConditionByName(name) {
        const condition = await Condition.findOne({ name });
        if (!condition) {
            throw new Error('Condition not found');
        }
        return condition;
    }

    async createCondition(conditionData) {
        const condition = new Condition(conditionData);
        await condition.save();
        return condition;
    }

    async updateCondition(name, updateData) {
        const condition = await Condition.findOneAndUpdate({ name },
            updateData, { new: true, runValidators: true }
        );
        if (!condition) {
            throw new Error('Condition not found');
        }
        return condition;
    }

    async deleteCondition(name) {
        const condition = await Condition.findOneAndDelete({ name });
        if (!condition) {
            throw new Error('Condition not found');
        }
        return condition;
    }

    async addRemedy(name, remedy) {
        const condition = await Condition.findOneAndUpdate({ name }, { $push: { homeRemedies: remedy } }, { new: true });
        if (!condition) {
            throw new Error('Condition not found');
        }
        return condition;
    }

    async addExercise(name, exercise) {
        const condition = await Condition.findOneAndUpdate({ name }, { $push: { exercises: exercise } }, { new: true });
        if (!condition) {
            throw new Error('Condition not found');
        }
        return condition;
    }

    async addNutrition(name, nutrition) {
        const condition = await Condition.findOneAndUpdate({ name }, { $push: { nutrition: nutrition } }, { new: true });
        if (!condition) {
            throw new Error('Condition not found');
        }
        return condition;
    }
}

module.exports = new ConditionService();