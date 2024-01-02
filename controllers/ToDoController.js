const ToDoModel = require('../models/ToDoModel')

// const ToDo = require('../models/ToDoModel')

// module.exports.getToDo = async(req, res) => {
//     const toDo = await ToDoModel.find()
//     res.send(toDo)
// }
// module.exports.saveToDo = async(req, res) => {
//     const { text } = req.body
//     ToDoModel
//         .create({ text })
//         .then((data) => {
//             console.log("Added Successfully..");
//             console.log(data);
//             res.send(data)
//         })
// }
module.exports = {
    getToDo: async(req, res) => {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    },
    saveToDo: async(req, res) => {
        const { text } = req.body;
        ToDoModel.create({ text })
            .then((data) => {
                console.log("Added Successfully..");
                console.log(data);
                res.send(data);
            })
            .catch((error) => {
                console.error("Error:", error);
                res.status(500).send("An error occurred.");
            });
    },
    updateToDo: async(req, res) => {
        const { _id, text } = req.body
        ToDoModel
            .findByIdAndUpdate(_id, { text })
            .then(() => res.send("Updated Successfully..."))
            .catch((err) => console.log(err))
    },
    deleteToDo: async(req, res) => {
        const { _id } = req.body
        ToDoModel
            .findByIdAndDelete(_id)
            .then(() => res.send("Deleted Successfully..."))
            .catch((err) => console.log(err))
    }
};