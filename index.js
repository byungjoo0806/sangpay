let one = new user(
  "gusdnr205@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);
let use = JSON.stringify(one);
localStorage.setItem("user", use);
let myData = localStorage.getItem("user");
console.log(myData);
let usercount = 0;
let userString = "";

// function newUserBtn(user_id,user_pw,user_nickName,user_allow,coin,token){
//     // usercount++;
//     let thing;
//     thing=new user(user_id,user_pw,user_nickName,user_allow,coin,token)
//     userString=userString+(JSON.stringify(thing));
//     console.log(userString);
//     localStorage.setItem('user1', userString);
//     return userString;
// }

// newUserBtn("gusdnr205@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));
// newUserBtn("12321344asd@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));
// newUserBtn("fadfwfr@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));
// newUserBtn("wrfqgrqg@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));

// console.log(JSON.parse(userString));
// function compareUser(){

// }

function newUserBtn(user_id, user_pw, user_nickName, user_allow, coin, token) {
  let thing = new user(
    user_id,
    user_pw,
    user_nickName,
    user_allow,
    coin,
    token
  );
  let userString = JSON.stringify(thing);
  let key = "user_" + user_id; // 고유한 저장소 키 생성
  localStorage.setItem(key, userString);
  return userString;
}

newUserBtn(
  "gusdnr205@naver.com",
  123456789,
  "goldenbeer",
  true,
  defaultCoin,
  new token("bitcoin", 100)
);
newUserBtn(
  "12321344asd@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);
newUserBtn(
  "fadfwfr@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);
newUserBtn(
  "wrfqgrqg@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

// 모든 유저 정보 출력
// for(let i=0;i<localStorage.length;i++){
//     let key = localStorage.key(i);
//     if(key.startsWith('user_')){
//         let user = JSON.parse(localStorage.getItem(key));
//         console.log(user);
//     }
// }

function loginUser(id, pw) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      let cuurent_user = JSON.parse(localStorage.getItem(key));
      console.log(cuurent_user.user_id);
      console.log(cuurent_user.user_pw);
      if ((pw == cuurent_user.user_pw && id == cuurent_user.user_id && cuurent_user.user_allow==true)) {
        console.log("로그인성공");
      }
    
    }
  }
}
loginUser("gusdnr205@naver.com",1234456789);
//내부값이랑 비교하는 구문 맞으면 로그인(쿠키추가)쿠키에 로그인상태 true 부여
// 시간이 지나서 쿠키가 사라질때 로그인상태 false

//-----------------------------------------------------------------------//

// 로그인 성공 시, 로컬 스토리지에서 Bitcoin 수량 가져오기
function getBitcoinAmount(userId) {
  const userKey = "user_" + userId;
  const userData = JSON.parse(localStorage.getItem(userKey));
  return userData.token.amount;
}

// Bitcoin 수량을 wallet에 표시하기
function displayBitcoinAmount(userId) {
  const bitcoinAmount = getBitcoinAmount(userId);
  const tokenAmountElement = document.querySelector(".token-amount");
  tokenAmountElement.textContent = bitcoinAmount.toFixed(4);
}

// loginUser 함수 수정: 로그인 성공 시, Bitcoin 수량 표시하기
function loginUser(id, pw) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      let currentUser = JSON.parse(localStorage.getItem(key));
      console.log(currentUser.user_id);
      console.log(currentUser.user_pw);
      if (pw == currentUser.user_pw && id == currentUser.user_id && currentUser.user_allow == true) {
        console.log("로그인 성공");
        displayBitcoinAmount(currentUser.user_id);
      }
    }
  }
}
