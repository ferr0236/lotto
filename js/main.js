function generateNumbers() {
	fetch("https://davidst.edumedia.ca/mad9014/nums.php", {
		method: 'POST',
		body: Array.prototype.slice.call(document.querySelectorAll("input")).reduce((form, item) => {form.append(item.name,item.value); return form;}, new FormData())
	}).then((response) => {
		return response.json();
	}).then((data) => {
		let divResult = document.querySelector(".result-number");
		while (divResult.firstChild) {
    		divResult.removeChild(divResult.firstChild);
		}
		data.numbers.forEach((number) => {
			let h1 = document.createElement("h1");
			h1.textContent = number;
			divResult.appendChild(h1);
		});
		showAndHideResult();
	}).catch((error) => {
		window.alert(error);
	});
}

function showAndHideResult() {
	document.querySelector(".lotto-result").classList.toggle("hidden-result");
	document.querySelector(".lotto-numbers").classList.toggle("hidden-result");
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#generateNumbers").addEventListener("click", () => {
		generateNumbers();
	});
	document.querySelector("#startAgain").addEventListener("click", () => {
		showAndHideResult();
	});
});