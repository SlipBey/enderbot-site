import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { CONFIG } from "@libs/config";
import { Aboutme } from "@components/Home/About/Aboutme";

import { FaSignal } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import {
	AiOutlineDoubleRight,
	AiOutlineUserAdd,
	AiOutlineClockCircle,
} from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";

export const About: FC = () => {
	const about = [
		{
			title: "Destek Sistemi",
			desc: "EnderBot'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır.",
			link: "/docs/systems/support",
			icon: HiSupport,
		},
		{
			title: "Seviye Sistemi",
			desc: "EnderBot'un en iyi sistemlerinden biri olan seviye sisteminde, seviye yasaklı kanal ekleme/çıkarma (ayarlanan kanalda seviye vermez), seviye-log ayarlama, seviye bonus ekleyip silme, seviye rol ayarlama, kullanıcılar arası seviye verme, seviye-xp ayarlama gibi bir çok özellik vardır.",
			link: "/docs/systems/level",
			icon: BsFillFileBarGraphFill,
		},
		{
			title: "Davet Sistemi",
			desc: "EnderBot'ta gelişmiş bir diğer sistem ise davet sistemidir. Davet bonus ekleme/silme, davet-log ayarlama, davet-rol ayarlama, top-davet gibi bir çok sistem vardır. EnderBot'u diğer botlardan ayıran şeylerden biri daha ise davet sistemini kendine ait modül ile çalıştırmaktadır. (Invite-Module adıyla geçmektedir)",
			link: "/docs/systems/invite",
			icon: AiOutlineUserAdd,
		},
		{
			title: "Aktiflik",
			desc: "EnderBot kendine özel bir makinede barınmaktadır. Bu makinede devamlı kontrollerden geçirilip her türlü ihtimale karşı önlemler anlınmaktadır. Bu yüzden dolayı %97.8 oranında aktiftir.",
			link: "/docs/about-enderbot",
			icon: AiOutlineClockCircle,
		},
		{
			title: "Düşük Ping",
			desc: "Kendine özel makinede durmasının bir diğer avantajı ise fiber internete bağlı olmasıdır. Bu hem geliştiricisi açısından hem de kullanıcıları açısından gayet önemli ve iyi bir sebeptir.",
			link: "/docs/abot-enderbot",
			icon: FaSignal,
		},
	];

	return (
		<section className="bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
					Neden <br />{" "}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						{CONFIG.OTHER.NAME}
					</span>{" "}
					?
				</h1>

				<p className="mt-4 xl:mt-6 text-xl text-gray-300">
					Eşsiz davet ve seviye sistemleri, kolay ve anlaşılabilir
					arayüzler.
					<br />
					Gibi bir çok şey için terciniz olabilir.
				</p>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
					{about.map((info, key) => {
						return (
							<div className="space-y-3" key={key}>
								<span className="inline-block p-3 rounded-full text-white bg-purple-500">
									<info.icon className="w-6 h-6" />
								</span>

								<h1 className="text-2xl font-semibold capitalize text-white">
									{info.title}
								</h1>

								<p className="text-gray-300">{info.desc}</p>

								<Link
									href={info.link}
									className="inline-flex items-center -mx-1 text-sm apitalize transition-colors duration-200 transform text-pink-400 hover:text-pink-500"
								>
									<span className="mx-1">
										Yardım ve Bilgi
									</span>
									<AiOutlineDoubleRight className="w-4 h-4" />
								</Link>
							</div>
						);
					})}
				</div>
			</div>

			<Aboutme />
		</section>
	);
};
