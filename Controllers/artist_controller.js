import ArtistModel from "../Modals/artist.model.js";

const model = new ArtistModel()

class ArtistController {
    constructor() { }

    list = async (req, res) => {
        const result = await model.list(req, res)
        res.json(result)
    }

    get = async (req, res) => {
        const result = await model.get(req, res)
        res.json(result)
    }

    create = async (req, res) => {
        const result = await model.create(req, res)
        res.json(result)
    }

    update = async (req, res) => {
        const result = await model.update(req, res)
        res.json(result)
    }

    destroy = async (req, res) => {
        const result = await model.destroy(req, res)
        res.json(result)
    }


    search = async (req, res) => {
        const result = await model.search(req, res)
        res.json(result)
    }

}
export default ArtistController