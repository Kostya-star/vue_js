<template>
    <form class="form">
        <my-input v-model="post.title" type="text" name="title" placeholder="Title"></my-input>
        <my-input v-model="post.body" type="text" name="description" placeholder="Description"></my-input>
        <my-button @click="onCreatePost">Create</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        };
    },
    methods: {
        onCreatePost(e) {
            e.preventDefault()
            if (!this.post.title || !this.post.body) return
            this.post.id = Date.now()
            this.$emit('createPost', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
};
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
    max-width: 400px;
}
</style>