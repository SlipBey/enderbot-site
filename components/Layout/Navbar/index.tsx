import { type FC, Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "@components/Utils/Link";
import { CONFIG } from "@libs/config";
import classnames from "classnames";

import { FiArrowUp, FiMenu, FiX } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const Navbar: FC = () => {
	const [visible, setVisible] = useState(false);
	const [hash, setHash] = useState("");
	const [top, setTop] = useState(false);
	const router = useRouter();

	const links = [
		{
			name: "Anasayfa",
			href: "/",
		},
		{
			name: "Dökümanlar",
			href: "/docs",
		},
		{
			name: "Öneri/hata Bildiri",
			href: "/proposal-error",
		},
		{
			name: "SSS",
			href: "/faq",
		},
		{
			name: "Yardım/Destek",
			href: "/discord",
		},
		{
			name: "İletişim",
			href: "/#contact",
		},
	];

	const onClose = () => {
		setVisible(!visible);
	};

	useEffect(() => {
		window.onscroll = function () {
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			)
				setTop(true);
			else setTop(false);
		};
	}, []);

	useEffect(() => {
		setHash(window.location.hash ? window.location.hash : "#");
	}, [hash]);

	const onUp = () => {
		window.location.href = "#";
	};

	const invite = () => {
		window.open("/invite", "name", "width=400,height=800");
	};

	return (
		<>
			<nav className="relative px-6 py-6 flex justify-between items-center bg-gray-900">
				<div className="flex items-center justify-between">
					<div>
						<span className="text-2xl font-bold lg:text-3xl text-gray-300">
							{CONFIG.OTHER.NAME}
						</span>
					</div>
				</div>

				<div className="hidden lg:inline-block flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
					{links.map((link, idx) => (
						<Fragment key={idx}>
							<Link
								href={link.href}
								className={
									router.pathname == link.href
										? "font-semibold transition-colors duration-200 transform lg:mx-8 text-purple-500"
										: "font-semibold transition-colors duration-200 transform lg:mx-8 text-gray-200 hover:text-purple-400"
								}
							>
								{link.name}
							</Link>
						</Fragment>
					))}
				</div>

				<button
					className="hidden lg:inline-block block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-purple-600 rounded-lg lg:mt-0 lg:w-auto hover:scale-110 duration-300 active:scale-90"
					onClick={invite}
				>
					<FaDiscord className="flex float-left text-xl" />
					<span className="flex float-right ml-2">Ekle</span>
				</button>
				<div className="lg:hidden">
					<button
						aria-label="Hamburger"
						onClick={onClose}
						className="flex items-center text-white p-3 focus:outline-none"
					>
						<FiMenu className="block h-6 w-6 fill-current hover:text-gray-200" />
					</button>
				</div>
			</nav>
			<div
				className={classnames("relative", "z-50", {
					hidden: !visible,
				})}
			>
				<div
					onClick={onClose}
					className="fixed inset-0 bg-gray-700 opacity-25"
				/>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-900 overflow-y-auto">
					<div className="flex items-center mb-8">
						<span className="mr-auto text-3xl font-bold leading-none text-white">
							{CONFIG.OTHER.NAME}
						</span>
						<div className="flex-grow" />
						<button
							aria-label="Close"
							onClick={onClose}
							className="focus:outline-none"
						>
							<FiX className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500" />
						</button>
					</div>
					<div>
						<ul>
							{links.map((link, idx) => (
								<li key={idx} className="mb-1">
									<Link
										href={link.href}
										className={
											router.pathname == link.href
												? "block p-4 text-sm rounded-full text-center font-semibold round text-white bg-purple-600"
												: "block p-4 text-sm rounded-full text-center font-semibold hover:bg-purple-800 hover:text-white round text-white"
										}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-auto">
						<div>
							<Link
								className="block justify-center flex px-5 py-2 mt-4 font-medium leading-5 text-white capitalize bg-purple-600 rounded-lg lg:mt-0 lg:w-auto duration-300 active:scale-75"
								href="/invite"
							>
								<FaDiscord className="text-xl" />
								<span className="ml-2">Ekle</span>
							</Link>
						</div>
						<p className="my-4 text-xs text-center text-gray-300">
							<span>
								&copy; {new Date().getFullYear()} All rights
								reserved.
							</span>
						</p>
						<div className="text-center">
							{CONFIG.CONTACT.map((social, idx) => (
								<Link underline key={idx} href={social.href}>
									<social.icon className="inline-block text-white mx-2" />
								</Link>
							))}
						</div>
					</div>
				</nav>
			</div>

			<button
				aria-label="Go Up"
				onClick={onUp}
				className={classnames(
					"fixed",
					"bottom-0",
					"right-0",
					"mx-10",
					"lg:mx-20",
					"my-10",
					"z-50",
					"text-white",
					"w-10",
					"h-10",
					"bg-purple-600",
					"duration-200",
					"hover:scale-110",
					"active:scale-90",
					"rounded-tl-lg",
					"rounded-r-lg",
					"focus:outline-none",
					{
						block: top,
						hidden: !top,
					},
				)}
			>
				<FiArrowUp className="h-full w-full p-2" />
			</button>
		</>
	);
};
