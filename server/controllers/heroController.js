const ApiError = require('../error/ApiError')
const {Hero} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class HeroController {
    async create(req, res, next) {
        try {
            const {nickname, real_name, origin_description, superpowers, catch_phrase} = req.body
            const {images} = req.files
            let fileName = uuid.v4() + '.jpg'
            images.mv(path.resolve(__dirname, '..', 'static', fileName))
            const hero = await Hero.create({nickname, real_name, origin_description, superpowers, catch_phrase, images: fileName})
            return res.json(hero)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1;
        limit = limit || 5;
        let offset = page * limit - limit
        const heros = await Hero.findAndCountAll({limit, offset})
        return res.json(heros)
    }
    async getOne(req, res) {
        const {id} = req.params
        const hero = await Hero.findOne(
            {
                where: {id}
            }
        )
        return res.json(hero)
    }

    async edit(req, res) {

    }

    async delete(req, res) {
        // const {id} = req.params;
        // const hero = Hero.deleteOne(id)
        // return res.json(hero)

    }
}

module.exports = new HeroController()
