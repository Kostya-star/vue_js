<template>
  <div class="posts" v-if="posts.length > 0">
    <TransitionGroup name="post-item">
      <post-item v-for="post of posts" :post="post" :key="post.id" @deletePost="this.$emit('deletePost', post.id)" />
    </TransitionGroup>
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

.post-item-enter-active,
.post-item-leave-active {
  transition: all .3s ease;
}

.post-item-enter-from,
.post-item-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-item-move {
  transition: transform .4s ease;
}
</style>