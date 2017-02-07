<template>
  <span>
    <label>
      <input type="checkbox" :name="workForm.name" v-model="value" value="1">
      <span>1</span>
    </label>
    <label>
      <input type="checkbox" :name="workForm.name" v-model="value" value="2">
      <span>2</span>
    </label>
    <label>
      <input type="checkbox" :name="workForm.name" v-model="value" value="3">
      <span>3</span>
    </label>
    <span>{{value}}</span>
  </span>
</template>

<script>
export default {
  props: ['workForm'],
  data () {
    return {checkedNames: []}
  },
  computed: {
    value: {
      get () {
        let value = this.$store.state.data[this.workForm.name] || []
        return value
      },
      set (value) {
        this.$store.commit('updateMessage', {
          name: this.workForm.name,
          value,
        })
      }
    }
  }
}
</script>

<style scoped>
  label {
    font-weight: normal;
    padding-left: 8px;
    padding-right: 8px;
    cursor: pointer;
  }
  label > span {
    margin-left: 5px;
  }
</style>
