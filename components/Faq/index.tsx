import type { FC } from "react";
import { Tabs } from "@components/Faq/Tabs";

export const Faq: FC = () => {
	return (
		<section className="bg-gray-900">
			<div className="container px-6 py-16 mx-auto text-center">
				<Tabs />
			</div>
		</section>
	);
};
