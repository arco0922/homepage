import Vue from 'vue';
import VueRouter from 'vue-router';
import toppage from '@/components/toppage';
import detailpage from '@/components/detailpage';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: toppage,
        },
        {
            path: '/:worktitle',
            name: 'workdetail',
            component: detailpage,
        },
    ],
});

export default router;
