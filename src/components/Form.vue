<template>
  <div>
    <h3>Créer une tâche</h3>
    <form v-on:submit.prevent="createTask">
      <input type="text" placeholder="Nom de la tâche" v-model="name" ref="txtName"><br>
      <textarea cols="30" rows="10" placeholder="Description de la tâche" v-model="description"></textarea><br>
      <select v-model="temporality">
        <option v-for="tempo in temporalityTypes" :value="tempo.value" :key="tempo.id">{{ tempo.name }}</option>
      </select>
      <br/>
      <button>Créer</button>
    </form>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';

export default {
  name: "Form",
  emits: ["createtask"],
  setup(props, context) {
    const name = ref("");
    const description = ref("");
    const temporalityTypes = ref([]);
    const temporality = ref("");
    let   txtName = ref(null);

    function createTask() {
      const task = {
      id: Date.now(),
      name: name.value,
      description: description.value,
      temporality: temporality.value,
      };
      console.log("task", task);
      context.emit('createtask', task);
      resetForm();
    }

    function resetForm() {
      name.value = "";
      description.value = "";
      temporality.value = ""
    }

    onMounted(() => {
      txtName.value.focus();
    })

    return { name, description, temporalityTypes, temporality, createTask}
  },
}
</script>

<style scoped>
  input, textarea, select, button {
    width:90%;
    margin: 5px 10px;
  }
</style>