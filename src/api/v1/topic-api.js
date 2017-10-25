/**
 * Created by webicome on 2017/9/21.
 */
import TopicService from "../../services/topic-service";
import ResponseHelper from "../../helpers/response-helper";
import {ResponseConstant, RequestConstant} from "../../constants";
export default class TopicApi{

    static createTopic(req, res, next) {
        TopicService.createTopic(req.body).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.TOPIC, data);
        }).catch(next);
    }

    static getTopicsByStudent(req, res, next) {
        let lastCursor = req.query[RequestConstant.LAST_CURSOR];
        let limit = req.query[RequestConstant.LIMIT];
        TopicService.getTopicsByStudent(req.params.student_id, lastCursor, limit).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.TOPICS, data);
        }).catch(next);
    }

    static getTopic(req, res, next) {
        TopicService.getTopic(req.params.id).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.TOPIC, data);
        }).catch(next);
    }

    static deleteTopic(req, res, next) {
        TopicService.deleteTopic(req.params.id).then(data => {
            ResponseHelper.resSuccess(res);
        }).catch(next)
    }

    static updateTopic(req, res, next) {
        TopicService.updateTopic(req.params.id, req.body).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.TOPIC, data);
        }).catch(next);
    }

    static getTopicsLatest(req, res, next) {
        let lastCursor = req.query[RequestConstant.LAST_CURSOR];
        let type = req.query[RequestConstant.TYPE];
        let limit = req.query[RequestConstant.LIMIT];
        TopicService.getTopicsLatest(type, lastCursor, limit).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.TOPICS, data);
        }).catch(next);
    }
}