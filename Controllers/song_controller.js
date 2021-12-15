import SongModel from "../Modals/song.model.js";

const model = new SongModel()

class SongController {
    constructor() {    }

    list = async (req, res) => {
        const result = await model.list(req, res)
        res.json(result)
    }

    get = async (req, res) => {
        const result = await model.get(req, res)
        res.json(result)
    }

    update = async (req, res) => {
        const result = await model.update(req, res)
        res.json(result)
    }

    search = async (req, res) => {
        const result = await model.search(req, res)
        res.json(result)
    }

}
export default SongController