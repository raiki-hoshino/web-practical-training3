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
