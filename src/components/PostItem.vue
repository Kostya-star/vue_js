<template>
    <div class="post">
        <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
        <my-button @click="() => onDeletePost(post.id)">Delete</my-button>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDeletePost(postId) {
            this.$emit('deletePost', postId)
        }
    }
};
</script>

<style scoped>
.post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border: 2px solid teal;
}
</style>