import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';


const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
  },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
