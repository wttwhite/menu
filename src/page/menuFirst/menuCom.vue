<template>
	<div margin12>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(item, index) in menuTab" :key="index" :label="item.label">
        <div v-for="(item, index) in  item.list" :key="item.id">{{ item.name }}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { sucaiList, chaocaiList } from './const'
export default {
	name: 'Menu',
	data () {
		return {
      menuTab: [
        { label: '素食', list: sucaiList },
        { label: '炒菜', list: chaocaiList },
      ]
		}
	},
	mounted () {
	},
	methods: {
		
	}
}
</script>
<style scoped lang="scss">

</style>