<template>
  <input type="text" placeholder="filter" v-model="letters" @keyup="filter"/>
  <div class="radio-filters">
    <label for="all">
      <input type="radio" id="all" value="" v-model="selectedTemporality"> Toutes
    </label>
    <label for="short-term">
      <input type="radio" id="short-term" value="short-term" v-model="selectedTemporality"> Court Terme
    </label>
  </div>
  <div v-if="tasksFiltered.length > 0">
    <div v-for="task in tasksFiltered" :key="task.id">
      <h3>{{ task.name }}</h3>
      <p>{{ task.description }}</p>
      <p>Echéances : {{ convertCase(task.temporality) }}</p>
    </div>
  </div>
</template>

<script>

import { ref } from "vue";
import tasksService from "@/services/tasks.js";

export default {
  name: "Tasks",
  setup() {
    const tasks = ref([]);
    const letters = ref("");
    tasks.value = tasksService.read();
    const tasksFiltered = ref([]);

    filter();

    function convertCase(temporality) {
      return tasksService.convertCase(temporality);
    }

    function filter() {
      if(letters.value.length === 0) {
      tasksFiltered.value = tasks.value;
      } else {
      tasksFiltered.value = tasks.value.filter(t => t.name.toLocaleLowerCase().includes(letters.value.toLocaleLowerCase()));
      }
    }

    return { tasks, convertCase, letters, filter, tasksFiltered };
  }
};
</script>

<style scoped>
.radio-filters {
  display: flex;
  justify-content: center;
}
</style>