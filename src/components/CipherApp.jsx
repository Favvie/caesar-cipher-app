import React, { useState } from "react";
import { caesarEncrypt, caesarDecrypt } from "../utils/cipherUtils";
import "../styles/CipherApp.css";

const CipherApp = () => {
	const [plaintext, setPlaintext] = useState("");
	const [ciphertext, setCiphertext] = useState("");
	const [shift, setShift] = useState(0);

	const handleEncrypt = () => {
		setCiphertext(caesarEncrypt(plaintext, parseInt(shift)));
	};

	const handleDecrypt = () => {
		setPlaintext(caesarDecrypt(ciphertext, parseInt(shift)));
	};

	return (
		<div className="cipher-app">
			<h1>Caesar Cipher</h1>
			<div>
				<label>
					Plaintext:
					<input
						type="text"
						value={plaintext}
						onChange={(e) => setPlaintext(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					Ciphertext:
					<input
						type="text"
						value={ciphertext}
						onChange={(e) => setCiphertext(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					Shift:
					<input
						type="number"
						value={shift}
						onChange={(e) => setShift(e.target.value)}
					/>
				</label>
			</div>
			<div className="buttonContainer">
				<button onClick={handleEncrypt}>Encrypt</button>
				<button onClick={handleDecrypt}>Decrypt</button>
			</div>
		</div>
	);
};

export default CipherApp;
