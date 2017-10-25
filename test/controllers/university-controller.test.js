import ControllerRest from './controller-rest.test';

exports.testGetUniversity = (test) => {
    ControllerRest.get('universities/1')
        .end(res => {
            console.log(res.body);
            test.done();
        })
};

exports.testCreateUniversity = test => {
    ControllerRest.post('Universities')
        .type('json')
        .send({
            name: '\u6e05\u534e\u5927\u5b66',
            code: 1001,
            province: '福建省',
            city: '厦门'
        })
        .end(res => {
            console.log(res.body);
            test.done();
        })
};