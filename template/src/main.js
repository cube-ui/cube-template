{{#amfeFlexible}}
import 'amfe-flexible'
{{/amfeFlexible}}
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
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
  {{/unless}}
  Button,
  CheckboxGroup,
  Radio,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  CascadePicker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Upload{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
} from 'cube-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq importType "fully"}}
import Cube from 'cube-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

{{#if_eq importType "partly"}}
Vue.use(Button){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(CheckboxGroup){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Radio){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Input){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Textarea){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Select){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Switch){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Rate){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Validator){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Loading){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Tip){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Toast){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Picker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(CascadePicker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(TimePicker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Dialog){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ActionSheet){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Scroll){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Slide){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(IndexList){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Swipe){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Upload){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq importType "fully"}}
Vue.use(Cube){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
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
