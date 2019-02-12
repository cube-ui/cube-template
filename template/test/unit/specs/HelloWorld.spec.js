import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Cube from 'cube-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Cube){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HelloWorld from '@/components/HelloWorld'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Constructor().$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$el.querySelector('.hello h1').textContent)
    {{#if_eq runner "karma"}}.to.equal('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
