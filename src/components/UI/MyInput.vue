<template>
    <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
};
</script>

<style scoped>
.input {
    padding: 5px;
    color: teal;
    border: 1px solid teal;
    font-weight: 600;
}

.input::placeholder {
    color: teal;
    font-weight: 600;
}
</style>