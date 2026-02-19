// ① 問題データ（今は2問だけ）
const quizData = [
    {
        question: "Q1. 僕の好きなスポーツは？",
        choices: ["バレー","バスケ"],
        answer: 1
        },
        {
        question: "Q2. スポーツを始めたきっかけは？",
        choices: ["楽しそうだから" ,"兄の影響"],
        answer:1
    },
    {
        question: "Q3. 飼っている動物は？",
        choices: ["いぬ","ねこ"],
        answer: 0
    },
    {
        question: "Q4. 飼っている動物の名前は？",
        choices: ["ゆず","はな"],
        answer:0

    },
    {
        question: "Q5. 両親の出会いは？",
        choices: ["ナガシマスパーランド" ,"美容室"],
        answer:1
    },

    ];

    // ② 状態を管理する変数
    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = null;

    // ③ HTMLの要素を取得
    const questionText = document.getElementById("question-text");
    const choicesDiv = document.getElementById("choices");
    const nextBtn = document.getElementById("nextBtn");
    const progress = document.getElementById("progress");

    // ④ 問題を表示する関数
    function loadQuestion() {
    selectedAnswer = null;

    const q = quizData[currentQuestion];

    questionText.textContent = q.question;
    choicesDiv.innerHTML = "";

    progress.textContent = `${currentQuestion + 1} / ${quizData.length}`;

    q.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;

        button.addEventListener("click", () => {
        selectedAnswer = index;
                // まず、他のボタンの選択をリセット
        const buttons = choicesDiv.querySelectorAll("button");
        buttons.forEach(btn => btn.classList.remove("selected"));

        // 選んだボタンにクラス追加
        button.classList.add("selected");
        });

        choicesDiv.appendChild(button);
    });
    }

    // ⑤ 次へボタン
    nextBtn.addEventListener("click", () => {

    if (selectedAnswer === null) {
        alert("選択してください！");
        return;
    }

    if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
    });

    // ⑥ 結果表示
    function showResult() {
    const percentage = Math.round((score / quizData.length) * 100);

    document.querySelector(".quiz-container").innerHTML =
        `<h2>あなたの理解度は ${percentage}% です！</h2>`;
        document.querySelector(".quiz-container").innerHTML    += `<h3>答え一覧</h3><ul>`;

    quizData.forEach((q) => {
        const correctChoice = q.choices[q.answer];
        document.querySelector(".quiz-container").innerHTML  += `
            <li>
                ${q.question}<br>
                正解：${correctChoice}
            </li>
            
    `
    });
    document.querySelector(".quiz-container").innerHTML += `
        </ul>
        <button id="retryBtn">もう一度</button>
    `;

    // document.querySelector(".quiz-container").innerHTML = html;

    // もう一度ボタン
    document.getElementById("retryBtn").addEventListener("click", () => {
        location.reload();
    });
}

// 最初の問題を表示
loadQuestion();

window.addEventListener("load", () => {
    // alert("load fired");
    const fade = document.querySelector("#fade1");
    fade.classList.remove("active");
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

