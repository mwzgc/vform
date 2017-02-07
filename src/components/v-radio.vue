<template>
  <span>
    <template v-for="item in workForm.items">
      <label>
        <input type="radio" :name="workForm.name" v-model="value" :value="item.code">
        <span>{{item.name}}</span>
      </label>
    </template>
    <label v-if="workForm.other">
      <input type="radio" :name="workForm.name" v-model="value" value="other">
      <span>其他</span>
    </label>
    <input v-if="workForm.other && value=='other'" class="form-control input-sm" name="other-input"/>
    <span>{{ value }}</span>
  </span>
</template>

<script>
export default {
  props: ['workForm'],
  computed: {
    value: {
      get () {
        return this.$store.state.data[this.workForm.name]
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
