"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unionArr(arr) {
    let returnArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let flag = 0;
        for (let j = 0, lenj = returnArr.length; j < lenj; j++) {
            if (arr[i].name === returnArr[j].name) {
                flag = 1;
            }
        }
        if (flag === 0) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}
exports.default = unionArr;
//# sourceMappingURL=UnionArr.js.map