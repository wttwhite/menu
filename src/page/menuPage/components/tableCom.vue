<template>
  <el-table
    :data="pageList"
    height="100%"
    stripe
    ref="tableRef"
    :header-cell-style="$HeaderCellStyle"
  >
    <el-table-column type="index" label="序号" width="60"></el-table-column>
    <el-table-column label="名称" prop="name"></el-table-column>
    <el-table-column label="分类" prop="type"></el-table-column>
    <el-table-column label="次数" prop="num">
      <!-- <template slot-scope="{ row }"> -->
      <!-- <el-input-number
          size="mini"
          v-model="row.num"
          @change="handleChange"
          :min="1"
          :step="1"
          :max="100"
        ></el-input-number> -->
      <!-- </template> -->
    </el-table-column>
    <el-table-column label="使用总结" prop="summary">
      <template slot-scope="{ row }">
        <el-button type="text" @click="recordClick(row)">
          {{ row.summary }}
        </el-button>
      </template>
    </el-table-column>
    <el-table-column label="备注" prop="remark"></el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="{ row }">
        <el-button type="text" @click="addTodoClick($event, row)"
          >加入待办</el-button
        >
        <el-button type="text" @click="detailClick(row)">详情</el-button>
        <el-button type="text" @click="editClick(row)">编辑</el-button>
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
    addTodoClick($event, row) {
      this.$emit('addTodoClick', $event, row)
    },
    detailClick(row) {
      this.$emit('detailClick', row)
    },
    editClick(row) {
      this.$emit('editClick', row)
    },
    delClick(row) {
      this.$emit('delClick', row)
    },
    recordClick(row) {
      this.$emit('recordClick', row)
    },
  },
}
</script>
<style lang="scss" scoped></style>
