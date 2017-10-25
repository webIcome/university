export default function (sequelize, DataTypes) {
    return sequelize.define("t_comment", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        topic_id: DataTypes.INTEGER,
        student_id: DataTypes.INTEGER,
        student_name: DataTypes.STRING,
        to_student_id: DataTypes.INTEGER,
        to_student_name: DataTypes.STRING,
        content: DataTypes.STRING,
    });
}