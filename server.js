const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const PORT = 3000;

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`The server has been run on port: ${PORT}.`);
        });
    } catch (e) {
        console.log(e.message);
    }
}

start();