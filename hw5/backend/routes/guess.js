import express from 'express'
const router = express.Router()

let number = 50;

const genNumber = () => {
    number = Math.floor(Math.random() * 100 + 1);
}

router.post('/start', (_, res) => {
    genNumber();
    res.json({ msg: 'The game has started.' })
})

router.get('/guess', (req, res) => {
    let msg;
    if (req.query.number > number) msg = 'Smaller';
    else if (req.query.number < number) msg = 'Larger';
    else msg = 'Equal';
    res.json({ msg: msg });
})

router.post('/restart', (_, res) => {
    genNumber();
    res.json({ msg: 'The game has restarted.' })
})

export default router;