<template>
  <div class="wrapper">
    <img :src="defaultCover" alt="defaultCover" :class="visible?'hidden':''"/>
    <img class="cover fadeIn" v-show="visible" :src="src" :alt="alt" @load="visible=true" />
  </div>
</template>

<script>
export default {
  name: 'MagicImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      defaultCover: this.$config.defaultCover,
      visible: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .hidden{
    visibility: hidden;
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
  }

  .fadeIn {
    animation: coverDown 0.4s ease-out;
  }
}
</style>
