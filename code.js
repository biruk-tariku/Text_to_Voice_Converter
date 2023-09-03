let speech = new SpeechSynthesisUtterance();

let voices = [];

let voicSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voicSelect.options[i] = new Option(voice.name, i)));
};
voicSelect.addEventListener("change", () => {
    speech.voice = voices[voicSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
});