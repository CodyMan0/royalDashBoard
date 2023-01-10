import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { graphqlRequestClient } from "../../clients/reqestClient";
import { INTOUCH_CELL_LEADER } from "../constant/constant";
import { userState } from "../store/authState";

interface ApploadingProps {
	children: React.ReactNode;
}

const Apploading = ({ children }: ApploadingProps) => {
	const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);
	const setUser = useSetRecoilState(userState);
	const router = useRouter();

	const initialize = () => {
		try {
			console.log("initialize");
			const jsonValue = localStorage.getItem(INTOUCH_CELL_LEADER);
			console.log("leader", INTOUCH_CELL_LEADER);
			if (jsonValue !== null) {
				const userInfo = JSON.parse(jsonValue);
				graphqlRequestClient.setHeader("authorization", userInfo.accessToken);
				setUser({
					isLoggedIn: true,
					accessToken: userInfo.accessToken,
				});
				setIsLoadingCompleted(true);
			} else {
				router.push("/");
				setIsLoadingCompleted(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		initialize();
	}, []);

	if (!isLoadingCompleted) {
		return null;
	}

	return <>{children}</>;
};

export default Apploading;
