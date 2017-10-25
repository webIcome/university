import * as _ from 'lodash';
import config from "../config";
import moment from 'moment';
import {AttributeConstant, CoreConstant} from "../constants/";

export default class PlanOrderHelper {

    static generateOutTradeNo(planId, planOrderId, payType, totalFee) {
        return _.join([config.out_trade_no_pre_plan_mark, planId, planOrderId, payType, totalFee], AttributeConstant.MARK_MIDDLE_LINE).substr(0, 32);
    }

    static getTotalFeeOfWx(totalFee) {
        return totalFee * 100;
    }

    static getPlanPaySuccessResponse() {
        return "<xml>" +
            "<return_code><![CDATA[SUCCESS]]></return_code>" +
            "<return_msg><![CDATA[OK]]></return_msg>" +
            "</xml>";
    }

}
