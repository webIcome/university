import bodyParser from "body-parser";
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import compression from 'compression';
import expressDomainMiddleware from 'express-domain-middleware';
import clsMiddleware from 'cls-middleware';
import logger from "morgan";

import tokenParser from './helpers/token-parser';
import webRouter from './controller-router';
import apiRouterV1 from './api-router-v1';
import config from './config';
import AbstractError from './errors/abstract-error';
import DataLoadInitializer from './services/data-load-initializer';
import ContextHolder from "./helpers/context-holder";

const app = express();

app.use(clsMiddleware(ContextHolder.getCreateNamespace()));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(compression());
app.use(expressDomainMiddleware);

//cors options
const corsOptions = {
    exposedHeaders: "Link, X-Total-Count",
    origin: [config.sys_allow_origin],
    credentials: true
};

app.use('/console', cors(corsOptions), webRouter);

// parse device unionid
app.use(tokenParser);

app.use('/api/v1', cors(), apiRouterV1);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    if (err instanceof AbstractError) {
        res.json({errcode: err.errcode, errmsg: err.errmsg});
    } else {
        console.error(err);
        res.status(err.status || 500);
        res.json(err.message);
    }
});

app.set(config.jwt_token_secret_name, config.jwt_token_secret_value);

// initCache
DataLoadInitializer.init();

export {app};
