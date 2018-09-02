const GraphQL = require('graphql');
var schema = new GraphQL.GraphQLSchema({
    query: new GraphQL.GraphQLObjectType({
        name: 'RootQueryType',
        fields: {

            Ingredients: {
                type: GraphQL.GraphQLString,
                resolve() {
                    return 'world';
                }
            },
            Thumbnail: {

            },
            Url: {

            }
        }
    })
});