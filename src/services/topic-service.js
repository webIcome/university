/**
 * Created by webicome on 2017/9/21.
 */
import TopicDao from "../daos/topic-dao";
import Config from "../config";
export default class TopicService {

    static createTopic(topic) {
        return TopicDao.createTopic(topic);
    }

    static getTopicsByStudent(studentId, lastCursor, limit) {
        if (!lastCursor) {
            lastCursor = Number.MAX_SAFE_INTEGER;
        }
        if (!limit) {
            limit = Config.api_grid_default_size;
        }
        return TopicDao.getTopicsByStudent(studentId, lastCursor, limit);
    }

    static getTopic(id) {
        return TopicDao.getTopic(id);
    }

    static deleteTopic(id) {
        return TopicDao.deleteTopic(id);
    }

    static updateTopic(id, updateTopic) {
        return TopicDao.updateTopic(id, updateTopic);
    }

    static getTopicsLatest(type, lastCursor, limit) {
        if (!limit) {
            limit = Config.api_grid_default_size;
        }
        return TopicDao.getTopicsLatest(type, lastCursor, limit);
    }
}