<template>
  <span>
    <select :name="workForm.name" class="form-control input-sm" v-model="value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <span>{{value}}</span>
  <span>
</template>

<script>
export default {
  props: ['workForm'],
  computed: {
    value: {
      get () {
        const val = this.$store.state.data[this.workForm.name]
        console.log('select get: ' + val)
        return val
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
