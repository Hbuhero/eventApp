<script setup lang="ts">
import Events from '@/components/Events.vue';
</script>

<template>
    <div class="heading">
        <div class="heading-description">
            <header>Okk</header>
            <div class="event-section">
                <img src="" alt="">
                <p>33 Events</p>
            </div>
            <hr>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam at id? Labore excepturi fuga sunt harum optio minima at!</p>
        </div>
        <div class="heading-img-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sapiente facere fuga aut corrupti est.</p>
        </div>
    </div>
    <hr>
    <div class="events">
        <p>Popular events</p>
        <Events />
    </div>
    
</template> 

<style scoped>
    .heading{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 150px;
    }
</style>