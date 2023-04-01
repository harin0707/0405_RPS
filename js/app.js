// 1. js 파일에서 접근해야하는 html dom 요소들 선언하기
const myHandText = document.getElementById('my-hand-text');
const myHandIcon = document.getElementById('my-hand-icon');

const computerText = document.getElementById('computer-hand-text');
const computerIcon = document.getElementById('computer-hand-icon');

const result = document.getElementById('display-result');

const rockBtn = document.getElementById('rock')
const scissorsBtn = document.getElementById('scissors')
const paperBtn = document.getElementById('paper')

//2. 선언한 dom 요소에 클릭이벤트 부여하기
rockBtn.addEventListener('click', displayMyChoice);
scissorsBtn.addEventListener('click', displayMyChoice);
paperBtn.addEventListener('click', displayMyChoice);

//3. 함수가 실행될 때, 이벤트가 발생한 dom 객체에 접근하기(e.target, this)
//4. innerHTML 실습
function displayMyChoice(e){
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target;

    //4)-1 innerHTML 실습할 때 typeof 사용해서 객체 타입 보여주기
    // console.log(clickedBtn);
    // console.log(clickedIcon);
    // console.log(clickedClassName);

    myHandText.innerText = clickedBtn;

    //5. className 클릭 state 받아와서 className 갈아끼우기
    myHandIcon.className = clickedIcon.className;

    startGame(clickedBtn);  
}

function getComChoice(){
    const randomArr = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex=Math.floor(Math.random()*3);

    return [randomArr[randomIndex]];
}

function displayComChoice(result){
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}


function startGame(myChoice) {
    const comChoiceText = getComChoice()[0];
    const comChoiceIcon = getComChoice()[1];
    
    switch (myChoice[0]+comChoiceText[0][0]){
        case "rs" || 'sp' || 'pr':
            result.innerText='win';
            break;
        
        case "rr" || 'ss' || 'pp':
            result.innerText='tie';
            break;
        
        case "rp":
        case "sr":
        case "ps":
            result.innerText='lose';
            break;
    }

    displayComChoice(comChoiceText, comChoiceIcon);

}


//6. 함수 실습1) 배열 만들고, 랜덤 인덱스 추출 -> className에 매칭하기
//6-1 컴퓨터가 낼 수 있는 패 배열에 저장

//6-2 최근에 클릭한 버튼 감지- click 클래스 생성하기
//displayMyChoice 함수에서 선언한 변수 clikcedIcon, clickedBtn 사용하러 가기

// 7. 함수 실습2) 버튼 누르면 컴퓨터 패 보이게 -> setTimeout

//+ 과제: 버튼 클릭으로 스타일 속성 바꿔보기 => 다크모드
//+ 점수 올라가는 거 구현해보기 + 리셋 버튼













