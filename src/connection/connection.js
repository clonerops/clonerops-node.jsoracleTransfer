const oracledb = require('oracledb');
const config = require('config')
cnn = {
    user: config.get('db_connection_string.username'),
    password: config.get('db_connection_string.password'),
    connectionString: config.get('db_connection_string.address')
}

const connectionDB = async (query, binds, autoCommit) => {
    const connection = await oracledb.getConnection(cnn)
    let result = await connection.execute(query, binds, autoCommit)
    connection.release()
    return result;

}

exports.connectionDB = connectionDB
