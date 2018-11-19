chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: 'poj-equals',
        title: 'Pe̍h-ōe-jī (Kāng款--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'poj-contains',
        title: 'Pe̍h-ōe-jī (相關--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoalo-equals',
        title: '教育部羅馬字 (Kāng款--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoalo-contains',
        title: '教育部羅馬字 (相關--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hanlo-equals',
        title: '漢字/漢羅合用 (Kāng款--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hanlo-contains',
        title: '漢字/漢羅合用 (相關--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoabun-equals',
        title: '對應華語 (Kāng款--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'hoabun-contains',
        title: '對應華語 (相關--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'english-equals',
        title: '對應英文 (Kāng款--ê)',
        contexts: ['selection']
    })
    chrome.contextMenus.create({
        id: 'english-contains',
        title: '對應英文 (相關--ê)',
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
