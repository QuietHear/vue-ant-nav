/*
* @Author: aFei
* @Date: 2019-04-30 11:26:35
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2019-04-30 11:26:38
*/
import vueAntNav from './vueAntNav';

const comment = {
    install(Vue) {
        Vue.component('vueAntNav', vueAntNav);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;