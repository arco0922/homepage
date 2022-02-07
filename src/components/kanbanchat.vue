<template>
  <div id="about" class="section">
    <h1 class="section__title">KanbanChat</h1>
    <transition name="content"
      ><div class="section__content" v-show="showcontent">
        <img src="@/assets/KanbanChat_usage.png" class="demo" style="-webkit-backface-visibility: hidden;" />
        <p class="description">
          作品URL：
          <a href="https://kanbanchat-d69b9.web.app/" target="_blank" rel="noopener noreferrer"
            >https://kanbanchat-d69b9.web.app/</a
          >
          (PC推奨)
        </p>
        <p class="description">
          Vue.js / Vuex / Node.js / Express / MongoDB / Pusher / Firebase / Heroku
        </p>
        <p class="description">
          チャット機能の付いたチームでのタスク管理アプリが欲しいと思い、自作しました。
          バックエンドからフロントエンドまでを全て一人で実装しました。
        </p>
        <p class="description">
          概要としては、看板形式のタスク管理アプリに、タスクごとにチャットルームがあるというものです。他のメンバーとのダイレクトメッセージのやり取りもできます。
          各タスクには説明文と締め切り、責任者を設定できます。
        </p>
        <p class="description">
          看板は看板名のみで作成することができ、作成すると自動的に一意のKanbanIDとパスワードが割り当てられられます。他のメンバーはそれを入力することで看板に参加できます。
        </p>

        <div class="demo-imgs">
          <img src="@/assets/kanbanchat_taskcreate.png" class="demo2" style="-webkit-backface-visibility: hidden;" />
          <p class="caption">タスク作成画面</p>
          <img src="@/assets/icon_edit.png" class="demo2" style="-webkit-backface-visibility: hidden;" />
          <p class="caption">アイコン編集画面</p>

          <img src="@/assets/kanbanchat_login.png" class="demo2" style="-webkit-backface-visibility: hidden;" />
          <p class="caption">ログイン画面</p>
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
  margin: 5px 0px 3px 0px;
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
