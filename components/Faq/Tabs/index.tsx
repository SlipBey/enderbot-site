import React, { useState } from "react";
import { Link } from "@components/Utils/Link";

export const Tabs = () => {
	const [currentTab, setCurrentTab] = useState("1");
	const [isShowing, setIsShowing] = useState(false);

	const tabs = [
		{
			id: "1",
			tabTitle: "Tab 1",
		},
		{
			id: "2",
			tabTitle: "Tab 2",
		},
		{
			id: "3",
			tabTitle: "Tab 3",
		},
		{
			id: "4",
			tabTitle: "Tab 4",
		},
	];

	const pils = [
		{
			id: "1",
			title: "31",
			text: "sj",
		},
		{
			id: "2",
			title: "33",
			text: "as",
		},
		{
			id: "3",
			title: "34",
			text: "asas",
		},
		{
			id: "4",
			title: "32",
			text: "js",
		},
	];

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};
	const toggle = () => {
		setIsShowing(!isShowing);
	};

	return (
		<div className="container">
			<div>
				<div className="text-4xl font-bold font-montserrat text-white text-left">
					Sıkça Sorulan Sorular
				</div>
				<div className="max-w-3xl text-lg text-gray-300 text-left">
					Bu sayfada aradığınız soruların cevaplarını bulabilirsiniz.{" "}
					<br />
					Eğer hala cevabını bulamadığınız bir soru var ise{" "}
					<Link href="/#contact" className="text-purple-500">
						iletişim
					</Link>{" "}
					seçeneklerinden bize ulaşabilirsiniz.
				</div>
			</div>

			<div className="hidden md:inline-flex flex mt-12 mb-8 space-x-6">
				{tabs.map((tab) => (
					<button
						className="bg-purple-500 border-none text-white cursor-pointer p-8 w-full ease-out duration-200 hover:bg-purple-600 disabled:shadow-lg disabled:shadow-purple-500/50"
						key={tab.id}
						id={tab.id}
						disabled={currentTab === `${tab.id}`}
						onClick={handleTabClick}
					>
						{tab.tabTitle}
					</button>
				))}
			</div>

			<div className="flex justify-center">
				<div className="dropdown mt-5 mb-5">
					<button
						className="
		md:hidden
          dropdown-toggle
          px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-600 hover:shadow-lg
          focus:bg-purple-600 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-700 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Kategoriler
					</button>
					<ul
						className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-gray-700
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
						aria-labelledby="dropdownMenuButton1"
					>
						{tabs.map((tab) => (
							<li key={tab.id}>
								<button
									className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-200
              hover:bg-gray-100
			  disabled:text-gray-600
            "
									id={tab.id}
									disabled={currentTab === `${tab.id}`}
									onClick={handleTabClick}
								>
									{tab.tabTitle}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="content">
				{tabs.map((tab) => {
					return (
						<div key={tab.id}>
							{pils.map((pils) => {
								return (
									<div key={pils.id}>
										{currentTab === tab.id &&
											tab.id === pils.id && (
												<div
													className={
														isShowing
															? "border-2 border-purple-600 bg-gray-800 p-2 rounded-lg"
															: "w-full mb-5 bg-gray-800 p-2 rounded-lg"
													}
												>
													<button
														className="w-full relative text-left p-5 outline-none cursor-pointer"
														onClick={toggle}
														type="button"
													>
														<p className="text-white font-bold subpixel-antialiased text-xl font-mono">
															{pils.title}
														</p>
													</button>
													<div
														className={
															isShowing
																? "inline-block p-5 border-t border-gray-700 mt-2 pt-2 flex flex-col space-y-3"
																: "hidden p-5"
														}
													>
														<p className="text-white mt-5 text-left font-medium antialiased text-md font-sans">
															{pils.text}
														</p>
													</div>
												</div>
											)}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
