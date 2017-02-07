<template>
  <div style="width: 800px; margin: 30px auto;">
    <table class="table table-condensed table-bordered">
      <tbody>
      	<tr>
      		<td><v-form-component id="1"></v-form-component></td>
          <td><v-form-component id="2"></v-form-component></td>
      	</tr>
        <tr>
          <td><v-form-component id="3"></v-form-component></td>
          <td><v-form-component id="4"></v-form-component></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import vFormComponent from './components/v-form-component'

export default {
  components: {
    vFormComponent,
  }
}
</script>
