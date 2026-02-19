const gage = document.querySelector(".neu-progress-bar");/*増えるバー*/
const gageText = document.querySelector(".neu-stats"); /*%横のテキスト*/
const number = document.querySelector("#number");/*%自体のテキスト*/
const button = document.querySelector("#neuToggle"); /*ボタン*/
const profileBtn = document.querySelector("#profileBtn"); /*上の星野頼輝ボタン*/

// const progress = document.getElementById('progress');
let progress =  0;
let number1 = 0;
let progress1 = 0;
const duration = 20000;
const intervalTime = 40;
const step = 1;
let timer = null;
let isCompleted = false



// ゲージが100%になれば
function test_func(){
        progress1 += step;

        if(progress1>=101){ 
            progress = 100;

            profileBtn.classList.add("profileBtn-animate");
            clearInterval(timer);
            // button.removeAttribute(disabled);
            button.disabled = true;       
            // isCompleted = true;
            // ★ 100%になったらボタン解放
            profileBtn.classList.remove("disabled");
            profileBtn.setAttribute("href" , "main2.html" ,);
            

            // profileBtn.classList.add("profileBtn-animate")

            

            
            return;

            floating = true ;
            floatAnimation();




        }

        gage.style.setProperty('width', `${progress1}%`);
        number.textContent = Math.floor(progress1);

};


button.addEventListener("click" , ()=>{
    // number1++;
    // number.textContent = number1;
    // progress.style.progress = "--progress: " + number1 + '%';

    button.disabled = true;

    timer = setInterval(test_func,intervalTime);
})



// テキスト（クリック）を消す
const text = document.querySelector("#myText");
button.addEventListener("click" , ()=>{
    // 滑らかに止まる
    text.classList.add("stop");

    setTimeout(() =>{
            text.classList.add("fade-out")
    })


    setTimeout(()=>{
        text.textContent = ""
    } , 200)
})

