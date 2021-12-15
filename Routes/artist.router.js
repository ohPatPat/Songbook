import express from "express";

const router = express.Router()

router.get('/artister', (req, res) => {
    res.status(200).send('Se liste over artister')
})

export{router}