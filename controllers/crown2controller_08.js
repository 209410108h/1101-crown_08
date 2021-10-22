const servicecrown2controller_08 = require('./servicecrown2controller_08')

exports.getCategories = async (req, res) => {
    try{
        let results = await servicecrown2controller_08.getCategories();
        console.log('results', JSON.stringify(results));
        res.render('crown2_08', { data:results, title: 'crown2_08', name: 'Hung-Wei,Liu', id: '209410108' });

    } catch (err){
        console.log('crown2controller getCategories', err);
    }
}