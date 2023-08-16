<template>
    <post-form @createPost='onCreatePost'/>
    <post-list :posts="posts"/>
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
        }
    },
    methods: {
        onCreatePost(newPost) {
            this.posts.push(newPost)
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>