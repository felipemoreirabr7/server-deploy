const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgres",
    password: "12345678",
    host: "marketplace.ccuxosjiraxw.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "marketplace"

})