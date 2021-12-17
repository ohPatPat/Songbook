import express from "express";
import ArtistController from "../Controllers/artist_controller.js";

const controller = new ArtistController()
const router = express.Router()

router.get('/api/artist', (req, res) => { controller.list(req, res) })
router.get('/api/artist/:id([0-9]*)', (req, res) => { controller.list(req, res) })
router.post('/api/artist/', (req, res) => { controller.create(req, res) })
router.put('/api/artist/', (req, res) => { controller.update(req, res) })
router.delete('/api/artist/:id([0-9]*)', (req, res) => { controller.destroy(req, res) })


router.get('/api/artist/search', (req, res) => { controller.search(req, res)})


export {router}