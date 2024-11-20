<script setup>
import Category from '@/components/Category.vue';
import Navbar from '@/components/Navbar.vue';
import Nav1 from '@/components/Nav.vue';
import Search from '@/components/Search.vue';
import Events from '@/components/Events.vue';
</script>

<template>
    <main>
        <Nav1 />
        <Search />
        <Category />
        <Events />
        <Description /> 
    </main>
    
</template>

<style scoped>
    main {
    background-color: whitesmoke;
  }
</style>


