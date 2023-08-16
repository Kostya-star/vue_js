<template>
  <div class="posts">
    <post-item v-for="post of posts" :post="post" :key="post.id" />
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
    }
  }
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>