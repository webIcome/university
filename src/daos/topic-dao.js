import {TopicData} from '../domains';

export default class TopicDao {

    static createTopic(topic) {
        return TopicData.create(topic);
    }

    static getTopicsByStudent(studentId, lastCursor, limit) {
        return TopicData.findAll({where: {
            student_id: studentId,
            limit: limit,
            id: {$it: lastCursor},
            order: 'id DESC'
        }});
    }

    static getTopic(id) {
        return TopicData.findById(id)
    }

    static deleteTopic(id) {
        return TopicData.destroy({where: {id: id}});
    }

    static updateTopic(id, updateTopic) {
        return TopicData.update(updateTopic, {where: {id: id}});
    }

    static getTopicsLatest(type, lastCursor, limit) {
        return TopicData.findAll({
            where: {
                type: type,
                limit: limit,
                id: {$it: lastCursor},
                order: 'id DESC'
            }
        })
    }

}