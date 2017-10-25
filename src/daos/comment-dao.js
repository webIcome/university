import {CommentData} from '../domains';

export default class CommentDao {

    static createComment(comment) {
        return CommentData.create(comment);
    }

    static getCommentsByStudent(studentId, lastCursor, limit) {
        return CommentData.findAll({where: {
            student_id: studentId,
            limit: limit,
            id: {$it: lastCursor},
            order: 'id DESC'
        }});
    }

    static getComment(id) {
        return CommentData.findById(id)
    }

    static deleteComment(id) {
        return CommentData.destroy({where: {id: id}});
    }

    static updateComment(id, updateComment) {
        return CommentData.update(updateComment, {where: {id: id}});
    }

    static getCommentsLatest(topicId, lastCursor, limit) {
        return CommentData.findAll({
            where: {
                topic_id: topicId,
                limit: limit,
                id: {$it: lastCursor},
                order: 'id DESC'
            }
        })
    }

}