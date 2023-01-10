import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Apploading from "../layout/AppLoading";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<Apploading>
					<Component {...pageProps} />
				</Apploading>
			</QueryClientProvider>
		</RecoilRoot>
	);
}
