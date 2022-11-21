const asyncHandler = require('express-async-handler');

//Get goals
//Get /api/goals
//private
const getGoals =  asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
});

//Set goals
//POST /api/goals
//private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
});

//Update goals
//PUT /api/goals/:id
//private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
});

//Delete goals
//Delete /api/goals/:id
//private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}