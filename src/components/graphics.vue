<template>
    <div id="about" class="section">
        <h1 class="section__title">Graphics</h1>
        <transition name="content">
            <div class="section__content" v-show="showcontent">
                <p class="description">
                    Blender / After Effects
                </p>
                <p class="description">
                    サークル (劇団)
                    や趣味で3DCGやモーショングラフィクスの作成も行っており、その作品をいくつか紹介します。
                </p>

                <div class="demo-imgs">
                    <img
                        src="@/assets/graphics.png"
                        class="demo2"
                        style="-webkit-backface-visibility: hidden;"
                    />
                    <img
                        src="@/assets/graphics2.png"
                        class="demo2"
                        style="-webkit-backface-visibility: hidden;"
                    />

                    <video
                        src="@/assets/vj4.mp4"
                        loop
                        autoplay
                        muted
                        playsinline
                        class="demo2"
                    ></video>
                    <video
                        src="@/assets/title2_1.mp4"
                        loop
                        autoplay
                        muted
                        playsinline
                        class="demo2"
                    ></video>
                    <video
                        src="@/assets/BIRTHDAY.mp4"
                        loop
                        autoplay
                        muted
                        playsinline
                        class="demo2"
                    ></video>
                    <p style="margin-top:25px; margin-bottom:25px;">
                        学部時代に所属していた劇団では、プロジェクションマッピングを利用した映像演出も手がけていました。
                    </p>
                    <video
                        src="@/assets/pm2.mp4"
                        loop
                        autoplay
                        muted
                        playsinline
                        class="demo2"
                    ></video>
                    <video
                        src="@/assets/pm1.mp4"
                        loop
                        autoplay
                        muted
                        playsinline
                        class="demo2"
                    ></video>
                </div>
            </div>

            ></transition
        >
    </div>
</template>
<script>
export default {
    data() {
        return {
            showcontent: false,
        };
    },
    components: {},
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
    margin: 5px 0px 25px 0px;
}
.demo2 {
    margin: 5px 0px 10px 0px;
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
.demo-imgs {
    text-align: center;
}
.caption {
    font-size: 12px;
    margin-bottom: 20px;
}
.forupdate {
    margin: 0;
}
</style>
