const bookmodel = require('../models/books.model')
exports.getAllBooks = async function(req,res) {
    try{
    const books = await bookmodel.find()
    res.json({message: "Done" , data:books})
}catch(err){
    res.status(400).send({
        message: err
    })
}
}

exports.addOneBook = async function(req,res) {
    try{
        const creatBook = await bookmodel.create(req.body)
        res.json({message: "Book Created" , data: creatBook})
    }catch(err){
        res.status(400).send({
            message: err
        })
    }
}

exports.deleteOneBook = async function(req,res) {
    try{
        if(req.user.role === 'admin'){
            await bookmodel.findByIdAndDelete(req.params.id)
            res.json({message: "Book Deleted", data: []})
        }else{
            res.status(403).send({
                message: 'you Dont have access to delete a book you need to be an admin'
            })
        }
    }catch(err){
        res.status(400).send({
            message: err
        })
    }
}
