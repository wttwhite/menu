<template>
  <el-table
    :data="pageList"
    height="100%"
    stripe
    ref="tableRef"
    :header-cell-style="$HeaderCellStyle"
  >
    <el-table-column type="index" label="序号" width="60"></el-table-column>
    <el-table-column label="名称"></el-table-column>
    <el-table-column label="分类"></el-table-column>
    <el-table-column label="次数" width="140">
      <template slot-scope="{ row }">
        <el-input-number
          size="mini"
          v-model="row.num"
          @change="handleChange"
          :min="1"
          :step="1"
          :max="100"
        ></el-input-number>
      </template>
    </el-table-column>
    <el-table-column label="使用总结"></el-table-column>
    <el-table-column label="备注"></el-table-column>
    <el-table-column label="操作" width="120">
      <template slot-scope="{ row }">
        <el-button type="text" @click="addTodoClick(row)">加入待办</el-button>
        <el-button type="text" @click="delClick(row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'tableCom',
  props: {
    pageList: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    addTodoClick(row) {},
    delClick(row) {},
    handleChange() {},
  },
}
</script>
<style lang="scss" scoped></style>
