<template>
    <section class="search-area">
      <div class="search-container">
        <h2>Find the right event for you</h2>
        <p>Search event near you with category</p>
        <div class="search-box">
          <input type="text" v-model="location" placeholder="Enter location" />
          <select v-model="category">
            <option value="" disabled selected>Select Category</option>
            <option value="concert">Concert</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
          </select>
          <button @click="searchEvent">Search</button>
        </div>
        <button class="near-btn">Near me</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
        category: '',
      };
    },
    methods: {
      searchEvent() {
        console.log(`Searching for events in ${this.location} in ${this.category} category`);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-area {
    background-image: url('../assets/img/kisuke.webp'); /* Add your background image URL here */
    background-size: contain;
    background-position: center;
    padding: 80px 20px;
    color: white;
    text-align: center;
  }
  
  .search-container h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }
  
  .search-container p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .search-box {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.8); /* Add a white background with some opacity */
    padding: 20px;
    border-radius: 10px;
  }
  
  .search-box input,
  .search-box select {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .search-box button {
    background-color: #ff7b00;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  .search-box button:hover {
    background-color: #ff5c00;
  }
  
  .near-btn {
    background-color: #ff7b00;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .near-btn:hover {
    background-color: #ff5c00;
  }
  </style>
  