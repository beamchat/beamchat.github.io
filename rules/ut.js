// myAudio = new Audio("flowey_talk.wav");
current_character = 0;
current_word = 0;
init = 0;
window.onload = function() {
	var text = document.querySelector("#here");
	if (init == 0) {
		text.innerHTML = "";
		init = 1;
	}
	var complete_text = ["* There you are, dearie.", "* You are always welcome in my parlor!", "* Just stay on your best behavior~", "* Ueee hee hee hee~"];
	
	if (current_character < complete_text[current_word].length) {
		text.innerHTML += complete_text[current_word][current_character];
		current_character++;
	}
	else {
		text.innerHTML += "<br>";
		current_character = 0;
		if (((current_word + 1) % 2 == 0) && complete_text[current_word + 1])
			text.innerHTML = "";
		if 	(typeof complete_text[current_word + 1] !== 'undefined')
			current_word++;
		else
			return;
	}
	if (text.innerHTML !== complete_text) {
		if (current_character == complete_text[current_word].length)
			setTimeout(window.onload, 1500)
		else
			setTimeout(window.onload, 65);
	}
	// myAudio.currentTime = 0;
	// myAudio.play();
}