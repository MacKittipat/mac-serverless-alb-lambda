'use strict';

module.exports.hello = async event => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: "<h1>Hello</h1>"
    };
};
