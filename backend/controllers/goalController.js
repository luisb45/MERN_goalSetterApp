//Get goals
//Get /api/goals
//private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
};

//Set goals
//POST /api/goals
//private
const setGoal = (req, res) => {
    res.status(200).json({message: 'Set goal'})

};

//Update goals
//PUT /api/goals/:id
//private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})

};

//Delete goals
//Delete /api/goals/:id
//private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
};



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}