<template>
  <el-dialog :visible.sync="dialogVisible" width="50%">
    <descriptions-item-vue :detailData="detailData" />
  </el-dialog>
</template>
<script>
import descriptionsItemVue from './descriptions-item.vue'
export default {
  name: 'dialogDetail',
  components: { descriptionsItemVue },
  data() {
    return {
      dialogVisible: false,
      detailData: {},
    }
  },
  methods: {
    showDialog(row) {
      this.dialogVisible = true
      this.detailData = {
        ...this.detailData,
        ...row,
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
