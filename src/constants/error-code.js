export const ErrorCode = {
    NORMAL: {code: "-1", msg: "正常返回"},
    SUCCESS: {code: "0", msg: "操作成功"},
    VERIFY_FAIL: {code: "21001", msg: 'Verify Fail Error'},
    CLIENT_BAD_PARAMETER: {code: "41003", msg: "Request Parameter Error"},
    RECORD_NOT_EXIST: {code: "44002", msg: "Record Not Exist Error"},
    RECORD_EXIST: {code: "43001", msg: "Record Has Existed Error"},
};