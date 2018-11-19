chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: 'poj-equals',
        title: 'Pe̍hōejī (Kāng 款 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'poj-contains',
        title: 'Pe̍hōejī (相關 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoalo-equals',
        title: '教育部羅馬字 (Kāng 款 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoalo-contains',
        title: '教育部羅馬字 (相關 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hanlo-equals',
        title: '漢羅併用 (Kāng 款 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hanlo-contains',
        title: '漢羅併用 (相關 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoabun-equals',
        title: '對應華語 (Kāng 款 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoabun-contains',
        title: '對應華語 (相關 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'english-equals',
        title: '對應英文 (Kāng 款 ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'english-contains',
        title: '對應英文 (相關 ê)',
        contexts: ['selection']
    })
})

// add action listener to the context menu
chrome.contextMenus.onClicked.addListener(
    (info, tab) => {
        let sMenuItemId = info.menuItemId
        let sSelection = info.selectionText
        let aResult = sMenuItemId.split("-")
        let aMenuItem = {
            'poj': 'spellingMethod=poj_unicode&spelling=',
            'hoalo': 'spellingMethod=kiplmj_unicode&spelling=',
            'hanlo': 'taibun=',
            'hoabun': 'hoabun=',
            'english': 'english_descriptions=',
        }
        let sUrl = 'https://chhoe.taigi.info/search?method=basic&searchMethod='
        sUrl += aResult['1'] + "&" + aMenuItem[aResult["0"]] + sSelection
        chrome.tabs.create({url: sUrl})
    }
)
