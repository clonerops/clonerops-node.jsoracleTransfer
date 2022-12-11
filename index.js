import cluster from "cluster";
import os from 'os'
// import mongoose from "mongoose";
// import config from 'config'
import { runServer } from "./src/api/server";
import connectionDB from "./src/connection/connection";

const debug = require('debug')('app:main')

const init = async () => {
    if (connectionDB) {
        debug('The connection to the database was successful')
        runServer()
    } else {
        debug('The connection to the database could not be established')
    }
}

const runCluster = () => {
    if (cluster.isPrimary)
        for (let i = 0; i < os.cpus().length - 1; i++)
            cluster.fork()
    else init()
}

runCluster()