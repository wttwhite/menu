<template>
  <div class="page-container">
    <section class="btn-box">
      <el-button type="primary" @click="addClick">新增</el-button>
      <el-radio-group v-model="checkedType">
        <el-radio-button label="image">
          <i class="el-icon-s-grid"></i>
        </el-radio-button>
        <el-radio-button label="table">
          <i class="el-icon-s-operation"></i>
        </el-radio-button>
      </el-radio-group>
    </section>
    <section class="page-main">
      <image-com-vue />
      <table-com-vue :pageList="pageList" />
    </section>
    <com-pagination
      class="text-align-right"
      paddingTop8
      @refresh="mixinGetDataList"
      :page-no.sync="searchForm.pageNo"
      :page-size.sync="searchForm.pageSize"
      :total="pageTotal"
    />
  </div>
</template>
<script>
import imageComVue from './components/imageCom.vue'
import tableComVue from './components/tableCom.vue'
import pageMixin from '@/mixins/page-list'
const DefaultSearchForm = () => {
  return {
    pageNo: 1,
    pageSize: 20,
  }
}
export default {
  name: 'menuPage',
  components: { imageComVue, tableComVue },
  mixins: [pageMixin],
  data() {
    return {
      checkedType: 'image',
      searchForm: DefaultSearchForm(),
    }
  },
  created() {
    this.mixinGetDataList()
  },
  methods: {
    addClick() {},
    editClick() {},
    delClick() {},
  },
}
</script>
<style lang="scss" scoped>
.btn-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
</style>
