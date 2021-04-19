<template>
    <div id="app__container">
        <router-view id="app__content" />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

@import '~vue-material/dist/theme/engine';

@include md-register-theme(
    'default',
    (
        primary: #ff8777,
        // The primary color of your brand
            accent: #a2d5ff // The secondary color of your brand,,,,,,,,
    )
);

@import '~vue-material/dist/theme/all';

* {
    margin: 0;
}

.app__container {
    width: 100vw;
    overflow: auto;
}

@font-face {
    font-family: 'gokuboso';
    src: url('./assets/Alcubierre.otf') format('opentype');
}
</style>
