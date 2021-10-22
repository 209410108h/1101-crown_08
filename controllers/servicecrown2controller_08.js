const category_08 = require('../models/category_08');

exports.getCategories = async (req, res) => {
    try {
        return await category_08.fetchAll();
    } catch (err){
        console.log('getCategories', err)
    }
}