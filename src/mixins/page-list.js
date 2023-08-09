import { getPageApi } from '@/apis/common'
export default {
  data() {
    return {
      pageTotal: 0,
      pageList: [],
    }
  },
  methods: {
    mixinSearchClick() {
      this.searchForm.pageNo = 1
      this.mixinGetDataList()
    },
    mixinResetDataList(DefaultSearchForm) {
      this.searchForm = { ...DefaultSearchForm }
      this.mixinGetDataList(1)
    },
    mixinGetDataList(pageNo) {
      pageNo && (this.searchForm.pageNo = pageNo)
      let params = { ...this.searchForm }
      // this.pageList = [{ id: 1 }]
      this.searchFormFormat && (params = this.searchFormFormat(params))
      // getPageApi(this.pageUrl, this.pageMethod || 'post', params).then(
      //   (res) => {
      //     this.pageData = res.records || []
      //     this.pageTotal = res.total || 0
      //     this.$nextTick(() => {
      //       this.$refs.tableRef.doLayout()
      //     })
      //   }
      // )
    },
  },
}
