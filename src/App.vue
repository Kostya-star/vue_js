<template>
    
    <div class="wrapper">
        <navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/UI/Navbar.vue'
export default {
    components: {
        Navbar
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    padding: 60px 10px;
}
</style>