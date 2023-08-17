<template>
    <div class="wrapper">
        <div class="header">
            <my-button @click="isShowModal = true">Create post</my-button>
            <div>
                <my-input v-model="searchValue" name="search" placeholder="Search by title" />
                Sort by: <my-select :options="selectOptions" v-model="selectedOption" />
            </div>
        </div>
        <my-modal v-model:isShow="isShowModal">
            <post-form @createPost='onCreatePost' />
        </my-modal>
        <post-list :posts="sortedAndSearchedPosts" @deletePost="deletePost" v-if="!isPostsLoading" />
        <h1 v-else>Fetching for posts...</h1>
        <my-pagination :pagesCount="pagesCount" v-model:currentPage="currentPage" />
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
            searchValue: '',
            pageSize: 10,
            pagesCount: 0,
            currentPage: 1,
            selectOptions: [
                {
                    value: 'title',
                    label: 'Title'
                },
                {
                    value: 'body',
                    label: 'Description'
                }
            ],
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
                const resp = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: this.pageSize,
                        _page: this.currentPage
                    }
                })
                this.posts = resp.data
                this.pagesCount = Math.ceil(resp.headers['x-total-count'] / this.pageSize)
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
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchValue.toLowerCase()))
        }
    },
    watch: {
        currentPage() {
            this.fetchPosts()
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

.wrapper {
    padding: 0px 10px;
    padding-bottom: 60px;
}

.header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
</style>