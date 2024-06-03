const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database:DB_NAME,
        dialect:'mysql'
    },
}

module.exports = config