export default function (sequelize, DataTypes) {
    return sequelize.define("t_sys_init_load_table", {
        table_alias: {type: DataTypes.STRING, primaryKey: true},
        table_name: DataTypes.STRING,
        table_type: DataTypes.STRING,
        memo: DataTypes.STRING,
        is_refresh: DataTypes.STRING,
        remote_type: DataTypes.STRING,
        remote_name: DataTypes.STRING,
        source_id: DataTypes.STRING,
        table_cnname: DataTypes.STRING,
        table_created: DataTypes.STRING,
        code_field_name: DataTypes.STRING,
        name_field_name: DataTypes.STRING,
        order_field_name: DataTypes.STRING,
    }, {timestamps: false});
};