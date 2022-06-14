// change theme
let changeTheme = document.body,
  btnTheme = document.querySelector('.btn-theme');

function theme() {
  changeTheme.classList.toggle('dark')
  if (changeTheme.classList.contains('dark')) {
    btnTheme.setAttribute('src', './icons/light_mode.svg')
  } else {
    btnTheme.setAttribute('src', './icons/mode_night.svg')
  }
}

// ------------------- TIMER -------------------



let play = document.querySelector(".btn-start")
let iconBtn = document.querySelector(".btn-start i")

let minuteIn = document.querySelector('.Minutes'),
  second = document.querySelector('.Seconds'),
  minute = 4,
  sec = 60,
  progress = 0,
  desc = 0;

  function restart() {
    minute = 4,
      sec = 60;
      clock()
  }

function start() {
  iconBtn.className = "fa-solid fa-pause"
  play.setAttribute('onclick', 'pause()')

  intervalo = setInterval(() => {
    sec--
    clock()

    if (sec == 0 && minute == 0) {
      window.open('./index.html')
      window.close()
      
    }


    if (sec == 0) {
      sec = 60
      minute--
    }



  }, 1000)



}


function pause() {
  clearInterval(intervalo)
  iconBtn.className = "fa-solid fa-play"
  play.setAttribute('onclick', 'start()')

}

function clock() {
  minuteIn.innerHTML = minute < 10 ? `0${minute}` : minute;
  second.innerHTML = sec < 10 ? `0${sec}` : sec;
}