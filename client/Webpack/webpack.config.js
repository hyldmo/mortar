const path = require('path');
var rootSrcPath = path.join(__dirname, 'src/')
module.exports.PATHS = {
    src: rootSrcPath,
    build: path.join(__dirname, '../PyServer/static/scripts'),

    addrecipe: path.resolve(rootSrcPath, 'addrecipe/entry.jsx'),
    recipes: path.join(rootSrcPath, 'recipes/entry.jsx'),
    style: {
        recipes: path.join(rootSrcPath, 'stylesheets/recipes.less'),
    }
};