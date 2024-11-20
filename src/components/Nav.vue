<template>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <img src="../assets/icons/instagram.png" alt="" style="max-width: 50px; max-height: 50px;"> <!-- Replace with your actual logo -->
        </div>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <div class="login">
                <img src="../assets/icons/user.png" alt="" style="max-width: 100px; max-height: 50px;">
                <p>Login</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      search() {
        if (this.searchQuery) {
          console.log('Searching for:', this.searchQuery);
          // You can replace the console.log with actual search functionality
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Navbar Styles */
  .navbar {
    background-color: white; /* Dark background color */
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    top: 0;
    z-index: 1000;
    position: sticky;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  .logo a {
    color: black;
    font-size: 24px;
    text-decoration: none;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li a {
    color: black;
    text-decoration: none;
    font-size: 18px;
  }
  
  .nav-links li a:hover {
    text-decoration: underline;
  }
  
  /* Search Area */
  .search-area {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .search-area input {
    padding: 5px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
  }
  
  .search-area button {
    padding: 6px 12px;
    font-size: 16px;
    background-color: #ff7b00; /* Custom color */
    border: none;
    color: white;
    cursor: pointer;
  }
  
  .search-area button:hover {
    background-color: #ff5c00;
  }
  </style>
  