const { spawn } = require('child_process')
const axios = require('axios')
const url = require('url')
const waitOn = require('wait-on')

const BASE_PORT = process.env.PORT || '3000'
const BASE_URL = url.format({
    protocol : process.env.PROTOCOL || 'http',
    hostname : process.env.HOST || 'localhost',
    port     : process.env.PORT || BASE_PORT
})
// Uses a TCP for determining availability of the service
const BASE_TCP = url.format({
    protocol : process.env.PROTOCOL || 'tcp',
    hostname : process.env.HOST || 'localhost',
    port     : process.env.PORT || BASE_PORT
})

let serverlessService = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

let serverlessProcess = {
    serverless_process: null,
    start: async () => {
        this.serverless_process = spawn('serverless', ['offline', '--port', BASE_PORT])
        await waitOn({resources: [BASE_TCP]})
    },
    stop: () => {
        this.serverless_process.kill('SIGINT')
    }
}

module.exports = {
    serverlessProcess: serverlessProcess,
    serverlessService: serverlessService
}
