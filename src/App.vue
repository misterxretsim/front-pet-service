<template>
    <center id="app">
        <MyMain/>
    </center>
</template>

<script>
    import MyMain from './components/MyMain.vue'

    export default {
        name: 'app',
        components: {
            MyMain
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
    html, body, #app {
        width: 100%;
        height: 100%;
        background: #2fd0bb;
    }
    input {
        background: rgba(0,0,0,0);
        border: 0;
        border-bottom: 2px solid white;
        outline: none;
        color: white;
        height: 30px;
        width: 100px;
        font-size: 15px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        display: block;
        margin-bottom: 10px;
    }
    ::placeholder {
        color: white;
        opacity: 1;
    }
</style>
