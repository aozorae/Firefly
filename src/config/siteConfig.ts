import type { SiteConfig } from "@/types/siteConfig";

// 定义站点语言
// 语言代码，例如：'zh_CN', 'zh_TW', 'en', 'ja', 'ru', 'ko'。
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	"title": "Aozora Blog",
	"subtitle": "记录技术",
	"site_url": "https://azora.top",
	"description": "基于 Astro 与 Firefly 主题构建的个人博客，用于记录技术实践、学习笔记与生活随想。",
	"keywords": [
		"尘荒三木",
		"Astro",
		"博客",
		"技术博客",
		"学习笔记"
	],
	"themeColor": {
		"hue": 165,
		"fixed": true,
		"defaultMode": "system"
	},
	"pageWidth": 100,
	"card": {
		"border": false,
		"followTheme": false
	},
	"favicon": [
		{
			"src": "/favicon/favicon.ico"
		}
	],
	"navbar": {
		"logo": {
			"type": "image",
			"value": "assets/images/firefly.png",
			"alt": "🍀"
		},
		"title": "Firefly Blog",
		"widthFull": false,
		"menuAlign": "center",
		"followTheme": false,
		"stickyNavbar": true
	},
	"siteStartDate": "2025-01-01",
	"timezone": "Asia/Shanghai",
	"pages": {
		"friends": true,
		"sponsor": true,
		"guestbook": false,
		"bangumi": false,
		"gallery": false,
		"anime": false,
		"dynamic": true
	},
	"categoryBar": true,
	"foldArticle": true,
	"postListLayout": {
		"defaultMode": "list",
		"mobileDefaultMode": "grid",
		"allowSwitch": true,
		"descriptionLines": 2,
		"showStatsIcons": true,
		"tagsPosition": "bottom",
		"meta": {
			"showPublished": true,
			"showCategory": true,
			"showTags": true,
			"tagCount": 5,
			"showWords": false,
			"showReadingTime": false
		},
		"stats": {
			"showPublished": true,
			"showWords": true,
			"showReadingTime": true
		},
		"grid": {
			"masonry": false,
			"columnWidth": 320
		}
	},
	"post": {
		"rehypeCallouts": {
			"theme": "github",
			"enablePythonMarkdownAdmonitions": false
		},
		"showLastModified": true,
		"outdatedThreshold": 30,
		"sharePoster": true,
		"generateOgImages": false
	},
	"bangumi": {
		"userId": "",
		"mode": "dynamic",
		"apiUrl": "https://bgmapi.anibt.net",
		"subjectBaseUrl": "https://bgmmi.anibt.net/subject/",
		"categoryOrder": [
			"anime",
			"book",
			"music",
			"game"
		]
	},
	"anime": {
		"bilibili": {
			"uid": ""
		}
	},
	"pagination": {
		"postsPerPage": 10
	},
	"imageOptimization": {
		"formats": "webp",
		"quality": 85,
		"noReferrerDomains": [
			"*.hdslb.com",
			"*.bilibili.com"
		]
	},
	"lang": SITE_LANG
};
