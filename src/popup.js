getSearchUrl = chrome.extension.getBackgroundPage().getSearchUrl;

chrome.tabs.executeScript(
  {
    code: "window.getSelection().toString()"
  },
  function(selection) {
    if (selection) {
      const query = encodeURIComponent(selection[0].trim());
      const url = getSearchUrl(query, "poj", "equals");
      document.querySelector("iframe").src = url;
    }
  }
);
