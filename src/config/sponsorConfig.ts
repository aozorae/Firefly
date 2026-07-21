import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	title: "",
	description: "",
	usage: "",
	showSponsorsList: true,
	showComment: false,
	showButtonInPost: false,
	// 由后台生成个人收款方式；不会写入模板作者的收款信息。
	methods: 	[],
	sponsors: [],
};
