const uuid = require('uuid')
const path = require('path')
const { Product } = require('../models/models')
const ApiError = require('../error/ApiError')
const axios = require('axios')
const {parse} = require('node-html-parser')
const  { Op, Sequelize } = require("sequelize");

class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, tag, img, description, shortDescription } = req.body  
            console.log({ name, price, tag, img, description })
            const device = await Product.create({ name, price, tag, img, description, shortDescription })
            console.log(device)
     
            return res.json(device)
        } catch (e) {
            console.log("error")
            next(ApiError.badRequest(e))
        }   
    }  
  
    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 100
        let offset = page * limit - limit
        let devices = await Product.findAndCountAll({limit, offset})

        return res.json(devices)
    }


    async getOne(req, res) {
        const {id} = req.params
        const device = await Product.findOne(
            {
                where: {id},
            }
        )

        return res.json(device)
    }

    async remove (req, res) {
        try {
            console.log(req.params.id);
            const postId = req.params.id
    
            await Product.destroy({
                where: {id: postId},
            })

            const devices = await Product.findAll()
            
            return res.json(devices)
    
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось получить девайс'
            })
        }
    }

}

module.exports = new ProductController()