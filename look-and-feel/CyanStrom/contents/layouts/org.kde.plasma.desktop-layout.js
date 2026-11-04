var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "wallpaperplugin": ""
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "631",
                            "DialogWidth": "811"
                        },
                        "/General": {
                            "arrangement": "1",
                            "iconSize": "2",
                            "labelMode": "0",
                            "locked": "true",
                            "previews": "false"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.folder",
                    "title": "Arbeitsflächen-Ordner"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "396",
                            "popupWidth": "490"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "631",
                            "DialogWidth": "811"
                        },
                        "/General": {
                            "showSecondHand": "true"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.analogclock",
                    "title": "Analoge Uhr"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "Applet-153:672,48,640,192,0;Applet-164:672,304,640,352,0;Applet-163:1440,32,464,624,0;",
                    "ItemGeometries-2259x1271": "Applet-164:16,32,656,416,0;Applet-200:1696,48,272,272,0;",
                    "ItemGeometries-2560x1440": "Applet-164:256,16,960,608,0;",
                    "ItemGeometriesHorizontal": "Applet-164:16,32,656,416,0;Applet-200:1696,48,272,272,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "794",
                    "DialogWidth": "856"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "462",
                    "ToolBoxButtonY": "32"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/amber/.local/share/wallpapers/simply-birch/",
                    "SlidePaths": "/home/amber/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/Buttons": {
                            "showSleepButton": "false"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/Custom": {
                            "showCustomCommandIcons": "false"
                        },
                        "/General": {
                            "customButtonImage": "fedora-logo-icon",
                            "iconSizePercent": "80",
                            "showMenuItemIcons": "true",
                            "useCustomButtonImage": "true",
                            "useRectangleButtonShape": "false"
                        }
                    },
                    "plugin": "org.latgardi.darwinmenu"
                },
                {
                    "config": {
                        "/Appearance": {
                            "overrideElementsMaximized": "true",
                            "widgetElements": "windowTitle",
                            "widgetElementsDisabledMode": "Hide",
                            "widgetElementsMaximized": "windowCloseButton,windowMaximizeButton,windowMinimizeButton,windowTitle",
                            "widgetToolTipMode": "Disabled",
                            "windowTitleFontBold": "false",
                            "windowTitleFontSize": "8",
                            "windowTitleHideEmpty": "true",
                            "windowTitleMaximumWidth": "250",
                            "windowTitleSource": "AppName"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "com.github.antroids.application-title-bar"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "42"
                        },
                        "/Appearance": {
                            "allScreens": "false"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "459",
                            "popupWidth": "490"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "438",
                            "popupWidth": "333"
                        }
                    },
                    "plugin": "Plasma.Flex.Hub"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1366"
                }
            },
            "height": 2,
            "hiding": "normal",
            "lengthMode": "fill",
            "location": "top",
            "maximumLength": 75.875,
            "minimumLength": 75.875,
            "offset": 0,
            "opacity": "adaptive"
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "979",
                            "popupWidth": "430"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "631",
                            "DialogWidth": "811"
                        },
                        "/General": {
                            "alphaSort": "true",
                            "customButtonImage": "fedora-logo-icon",
                            "displayPosition": "Default",
                            "favoritesPortedToKAstats": "true",
                            "highlightNewlyInstalledApps": "false",
                            "pin": "true",
                            "showFavoritesFirst": "true",
                            "showRecentDocs": "false",
                            "showRecentFolders": "true",
                            "useCustomButtonImage": "true",
                            "useExtraRunners": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "launchers": "applications:systemsettings.desktop,applications:org.kde.discover.desktop,preferred://filemanager,preferred://browser,applications:org.kde.konsole.desktop,applications:proton.vpn.app.gtk.desktop",
                            "showOnlyCurrentDesktop": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.5,
            "hiding": "normal",
            "lengthMode": "fill",
            "location": "bottom",
            "maximumLength": 141.1875,
            "minimumLength": 141.1875,
            "offset": 0,
            "opacity": "adaptive"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
