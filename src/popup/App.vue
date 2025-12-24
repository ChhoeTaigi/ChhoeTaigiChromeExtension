<template>
  <iframe id="chhoe_taigi" :src="url" :key="url"></iframe>
  <!-- </div> -->
</template>

<script>
import browser from 'webextension-polyfill'

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

export default {
  data () {
    return {
      url: ''
    }
  },
  mounted () {
    const _self = this
    _self.searchInPopup()
  },
  methods: {
    async searchInPopup() {
      const _self = this
      const tabs = await browser.tabs.query({ active: true, currentWindow: true })
      if (tabs.length === 0) return

      try {
        const results = await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: () => window.getSelection().toString()
        })

        if (results && results[0] && results[0].result) {
          const selection = results[0].result
          const query = encodeURIComponent(selection.trim())
          const { spellingMethod } = await browser.storage.local.get({ spellingMethod: 'poj' })
          const { searchMethod } = await browser.storage.local.get({ searchMethod: 'equals' })
          _self.url = getSearchUrl(query, spellingMethod, searchMethod)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>
  html {
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }
  /* For Chrome, Safari, and Opera */
  html::-webkit-scrollbar {
    width: 0px !important ;
    height: 0px !important ;
  }

  #chhoe_taigi {
    width: 785px;
    height: 600px;
    margin: -8px;
    border: none;
  }
</style>
