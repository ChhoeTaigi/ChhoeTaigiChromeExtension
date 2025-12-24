function getSearchUrl(selectionText, spellingMethod, searchMethod) {
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

module.exports = {
    getSearchUrl
}
