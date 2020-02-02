<template>
    <div id="mySignature">
        <a href="https://www.instagram.com/rina.korolek/" target=”_blank” >by Marina Kuzmina</a>
    </div>
</template>

<script>
    export default {
        name: 'MySignature',
    }
</script>

<style scoped>
    #mySignature {
        height: 0;
        width: 0;
    }
    a {
        cursor: pointer;
        color: white;
        text-decoration: none;
    }
    a:hover {
        color: lavender;
    }
</style>