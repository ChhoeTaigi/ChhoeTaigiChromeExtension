# ChhoeTaigiChromeExtension

[![Firefox add-on version](https://img.shields.io/amo/v/{e64496aa-3d43-4ca1-8a73-f621d876c784}?color=%234f8cc9&style=flat-square)](https://addons.mozilla.org/en-US/firefox/addon/chhoetaigi-%E6%89%BE%E5%8F%B0%E8%AA%9E/)
[![Chrome Web Store version](https://img.shields.io/chrome-web-store/v/edkmnkmcckbdmiobolimneaeomiiaiah.svg?color=%234f8cc9&style=flat-square)](https://chrome.google.com/webstore/detail/bookmark-sidebar/edkmnkmcckbdmiobolimneaeomiiaiah)
[![Chrome Web Store users](https://img.shields.io/chrome-web-store/d/edkmnkmcckbdmiobolimneaeomiiaiah.svg?color=%23e05d44&style=flat-square)](https://chrome.google.com/webstore/detail/bookmark-sidebar/edkmnkmcckbdmiobolimneaeomiiaiah)
[![Chrome Web Store rating](https://img.shields.io/chrome-web-store/stars/edkmnkmcckbdmiobolimneaeomiiaiah.svg?color=%2344cc11&style=flat-square)](https://chrome.google.com/webstore/detail/bookmark-sidebar/edkmnkmcckbdmiobolimneaeomiiaiah)
[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-lightgray.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)
[![Made with love](https://img.shields.io/badge/made%20with-%e2%9d%a4-ff69b4.svg?style=flat-square)](https://watain666.github.io/)

---

![preview](/resource/store/c1_1280_800.png)

Hō͘ pīntōaⁿlâng ê [Chhōe Tâigí](https://chhoe.taigi.info/) Sûtián kesi

## Pe̍hōejī

[Chhōe Tâigí](https://chhoe.taigi.info/) sī chin hó ēng ê Tâigí sûtián bāngchām

m̄koh khòaⁿ tio̍h bōehiáu ê jī tio̍h ài phahkhui bāngchām

chi̍t jī chi̍t jī chhâ si̍tchāi siuⁿ hùikhì

hùikhì beh ánchóaⁿ pān?

bô kesi tio̍h kakī siá!

só͘í chit ê kesi tio̍h seⁿ chhutlâi--ah

súiōng hongsek chin kántan

kā beh chhōe ê jī kho͘--khílâi chhi̍h niauchhí á chiaⁿ pêng, tio̍h sûi ēsái chhōe--ah!
![selected_menu](/resource/gif/selected_menu.gif)

mā ēsái kā beh chhōe ê jī kho͘--khílâi chhi̍h icon tio̍h ē kah kiatkó ēng popup windows khui chhutlâi
![selected_click_icon](/resource/gif/selected_click_icon.gif)

beh ánnóa chhōe ēsái tī Option siattēng
![option](/resource/store/c3_1280_800.png)

nāsī ti̍tchiap chhi̍h icon tio̍h ē khui popup windown kàu [Chhōe Tâigí](https://chhoe.taigi.info/) ê bāngchām!
![click_icon](/resource/gif/click_icon.gif)

[![Download from Chrome Web Store](/resource/badges/get_it_on_chrome.png)](https://chrome.google.com/webstore/detail/edkmnkmcckbdmiobolimneaeomiiaiah)

[![Download from Firefox Add-on](/resource/badges/get_it_on_firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/chhoetaigi-%E6%89%BE%E5%8F%B0%E8%AA%9E/)

---

## 華文

[Chhōe Tâigí](https://chhoe.taigi.info/) 是一個很好用的台語辭典網站

不過在網路上看到不會的字就要打開網站，一個字一個字去查實在是很費功夫

你說這種時候怎麼辦？

沒工具就自己寫啊！

所以這個工具就這樣生出來了！

使用的方式很簡單

把想查的字選起來後按滑鼠右鍵就可以查了！
![selected_menu](/resource/gif/selected_menu.gif)

也可以把想查的字選起來後按 icon 就會把結果顯示在浮動視窗
![selected_click_icon](/resource/gif/selected_click_icon.gif)

要怎麼查可以在選項頁面設置
![option](/resource/store/c3_1280_800.png)

若是直接按 icon 就會彈出浮動視窗到 [Chhōe Tâigí](https://chhoe.taigi.info/) 的網站！
![click_icon](/resource/gif/click_icon.gif)

[![Download from Chrome Web Store](/resource/badges/get_it_on_chrome.png)](https://chrome.google.com/webstore/detail/edkmnkmcckbdmiobolimneaeomiiaiah)

[![Download from Firefox Add-on](/resource/badges/get_it_on_firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/chhoetaigi-%E6%89%BE%E5%8F%B0%E8%AA%9E/)

---

## Development

### Requirements

- Node.js >= 8 and npm >= 5
- [git](https://git-scm.com)
- [vue-cli 2](https://github.com/vuejs/vue-cli/tree/v2)

### Usage

```bash
git clone git@github.com:ChhoeTaigi/ChhoeTaigiChromeExtension.git
cd ChhoeTaigiChromeExtension
npm install
npm run build
```

#### `npm run build`

Build the extension into `dist` folder for **production**.

#### `npm run build:dev`

Build the extension into `dist` folder for **development**.

#### `npm run watch`

Watch for modifications then run `npm run build`.

#### `npm run watch:dev`

Watch for modifications then run `npm run build:dev`.

It also enable [Hot Module Reloading](https://webpack.js.org/concepts/hot-module-replacement), thanks to [webpack-chrome-extension-reloader](https://github.com/rubenspgcavalcante/webpack-chrome-extension-reloader) plugin.

:warning: Keep in mind that HMR only works for your **background** entry.

#### `npm run build-zip`

Build a zip file following this format `<name>-v<version>.zip`, by reading `name` and `version` from `manifest.json` file.
Zip file is located in `dist-zip` folder.

#### `npm run src-zip`

Build a zip file following this format `<name>-v<version>.zip`, by reading `name` and `version` from `manifest.json` file.
Zip file is located in `src-zip` folder.

## License

[GPL-3.0](https://github.com/ChhoeTaigi/ChhoeTaigiChromeExtension/blob/master/LICENSE)
