{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#if_eq importType "partly"}}
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  {{#lint}}
  /* eslint-disable no-unused-vars */
  Style,
  {{/lint}}
  {{#unless lint}}
  Style,
  {{/lint}}
  Button,
  Checkbox,
  CheckboxGroup,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList
} from 'cube-ui'

Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
{{/if_eq}}
{{#if_eq importType "fully"}}
import Cube from 'cube-ui'
Vue.use(Cube)
{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
