<script setup>
import Events from '@/components/Events.vue';
</script>

<template>
  <main>
    <div class="heading">
        <div class="heading-description">
            <p style="margin-bottom: 6px; font-weight: bold; font-size: xx-large;">Ok</p>
            <div class="category-detail">
                <img src="../assets/icons/calendar.png" alt="">
                <p>33 Events</p>
            </div>
            <hr>
            <p style="margin-top: 20px; flex-wrap: wrap; font-size: medium;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid maxime adipisci optio deleniti soluta qui repellendus accusamus alias blanditiis? Aliquam dolorum reprehenderit perspiciatis ad, a ut facere vel mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam at id? Labore excepturi fuga sunt harum optio minima at!</p>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="icon-container">
              <img src="../assets/icons/calendar.png" alt="icon" />
            </div>
          </div>
          <div class="card-content">
            <div class="image-container">
              <img src="../assets/img/kisuke.webp" alt="climate image" />
            </div>
          </div>
          <div class="card-footer">
            <span>DISCOVER</span>
            <div class="left">
              <span class="highlight">CLIMATE </span><span>EVENTS</span>
            </div>
          </div>
        </div>
    </div>
    
      
      <!-- <div class="events">
        <hr style="width: 100%; margin-top: 20px;">
      <p style="padding-left: 390px; margin-bottom: 15px; margin-top: 15px; font-size: xx-large; font-weight: bold;">Popular events</p>
      <Events style="padding-right: 20px;"/>
    </div> -->

    <div class="events">
      <hr style="width: 100%; margin-top: 20px;">
      <p class="title">Popular events</p>
      
      <div class="event-cards">
        
      </div>
    
    </div>

    <Events />
</main>
    
    
</template> 

<style scoped>
  main {
    background-color: white;
  }
    .heading{
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        margin-bottom: 150px;
        gap: 80px;
    }

    .heading-img-container {
        position: relative;
        width: 25%;
        height: 25%;
        border: 1px solid red;
        
    }

    .heading-img-container img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    .text-container {
        width: 100%;
        position: absolute;
        bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }

    .category-detail {
        display: flex;
        margin-bottom: 15px;
    }
    
    .category-detail img {
        width: 20px;
        height: 20px;
        margin-right: 12px;
    }
    
    .card, .heading-description {
    background-color: #262626; /* Dark background */
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    height: 450px;
    color: #fff;
    font-family: Arial, sans-serif;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .card-header {
    display: flex;
    justify-content: flex-start;
  }
  
  .icon-container img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #0c870c;
    padding: 5px;
  }
  
  .card-content {
    position: relative;
    text-align: center;
  }
  
  .image-container img {
    width: 330px;
    height: 330px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #262626; /* Ensures image appears circular */
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  
  .card-footer .highlight {
    color: #0c870c; /* Highlighted green text */
    font-weight: bold;
  }

  .events {
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text content */
}

.events .title {
  margin: 15px 0; /* Adjust spacing */
  font-size: xx-large;
  font-weight: bold;
  color: black;
}

.event-cards {
  display: flex; /* Flexbox for card alignment */
  justify-content: center; /* Center cards horizontally */
  flex-wrap: wrap; /* Allow cards to wrap onto the next row if necessary * /* Space between cards */
  width: 100%; /* Ensure cards take full width */
   /* Adjust padding around the cards */
}

</style>