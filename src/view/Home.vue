<template>
  <div class="home">
    <HelloWorld msg="Progressor" />
    <Form @createtask="addTask"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Form from "@/components/Form.vue";
import tasksService from "@/services/tasks.js"

export default {
  name: "Home",
  components: {
    Form,
    HelloWorld
  },
  setup() {
    function addTask(data) {
      console.log('Home.vue | addTask()', data);
      tasksService.create(data);
    }

    return { addTask: addTask() }
  },
};
</script>

<style scoped></style>
