<template>
  <div class="wrapper">
    <img class="default-cover" :src="defaultCover" alt="defaultCover" :class="visible?'hidden':''" @load="loadImage"/>
    <img class="cover fadeIn" v-show="visible" :src="showSrc" :alt="cover.alt" @load="visible=true" />
  </div>
</template>

<script>
export default {
  name: 'MagicImg',
  props: {
    cover: {
      type: Object,
      required: true,
      default: ()=>({src: '',alt: '', direction: true }) // 默认横屏图片
    },
  },
  data() {
    return {
      defaultCover: this.$config.defaultCover,
      visible: false,
      showSrc: ''
    }
  },
  methods: {
    loadImage(){
      const defaultCover =document.querySelector('.default-cover')
      const width = defaultCover.width
      const height = '_' + defaultCover.height +'h'
      this.showSrc = this.cover.src + `@${width}w${this.cover.direction?height: ''}_1e_1c.webp`
    }
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
