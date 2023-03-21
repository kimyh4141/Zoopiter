var Target = document.getElementById('clock');
function clock() {
  var time = new Date();

  var year = time.getFullYear();
  var month = time.getMonth();
  var date = time.getDate();
  var day = time.getDay();
  var week = ['일', '월', '화', '수', '목', '금', '토'];

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  Target.innerText = `${year}.${month + 1}.${date}  `;
}
clock();
// setInterval(clock, 1000); // 1초마다 실행
