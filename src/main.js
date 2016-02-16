import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Topic from './views/topic.vue';
import routerMap from './router';
import filters from './filter';

Object.keys(filters).forEach((filter) => Vue.filter(filter, filters[filter]));

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
    history: true,
    root: '/diary2',
    saveScrollPosition: true,
});
routerMap(router);
router.start(Vue.extend(), '#app');