import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { useRouter } from "next/router";
import { FiHeart } from "react-icons/fi";
import { CONFIG } from "@libs/config";

export const Footer: FC = () => {
	const router = useRouter();

	const Pages = [
		{
			name: "Gizlilik Politikası",
			href: "/privacy",
		},
		{
			name: "Hizmet Şartları",
			href: "/tos",
		},
	];

	return (
		<div className="bg-gray-900">
			<footer className="p-4 sm:p-6">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
							{CONFIG.OTHER.NAME}
						</span>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<ul className="text-gray-400">
							{Pages.map((page, idx) => (
								<li className="mb-4" key={idx}>
									<Link
										underline
										href={page.href}
										className={
											router.pathname == page.href
												? "my-2 text-xl text-purple-600"
												: "my-2 text-xl text-purple-500 hover:text-purple-600 duration-200"
										}
									>
										{page.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm sm:text-center text-gray-200">
						&copy; {new Date().getFullYear()} All rights reserved.
						Made with <FiHeart className="text-red-500 inline" /> by{" "}
						<Link
							underline
							href="https://slip.slipyme.com"
							className="text-blue-600"
						>
							SlipBey
						</Link>{" "}
						using{" "}
						<Link
							underline
							href="https://nextjs.org/"
							className="text-gray-600"
						>
							NextJS
						</Link>{" "}
						and{" "}
						<Link
							underline
							href="https://tailwindcss.com/"
							className="text-green-400"
						>
							TailwindCSS
						</Link>
						.
					</span>
					<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
						{CONFIG.CONTACT.map((social, idx) => (
							<Link
								underline
								key={idx}
								href={social.href}
								className={`my-2 text-xl ${social.color} hover:scale-110 active:scale-90 duration-200`}
							>
								<social.icon />
							</Link>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
};
