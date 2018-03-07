<template>
  <div class="menu">
    <div class="router">
      <div v-for="(item,index) in navArr" :class="{'active': isActive==index}" :key="index" @click="clickTab(index)">
        <router-link :to="{name:item.router}">
          <p :class="item.icon" class="nav">
            {{item.header}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'navBar',
  data () {
    return {
      isActive: 0,
      navArr: [
        {
          icon: 'el-icon-success',
          header: '帐号管理',
          router: 'account'
        },
        {
          icon: 'el-icon-message',
          header: '任务管理',
          router: 'order'
        },
        {
          icon: 'el-icon-more-outline',
          header: '资金管理',
          router: 'money'
        },
        {
          icon: 'el-icon-upload',
          header: '其他管理',
          router: 'other'
        }
      ]
    }
  },
  methods: {
    clickTab (index) {
      this.isActive = index
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.menu
  height 100%
  .router
    color white
    padding-bottom 30px
    text-align center
    .nav
      margin-top 30px
      color red
    .active
      p
        color white
</style>
