<template>
  <el-drawer
    title="今日菜谱"
    :visible.sync="dialogVisible"
    direction="rtl"
    size="60%"
  >
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        :name="index"
        v-for="(item, index) in dataList"
        :key="index"
      >
        <template slot="title">
          <span class="title">{{ item.name }}</span>
          <span class="title-time">{{ item.time }}分钟</span>
        </template>
        <descriptions-item-vue :detailData="detailData" padding12 />
      </el-collapse-item>
    </el-collapse>
  </el-drawer>
</template>
<script>
import descriptionsItemVue from './descriptions-item.vue'
export default {
  name: 'drawer-panel',
  components: { descriptionsItemVue },
  data() {
    return {
      dialogVisible: false,
      dataList: [],
    }
  },
  methods: {
    showDialog(list) {
      this.dialogVisible = true
      this.dataList = list
    },
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 16px;
  padding-left: 12px;
}
.title-time {
  display: inline-block;
  margin-left: 24px;
  color: #ccc;
  font-size: 14px;
}
</style>
