const contentful = require("contentful");

const config = {
    space:"eoscvolapp5c",
    accessToken: "5yEAD7QJUdHBnw31PS6L5bGngAB1ZNOlSbyCSrygB7w",
    environment: "master"
}

module.exports = {
    createClient() {
        return contentful.createClient(config)
    }
};