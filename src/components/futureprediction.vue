<template>
    <div id="about" class="section">
        <h1 class="section__title">Future<br />Prediction</h1>
        <transition name="content">
            <div class="section__content" v-show="showcontent">
                <video
                    src="@/assets/futureprediction.mp4"
                    loop
                    autoplay
                    muted
                    controls
                    playsinline
                    class="demo"
                ></video>
                <p class="description">
                    作品URL：<a
                        href="https://arco0922.github.io/FuturePrediction/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="description"
                        >https://arco0922.github.io/FuturePrediction/</a
                    >
                    (PC限定)
                </p>
                <p class="description">Unity / C#</p>
                <p class="description">
                    「VRで超能力を体験しよう」というゼミのためにVR用に開発したゲームをWeb版にデプロイしたものです。
                </p>
                <p class="description">
                    内容としては、球の未来の軌道が見える球打ちゲームで、構想から実装まで全てを行いました。
                </p>
                <p class="description">
                    音にもこだわっているのでぜひイヤホンをつけてお楽しみください。
                </p>
                <br />
                <p class="description2"><b>【作品補足】</b></p>
                <p class="description2">
                    VR環境では特に、プレイヤーの持つ板の位置や角度が刻々と変わります。
                    したがって、毎フレームプレイヤーの持つ板の位置・姿勢情報から球の未来軌道を推測しようとすると、
                    特に反射回数が多い場合などに計算が非常に重くなってしまいます。
                </p>
                <p class="description2">
                    そこで、この作品では、パーティクルシステムを使い、実際の弾と同じ軌道を描く高速の粒子を多数飛ばし、
                    それらの軌道を予測軌道とすることで、遅延のない処理を実現しています
                    (下図) 。
                </p>
                <img src="@/assets/futureprediction_ref.png" class="refimg" />
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
    padding-top: 30px;
}
.section__title {
    font-family: 'gokuboso';
    font-size: 50px;
    font-weight: 100;
    width: 250px;
    line-height: 0.8;
    padding-bottom: 5px;
    margin-bottom: 25px;
    border-bottom: 1px solid rgb(139, 139, 139);
}
.demo {
    margin: 0px 0px 25px 0px;
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
.description2 {
    margin-bottom: 10px;
}
.refimg {
    padding: 20px 0px 40px 0px;
}
.forupdate {
    margin: 0;
}
</style>
