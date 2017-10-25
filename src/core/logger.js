import config from '../config';
import log4js from 'log4js';

const env = process.env.NODE_ENV || "development";

log4js.configure({
    appenders: [
        {type: 'console'},
        {type: 'file', filename: 'logs/carwash.log', category: 'carwash'}
    ]
});

const logger = log4js.getLogger("carwash");
logger.setLevel(config.debug || env != 'development' ? 'DEBUG' : 'ERROR');

export default logger;