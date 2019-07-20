// WebSpeech APIを実装する準備をする二行の記述。APIの呼び出しを行なっている
const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

// 上記HTMLのidのスイッチをJS内で定数として定義している
const btn = document.getElementById('btn');
const content = document.getElementById('content');

// id="btn"のスイッチをクリックすることで発生するイベントを定義している
btn.addEventListener('click', function() {
	// APIの文法。APIにある機能としてのspeech（ワンフレーズマイクに吹き込む）を呼び出している
	speech.start();
});

// // 上記に従ってspeechアクションに'result'が帰ってくることをスイッチにイベントを呼び出している（　話した内容をeという引数としている）
// speech.addEventListener('result', function(e) {
// 	// eをコンソール上に表示する
// 	console.log(e);
// 	// 不明だが、下記の二行でHTMLにeが表示される。
// 	const text = e.results[0][0].transcript;
// 	content.innerText = text;
// });

// 音声自動文字起こし機能
speech.onresult = function(e) {
	speech.stop();
	if(e.results[0].isFinal){
		var autotext = e.results[0][0].transcript
		console.log(e);
		console.log(autotext);
		content.innerHTML += '<div>'+ autotext +'</div>';
	}
}

speech.onend = () => {
	speech.start()
};