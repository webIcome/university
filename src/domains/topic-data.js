export default function (sequelize, DataTypes) {
    return sequelize.define("t_topic", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        student_id: DataTypes.INTEGER,
        student_name: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        type: DataTypes.INTEGER,
    });
};