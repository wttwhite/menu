<template>
  <section>
    <el-descriptions title="" column="3">
      <el-descriptions-item label="名称">
        {{ detailData.name }}
      </el-descriptions-item>
      <el-descriptions-item label="类别">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="备注"></el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="" column="1">
      <el-descriptions-item label="材料">
        {{ detailData.material }}
      </el-descriptions-item>
      <el-descriptions-item label="步骤">
        {{ detailData.step }}
      </el-descriptions-item>
    </el-descriptions>
  </section>
</template>
<script>
export default {
  name: 'MessageCenter',
  props: {
    detailData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
<style lang="scss" scoped></style>
