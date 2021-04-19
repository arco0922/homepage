<template>
    <div id="about" class="section">
        <h1 class="section__title">Fireworks</h1>
        <transition name="content">
            <div class="section__content" v-show="showcontent">
                <video
                    src="@/assets/fireworksmovie.mp4"
                    loop
                    autoplay
                    muted
                    class="demo"
                ></video>
                <p class="description">
                    <a
                        href="https://arco0922.github.io/Fireworks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >https://arco0922.github.io/Fireworks/</a
                    >
                </p>
                <p class="description">HTML / CSS / JavaScript (p5.js)</p>
                <p class="description">
                    クリックしたところに花火が打ちあがるインタラクティブなWebページです。構想から実装まで自分で全て行いました。
                </p>
                <p class="description">
                    コロナ禍でなかなか花火が見られない昨今ですが、このページで楽しんでみてはいかがでしょうか。
                </p>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showcontent: false,
        };
    },
    mounted() {
        document.scrollingElement.scrollTop = 0;
        this.showcontent = true;
    },
};
</script>
<style lang="css" scoped>
.section {
    padding-top: 70px;
}
.section__title {
    font-family: 'gokuboso';
    font-size: 50px;
    font-weight: 100;
    width: 250px;
    padding-bottom: 20px;
    margin-bottom: 25px;
    border-bottom: 1px solid rgb(139, 139, 139);
}
.demo {
    padding: 5px 0px 25px 0px;
}
.description {
    margin-bottom: 25px;
}
.content-enter-active {
    transition: opacity 800ms ease-out;
}
.content-enter {
    opacity: 0;
}
</style>
