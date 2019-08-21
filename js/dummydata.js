function copyFromSpanElementToClipboard(elementId) {
	/* Get the text field */
	var copyText = document.getElementById(elementId);
	var spanText = copyText.textContent;
	spanText = spanText.trim();

	var dummyTempTextArea = document.createElement("textarea");
    dummyTempTextArea.value = spanText;
    document.body.appendChild(dummyTempTextArea);
    dummyTempTextArea.select();

	/* Copy the text inside the text field */
	document.execCommand("copy");
	dummyTempTextArea.remove();
}