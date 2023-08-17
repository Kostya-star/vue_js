<template>
    <select :value="modelValue" @change="onSelectChange">
        <option value="" disabled>Select an option</option>
        <option v-for="option of options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        options: {
            type: Array
        },
        modelValue: [String]
    },
    data() {
        return {
        };
    },
    methods: {
        onSelectChange(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
};
</script>

<style scoped></style>