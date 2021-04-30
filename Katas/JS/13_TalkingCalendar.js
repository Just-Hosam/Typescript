"use strict";
// In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.
const talkingCalendar = (dateStr) => {
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(5, 7);
    const day = dateStr.slice(8, 10);
    const formatedMonth = monthFormater(month);
    const formatedDay = dayFormater(day);
    return `${formatedMonth} ${formatedDay}, ${year}`;
};
const monthFormater = (month) => {
    if (month === '01')
        return 'January';
    if (month === '02')
        return 'February';
    if (month === '03')
        return 'March';
    if (month === '04')
        return 'April';
    if (month === '05')
        return 'May';
    if (month === '06')
        return 'June';
    if (month === '07')
        return 'July';
    if (month === '08')
        return 'August';
    if (month === '09')
        return 'September';
    if (month === '10')
        return 'October';
    if (month === '11')
        return 'November';
    if (month === '12')
        return 'December';
    return false;
};
const dayFormater = (day) => {
    if (day === '01' || day === '21' || day === '31')
        return `${day}st`;
    if (day === '02' || day === '22')
        return `${day}nd`;
    if (day === '03' || day === '23')
        return `${day}nd`;
    return `${day}th`;
};
console.log(talkingCalendar('2017/12/02'), '=== December 2nd, 2017');
console.log(talkingCalendar('2007/11/11'), '=== November 11th, 2007');
console.log(talkingCalendar('1987/08/24'), '=== August 24th, 1987');
