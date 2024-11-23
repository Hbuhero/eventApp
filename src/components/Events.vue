<template>
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
        <div class="button">
            <button>View</button> 
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
            <div class="button">
            <button>View</button> 
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
            <div class="button">
            <button>View</button> 
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
            <div class="button">
            <button>View</button> 
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
            <div class="button">
            <button>View</button> 
        </div>
        </div>  
    </div><div class="event-card">
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
            <div class="button">
            <button>View</button> 
        </div>
        </div>  
    </div><div class="event-card">
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
            <div class="button">
            <button>View</button> 
        </div>
        </div>  
    </div>      
    </div>
</template>

<style scoped>
.events-container {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        left: 20%;
        padding-bottom: 30px;
        gap: 50px;
    }

    .event-card {
        position: relative;
        width: 25%;
        height: 450px;
        border: 0.5px solid transparent;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        
        
        /* flex: 2 2 calc(33.333% - 16px);
        box-sizing: border-box; */
    }

    .event-card:hover{
        border: 0.1px solid lightcoral
    }

    .event-title p {
        color: black; 
        font-size: x-large; 
        padding-left: 15px; 
        font-weight: bold; 
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .img {
        width: 100%;
        height: 50%;
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
        padding-bottom: 20px;
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

    .button {
        padding: 12px;
        position: absolute;
        right: 5px;
        
    }

    /* From Uiverse.io by aasisodiya */ 
button {
    text-align: center;
 background-color: #eee;
 border: none;
 padding: 1rem;
 font-size: 1rem;
 width: 5em;
 height: 3em;
 border-radius: 1rem;
 color: lightcoral;
 cursor: pointer;
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