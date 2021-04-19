<template>
    <div class="all__container">
        <div class="links">
            <md-button class="md-icon-button" @click="gohome">
                <md-icon style="color:black;">home</md-icon>
            </md-button>
        </div>
        <prarctice
            class="page__content"
            v-if="$route.params.worktitle === 'prarctice'"
        />
        <kanbanchat
            class="page__content"
            v-if="$route.params.worktitle === 'kanbanchat'"
        />
        <futureprediction
            class="page__content"
            v-if="$route.params.worktitle === 'futureprediction'"
        />
        <display
            class="page__content"
            v-if="$route.params.worktitle === '3ddisplay'"
        />
        <fireworks
            class="page__content"
            v-if="$route.params.worktitle === 'fireworks'"
        />
        <graphics
            class="page__content"
            v-if="$route.params.worktitle === 'graphics'"
        />
    </div>
</template>
<script>
import display from './3ddisplay.vue';
import Fireworks from './fireworks.vue';
import Futureprediction from './futureprediction.vue';
import Graphics from './graphics.vue';
import Kanbanchat from './kanbanchat.vue';
import prarctice from './prarctice.vue';
export default {
    components: {
        prarctice,
        Kanbanchat,
        Futureprediction,
        display,
        Fireworks,
        Graphics,
    },
    data() {
        return {
            window: {
                width: 0,
                height: 0,
            },
        };
    },
    computed: {},
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        gohome() {
            this.$router.push('/');
        },
    },
};
</script>
<style lang="css" scoped>
.all__container {
    padding: 0px 10px 30px 10px;
    margin: 0px auto 0px auto;
    width: 65vw;
    max-width: 800px;
    min-width: 400px;
    position: relative;
}
.links {
    position: absolute;
    top: 60px;
    left: 0px;
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: flex-end;
}

.section {
    margin-bottom: 10px;
}
.section__title {
    font-family: 'gokuboso';
    font-size: 50px;
    font-weight: 100;
    width: 250px;
    padding-bottom: 20px;
    margin-bottom: 35px;
    border-bottom: 1px solid rgb(139, 139, 139);
}
.section__content {
    display: flex;
    align-items: center;
    gap: 10%;
}
#usericon {
    border-radius: 50%;
    width: 20%;
    min-width: 80px;
}
.description {
    flex: 1;
}
.events {
    display: flex;
    flex-direction: column;
}
.event {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}
.works__contents {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-evenly;
}
.thumbnails {
    width: 180px;
    margin-bottom: 5px;
    box-shadow: 1px 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
    transition: 0.3s;
}
.thumbnails:hover {
    cursor: pointer;
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.507),
        0 0 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
}
</style>
