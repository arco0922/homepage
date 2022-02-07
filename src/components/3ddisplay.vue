<template>
  <div id="about" class="section">
    <h1 class="section__title">3D Display</h1>
    <transition name="content"
      ><div class="section__content" v-show="showcontent">
        <video src="@/assets/3DDisplay_Trim.mp4" loop autoplay muted controls playsinline class="demo"></video>
        <div class="hosoku">
          (上の動画はローカルで動かしたもので、ブラウザ上だと動作がやや重くなります)
        </div>
        <p class="description">
          作品URL：<a
            href="https://arco0922.github.io/3D_Display/"
            target="_blank"
            rel="noopener noreferrer"
            class="description"
            >https://arco0922.github.io/3D_Display/</a
          >
        </p>
        <p class="description">
          HTML / CSS / JavaScript (p5.js, ml5.js)
        </p>
        <p class="description">
          3Dメガネを装着しなくても3Dを楽しめるWebページです。<a
            href="http://tfujiwar.hatenablog.com/entry/2018/05/05/130000"
            target="_blank"
            rel="noopener noreferrer"
            class="description"
            >こちらのページ</a
          >を参考に作らさせて頂きました。
        </p>
        <p class="description">
          webカメラで顔の位置を認識し、その位置から3次元に見えるように映像を描画しています。
        </p>
        <p class="description">
          ※Webカメラが画面中央上部にある環境を想定しています。フルスクリーンにしてお楽しみください。
        </p>
      </div></transition
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
  margin: 5px 0px 0px 0px;
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
.hosoku {
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 10px;
  text-align: center;
}
.forupdate {
  margin: 0;
}
</style>
