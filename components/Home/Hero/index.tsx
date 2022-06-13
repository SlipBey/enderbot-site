import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { FaDiscord } from "react-icons/fa";

export const Hero: FC = () => {
	const invite = () => {
		window.open("/invite", "name", "width=400,height=800");
	};

	return (
		<section className="bg-gray-900">
			<div className="container px-6 py-16 mx-auto text-center">
				<div className="max-w-lg mx-auto">
					<h1 className="text-3xl font-bold text-white md:text-4xl">
						EnderBot ile Kaliteli Bir Sunucu
					</h1>
					<p className="mt-6 text-xl text-gray-300">
						Botta bulunan sistemlerle sizlere çok amaçlı bir şekilde
						hizmet sağlıyoruz.
					</p>

					<div className="mt-8">
						<div className="flex flex-wrap justify-center space-y-5 sm:space-x-8 sm:space-y-0">
							<button
								className="flex text-white font-semibold items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 round rounded-lg h-16 px-8 hover:-translate-y-2.5 hover:scale-105 active:scale-90 active:translate-y-0 duration-200"
								onClick={invite}
							>
								<FaDiscord className="text-2xl" />
								<span className="text-xl ml-3">
									Discord&apos;a Ekle
								</span>
							</button>

							<Link href="/discord">
								<a target="_blank">
									<button className="flex text-gray-300 font-semibold items-center border-solid border-gray-800 border-4 bg-gray-900 round rounded-lg h-16 px-8 hover:-translate-y-2.5 hover:scale-105 active:scale-90 active:translate-y-0 duration-200">
										<span className="text-xl ml-3">
											Discord&apos;a Katıl
										</span>
									</button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
