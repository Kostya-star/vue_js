<template>
    <div class="modal" v-if="isShow" @click="$emit('update:isShow', false)">
        <div class="modal__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-modal',
    props: {
        isShow: {
            type: Boolean,
            // default: false
        }
    },
};
</script>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.5);
}

.modal__content {
    background-color: #fff;
    min-height: 100px;
    min-width: 300px;
    border-radius: 10px;
    padding: 10px;
}
</style>