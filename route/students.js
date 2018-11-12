const express = require('express');
const router = express.Router();
module.exports = router;

router.use(express.json());
router.use(express.urlencoded({
  extended: true
}));


let student = [
    {id: 1, name: 'Dan'}, 
    {id: 2, name: 'Kim' }, 
    {id: 3, name: 'Dexter'}, 
    {id: 4, name: 'Winnie'}, 
    {id: 5, name: 'Stewie'}, 
    {id: 6, name: 'Mordecai'}, 
    {id: 7, name: 'Rigby'}, 
    {id: 8, name: 'Malley'}, 
    {id: 9, name: 'June'}, 
    {id: 10, name: 'Hamlet'}, 
    {id: 11, name: 'Jack'}, 
    {id: 12, name: 'Horse'}, 
    {id: 13, name: 'Eric'}, 
    {id: 14, name: 'Tobey'}, 
    {id: 15, name: 'Lily'}, 
    {id: 16, name: 'Chiara'}
];

router.get('/', function (req, res) {
  let studentNames = student.map((element) => { return element.name });
  res.send(studentNames);
});

router.get('/:id', function (req, res) {
  let id = req.params.id;
  if (id > student.length) { res.send(404) };
  res.send(student[id - 1].name);
});

router.post('/', function (req, res) {
  let nameObj = req.body;
  let name = nameObj.name;
  if (name === '') { res.sendStatus(400) };
  student.push({ id:student.length + 1, name: name });
  res.status(201).send(`${name} has been added.`);
});

router.put('/:id', function (req, res) {
  let nameObj = req.body;
  let name = nameObj.name;
  if (name === '') { res.sendStatus(400) };
  let index = parseInt(req.params.id);
  if (index > student.length) { res.send(404) };
  student[index].id = index;
  student[index].name = name;
  res.status(201).send(`${name} has been added.`);
});

router.delete('/:id', function (req, res) {
  let name = req.params.name;
  if (name === '') { res.sendStatus(400) };
  let index = req.params.id;
  if (index > student.length) { res.send(404) };
  let removed = student.splice(index,1);
  res.status(201).send(`${removed} has been removed.`);
});

