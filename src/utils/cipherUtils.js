export const caesarEncrypt = (text, shift) => {
	return text
		.split("")
		.map((char) => {
			if (char.match(/[a-z]/i)) {
				let code = char.charCodeAt(0);

				if (code >= 65 && code <= 90) {
					return String.fromCharCode(((((code - 65 + shift) % 26) + 26) % 26) + 65);
				} else if (code >= 97 && code <= 122) {
					return String.fromCharCode(((((code - 97 + shift) % 26) + 26) % 26) + 97);
				}
			}
			return char;
		})
		.join("");
};

export const caesarDecrypt = (text, shift) => {
	return caesarEncrypt(text, -shift);
};
