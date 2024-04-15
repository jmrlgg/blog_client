<template>
  <PostList />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import PostList from "./components/PostList.vue";

export default {
  name: "App",
  components: {
    PostList,
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
