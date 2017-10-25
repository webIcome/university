import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(config.db_name, config.db_username, config.db_password, {
    host: config.db_host,
    dialect: config.db_dialect,
    port: config.db_port,
    pool: {
        max: config.db_pool_max,
        min: config.db_pool_min,
        idle: config.db_pool_idle
    },
    define: {
        freezeTableName: true,
        updatedAt: 'updated_time',
        createdAt: 'created_time',
    },
    logging: config.db_logging,
});

let InitData = sequelize.import('./init-data');
let UniversityData = sequelize.import('./university-data');
let StudentData = sequelize.import('./student-data');
let TopicData = sequelize.import('./topic-data');
let CommentData = sequelize.import('./comment-data');

export {
    sequelize as Sequelize,
    InitData,
    UniversityData,
    StudentData,
    TopicData,
    CommentData,
};
