export default {
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx"],
	testEnvironment: "jsdom",
};
