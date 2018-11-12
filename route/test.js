const express = require('express');
const router = express.Router();
module.exports = router;

router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));

let scores = [{
        id: 1,
        subject: 'English',
        score: 78,
        studentId: 1
    },
    {
        id: 2,
        subject: 'Math',
        score: 86,
        studentId: 4
    },
    {
        id: 3,
        subject: 'Science',
        score: 65,
        studentId: 5
    },
    {
        id: 4,
        subject: 'English',
        score: 71,
        studentId: 6
    },
    {
        id: 5,
        subject: 'Music',
        score: 90,
        studentId: 8
    },
    {
        id: 6,
        subject: 'History',
        score: 99,
        studentId: 10
    },
    {
        id: 7,
        subject: 'Programming',
        score: 93,
        studentId: 11
    },
    {
        id: 8,
        subject: 'Math',
        score: 70,
        studentId: 12
    }
];

router.get('/', function (req, res) {
    res.send(scores);
});

router.get('/:id', function (req, res) {
    let id = req.params.id;
    if (id > student.length) {
        res.send(404)
    };
    res.send(scores[id - 1]);
});

router.post('/', function (req, res) {
    let addTest = scores.length + 1;
    let testRow = {
        id: addTest,
        score: req.body.score,
        studentId: req.body.studentId,
        subject: req.body.subject,
    };
    scores.push(testRow);
});

router.put('/:id', function (req, res) {
    let index = req.params.id;
    if (index > student.length) {
        res.send(404)
    };
    scores[index].id = index;
    scores[index].score = req.body.score;
    scores[index].studentID = req.body.studentID;
    scores[index].subject = req.body.subject;
    res.status(201).send(`${req.body.score} has been added.`);
});

router.delete('/:id', function (req, res) {
    let index = req.params.id;
    if (index > student.length) {
        res.send(404)
    };
    let removed = scores.splice(index, 1);
    res.status(201).send(`${removed} has been removed.`);
});