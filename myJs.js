/**
 * 将数组转化为一个用逗号分隔的字符串
 */
function arrToStringByComma(arr){
    var res = "";
    arr.forEach((item, index, array) => {
        index == 0 ? res += item : res += ',' + item;
    });
    return res;
}