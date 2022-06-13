/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([withImages], {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/SlipBey",
				permanent: true,
			},
			{
				source: "/blog",
				destination: "https://blog.slipyme.xyz",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.instagram.com/SlipBey",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://youtube.com/c/AngelCraftNW",
				permanent: true,
			},
			{
				source: "/invite",
				destination:
					"https://discord.com/oauth2/authorize?client_id=952999874872352769&permissions=8&scope=bot",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/v9nrH5Nk7x",
				permanent: true,
			},
		];
	},
});
