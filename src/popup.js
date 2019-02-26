getSearchUrl = chrome.extension.getBackgroundPage().getSearchUrl;

chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function (selection) {
    if (selection) {
        let query = encodeURIComponent(selection[0])
        let url = getSearchUrl(query, 'poj', 'equals')
        document.querySelector('iframe').src = url
    }
});
