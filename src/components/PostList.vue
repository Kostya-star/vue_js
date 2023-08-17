<template>
  <div class="posts" v-if="posts.length > 0">
    <post-item v-for="post of posts" :post="post" :key="post.id" @deletePost="this.$emit('deletePost', post.id)" />
  </div>
  <div class="posts_empty" v-else>
    No posts yet 😒
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
  }
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.posts_empty {
  color: teal;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
}
</style>