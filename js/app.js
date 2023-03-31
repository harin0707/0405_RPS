// 1. js 파일에서 접근해야하는 html dom 요소들 선언하기
const myHand = document.getElementById('my-hand-text');
const myHandIcon = document.getElementById('my-hand-icon');
const computerHand = document.getElementById('computer-hand');

const rockBtn = document.getElementById('rock')
const scissorsBtn = document.getElementById('scissors')
const paperBtn = document.getElementById('paper')


//2. 선언한 dom 요소에 클릭이벤트 부여하기
rockBtn.addEventListener('click', isClicked);
scissorsBtn.addEventListener('click', isClicked);
paperBtn.addEventListener('click', isClicked);

//3. 함수가 실행될 때, 이벤트(e) 객체에 접근하기
//4. innerHTML 실습
function isClicked(e){
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target;

    //4)-1 innerHTML 실습할 때 typeof 사용하기
    console.log(clickedBtn);
    console.log(clickedIcon);

    myHand.innerText = clickedBtn;

    //5. className 클릭 state 받아와서 className 갈아끼우기
    myHandIcon.className = clickedIcon.className;
    console.log(myHandIcon.className);


}














