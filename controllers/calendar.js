const Todo = require('../models/Todo')
const Pet = require('../models/Pet')

module.exports = {
    getCalendar: async (req, res) => {
        try {
            const todos = await Todo.find({userId:req.user.id})
            const pets = await Pet.find({userId:req.user.id})
            const newDate = new Date()
			const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('calendar.ejs', {
                todos: todos,
                pets: pets,
				left: itemsLeft,
                user: req.user,
                calendar: newDate
            })
            
        } catch (err) {
            console.error(err)
        }
    }
}