<template>
<div class="demo-block">
  <div class="demo-block-tools">
    <mu-tooltip :content="i18n.jsfiddle">
      <mu-button icon @click="goJsfiddle">
        <mu-icon value="cloud"/>
      </mu-button>
    </mu-tooltip>
    <mu-tooltip :content="visible ? i18n.hidden : i18n.visible">
      <mu-button icon @click="toggle">
        <mu-icon value="code"/>
      </mu-button>
    </mu-tooltip>
  </div>
  <mu-expand-transition>
    <div class="meta" v-show="visible">
      <slot name="highlight"></slot>
    </div>
  </mu-expand-transition>
  <div class="demo-block-content">
    <slot name="source"></slot>
  </div>
</div>
</template>
<script>
import MuseUI from 'muse-ui';
import i18n from '../configs/i18n';

export default {
  name: 'demo-block',
  props: {
    jsfiddle: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      visible: false
    };
  },
  computed: {
    i18n () {
      const locale = this.$route.meta.lang;
      return i18n[locale];
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible;
    },
    goJsfiddle () {
      const { script, html, style } = this.jsfiddle;
      const resourcesTpl = '<link rel="stylesheet" href="https://unpkg.com/material-design-icons-iconfont@6/dist/material-design-icons-no-codepoints.min.css">\n<script src="//unpkg.com/vue@2/dist/vue.js"></scr' + 'ipt>' +
      '\n<scr' + `ipt src="//unpkg.com/@rocka/muse-ui@${MuseUI.version}/dist/muse-ui.js"></scr` + 'ipt>';
      let jsTpl = (script || '').replace(/export default/, 'var Main =').trim();
      let htmlTpl = `${resourcesTpl}\n<div id="app">\n${html.trim()}\n</div>`;
      let cssTpl = `@import url("//unpkg.com/@rocka/muse-ui@${MuseUI.version}/dist/muse-ui.css");\n${(style || '').trim()}\n`;
      jsTpl = jsTpl
        ? jsTpl + '\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount(\'#app\')'
        : '\nnew Vue().$mount(\'#app\')';
      const data = {
        js: jsTpl,
        css: cssTpl,
        html: htmlTpl,
        panel_js: 3,
        panel_css: 1
      };
      const form = document.getElementById('fiddle-form') || document.createElement('form');
      form.innerHTML = '';
      const node = document.createElement('textarea');

      form.method = 'post';
      form.action = 'https://jsfiddle.net/api/post/library/pure/';
      form.target = '_blank';

      for (let name in data) {
        node.name = name;
        node.value = data[name].toString();
        form.appendChild(node.cloneNode());
      }
      form.setAttribute('id', 'fiddle-form');
      form.style.display = 'none';
      document.body.appendChild(form);

      form.submit();
    }
  }
};
</script>
<style lang="less">
.demo-block {
  position: relative;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 40px;
  .highlight {
    margin-bottom: 0 !important;
  }
  .source {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.demo-block-content {
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  justify-content: center;
  background-color: #eeeeee;
}
.demo-block-tools {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  .mu-button {
    color: rgba(0, 0, 0, 0.54);
  }
}
@media (min-width: 600px) {
  .demo-block {
    margin-left: 0;
    margin-right: 0;
  }
  .demo-block-content {
    padding-top: 48px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
  }
  .demo-block-tools {
    display: block;
  }
}
</style>
