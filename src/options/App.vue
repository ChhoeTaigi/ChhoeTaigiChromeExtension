<template>
  <div>
    <div id="setting">
      <h3>Sek-téng tiám icon beh án-nóa chhōe:</h3>
      <ul>
        <li>
          <span>Kéng ê 方式:</span>
          <span v-for="(value, key) in searchMethods" :key="key">
            <label>
              <input type="radio" v-model="searchMethod" :value="key" class="form-radio">
              {{ value }}
            </label>
          </span>
        </li>
        <li>
          <span>Chhōe ê 方式:</span>
          <select v-model="spellingMethod" class="select-box">
            <option v-for="(value, key) in spellingMethods" :key="key" :value="key">
              {{ value }}
            </option>
          </select>
        </li>
      </ul>
      <button @click="setConfig()">Submit</button>
        <transition name="msg">
          <span id="savedMessage" v-show="savedMessage">Saved</span>
        </transition>
    </div>
  </div>
</template>

<script>
import browser from 'webextension-polyfill'

export default {
  name: 'App',

  data () {
    return {
      savedMessage: false,
      searchMethod: '',
      searchMethods: {
        'equals': 'Kāng款--ê',
        'contains': '相關--ê',
      },
      spellingMethod: '',
      spellingMethods: {
        'poj': 'Pe̍h-ōe-jī',
        'hoalo': '教育部羅馬字',
        'hanlo': '漢字/漢羅合用',
        'hoabun': '對應華語',
        'english': '對應英文',
      }
    }
  },
  mounted () {
    this.getConfig()
  },
  methods: {
    async getConfig () {
      const data = await browser.storage.local.get({
        searchMethod: 'equals',
        spellingMethod: 'poj'
      })
      this.searchMethod = data.searchMethod
      this.spellingMethod = data.spellingMethod
    },
    setConfig () {
      browser.storage.local.set(
        {
          searchMethod: this.searchMethod,
          spellingMethod: this.spellingMethod,
        }
      )
      this.savedMessage = true
      setTimeout(() => {
        this.savedMessage = false
      }, 1000)
    },
  }
};
</script>

<style lang="scss" scoped>
  #setting {
    padding: 5px 5px 5px 5px;
    color: #333;
    font: 15px/1.7 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      padding: 5px 5px 5px 5px;
    }

    #savedMessage {
      margin-left: 5px;
    }

    .msg-enter-active,
    .msg-leave-active {
      transition: opacity 0.5s;
    }
    .msg-enter,
    .msg-leave-to {
      opacity: 0;
    }

    button {
      z-index: 1;
      position: relative;
      font-size: inherit;
      font-family: inherit;
      color: white;
      padding: 0.5em 1em;
      outline: none;
      border: none;
      background-color: #5b9564;
      overflow: hidden;
      cursor: pointer;
    }

    button::after {
      content: '';
      z-index: -1;
      background-color: hsla(0, 0%, 100%, 0.2);
      position: absolute;
      top: -50%;
      bottom: -50%;
      width: 1.25em;
      transform: translate3d(-525%, 0, 0) rotate(35deg);
    }

    button:hover::after {
      transition: transform 0.45s ease-in-out;
      transform: translate3d(200%, 0, 0) rotate(35deg);
    }

    .form-radio
    {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      position: relative;
      background-color: #f1f1f1;
      color: #666;
      top: 4px;
      height: 15px;
      width: 15px;
      border: 0;
      border-radius: 50px;
      cursor: pointer;
      margin: 0px 0px 0px 9px;
      outline: none;
    }
    .form-radio:checked::before
    {
      position: absolute;
      font: 13px/1 'Open Sans', sans-serif;
      left: 4px;
      top: 0px;
      content: '\02143';
      transform: rotate(40deg);
    }
    .form-radio:hover
    {
      background-color: #f7f7f7;
    }
    .form-radio:checked
    {
      background-color: #f1f1f1;
    }
    label
    {
      cursor: pointer;
    }

    .select-box
    {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 200px;
      padding: 9px 9px 11px 13px;
      background-color: #f1f1f1;
      border: none;
      border-radius: 3px;
      outline: none;
      font: 15px 'Open Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #666;
      cursor: pointer;
    }
    .select-point
    {
      position: absolute;
      top: 8px;
      right: 13px;
      font: 16px 'Open Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #666;
    }
    select:-moz-focusring
    {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

</style>
