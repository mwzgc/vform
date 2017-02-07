<template>
  <span>
  	<input :name="workForm.name" v-model="value" class="form-control input-sm">
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
