<template>
  <div class="page-container menu-page">
    <el-form
      slot="search"
      class="page-search"
      :inline="true"
      :model="searchForm"
      label-width="90px"
    >
      <el-form-item label="名称">
        <el-input v-model="searchForm.name" maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="searchForm.type">
          <el-option
            v-for="(item, index) in typeList"
            :key="index"
            :value="item.id"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <section class="page-btn-box">
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
      <table-com-vue
        :pageList="pageList"
        @addTodoClick="addTodoClick"
        @editClick="editClick"
        @detailClick="detailClick"
        @delClick="delClick"
        @recordClick="recordClick"
      />
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
    <dialog-detail-vue ref="dialogDetailRef" />
    <dialog-summary-vue ref="dialogSummaryRef" />
    <div
      v-show="addOnePos.show"
      :class="['add-one', addOnePos.active && 'active']"
      :style="{ left: addOnePos.x + 'px', top: addOnePos.y + 'px' }"
    >
      <span>1</span>
    </div>
    <div
      :class="[
        'today-todo',
        'el-button--primary',
        'is-plain',
        addOnePos.panelActive && 'active',
      ]"
      ref="todoRef"
      @click="todoClick"
    >
      <i class="el-icon-s-order"></i>
      <el-badge class="mark-num" :value="addTodayTodoList.length" />
    </div>
    <drawer-panel-vue ref="drawerPanelRef" />
  </div>
</template>
<script>
import imageComVue from './components/imageCom.vue'
import tableComVue from './components/tableCom.vue'
import pageMixin from '@/mixins/page-list'
import dialogAddEditVue from './components/dialogAddEdit.vue'
import dialogDetailVue from './components/dialogDetail.vue'
import dialogSummaryVue from './components/dialogSummary.vue'
import { MockData } from './mock'
import drawerPanelVue from './components/drawer-panel.vue'
const DefaultSearchForm = () => {
  return {
    pageNo: 1,
    pageSize: 20,
    name: '',
    type: '',
  }
}
export default {
  name: 'menuPage',
  components: {
    imageComVue,
    tableComVue,
    dialogAddEditVue,
    dialogDetailVue,
    dialogSummaryVue,
    drawerPanelVue,
  },
  mixins: [pageMixin],
  data() {
    return {
      checkedType: 'image',
      searchForm: DefaultSearchForm(),
      pageList: MockData,
      typeList: [],
      addOnePos: {
        x: 0,
        y: 0,
        active: false,
        show: false,
        panelActive: false,
      },
      addTodayTodoList: [],
    }
  },
  created() {
    this.mixinGetDataList()
  },
  methods: {
    addClick() {
      this.$refs.dialogAddEditRef.showDialog()
    },
    // 加入到今天菜谱
    addTodoClick(e, row) {
      console.log('e', e)
      this.addOnePos.x = e.x - 200 - 15
      this.addOnePos.y = e.y - 15
      this.addOnePos.show = true
      // 动效
      setTimeout(() => {
        this.addOnePos.active = true
        this.addOnePos.x = -150 + 50 - 15
        this.addOnePos.y = this.$refs.todoRef.offsetTop + 50
      })
      setTimeout(() => {
        this.addOnePos.active = false
        this.addOnePos.show = false
        this.addOnePos.panelActive = true
        this.addTodayTodoList.push({ ...row })
      }, 800)
      setTimeout(() => {
        this.addOnePos.panelActive = false
      }, 1200)
    },
    detailClick(row) {
      this.$refs.dialogDetailRef.showDialog(row)
    },
    editClick(row) {
      this.$refs.dialogAddEditRef.showDialog(row)
    },
    recordClick(row) {
      this.$refs.dialogSummaryRef.showDialog(row)
    },
    todoClick() {
      this.$refs.drawerPanelRef.showDialog(this.addTodayTodoList)
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
<style lang="scss" scoped>
.menu-page {
  position: relative;
  .today-todo {
    position: absolute;
    bottom: 35px;
    left: -150px;
    font-size: 58px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .mark-num {
      position: absolute;
      right: 0;
      top: -9px;
    }
    &.active {
      animation: todoPanel 0.4s;
    }
  }
  @keyframes todoPanel {
    0% {
      transform: scale(0.8);
    }
    40% {
      transform: scale(1.2);
    }
    80% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  .add-one {
    position: absolute;
    width: 30px;
    height: 30px;
    background: red;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    &.active {
      transition: top 0.8s cubic-bezier(0.27, -0.62, 1, 0.4), left 0.8s linear;
      // cubic-bezier(0.08, -0.35, 0.99, 0.33)
    }
  }
}
</style>
