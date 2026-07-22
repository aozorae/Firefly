import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用仓库内的音频，避免第三方歌单接口波动导致播放器无法使用
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 当前导入的歌曲没有独立歌词文件，关闭歌词区避免显示空内容
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "再度和你 With You Once More",
				artist: "HOYO-MiX",
				url: "/assets/music/tracks/with-you-once-more.mp3",
				cover: "/assets/music/cover/with-you-once-more.jpg",
				lrc: "",
			},
			{
				name: "在银河中孤独摇摆",
				artist: "知更鸟 & HOYO-MiX & Chevy",
				url: "/assets/music/tracks/sway-to-my-beat-in-cosmos.mp3",
				cover: "/assets/music/cover/sway-to-my-beat-in-cosmos.jpg",
				lrc: "",
			},
			{
				name: "希望有羽毛和翅膀",
				artist: "知更鸟 & HOYO-MiX & Chevy",
				url: "/assets/music/tracks/hope-is-the-thing-with-feathers.mp3",
				cover: "/assets/music/cover/hope-is-the-thing-with-feathers.jpg",
				lrc: "",
			},
			{
				name: "星辰不坠落",
				artist: "蓝心羽",
				url: "/assets/music/tracks/stars-do-not-fall.mp3",
				cover: "/assets/music/cover/stars-do-not-fall.jpg",
				lrc: "",
			},
			{
				name: "独角戏 Monodrama",
				artist: "HOYO-MiX",
				url: "/assets/music/tracks/monodrama.mp3",
				cover: "/assets/music/cover/monodrama.jpg",
				lrc: "",
			},
		],
	},
};
