<template>
  <iframe id="chhoe_taigi" :src="url" :key="url"></iframe>
  <!-- </div> -->
</template>

<script>
import { getSearchUrl } from '../background.js'
import browser from 'webextension-polyfill'

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
    searchInPopup() {
      const _self = this
      chrome.tabs.executeScript(
      {
        code: 'window.getSelection().toString()'
      },
      async function (selection) {
        if (selection) {
          const query = encodeURIComponent(selection[0].trim())
          const { spellingMethod } = await browser.storage.local.get({ spellingMethod: 'poj' })
          const { searchMethod } = await browser.storage.local.get({ searchMethod: 'equals' })
          _self.url = getSearchUrl(query, spellingMethod, searchMethod)
        }
      }
      ), _ => {
        const e = chrome.runtime.lastError
        if (e !== undefined) {
          console.log(tabId, _, e)
        }
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
