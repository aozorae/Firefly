import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	"mode": "banner",
	"switchable": true,
	"playerEnable": false,
	"src": {
		"desktop": [
			"https://i.chsm666.top/file/1784686171666_145084707_p0_master1200.jpg"
		],
		"mobile": [
			"assets/images/MobileWallpaper/m1.avif",
			"assets/images/MobileWallpaper/m2.avif",
			"assets/images/MobileWallpaper/m3.avif",
			"assets/images/MobileWallpaper/m4.avif",
			"assets/images/MobileWallpaper/m5.avif",
			"assets/images/MobileWallpaper/m6.avif"
		],
		"playerUrl": [
			"https://www.image2url.com/r2/default/videos/1781765166391-f2ba6648-1597-40e0-9f0a-6768ae39e574.mp4"
		]
	},
	"common": {
		"dimOpacity": 0.2,
		"playerMode": "random",
		"homeText": {
			"enable": true,
			"switchable": true,
			"title": "记录生活，分享思考",
			"titleSize": "3.8rem",
			"subtitle": [
				"技术实践",
				"学习笔记",
				"生活随想"
			],
			"subtitleSize": "1.5rem",
			"typewriter": {
				"enable": true,
				"speed": 100,
				"deleteSpeed": 50,
				"pauseTime": 2000
			}
		},
		"navbar": {
			"transparentMode": "semi",
			"enableBlur": true,
			"blur": 5
		},
		"waves": {
			"enable": {
				"desktop": true,
				"mobile": true
			},
			"switchable": true
		},
		"gradient": {
			"enable": {
				"desktop": true,
				"mobile": true
			},
			"height": "10%",
			"switchable": true
		},
		"carousel": {
			"enable": false,
			"interval": 5000,
			"transitionEffect": "zoom",
			"switchable": true
		}
	},
	"banner": {
		"position": "0% 20%"
	},
	"overlay": {
		"switchable": {
			"opacity": true,
			"blur": true,
			"cardOpacity": true
		},
		"zIndex": -1,
		"opacity": 0.8,
		"blur": 10,
		"cardOpacity": 0.5
	},
	"fullscreen": {
		"position": "center"
	}
};
