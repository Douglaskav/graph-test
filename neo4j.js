const neo4j = require("neo4j-driver");
const neo4jEndpoint = 'bolt://localhost:7687'

const driver = neo4j.driver(neo4jEndpoint, neo4j.auth.basic('neo4j', ''))

module.exports = { driver };