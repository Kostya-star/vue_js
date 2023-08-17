<template>
    <div class="create-post">
        <my-button @click="isShowModal = true">Create post</my-button>
    </div>
    <my-modal v-model:isShow="isShowModal" >
        <post-form @createPost='onCreatePost' />
    </my-modal>
    <post-list :posts="posts" @deletePost="deletePost" />
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Post 1',
                    body: 'Post 1 Description'
                },
                {
                    id: 2,
                    title: 'Post 2',
                    body: 'Post 2 Description'
                },
                {
                    id: 3,
                    title: 'Post 3',
                    body: 'Post 3 Description'
                },
            ],
            isShowModal: false
        }
    },
    methods: {
        onCreatePost(newPost) {
            this.posts.push(newPost)
            this.isShowModal = false
        },
        deletePost(postId) {
            this.posts = this.posts.filter(p => p.id !== postId)
        },
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.create-post {
    margin: 20px 0;
}
</style>