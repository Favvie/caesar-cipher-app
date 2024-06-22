// src/utils/cipherUtils.js
export const caesarEncrypt = (text, shift) => {
	return text.replace(/[a-z]/gi, (char) => {
		let code = char.charCodeAt(0);

		if (code >= 65 && code <= 90) {
			return String.fromCharCode(((code - 65 + shift) % 26) + 65);
		} else if (code >= 97 && code <= 122) {
			return String.fromCharCode(((code - 97 + shift) % 26) + 97);
		}
		return char;
	});
};

export const caesarDecrypt = (text, shift) => {
	return caesarEncrypt(text, 26 - shift);
};
