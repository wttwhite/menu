<template>
  <div class="page-container menu-page">
    <section class="page-btn-box">
      <el-button type="primary" @click="addClick">新增</el-button>
    </section>
    <section class="page-main">
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
        <el-table-column label="备注" prop="remark"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="{ row }">
            <el-button type="text" @click="detailClick(row)">详情</el-button>
            <el-button type="text" @click="editClick(row)">编辑</el-button>
            <el-button type="text" @click="delClick(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <com-pagination
      class="text-align-right"
      paddingTop8
      @refresh="mixinGetDataList"
      :page-no.sync="searchForm.pageNo"
      :page-size.sync="searchForm.pageSize"
      :total="pageTotal"
    />
    <dialog-add-edit-vue ref="dialogAddEditRef" />
  </div>
</template>
<script>
import pageMixin from '@/mixins/page-list'
import dialogAddEditVue from './dialogAddEdit.vue'

const DefaultSearchForm = () => {
  return {
    pageNo: 1,
    pageSize: 20,
  }
}
export default {
  name: 'menuType',
  components: {
    dialogAddEditVue,
  },
  mixins: [pageMixin],
  data() {
    return {
      searchForm: DefaultSearchForm(),
    }
  },
  created() {
    this.mixinGetDataList()
  },
  methods: {
    addClick() {
      this.$refs.dialogAddEditRef.showDialog()
    },
    detailClick(row) {
      this.$refs.dialogDetailRef.showDialog(row)
    },
    editClick(row) {
      this.$refs.dialogAddEditRef.showDialog(row)
    },
    delClick(row) {
      this.$confirm(`确认删除${row.name || ''}吗?`, '确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // taskBack({ id: row.id }).then(() => {
        //   this.$message.success('删除成功')
        //   this.mixinGetDataList(1)
        // })
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
