<template>
  <div class="cube-content-wrapper">
    <cubeItem :class="type" v-if="type !== 'assist'" ref="cubeData"></cubeItem>
    <assistItem v-else :class="type"></assistItem>
  </div>
</template>

<script>
  import cubeItem from './cubeItem/cubeItem.vue'
  import assistItem from './cubeItem/assistItem.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      cubeItem,
      assistItem
    },
    props: {
      type: String
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
        this.$ajax.get('/static/response/teacherIndex.json').then(
          (response) => {
            response = response.data.data
            if (this.type === 'course') {
              this.$refs.cubeData.cubeData = response.course
              this.$refs.cubeData.type = 'course'
              this.$emit('semester', response.semester)
            } else if (this.type === 'contest') {
              this.$refs.cubeData.cubeData = response.contest
              this.$refs.cubeData.type = 'contest'
            }
          }
        )
      }
    }
  }
</script>

<style scoped lang="stylus">
  .cube-content-wrapper
    display flex
    flex-wrap wrap
    justify-content space-between
</style>
