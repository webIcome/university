export default {
    cluster_no: 0,
    sys_name: "我是大学生",
    sys_ip: "127.0.0.1",
    sys_api_pathname: "api/v1",
    sys_host: "",
    sys_allow_origin: "*",

    //
    nickname_pre_name: '大学生',

    // token
    token_expires_in: 7,
    jwt_token_secret_name: 'jwtTokenSecret',
    jwt_token_secret_value: 'university',

    // debug 为 true 时，用于本地调试
    debug: true,

    //api grid size
    api_grid_default_size: 10,

    //controller grid size
    controller_grid_default_size: 10,

    // database config
    db_name: 'university',
    db_username: 'root',
    db_password: 'root',
    db_host: '127.0.0.1',
    db_dialect: 'mysql',
    db_port: 3306,
    db_pool_max: 5,
    db_pool_min: 0,
    db_pool_idle: 1000,
    db_logging: console.log,

    // wechat config

    // static files config
    static_dir: "d:/file/target/customer_wash/",
    static_url: "http://cwstatic.mayiguanjia.cn/img/plan_order/",

    // prefix name
    image_start_pre_name: 'start',

    // pay

    url_filter_exclude: '/wxpaycallback|POST,/alipaycallback|POST,randcodecallback|POST,/openid|GET',
    token_filter_exclude: '/tokens|PUT,/register|POST',

};
