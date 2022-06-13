import { NextPage } from "next";
import { Faq } from "@components/Faq";
import { Layout } from "@components/Layout";

const FaqPage: NextPage = () => {
	return (
		<Layout title="Sıkça Sorulan Sorular">
			<Faq />
		</Layout>
	);
};

export default FaqPage;
