import moment from 'moment-timezone';

export default {
    // inc 与 dec提供测试使用
    inc (value) {
        return value + 1;
    },

    dec (value) {
        return value - 1;
    },

    localTime (time) {
        return moment(time).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm');
    },

    trimBr (value) {
        if (value) {
            return value.replace(/\<\/br\>/g, '');
        }
    },

    href (value) {
        return `http://tieba.baidu.com/p/2674337275?pid=${value}#${value}`
    }
}