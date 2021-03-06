/**
 * 模块导入守护者，抛出导入失败的异常
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
"use strict";
function throwIfAlreadyLoaded(paraentModule, moduleName) {
    if (paraentModule) {
        throw new Error(moduleName + " \u5DF2\u7ECF\u88AB\u52A0\u8F7D\u4E86\u3002\u53EA\u6709 AppModule \u80FD\u591F\u5BFC\u5165 CoreModule");
    }
}
exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;
