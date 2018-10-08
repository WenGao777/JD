import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Make from '../makemoney/index.vue'
import Borrow from '../borrowmoney/index.vue'
import Save from '../savemoney/index.vue'
import Perself from '../vip/index.vue'
import Download from '../special/download.vue'
import Load from '../special/landed.vue'
import Forget from '../special/forget.vue'
import Pregist from '../special/phoneregist.vue'
import Area from '../special/area.vue'
import '../../css/reset.scss'

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/mkm",
            name: "Make",
            component: Make,
        }, {
            path: "/brm",
            name: "Borrow",
            component: Borrow,
        }, {
            path: "/sam",
            name: "Save",
            component: Save,
        }, {
            path: "/pjd",
            name: "Perself",
            component: Perself,
        }, {
            path: "/download",
            name: "Download",
            component: Download,
        }, {
            path: "/load",
            name: "Load",
            component: Load,
        }, {
            path: "/forget",
            name: "Forget",
            component: Forget,
        }, {
            path: "/phoneregist",
            name: "Pregist",
            component: Pregist,
        }, {
            path: "/ctryarea",
            name: "Area",
            component: Area,
        }
    ],
})