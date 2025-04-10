import express from 'express';
import {
    getAllConditions,
    getConditionByName,
    addCondition,
    updateCondition,
    deleteCondition,
    addRemedy,
    addExercise,
    addNutrition
} from '../controllers/conditionController.js';

const router = express.Router();

// Basic CRUD routes
router.get('/', getAllConditions);
router.get('/:name', getConditionByName);
router.post('/', addCondition);
router.put('/:name', updateCondition);
router.delete('/:name', deleteCondition);

// Sub-document routes
router.post('/:name/remedies', addRemedy);
router.post('/:name/exercises', addExercise);
router.post('/:name/nutrition', addNutrition);

export default router;