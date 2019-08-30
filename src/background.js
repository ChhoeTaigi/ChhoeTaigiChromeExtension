global.browser = require('webextension-polyfill')

setContextMenus()

chrome.contextMenus.onClicked.addListener(info => {
  const menuItemId = info.menuItemId
  const selection = info.selectionText
  const result = menuItemId ? menuItemId.split('-') : []
  const url = getSearchUrl(selection, result[0], result[1])
  chrome.tabs.create({ url: url })
})

export function setContextMenus () {
  chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
      id: 'poj-equals-open-chhoe-taigi',
      type: 'normal',
      title: '開 Chhoe Taigi 找台語 佇新頁',
      contexts: ['browser_action']
    })
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
}

export function getSearchUrl (selectionText, spellingMethod, searchMethod) {
  const menuItems = {
    poj: 'spellingMethod=poj_unicode&spelling=',
    hoalo: 'spellingMethod=kiplmj_unicode&spelling=',
    hanlo: 'taibun=',
    hoabun: 'hoabun=',
    english: 'english_descriptions='
  }
  let url = 'https://chhoe.taigi.info/'
  url += selectionText ? `search?method=basic&searchMethod=${searchMethod}&${menuItems[spellingMethod]}${selectionText}` : ''
  return url
}
