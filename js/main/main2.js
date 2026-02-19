

const dogs = document.querySelector(".man");
let index = 0;
// let isLocked = false;
// let scrollSum = 0; 
//     window.addEventListener('wheel', e => {
//     if(isLocked) return;

//     scrollSum += e.deltaY;

//     ある程度スクロールしたら反応
//     if (Math.abs(scrollSum) < 80) return;

//     isLocked = true;
//         setTimeout(()=>{
//         isLocked = false;
//     } , 600)
//     if (e.deltaY > 0) index++;
//     if (e.deltaY < 0) index--;

//     index = Math.max(0, Math.min(index, dogs.children.length - 1));
//     dogs.style.transform = `translateX(${-index * 100}vw)`;


//     });
    let scrollSum = 0;
    let isLocked = false;
    let lastTime = 0;

    // PC画面
window.addEventListener("wheel", e => {
    if (isLocked) return;

    const now = Date.now();
    if (now - lastTime < 1000) return;

    scrollSum += e.deltaY;

    // 一定量スクロールしないと動かない
    if (Math.abs(scrollSum) < 150) return;

    isLocked = true;

    if (scrollSum > 0) index++;
    else index--;

    scrollSum = 0; // ★ ここ超重要

    index = Math.max(0, Math.min(index, dogs.children.length - 1));
    dogs.style.transform = `translateX(${-index * 100}vw)`;

    setTimeout(() => {
        isLocked = false;
    }, 800);
});



const OpenBtn = document.querySelector("#menu-open");
const menuPanel = document.querySelector("#menu-panel");
const menuList = document.querySelectorAll(".menu-list li");
const closeBtn = document.querySelector("#menu-close");
// メニューを全体で使いまわすオプション
const menuOptions = {
    duration : 1800,
    easing : "ease",
    fill : "forwards"

};
// let scrollSum = 0;
// let scrollTimer = null;

// window.addEventListener("wheel", e => {
//     scrollSum += e.deltaY;

//     // wheelが来るたびにタイマーをリセット
//     clearTimeout(scrollTimer);

//     scrollTimer = setTimeout(() => {
//         if (Math.abs(scrollSum) < 100) {
//             scrollSum = 0;
//             return;
//         }

//         if (scrollSum > 0) index++;
//         else index--;

//         index = Math.max(0, Math.min(index, dogs.children.length - 1));
//         dogs.style.transform = `translateX(${-index * 100}vw)`;

//         scrollSum = 0;
//     }, 120); // ← スクロールが止まったと判断する時間
// });



// 開く処理
OpenBtn.addEventListener("click" , ()=>{

    menuPanel.animate({
        translate : ["100vw" , 0] //移動　x軸 100%→0%

    },
    
        menuOptions
    
    )
    // リストの内容を1つずつ表示
menuList.forEach((menuList,index) =>{
    menuList.animate(
        {
            opacity:[0,1],
            translate:["2rem" , 0]
        },
        {
            duration:2400,
            delay:500 * index,
            easing:"ease",
            fill:"forwards",
        }
    )

}
)
})
// 閉じる処理
closeBtn.addEventListener("click" , ()=>{
    menuPanel.animate({
        translate : [ 0 ,"100vw"], //移動　x軸 100%→0%

    },
    
        menuOptions
    
)
});

