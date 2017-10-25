
import InitDataLoader from './init-data-loader';
import SysParameterLoader from './sys-parameter-loader';
import logger from '../core/logger';

export default class DataLoadInitializer {
    static init() {
        logger.info("data load initializer init starting...");
        let loaders = _getLoaders();
        (function exec(loader) {
            loader.load().then(() => {
                if (loaders.length > 0) {
                    exec(loaders.shift());
                } else {
                    logger.info("data load initializer init end");
                }
            }).catch((err) => {
                logger.error(err);
            });
        })(loaders.shift());
    }

    static reflush() {
        logger.info("data load initializer reflush starting...");
        return new Promise((resolve, reject) => {
            let loaders = _getLoaders();
            (function exec(loader) {
                loader.reload().then(() => {
                    if (loaders.length > 0) {
                        exec(loaders.shift());
                    } else {
                        resolve();
                        logger.info("data load initializer reflush end");
                    }
                }).catch((err) => {
                    logger.error(err);
                    reject(err);
                });

            })(loaders.shift());
        });
    }
}

function _getLoaders() {
    return [InitDataLoader, SysParameterLoader];
}