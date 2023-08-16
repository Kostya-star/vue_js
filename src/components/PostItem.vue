<template>
    <div class="post" >
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.post {
    display: flex;
    gap: 20px;
    align-items: center;
    border: 2px solid teal;
}
</style>