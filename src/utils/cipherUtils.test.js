import { caesarEncrypt, caesarDecrypt } from "./cipherUtils";

describe("Caesar Cipher", () => {
	describe("caesarEncrypt", () => {
		test("should encrypt plaintext with a positive shift", () => {
			expect(caesarEncrypt("HELLO", 3)).toBe("KHOOR");
		});

		test("should encrypt plaintext with a negative shift", () => {
			expect(caesarEncrypt("HELLO", -3)).toBe("EBIIL");
		});

		test("should wrap around the alphabet correctly", () => {
			expect(caesarEncrypt("XYZ", 3)).toBe("ABC");
		});

		test("should preserve case", () => {
			expect(caesarEncrypt("Hello", 3)).toBe("Khoor");
		});

		test("should handle non-alphabetic characters", () => {
			expect(caesarEncrypt("HELLO, WORLD!", 3)).toBe("KHOOR, ZRUOG!");
		});

		test("should handle large shift values", () => {
			expect(caesarEncrypt("HELLO", 29)).toBe("KHOOR"); // Shift of 29 is equivalent to 3
		});
	});

	describe("caesarDecrypt", () => {
		test("should decrypt ciphertext with a positive shift", () => {
			expect(caesarDecrypt("KHOOR", 3)).toBe("HELLO");
		});

		test("should decrypt ciphertext with a negative shift", () => {
			expect(caesarDecrypt("EBIIL", -3)).toBe("HELLO");
		});

		test("should wrap around the alphabet correctly", () => {
			expect(caesarDecrypt("ABC", 3)).toBe("XYZ");
		});

		test("should preserve case", () => {
			expect(caesarDecrypt("Khoor", 3)).toBe("Hello");
		});

		test("should handle non-alphabetic characters", () => {
			expect(caesarDecrypt("KHOOR, ZRUOG!", 3)).toBe("HELLO, WORLD!");
		});

		test("should handle large shift values", () => {
			expect(caesarDecrypt("KHOOR", 29)).toBe("HELLO"); // Shift of 29 is equivalent to 3
		});
	});
});
