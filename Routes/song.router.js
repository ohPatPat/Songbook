import express from "express";
import SongController from "../Controllers/song_controller.js";

const controller = new SongController()
const router = express.Router()

router.get('/', (req, res) => { controller.list(req, res) })
router.get('/:id([0-9]*)', (req, res) => { controller.get(req, res) })
router.get('/api/songs/search', (req, res) => { controller.search(req, res)})


export {router}