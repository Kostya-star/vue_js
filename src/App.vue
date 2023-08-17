<template>
    <div class="wrapper">
        <div class="header">
            <my-button @click="isShowModal = true">Create post</my-button>
            <div>
                Select by: <my-select :options="selectOptions" v-model="selectedOption" />
            </div>
        </div>
        <my-modal v-model:isShow="isShowModal">
            <post-form @createPost='onCreatePost' />
        </my-modal>
        <post-list :posts="sortedPosts" @deletePost="deletePost" v-if="!isPostsLoading" />
        <h1 v-else>Fetching for posts...</h1>
    </div>
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios';
export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [],
            isShowModal: false,
            isPostsLoading: true,
            selectedOption: '',
            selectOptions: [
                {
                    value: 'title',
                    label: 'Title'
                },
                {
                    value: 'body',
                    label: 'Description'
                }
            ]
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
        async fetchPosts() {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                this.posts = data
            } catch (error) {
                console.log('error when fetching posts', error);
            } finally {
                this.isPostsLoading = false
            }
        }
    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                const a = post1[this.selectedOption]?.toLowerCase()
                const b = post2[this.selectedOption]?.toLowerCase()
                return a?.localeCompare(b)
            })
        }
    },
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    padding: 0px 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
</style>