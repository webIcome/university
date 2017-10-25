
import {Sequelize} from '../domains';

export default class AbstractDataLoader {
    static queryByRaw(tableName, orderField) {
        let sql = 'select * from ' + tableName;
        if (orderField) {
            sql += ' order by ' + orderField + ' asc';
        }
        return Sequelize.query(sql, { type: Sequelize.QueryTypes.SELECT});
    }
};
