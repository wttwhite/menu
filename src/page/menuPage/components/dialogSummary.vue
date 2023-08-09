<template>
  <el-dialog :visible.sync="dialogVisible" width="70%">
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="80px">
      <el-form-item label="日期" prop="date">
        <el-date-picker
          :clearable="false"
          :editable="false"
          v-model="formData.date"
          type="date"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="总结" prop="summary">
        <el-input
          v-model="formData.summary"
          type="textarea"
          :row="6"
          maxlength="500"
          show-word-limit
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saveClick" v-loading="loading">
      确 定
    </el-button>
    <el-table
      :data="tableList"
      height="100%"
      stripe
      ref="tableRef"
      :header-cell-style="$HeaderCellStyle"
    >
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column label="时间" prop="date"></el-table-column>
      <el-table-column label="总结" prop="summary"></el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
import dayjs from 'dayjs'
const DefaultForm = () => {
  return {
    date: dayjs(new Date()).format('yyyy-MM-DD'),
    summary: '',
  }
}
export default {
  name: 'dialogSummary',
  data() {
    return {
      dialogVisible: false,
      loading: false,
      formData: DefaultForm(),
      rules: {
        summary: [{ required: true, message: ' ' }],
      },
      tableList: [],
    }
  },
  methods: {
    showDialog(row) {
      this.dialogVisible = true
      this.$refs?.formRef.resetFields()
    },
    saveClick() {},
  },
}
</script>
<style lang="scss" scoped></style>
