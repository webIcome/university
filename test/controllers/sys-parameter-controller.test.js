/**
 * Created by MaYiGuanJia on 2017/5/2.
 */
import ControllerRest from './controller-rest.test';

exports.testGetAllParameters = (test) => {
    ControllerRest.get('parameters')
        .end(res => {
            console.log(res.body);
            test.done();
        });
};