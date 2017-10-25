
import DataLoadInitializer from "./data-load-initializer";

export default class CacheService {

    static reflush() {
        return DataLoadInitializer.reflush();
    }

}