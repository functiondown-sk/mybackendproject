const publisherModel= require("../models/publisherModel")


const createPublisher= async function (req, res) {
    let data = req.body
    let publisherCreated = await publisherModel.create(data)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let publisherData = await publisherModel.find()
    res.send({data: books})
}

module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData