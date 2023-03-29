// 1. js 파일에서 접근해야하는 html dom 요소들 선언하기
const rockBtn = document.getElementById('rock')
const scissorsBtn = document.getElementById('scissors')
const paperBtn = document.getElementById('paper')


//2. 내가 누른 버튼에 대한 정보 : ["누른 버튼", "icon class명"]
const clickedBtnInfo = {
    "rock": ["rock", "fa-regular fa-hand-back-fist"],
    "scissors": ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
    "paper": ["paper", "fa-regular fa-hand"]
}

//3. 선언한 dom 요소에 클릭이벤트 부여하기
rockBtn.addEventListener('click', isClicked);
scissorsBtn.addEventListener('click', isClicked);
paperBtn.addEventListener('click', isClicked);

//함수가 실행될 때, 이벤트(e) 객체에 접근하기
function isClicked(e){
    let clickedBtn = e.currentTarget.id;
    console.log(clickedBtn);
}














