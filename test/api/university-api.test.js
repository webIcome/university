import ApiRest from "./api-rest.test";

exports.testGetUniversityById = (test) => {
    ApiRest.get('universities/1')
        .end((res) => {
            console.log(res.body);
            test.done();
        });
};

exports.testGetUniversitiesByName = (test) => {
    ApiRest.get('universities')
        .query({
            name: '厦门大学'
        })
        .end((res) => {
            console.log(res.body);
            test.done();
        });
};


