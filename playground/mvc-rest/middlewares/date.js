
const getFormattedDate = function() {
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
let hr = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let msec = today.getMilliseconds();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + "-" + mm + "-" + dd + "-" + hr + ":" + min + ":" + sec + "."+msec;
}

module.exports = {getFormattedDate};