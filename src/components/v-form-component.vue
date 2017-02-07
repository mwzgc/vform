<script>
import vInput from './v-input'
import vRadio from './v-radio'
import vCheckbox from './v-checkbox'
import vSelect from './v-select'

const map = {
  input: 'vInput',
  radio: 'vRadio',
  checkbox: 'vCheckbox',
  select: 'vSelect',
}

export default {
  components: {
    vInput,
    vRadio,
    vCheckbox,
    vSelect,
  },
  props: ['id'],
  computed: {
    workForm () {
      return this.$store.state.workForm[this.id];
    }
  },
  render (createElement) {
    const component = map[this.workForm.type];
    return createElement(
      component,
      {
        props: {
          workForm: this.workForm
        }
      },
    )
  },

}
</script>
