import config from '../config';
import unirest from 'unirest';

export default class AntwxApiHelper {

    static sendTemplateMessage(data) {
        return new Promise((resolve, reject) => {
            unirest.post(_getTemplateUrl())
                .type('json')
                .send(data)
                .end((res) => {
                    let result = res.body;
                    if (result && result.errcode <= 0) {
                        resolve(result);
                    } else {
                        if (!result) {
                            result = {};
                        }
                        reject(result);
                    }
                });
        });
    }
};

function _getTemplateUrl() {
    return config.antwx_api_url + "/template_messages";
}