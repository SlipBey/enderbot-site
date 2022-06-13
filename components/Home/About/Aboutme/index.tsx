import type { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";

import styles from "./index.module.scss";

//assets
import icon from "@assets/About/icon.svg";

export const Aboutme: FC = () => {
	const about = [
		{
			title: "Destek Sistemi",
			desc: "EnderBot'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır.",
			img: icon,
		},
	];

	return (
		<section className="bg-gray-900">
			<div className="container px-6 py-10 mx-auto mt-12">
				<div className="flex flex-col mt-16 mb-32 gap-40">
					{about.map((info, key) => {
						return (
							<div className={styles.feature} key={key}>
								<CustomImage src={info.img} alt={info.title} />
								<div>
									<h2>{info.title}</h2>
									<p>{info.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
