<template>
    <div class="main">
        <div class="logo">
            <img src="../assets/logo.svg" alt="">
        </div>
        <div class="bar-items">
            <div class="login">
                <img src="../assets/logo.svg" alt="">
                <p>Login</p>
            </div>
            <div class="register">
                <img src="../assets/logo.svg" alt="">
                <p>Register</p>
            </div>
        </div>
    </div>
        
    
    
</template>

<style scoped>
    p {
        color: black;
    }

    .main{
        display: flex;
        justify-content: space-between;
    }

    .bar-items {
        display: flex;
        flex-direction: row;
    }

    .logo{
        width: 10vw;
        height: 10vh;
    }
</style>