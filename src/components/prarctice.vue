<template>
    <div id="about" class="section">
        <h1 class="section__title">prARctice</h1>
        <transition name="content">
            <div class="section__content" v-show="showcontent">
                <video
                    src="@/assets/prARctice.mp4"
                    loop
                    autoplay
                    muted
                    controls
                    playsinline
                    class="demo"
                ></video>
                <p class="description">
                    (このアプリは公開されていません)
                </p>
                <p class="description">
                    Hololens / Unity / C# / Python
                </p>
                <p class="description">
                    Hololensを利用してヴァイオリンの練習をサポートするARアプリです。
                </p>
                <p style="margin-bottom: 5px;"><b>【アプリ概要】</b></p>
                <ol class="description" style="padding-left: 20px;">
                    <li>
                        Hololensのカメラを利用して楽譜の写真を撮影しサーバーに送信
                    </li>
                    <li>Audiveris (楽譜認識ソフト) を利用しデジタルデータ化</li>
                    <li>
                        動的計画法 (DP)
                        により楽譜から最適な運指を計算し、Hololensに送信
                    </li>
                    <li>
                        楽器にARマーカーを取り付けて、実際の楽器上に押さえるべき場所と指番号を表示
                    </li>
                </ol>
                <div class="demo-imgs">
                    <img
                        src="@/assets/prarcticetop.png"
                        class="demo2"
                        style="-webkit-backface-visibility: hidden;"
                    />
                </div>
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
    margin-bottom: 20px;
}
.caption {
    font-size: 12px;
    margin-bottom: 20px;
}
li {
    margin-bottom: 5px;
}
.forupdate {
    margin: 0;
}
</style>
