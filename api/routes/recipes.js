const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const QueryBuilder = require('../src/QueryBuilder.js');
// Connection URL
var url = require('../db.js').url;
const pg = require('../db.js').pg;

// Collection Name
var collName = 'recipes';

function findDocuments (callback) {
    MongoClient.connect(url, function(err, db) {
        console.log('Connected correctly to server');
        // Get the documents collection
        var collection = db.collection(collName);
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
            callback(docs);
            db.close();
        });
    });
}

function findQuery(query, callback) {
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('puppyrecipes');

        const page = query.p || 1;
        const maxResults = parseInt(query.limit) || 10;

        let sort = query.sort || false;


        let schema = new QueryBuilder()
            .withQuery('title', query.q)
            .withArrayQuery('ingredients', query.i);

        console.log(schema);

        collection.count(schema, function (err, count) {
            let cursor = sort ? collection.aggregate(
                { $match: { schema } },
                {
                    "$project": {
                        "title": 1,
                        "ingredients": 1,
                        "length": { "$size": "$ingredients" }
                    }
                },
                {
                    "$sort": { "length": 1 }
                },
                {
                    "$project": {
                        "title": 1,
                        "href": 1,
                        "thumbnail": 1,
                        "ingredients": 1
                    }
                }
            ) :
            collection.find(schema);

            cursor.skip((page - 1) * maxResults).limit(maxResults)
                .toArray(function (err, docs) {
                    callback(
                        {
                            page: page,
                            resultsPerPage: maxResults,
                            totalResults: count,
                            results: docs
                        }
                    );
                    db.close();
                })
            ;
        });

    });
}

function findOne (id, callback) {
    MongoClient.connect(url, function(err, db) {

        var collection = db.collection(collName);

        try {
            id = ObjectID.createFromHexString(id);
        
            collection.findOne({ _id: id }, function (err, doc) {
                if (err) {
                    console.log(err);
                } else {
                    callback(doc);
                    db.close();
                }
            });

        } catch (error) {
            console.log(error);
            callback(undefined);
            db.close();
        } 
    });
}

var express = require('express');

var router = express.Router();

router.get('/*', function (req, resp, next) {
    resp.header('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/search', function (req, resp, next) {
    findQuery(req.query, function (data) {
        if (data !== undefined) {
            resp.json(data);
        } else {
            next();
        }
    });
});


function findPuppies (callback) {
    MongoClient.connect(url, function(err, db) {
        console.log('Connected correctly to server');
        // Get the documents collection
        var collection = db.collection('puppyrecipes');
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
            callback(docs);
            db.close();
        });
    });
}


router.post('/', function (req, resp, next) {
    resp.json(req.body);
});

router.get('/puppies', function (req, resp) {
    findQuery(req.query, function (data) {
        if (data !== undefined) {
            resp.json(data);
        } else {
            next();
        }
    });
});

router.get('/exportPG', function (req, resp) {
    findPuppies(function (recipes) {

        for (const recipe of recipes) {

        }
    });


});

function exportPG (recipe) {
    pg.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('INSERT $1::int AS number', ['1'], function(err, result) {
            //call `done()` to release the client back to the pool
            done();

            if(err) {
                return console.error('error running query', err);
            }
            console.log(result.rows[0].number);
            //output: 1
        });
    });
}

router.get('/export', function (req, resp) {
    findPuppies(function (docs) {
        const fs = require('fs');
        const f = fs.openSync('recipes.csv', 'w');

        let delimiter = ',';

        fs.write(f, `sep=${delimiter}\nName${delimiter}Url${delimiter}Ingredients${delimiter}Thumbnail\n`);

        for (const recipe of docs) {
            let recipeStr = '';

            for (const key in recipe) {
                if (recipe.hasOwnProperty(key)) {
                    let value = recipe[key];
                    switch (key) {
                        case 'ingredients':
                            let ingredient = "'" + value + "'";
                            recipeStr += ingredient.replace(/,/gm, ';') + delimiter;
                            break;
                        case 'thumbnail':
                            recipeStr += value;
                            break;
                        case '_id':
                            break;
                        default:
                            recipeStr += value.replace(/"/gm, '') + delimiter;
                    }
                    if (value == '' && key != 'thumbnail')
                        console.log(key)
                }
            }
            if (recipeStr.length == 0) continue;

            fs.write(f, recipeStr.replace(/[\n\t\r]/gm, '') + '\n');
        }
        console.log('done');
        resp.write('done');
        fs.close(f);
    });
});

router.get('/', function (req, resp) {
    findDocuments(function (docs) {
        resp.json(docs);
    });
});

router.get('/:id', function (req, resp, next) {
    findOne(req.params.id, function (docs) {
        if (docs !== undefined) {
            resp.json(docs);
        } else {
            next();
        }
    });
});

module.exports = router;