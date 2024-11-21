<template>
    <div class="main">
        <div class="header-text">
            <h1 style="color: black; font-weight: bold;">Popular Categories</h1>
            <p style="color: grey; font-size: medium;">Diverse categories for you to choose</p>
        </div>
        <div class="categories">
            <div class="category-container">
                <div class="category-image">
                    <img src="../assets/icons/instagram.png" alt="">
                </div>
                
                <div class="category-text">
                    <p>Conference</p>
                    <p>3 Events</p>
                </div>
            </div>
            <div class="category-container">
                <div class="category-image">
                    <img src="../assets/icons/instagram.png" alt="">
                </div>
                
                <div class="category-text">
                    <p>Conference</p>
                    <p>3 Events</p>
                </div>
            </div>
            <div class="category-container">
                <div class="category-image">
                    <img src="../assets/icons/instagram.png" alt="">
                </div>
                
                <div class="category-text">
                    <p>Conference</p>
                    <p>3 Events</p>
                </div>
            </div>
            <div class="category-container">
                <div class="category-image">
                    <img src="../assets/icons/instagram.png" alt="">
                </div>
                
                <div class="category-text">
                    <p>Conference</p>
                    <p>3 Events</p>
                </div>
            </div>
        </div>
    </div>
        
    
</template>

<style scoped>

    .main {
        margin-top: 100px;
        background-color: rgba(255, 182, 193, 0.1);
        margin-bottom: 100px;
    }

    .header-text {
        margin-bottom: 30px;
        padding-top: 50px;
        text-align: center
    }
    
/* Main container for all categories */
/*
.categories {
    
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
    margin: 40px auto;
    max-width: 9000px; / Adjust to fit design 
    text-align: center;
    background-color: rgba(250, 235, 215, 0.3); /* 70% AntiqueWhite, 30% White 
    
}

edit the card container to be good

*/



.categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-content: center;
    padding-left: 260px;
    padding-right: 200px;
    padding-top: 20px;
    padding-bottom: 40px;
}

/* Individual category container */
.category-container {
    width: 100%;
    height: 100%;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    background-color: white;
    text-align: center;
    margin-bottom: 20px;
}

/* Hover effect */
.category-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border: 1px solid red;
}

/* Category image styles */
.category-container img {
    margin-bottom: 10px;
    height: 50px;
    width: 50px;
    object-fit: cover;
}

.category-image {
    padding-top: 10px;
}

/* Text container */
.category-text {
    font-family: 'Arial', sans-serif;
    color: #333;
}

/* Title styles */
.category-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

/* Event count styles */
.category-events {
    font-size: 14px;
    color: #666;
}
</style>