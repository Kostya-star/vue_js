<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
};
</script>

<style scoped>
.btn {
    padding: 5px;
    /* background-color: transparent; */
    color: teal;
    font-weight: 600;
    border: 2px solid teal;
    cursor: pointer;
}
.btn:active {
    color: white;
    background-color: rgb(51, 139, 121);
}
</style>