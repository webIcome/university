import express from 'express';
import multer from 'multer';
import UniversityApi from "./api/v1/university-api";
import StudentApi from "./api/v1/student-api";
import TopicApi from "./api/v1/topic-api";


const router = express.Router();
const upload = multer();

//university
router.get('/universities/:id', UniversityApi.getUniversityById);
router.get('/universities', UniversityApi.getUniversitiesByName);

//student
router.post('/students/register', StudentApi.registerStudent);
router.put('/students/tokens', StudentApi.getToken);
router.put('/students/logout', StudentApi.logout);
router.put('/students', StudentApi.updateStudent);
router.get('/students', StudentApi.getStudent);

//topic
router.post('/students/:student_id/topics', TopicApi.createTopic);
router.get('/students/:student_id/topics/:id', TopicApi.getTopic);
router.put('/students/:student_id/topics/:id', TopicApi.updateTopic);
router.delete('/students/:student_id/topics/:id', TopicApi.deleteTopic);
router.get('/students/:student_id/topics', TopicApi.getTopicsByStudent);
router.get('/students/:student_id/topics/latest', TopicApi.getTopicsLatest);
export default router;

