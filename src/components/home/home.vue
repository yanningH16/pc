<template>
  <div class="home">
    <div class="left">
      <navBar></navBar>
    </div>
    <div class="right">
      <userTitle></userTitle>
      <div class="rCont">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import NavBar from './navbar'
import UserTitle from './tit'
export default {
  name: 'home',
  components: {
    NavBar,
    UserTitle
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  height 100%
  width 100%
  display flex
  flex 1
  background #E8EBF0
  position relative
  .left
    flex 0 0 180px
    background #19223D
  .right
    flex 1
    display flex
    flex-direction column
    overflow hidden
    width 100%
    .rCont
      flex 1
      overflow auto
</style>
