const { Router } = require("express");
const { saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController.js");
const { getToDo } = require("../controllers/ToDoController.js");
const router = Router()
router.get("/", getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
module.exports = router;