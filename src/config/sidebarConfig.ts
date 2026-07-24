import type { SidebarLayoutConfig } from "../types/sidebarConfig";

/**
 * 侧边栏布局配置
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	"enable": true,
	"position": "both",
	"tabletSidebar": "left",
	"hideSidebarOnPostPage": false,
	"showBothSidebarsOnPostPage": true,
	"leftComponents": [
		{
			"type": "profile",
			"enable": true,
			"position": "top",
			"showOnPostPage": true
		},
		{
			"type": "announcement",
			"enable": true,
			"position": "top",
			"showOnPostPage": true
		},
		{
			"type": "music",
			"enable": true,
			"position": "sticky",
			"showOnPostPage": true
		},
		{
			"type": "categories",
			"enable": true,
			"position": "sticky",
			"showOnPostPage": true,
			"specificConfig": {
				"collapseThreshold": 5
			}
		},
		{
			"type": "tags",
			"enable": true,
			"position": "sticky",
			"showOnPostPage": true,
			"specificConfig": {
				"collapseThreshold": 10
			}
		}
	],
	"rightComponents": [
		{
			"type": "dynamic",
			"enable": true,
			"position": "top",
			"showOnPostPage": true,
			"specificConfig": {
				"dynamic": {
					"limit": 2
				}
			}
		},
		{
			"type": "stats",
			"enable": true,
			"position": "top",
			"showOnPostPage": false
		},
		{
			"type": "siteInfo",
			"enable": true,
			"position": "top",
			"showOnPostPage": true,
			"specificConfig": {
				"siteInfo": {
					"unknownBuildPlatform": "Unknown CI"
				}
			}
		},
		{
			"type": "calendar",
			"enable": true,
			"showTitle": false,
			"position": "sticky",
			"showOnPostPage": false,
			"specificConfig": {
				"calendar": {
					"showHeatmap": true
				}
			}
		},
		{
			"type": "sidebarToc",
			"enable": true,
			"position": "sticky",
			"showOnPostPage": true,
			"hideOnNonPostPage": true
		}
	],
	"mobileBottomComponents": [
		{
			"type": "profile",
			"enable": true,
			"showOnPostPage": true
		},
		{
			"type": "announcement",
			"enable": true,
			"showOnPostPage": true
		},
		{
			"type": "categories",
			"enable": true,
			"showOnPostPage": true,
			"specificConfig": {
				"collapseThreshold": 5
			}
		},
		{
			"type": "tags",
			"enable": true,
			"showOnPostPage": true,
			"specificConfig": {
				"collapseThreshold": 10
			}
		},
		{
			"type": "dynamic",
			"enable": true,
			"showOnPostPage": true,
			"specificConfig": {
				"dynamic": {
					"limit": 2
				}
			}
		},
		{
			"type": "stats",
			"enable": true,
			"showOnPostPage": true
		},
		{
			"type": "siteInfo",
			"enable": true,
			"showOnPostPage": true,
			"specificConfig": {
				"siteInfo": {
					"unknownBuildPlatform": "Unknown CI"
				}
			}
		}
	]
};
