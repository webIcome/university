export default function (sequelize, DataTypes) {
    return sequelize.define("t_student", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: DataTypes.STRING,
        nickname: DataTypes.STRING,
        password: DataTypes.STRING,
        sex: DataTypes.STRING,
        birthday: DataTypes.DATE,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        university: DataTypes.STRING,
        session: DataTypes.STRING,
        number: DataTypes.STRING,
        studies: DataTypes.STRING,
        class: DataTypes.STRING,
        native_place: DataTypes.STRING,
        integral_amount: DataTypes.INTEGER,
        region_code: DataTypes.STRING,
        is_login: DataTypes.BOOLEAN,
    }, {timestamps: false});
};