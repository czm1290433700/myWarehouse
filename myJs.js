/**
 * 将数组转化为一个用逗号分隔的字符串
 * @param {Array Object} arr 
 */
function arrToStringByComma(arr){
    var res = "";
    arr.forEach((item, index, array) => {
        index == 0 ? res += item : res += ',' + item;
    });
    return res;
}

/**
 * 将时间戳转换为时间字符串
 * @param {String} timestamp 
 */
function transformDate(timestamp){
    var newDate = new Date(timestamp);
    var month = newDate.getMonth() + 1;
    var date = newDate.getDate();
    return month + "." + date;
}

/**
 * 将页面动画回到顶部
 */
function topBack(){
    let id = setInterval(frame, 1);
    function frame(){
        if(document.documentElement.scrollTop || document.body.scrollTop){
            if(document.body.scrollTop){
                document.body.scrollTop = document.body.scrollTop - 20;
            }
            if(document.documentElement.scrollTop){
                document.documentElement.scrollTop = document.documentElement.scrollTop - 20;
            }
        }else{
            clearInterval(id);
        }
    }
}

/**
 * 获取今明的时间戳
 */
function getDateNumber(){
    var todayDate = Number(new Date()),//今天的时间戳
        tomorrowDate = Number(new Date().setTime(new Date().getTime() + 24*60*60*1000));//明天的时间戳
    return "今天时间戳为" + todayDate + ",明天时间戳为" + tomorrowDate;
}
