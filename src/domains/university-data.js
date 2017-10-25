export default function (sequelize, DataTypes) {
    return sequelize.define("t_university", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: DataTypes.STRING,
        code: DataTypes.STRING,
        province: DataTypes.STRING,
        city: DataTypes.STRING,
    }, {timestamps: false});
};