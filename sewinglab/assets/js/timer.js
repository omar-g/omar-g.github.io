$(document).ready(function () {
    function CountdownTimer(elm, tl, mes) {
        this.initialize.apply(this, arguments);
    }
    CountdownTimer.prototype = {
        initialize: function (elm, tl, mes) {
            this.elem = document.getElementById(elm);
            this.tl = tl;
            this.mes = mes;
        },
        countDown: function () {
            var today = (new Date()).getTime();
            if ((this.tl - today) <= 0) {
//                this.elem.innerHTML = this.mes;
//                return;
var t = new Date();
t.setDate(t.getDate() + 1);
this.tl = new Date(t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate() + ' 00:00:00');
}

var timer = '';
var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
var me = this;


timer += '<i>' + hour + '</i> час. ';
timer += '<i>' + this.addZero(min) + '</i> мин. ';
timer += '<i>' + this.addZero(sec) + '</i> сек.';
this.elem.innerHTML = timer;
tid = setTimeout(function () {
    me.countDown();
}, 10);
},
addZero: function (num) {
    return ('0' + num).slice(-2);
}
};

function CDT() {

        // Set countdown limit
        var t = new Date();
        t.setDate(t.getDate() + 1);
        var tl = new Date(t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate() + ' 00:00:00');


        // You can add time's up message here
        var timer = new CountdownTimer('timer1', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Время истекло</span></span>'),
        timer2 = new CountdownTimer('timer2', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Время истекло</span></span>'),
        timer3 = new CountdownTimer('timer3', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Время истекло</span></span>');
        timer.countDown();
        timer2.countDown();
        timer3.countDown();
    }
    CDT();
});