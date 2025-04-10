const express = require('express');
const ConditionController = require('../controllers/conditionController');

const router = express.Router();

// Basic CRUD routes
router.get('/', ConditionController.getAllConditions);
router.get('/:name', ConditionController.getConditionByName);
router.post('/', ConditionController.createCondition);
router.put('/:name', ConditionController.updateCondition);
router.delete('/:name', ConditionController.deleteCondition);

// Sub-document routes
router.post('/:name/remedies', ConditionController.addRemedy);
router.post('/:name/exercises', ConditionController.addExercise);
router.post('/:name/nutrition', ConditionController.addNutrition);

module.exports = router;