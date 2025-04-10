import Condition from '../models/Condition.js';

export const getAllConditions = async() => {
    return await Condition.find({});
};

export const getConditionByName = async(name) => {
    return await Condition.findOne({ name });
};

export const createCondition = async(conditionData) => {
    const condition = new Condition(conditionData);
    return await condition.save();
};

export const updateConditionByName = async(name, updateData) => {
    return await Condition.findOneAndUpdate({ name },
        updateData, { new: true, runValidators: true }
    );
};

export const deleteConditionByName = async(name) => {
    return await Condition.findOneAndDelete({ name });
};

export const addRemedyToCondition = async(name, remedy) => {
    return await Condition.findOneAndUpdate({ name }, { $push: { homeRemedies: remedy } }, { new: true });
};

export const addExerciseToCondition = async(name, exercise) => {
    return await Condition.findOneAndUpdate({ name }, { $push: { exercises: exercise } }, { new: true });
};

export const addNutritionToCondition = async(name, nutrition) => {
    return await Condition.findOneAndUpdate({ name }, { $push: { nutrition: nutrition } }, { new: true });
};