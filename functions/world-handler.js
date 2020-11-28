'use strict';

module.exports.world = async event => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: "<h1>World</h1>"
    };
};
