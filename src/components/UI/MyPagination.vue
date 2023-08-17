<template>
    <div class="pagination">
        <span v-for="page in pagesCount" :key="page" :class="{ 'current-page': currentPage === page }"
            @click="onPageChange(page)">{{ page }}</span>
    </div>
</template>

<script>
export default {
    name: 'my-pagination',
    props: {
        pagesCount: {
            type: Number
        },
        currentPage: {
            type: Number
        }
    },
    methods: {
        onPageChange(page) {
            this.$emit('update:currentPage', page)
        }
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px 0px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
}

.pagination span {
    color: white;
    font-weight: 600;
    padding: 5px 15px;
    cursor: pointer;
}

.pagination .current-page {
    background-color: teal;
}
</style>