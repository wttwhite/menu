<template>
  <el-dialog :visible.sync="dialogFormVisible" width="70%">
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="80px">
      <el-form-item label="名称" prop="name">
        <el-input v-model.trim="formData.name" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item label="类别" prop="type">
        <el-select v-model="formData.type">
          <el-option
            v-for="(item, index) in typeList"
            :key="index"
            :value="item.id"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="formData.remark"
          type="textarea"
          :row="6"
          maxlength="1000"
          show-word-limit
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="saveClick" v-loading="loading">
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'dialogAddEdit',
  data() {
    return {
      dialogFormVisible: false,
      loading: false,
      formData: {
        name: '',
      },
      rules: {
        name: [{ required: true, message: ' ' }],
      },
      typeList: [],
    }
  },
  methods: {
    showDialog(row) {
      this.dialogFormVisible = true
      this.$refs?.formRef.resetFields()
      if (row) {
        this.formData = {
          ...this.formData,
          ...row,
        }
      }
    },
    saveClick() {},
  },
}
</script>
<style lang="scss" scoped></style>
