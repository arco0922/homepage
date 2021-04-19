<template>
    <div class="all__container">
        <div class="links">
            <md-button class="md-icon-button" @click="gotogit">
                <md-icon :md-src="require('@/assets/github-icon.svg')" />
            </md-button>
            <md-button class="md-icon-button" @click="gototwitter">
                <md-icon :md-src="require('@/assets/twitter-icon.svg')" />
            </md-button>
        </div>
        <div id="about" class="section">
            <h1 class="section__title">About</h1>
            <transition name="content">
                <div class="section__content" v-show="showcontent">
                    <img src="@/assets/usericon.png" id="usericon" />
                    <div class="description">
                        <p style="font-size:20px; margin-top:10px">
                            新井康太 Kouta Arai
                        </p>
                        <br />
                        <div class="events">
                            <div class="event">
                                <p>2015</p>
                                <p>
                                    日本数学コンクール論文賞銀賞
                                </p>
                            </div>
                            <div class="event">
                                <p>2016</p>
                                <p>
                                    第26回日本数学オリンピック本選入賞
                                    (日本代表選考合宿参加)
                                </p>
                            </div>
                            <div class="event">
                                <p>2017</p>
                                <p>
                                    桐蔭学園中等教育学校卒業<br />
                                    東京大学理科一類入学
                                </p>
                            </div>
                            <div class="event">
                                <p>2021</p>
                                <p>
                                    同大学工学部機械情報工学科卒業<br />
                                    東京大学大学院情報理工学系研究科入学
                                    (知能機械情報学専攻)
                                </p>
                            </div>
                            <div class="event">
                                <p>他</p>
                                <p>
                                    第24回日本クラシック音楽コンクールヴァイオリン部門高校生の部第5位
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div id="works" class="section">
            <h1 class="section__title">Works</h1>
            <transition name="content">
                <div
                    class="works__contents"
                    :style="worksstyle"
                    v-show="showcontent"
                >
                    <div
                        v-for="(work, idx) in works"
                        :key="idx"
                        class="work"
                        :style="workstyle"
                    >
                        <img
                            :src="work.imgsrc"
                            class="thumbnails"
                            @click="gotodetail(work.link)"
                        />
                        <h4>{{ work.title }}</h4>
                        <p>{{ work.description }}</p>
                    </div>
                </div>
            </transition>
        </div>
        <div id="contact" class="section">
            <h1 class="section__title">Contact</h1>

            <p style="padding-left: 5px; margin-bottom: 10px">
                Mail : k9o2u2ta[AT]gmail.com
            </p>
            <md-button class="md-icon-button" @click="gotogit">
                <md-icon :md-src="require('@/assets/github-icon.svg')" />
            </md-button>
            <md-button class="md-icon-button" @click="gototwitter">
                <md-icon :md-src="require('@/assets/twitter-icon.svg')" />
            </md-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            works: [
                {
                    title: 'prARctice',
                    imgsrc: require('@/assets/prARctice_square.jpg'),
                    description: 'Hololens AR App',
                    link: 'prarctice',
                },
                {
                    title: 'KanbanChat',
                    imgsrc: require('@/assets/kanbanchat_usage_square.png'),
                    description: 'Realtime Web App',
                    link: 'kanbanchat',
                },
                {
                    title: 'Future Prediction',
                    imgsrc: require('@/assets/future_prediction_square.png'),
                    description: 'VR Game',
                    link: 'futureprediction',
                },
                {
                    title: '3D Display',
                    imgsrc: require('@/assets/webversion_square.jpg'),
                    description: 'Interactive Web Page',
                    link: '3ddisplay',
                },
                {
                    title: 'FireWorks',
                    imgsrc: require('@/assets/fireworks_square.png'),
                    description: 'Interactive Web Page',
                    link: 'fireworks',
                },
                {
                    title: 'Graphics',
                    imgsrc: require('@/assets/graphics.png'),
                    description: '3DCG, Motion Graphics',
                    link: 'graphics',
                },
            ],
            window: {
                width: 0,
                height: 0,
            },
            showcontent: false,
        };
    },
    computed: {
        worksstyle() {
            if (this.window.width > 630) {
                return { gap: '30px' };
            } else {
                return { gap: '5px' };
            }
        },
        workstyle() {
            if (this.window.width > 630) {
                return {};
            } else {
                return { marginBottom: '30px' };
            }
        },
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    mounted() {
        this.showcontent = true;
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        gotogit() {
            window.open('https://github.com/arco0922', '_blank');
        },
        gototwitter() {
            window.open('https://twitter.com/arakou_922', '_blank');
        },
        gotodetail(link) {
            this.$router.push(`/${link}`);
        },
    },
};
</script>
<style lang="css" scoped>
.all__container {
    padding: 70px 10px 30px 10px;
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
    margin-bottom: 70px;
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
.content-enter-active {
    transition: opacity 800ms ease-out;
}
.content-enter {
    opacity: 0;
}
.forupdate {
    margin: 0;
}
</style>
