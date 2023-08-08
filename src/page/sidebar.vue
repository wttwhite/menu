<template>
  <div class="dev-menu-box">
    <div class="collapse-btn" @click="isCollapse = !isCollapse">
      <i :class="`el-icon-s-${isCollapse ? 'unfold' : 'fold'}`"></i>
    </div>
    <el-scrollbar wrap-class="menu-scrollbar__wrap" :size="6">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="menu-wrap"
        :collapse="isCollapse"
        :default-active="defaultMenu"
        collapse-btn
        @click-collapse="isCollapse = !isCollapse"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="index"
          :index="item.path"
          icon="h-icon-menu_f"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import routes from '@/router'
export default {
  name: 'sidebar',
  data() {
    return {
      isCollapse: false,
      defaultMenu: '',
      menuList: routes.filter((item) => item.meta.isMenu),
    }
  },
  watch: {
    $route: {
      handler(val) {
        this.defaultMenu = val.path
      },
    },
  },
  methods: {
    handleSelect(path) {
      this.$router.push({
        path,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.dev-menu-box {
  background: #545c64;
  flex-shrink: 0;
  .collapse-btn {
    color: #e6e6e6;
    // color: #797a7e;
    // border-right: solid 1px #545c64;
    // border-right: solid 1px #e6e6e6;
    font-size: 24px;
    cursor: pointer;
    padding: 12px 0 0 20px;
  }
  .el-scrollbar {
    height: calc(100% - 50px);
  }
  &::v-deep {
    .el-menu {
      border-right: none;
    }
    .menu-scrollbar__wrap {
      height: 100%;
      overflow-x: hidden;
      .menu-wrap {
        height: 100%;
        &:not(.el-menu--collapse) {
          width: 200px;
        }
      }
    }
    .el-scrollbar__view {
      height: 100%;
    }
  }
}
</style>
