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
        <div class="events-container">
            <div class="event-card">
                <div class="img">
                    <img src="../assets/img/kisuke.webp" alt="">
                    <div class="overlay-text">Education</div>
                </div>
                <div class="event-text">
                    <div class="event-title">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div class="time">
                        <img src="../assets/icons/clock.png" alt="">
                        <p>Thu, September 28, 2028, 7:30 am</p>
                    </div>
                    <div class="location">
                        <img src="../assets/icons/location.png" alt="">
                        <p>Fresno , California</p>
                    </div>
                </div>  
            </div>
            <div class="event-card">
                <div class="img">
                    <img src="../assets/img/kisuke.webp" alt="">
                    <div class="overlay-text">Education</div>
                </div>
                <div class="event-text">
                    <div class="event-title">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    
                    <div class="time">
                        <img src="../assets/icons/clock.png" alt="">
                        <p>Thu, September 28, 2028, 7:30 am</p>
                    </div>
                    <div class="location">
                        <img src="../assets/icons/location.png" alt="">
                        <p>Fresno , California</p>
                    </div>
                </div>  
            </div>
            <div class="event-card">
                <div class="img">
                    <img src="../assets/img/kisuke.webp" alt="">
                    <div class="overlay-text">Education</div>
                </div>
                <div class="event-text">
                    <div class="event-title">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="time">
                        <img src="../assets/icons/clock.png" alt="">
                        <p>Thu, September 28, 2028, 7:30 am</p>
                    </div>
                    <div class="location">
                        <img src="../assets/icons/location.png" alt="">
                        <p>Fresno , California</p>
                    </div>
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
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 50px;
        /* justify-content: space-between; */
    }

    .category-button{
        text-align: center;
        margin-right: 20px;
        font-size: medium;
        border: 0;
        background-color: transparent;
    }

    .category-button:hover{
        color: orangered;
    }

    .category-button:active{
        color: orangered;
    }

    .category button::selection{
        background-color: red;
    }

    .events-container {
        display: flex;
        /* flex-wrap: wrap; */
        align-items: center;
        justify-content: center;
        padding-bottom: 30px;
        gap: 16px;
    }

    .event-card {
        width: 400px;
        height: 500px;
        border: 0.5px solid transparent;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin-right: 3%;
        /* flex: 2 2 calc(33.333% - 16px);
        box-sizing: border-box; */
    }

    .event-title p {
        color: black; 
        font-size: x-large; 
        padding-left: 15px; 
        font-weight: bold; 
        margin-bottom: 20px;
        margin-top: 30px;
    }

    .img {
        width: 100%;
        height: 55%;
        position: relative;
        /* display: inline-block; */
    }

    .img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .overlay-text {
        position: absolute;
        bottom: 10px; /* Distance from the bottom of the image */
        left: 10px; /* Distance from the left of the image */
        background-color: rgba(144, 238, 144, 0.9); /* Light green background */
        color: #fff; /* White text */
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
    }

    .time, .location {
        margin-bottom: 10px;
        display: flex;
        width: 100%;
        height: 30px;
        color: black;
        font-size: large;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .time img, .location img {
        width: 25px;
        height: 25px;
        margin: 10px
    }

    .time p, .location p{
        margin-top: 11px;
        
    }
</style>