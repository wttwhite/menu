<template>
  <el-dialog :visible.sync="dialogVisible" width="50%">
    <el-descriptions title="详情">
      <el-descriptions-item label="名称">
        {{ detailData.name }}
      </el-descriptions-item>
      <el-descriptions-item label="类别">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="备注"></el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>
<script>
export default {
  name: 'dialogDetail',
  data() {
    return {
      dialogVisible: false,
      detailData: {},
    }
  },
  methods: {
    showDialog(row) {
      this.detailData = {
        ...this.detailData,
        ...row,
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
