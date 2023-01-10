import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Apploading from "../layout/AppLoading";
import { DefaultSeo } from "next-seo";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const defaultSEO = {
	defaultTitle: "Royal-Garden",
	description: "this is made for intouch-church",
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...defaultSEO} />
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<Apploading>
						<Component {...pageProps} />
					</Apploading>
				</QueryClientProvider>
			</RecoilRoot>
		</>
	);
}
