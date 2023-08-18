<template>
    <div class="navbar">
        <my-button @click="$router.push('/')">Home</my-button>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button @click="$router.push('/about')">About</my-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
}
.navbar__btns {
    display: flex;
    gap: 10px;
}
</style>