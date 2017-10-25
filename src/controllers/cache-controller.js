import CacheService from "../services/cache-service";
export default class CacheController {

    static delete(req, res, next) {
        CacheService.reflush().then(() => {
            res.sendStatus(204);
        }).catch(next);
    }

}