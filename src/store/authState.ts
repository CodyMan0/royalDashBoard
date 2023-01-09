import { atom } from "recoil";

export const userState = atom({
	key: "user",
	default: {
		accessToken: "",
		isLoggedIn: false,
	},
});
