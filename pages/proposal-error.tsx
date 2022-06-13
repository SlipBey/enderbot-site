import { NextPage } from "next";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { Layout } from "@components/Layout";
import webhook from "webhook-discord";
import { toast } from "react-toastify";

const WebhookPage: NextPage = () => {
	const Hook = new webhook.Webhook(
		"https://ptb.discord.com/api/webhooks/984067442814881842/bg4TbCNg7WZLRMBCDFaFrF-txkLAEBPzHGOyxwe7bC_w_YnUDorqTX9moWUVs0tlmpAw",
	);

	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!name || !message)
			return toast.error("İsim ve Mesaj'ı boş bırakamazsınız.");
		Hook.info(name, message);
		toast.success("Öneriniz başarıyla tarafımıza ulaştırıldı.");
	};

	return (
		<Layout title="Hata/Öneri Bildiri">
			<section className="py- px-4 bg-gray-900 text-white">
				<div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-md w-full space-y-8">
						<div>
							<h2 className="text-center text-3xl font-extrabold text-gray-200">
								Öneri, Sorun veya Hata Bildiri
							</h2>
							<p className="mt-2 text-center text-sm text-gray-600">
								<span className="font-medium text-purple-500">
									Gereksiz yazı yazanları, trolleyenleri
									cezalandırmak amacıyla sizden cihaz
									bilgilerini topluyoruz.
								</span>
							</p>
						</div>

						<div className="rounded bg-gray-800 max-w-md rounded overflow-hidden shadow-xl p-5">
							<form className="space-y-4" onSubmit={onSubmit}>
								<div className="rounded-md shadow-sm -space-y-px">
									<div className="grid gap-6">
										<div className="col-span-12">
											<label className="block text-sm font-medium text-gray-200 mb-3">
												İsminiz
											</label>
											<input
												onChange={onNameChange}
												className="w-full h-12 bg-gray-800 text-center border border-2 border-gray-900 focus:border-purple-600 outline-none"
												type="text"
												placeholder="Gerçek isminizi yada discord isminizi yazabilirsiniz."
											/>
										</div>

										<div className="col-span-12">
											<label className="block text-sm font-medium text-gray-200 mb-3">
												Mesajınız
											</label>
											<textarea
												onChange={onMessageChange}
												className="w-full h-24 p-5 bg-gray-800 text-center border border-2 border-gray-900 focus:border-purple-600 outline-none"
												placeholder="İstediğiniz öneriyi, sorunu veya hatayı bildirebilir/yazabilirsiniz."
												rows={5}
											></textarea>
										</div>
									</div>
								</div>
								<div>
									<button
										type="submit"
										className="group relative w-full flex justify-center outline-none py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 duration-200 hover:scale-105 active:scale-90"
									>
										Gönder
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default WebhookPage;
