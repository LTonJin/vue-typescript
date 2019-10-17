import Vue from 'vue'
import { Button, Loading } from 'element-ui'

Vue.use(Button);
Vue.prototype.$loading = Loading.service;
