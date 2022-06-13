import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";

import building from "@assets/building.svg";

const DocsPage: NextPage = () => {
	return (
		<Layout title="Dökümanlar">
			<div className="bg-gray-900 py-6 sm:py-8 lg:py-12">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
					<div className="w-full flex justify-center items-center rounded-lg overflow-hidden relative mx-auto">
						<div className="flex flex-col justify-center items-center relative p-3 md:p-5">
							<CustomImage
								src={building}
								alt="Error-Page-Image"
								className="w-48 mb-2"
							/>
							<p className="text-gray-200 md:text-lg text-center mb-8">
								Dökümanlar sayfamız hazırlık aşamasındadır.
							</p>
							<Link
								href="/"
								className="inline-block bg-purple-500 hover:bg-purple-600 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-3"
							>
								Evine Koş
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DocsPage;
