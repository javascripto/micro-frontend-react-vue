<template>
  <form @submit="addTask($event)">
    <input type="text" v-model="task">
    <button type="submit">Inserir</button>
    <ul>
      <li v-for="task in tasks" :key="task">{{task}}</li>
    </ul>
  </form>
</template>

<script>
export default {
  name: 'AppVue',
  data() {
    return {
      task: '',
      tasks: [],
    }
  },
  methods: {
    addTask(event) {
      event.preventDefault();
      if (!this.task.trim()) {
        return;
      }
      this.tasks.push(this.task);
      this.task = '';
    }
  }
}
</script>
