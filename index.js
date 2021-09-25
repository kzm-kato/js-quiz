const quiz = [
  {
    question: "人類史上最も売れたゲーム機は次のうちどれ？",
    answer: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドーDS",
      "アタリ"
    ],
    correct: "プレイステーション2"
  },
  {
    question: "糸井重里が関わった、任天堂の看板ゲームといえば？",
    answer: ["MOTHER2", "聖剣伝説", "ファイナルファンタジー", "ドンキーコング"],
    correct: "MOTHER2"
  },
  {
    question: "ファイナルファイトの主人公の職業は？",
    answer: ["市長", "社長", "警視庁", "校長"],
    correct: "市長"
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const judge = document.getElementById("js-judgement");
let judgeIcon = document.getElementById("js-judgement-icon");
const btn = document.getElementsByTagName("button");
let btnLength = btn.length;

// クイズ問題
const setupQuiz = () => {
  let btnIndex = 0;
  // 配列をボタンのテキストに上書き
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  while (btnLength > btnIndex) {
    btn[btnIndex].textContent = quiz[quizIndex].answer[btnIndex];
    btnIndex++;
  }
};

setupQuiz();
// ボタンをクリックしたら正誤判定
const clickHandler = () => {
  let handlerIndex = 0;
  const msgArea = document.getElementById("js-message");
  console.log(msgArea);
  while (btnLength > handlerIndex) {
    btn[handlerIndex].addEventListener("click", (e) => {
      msgArea.style.display = "block";
      if (e.target.textContent === quiz[quizIndex].correct) {
        judge.textContent = "正解";
        judgeIcon.classList.add("far", "fa-circle");
        judgeIcon.classList.remove("fal", "fa-times");

        score++;
      } else {
        judge.textContent = "不正解";
        judgeIcon.classList.add("fal", "fa-times");
        judgeIcon.classList.remove("far", "fa-circle");
      }
      quizIndex++;
      if (quizLength > quizIndex) {
        // 問題あったらこっちを実行
        setupQuiz();
      } else {
        // 問題なければこっちを実行
        window.alert(
          "終了！アナタの正解数は" + score + "/" + quizLength + "です！"
        );
      }
    });
    handlerIndex++;
  }
};
clickHandler();
