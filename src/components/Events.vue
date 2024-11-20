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
                <button>All</button>
            </div>
            <div class="category" @click="ok">
                <p>Concert</p>
            </div>
            <div class="category" @click="ok">
                <p>Business</p>
            </div>
        </div>
        <div class="event-container">
            <div class="event-card"></div>
            <div class="img">
                <p>category</p>
                <img src="" alt="">
            </div>
            <div class="event-text">
                <p>Link</p>
                <div class="time">
                    <img src="" alt="">
                    <p>2022</p>
                </div>
                <div class="location">
                    <img src="" alt="">
                    <p>dar</p>
                </div>
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
        justify-content: space-around;
    }

    /* .category button{
        
        margin-right: 20px;
        font-size: medium;
        border: 0;
        background-color: transparent;
    } */

    button:active{
        background-color: rebeccapurple;
    }

    .category button::selection{
        background-color: red;
    }
</style>