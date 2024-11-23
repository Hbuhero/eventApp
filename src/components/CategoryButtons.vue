<script setup>

    const ok = () => {
        console.log("ok");
        
    }
</script>

<template>
    <div class="main">
        <div class="header">
            <h1 class="underline" style="color: black; font-weight: bold; ">Upcoming Events</h1>
        </div>
        <div class="categories">
            <div class="category" @click="ok">
                <button class="category-button">All</button>
            </div>
            <div class="category" @click="ok">
                <button class="category-button">Concert</button>
            </div>
            <div class="category" @click="ok">
                <button class="category-button">Business</button>
            </div>
            <div class="category" @click="ok">
                <button class="category-button">Finance</button>
            </div>
            <div class="category" @click="ok">
                <button class="category-button">Agriculture</button>
            </div>
            <div class="category" @click="ok">
                <button class="category-button">Mining</button>
            </div>
            <div class="category" @click="ok">
                <button class="category-button">Computer</button>
            </div>
            <div class="category" @click="ok">
                <button class="category-button">Crypto</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: bold;
    }

    .underline {
        position: relative;
        padding-bottom: 10px;
        color: black;
    }

    .underline::after {
        content: "";
        position: absolute;
        left: 90px;
        bottom: 0;
        width: 80px;
        height: 3px;
        background-color: red;
    }

    .categories {
        color: black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 50px;
        /* justify-content: space-between; */
    }
    
    button {
        margin-right: 20px;
        background-color: transparent;
        border: none;
        padding: 1rem;
        font-size: 1rem;
        width: 7em;
        border-radius: 1rem;
        color: lightcoral;
        box-shadow: 0 0.4rem #dfd9d9;
        cursor: pointer;
        margin-top: 20px;
    }

    button:active {
        color: white;
        box-shadow: 0 0.2rem #dfd9d9;
        transform: translateY(0.2rem);
    }

    button:hover:not(:disabled) {
        background: lightcoral;
        color: white;
        text-shadow: 0 0.1rem #bcb4b4;
    }

    button:disabled {
        cursor: auto;
        color: grey;
    }
</style>

