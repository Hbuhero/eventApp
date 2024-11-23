<script setup>
import Category from '@/components/Category.vue';
import Nav1 from '@/components/Nav.vue';
import Search from '@/components/Search.vue';
import CategoryButtons from '@/components/CategoryButtons.vue';
import Events from '@/components/Events.vue';
</script>

<template>
    <main>
        <Search />
        <Category />
        <CategoryButtons />
        <Events />
        <Description /> 
    </main>
    
</template>

<style scoped>
    main {
    background-color: whitesmoke;
  }
</style>


