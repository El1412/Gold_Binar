// Update with your config settings.

const connection = {
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: "5432",
        user: "postgres",
        database: "postgres",
        password: "postgres",
    },
};
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: connection,
    staging: connection,
    production: connection,
};
