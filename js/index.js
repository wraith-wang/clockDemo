/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-09-08 15:50:04
 * @version $Id$
 */

(function() {
  function run() {
    var hour = document.getElementById("hour"),
      min = document.getElementById("minute"),
      second = document.getElementById("second"),
      nowTime = new Date(),
      nowHoure = nowTime.getHours(),
      nowMinute = nowTime.getMinutes(),
      nowSecond = nowTime.getSeconds(),
      houreDeg = (nowMinute / 60) * 30,
      minuteDeg = (nowSecond / 60) * 6;

    hour.style.WebkitTransform = "rotate(" +  (nowHoure * 30 + houreDeg) + "deg)";
    min.style.WebkitTransform = "rotate(" +  (nowMinute * 6  + minuteDeg) + "deg)";
    second.style.WebkitTransform = "rotate(" +  nowSecond * 6 + "deg)";
  }
  run();
  setInterval(run, 1000 / 16);
})();