<template>
  <problemTable ref="table"></problemTable>
</template>

<script>
  import problemTable from '../../../Problems/com/problemTable'
  export default {
    components: {
      problemTable
    },
    methods: {
      initData () {
        this.$ajax.get('/static/response/problemData.json').then(
          (response) => {
            this.$refs.table.problemsData = response.data.data.table
          }
        )
      }
    },
    created () {
      this.initData()
    }
  }
</script>

<style scoped lang="stylus">

</style>
