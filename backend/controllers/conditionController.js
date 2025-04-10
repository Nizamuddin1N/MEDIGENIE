import {
    getAllConditions as getAllConditionsService,
    getConditionByName as getConditionByNameService,
    createCondition,
    updateConditionByName,
    deleteConditionByName,
    addRemedyToCondition,
    addExerciseToCondition,
    addNutritionToCondition
} from '../services/conditionService.js';

export const getAllConditions = async(req, res) => {
    try {
        const conditions = await getAllConditionsService();
        res.json(conditions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getConditionByName = async(req, res) => {
    try {
        const condition = await getConditionByNameService(req.params.name);
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.json(condition);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addCondition = async(req, res) => {
    try {
        const condition = await createCondition(req.body);
        res.status(201).json(condition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateCondition = async(req, res) => {
    try {
        const condition = await updateConditionByName(
            req.params.name,
            req.body
        );
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.json(condition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteCondition = async(req, res) => {
    try {
        const condition = await deleteConditionByName(req.params.name);
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.json({ message: 'Condition deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addRemedy = async(req, res) => {
    try {
        const condition = await addRemedyToCondition(
            req.params.name,
            req.body
        );
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.status(201).json(condition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const addExercise = async(req, res) => {
    try {
        const condition = await addExerciseToCondition(
            req.params.name,
            req.body
        );
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.status(201).json(condition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const addNutrition = async(req, res) => {
    try {
        const condition = await addNutritionToCondition(
            req.params.name,
            req.body
        );
        if (!condition) {
            return res.status(404).json({ error: 'Condition not found' });
        }
        res.status(201).json(condition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};