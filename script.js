const chatWindow = document.getElementById('chat-window');

function startRecognition(langCode, className) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = langCode;

    recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                const transcript = event.results[i][0].transcript;
                const div = document.createElement('div');
                div.className = `message ${className}`;
                div.textContent = transcript;
                chatWindow.appendChild(div);
                chatWindow.scrollTop = chatWindow.scrollHeight;
                // Add your translation API trigger here
            }
        }
    };
    recognition.start();
}

document.getElementById('start-english').onclick = () => startRecognition('en-US', 'english');
document.getElementById('start-spanish').onclick = () => startRecognition('es-CO', 'spanish');