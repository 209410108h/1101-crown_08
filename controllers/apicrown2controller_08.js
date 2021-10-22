const servicecrown2controller_08 = require('./servicecrown2controller_08')

exports.getCategories = async (req, res) => {
    try{
        const data = await servicecrown2controller_08.getCategories();
        return res.json(data);
    } catch (err){
        console.log('crown2controller getCategories', err);
    }
}