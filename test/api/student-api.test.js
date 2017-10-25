import ApiRest from "./api-rest.test";

exports.testRegisterStudent = (test) => {
    ApiRest.post('students/register')
        .type('json')
        .send({
            phone: '2013',
            password: '123456'
        })
        .end((res) => {
            console.log(res.body);
            test.done();
        });
};

exports.testGetToken = test => {
    ApiRest.put('students/tokens')
        .type('json')
        .send({
            phone: '2013',
            password: '123456'
        })
        .end(res => {
            console.log(res.body);
            test.done();
        })
};

exports.testGetStudent = test => {
    ApiRest.get('students')
        .end(res => {
            "use strict";
            console.log(res.body);
            test.done();
        })
};

