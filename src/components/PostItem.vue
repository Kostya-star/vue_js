<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div>
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </div>
        </div>
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
            <my-button @click="this.$emit('deletePost', post.id)">Delete</my-button>
        </div>
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
};
</script>

<style scoped>
.post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border: 2px solid teal;
    padding: 5px;
}
.post__btns {
    display: flex;
    gap: 5px;
}
</style>