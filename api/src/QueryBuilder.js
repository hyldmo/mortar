class QueryBuilder {
    constructor () {}

    withQuery (key, queryStr) {
        if (!queryStr) return Object.assign(this, {});
        const result = { $text: { $search: queryStr } };

        return Object.assign(this, result);
    }

    withArrayQuery (key, queryStr) {
        if (!queryStr) return Object.assign(this, {});

        const values = queryStr.replace(/,+$/,'').split(',');

        const result = {};
        result[key] = values.reduce((a, b) => {
            if (b.startsWith('-'))
                a.$nin.push(b.substring(1));
            else
                a.$all.push(b);
            return a;
        }, { $all : [], $nin: [] });

        return Object.assign(this, result);
    }
}

module.exports = QueryBuilder;