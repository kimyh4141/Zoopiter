var Target = document.getElementById('clock');
function clock() {
  var time = new Date();

  var month = time.getMonth();
  var date = time.getDate();
  var day = time.getDay();
  var week = ['일', '월', '화', '수', '목', '금', '토'];

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  Target.innerText =
    `${month + 1}월 ${date}일 ${week[day]}요일 ` +
    `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
clock();
// setInterval(clock, 1000); // 1초마다 실행
