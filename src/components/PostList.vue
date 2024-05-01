<script>
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      title: "",
      author: "",
      date: "",
      date_added: "",
      body: "",
      slug: "",
      isEditing: false,
    };
  },
  methods: {
    async getPost() {
      try {
        await this.$http
          .get(
            `https://www.google.com/alerts/feeds/05410634571818650305/14782000416455298312`
          ) // TODO: find out the api from django
          .then((response) => {
            this.posts = response.data;
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getPost();
  },
};
</script>

// apply styling to the component

<style scoped></style>
<template>
  <div class="content">
    <h1>Post App</h1>
    <div class="list">
      <ul class="list_content">
        {{
          posts
        }}
        <li v-for="post in posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <h4>{{ post.slug }}</h4>
          <h5>{{ post.author }}</h5>
          <h6>{{ post.body }}</h6>
        </li>
      </ul>
    </div>
  </div>
</template>
