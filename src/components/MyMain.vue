<template>
    <div id="myMain">
        <myButton v-for="i in this.$store.getters.buttons" :key="i.name" :msg="i.name"/>
        <myActionBody/>
        <mySignature id="sign"/>
    </div>
</template>

<script>
    import mySignature  from './main/MySignature.vue'
    import myButton     from './main/MyButton.vue'
    import myActionBody from './main/MyActionBody.vue'

    export default {
        name: 'MyMain',
        components: {
            mySignature,
            myButton,
            myActionBody
        }
    }
</script>

<style scoped>
    #myMain {
        width: 100%;
        height: calc(100% - 20px);
        background: #2fd0bb;
        color: white;
        padding-top: 20px;
    }
    #sign {
        position: absolute;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        bottom: 10px;
        left: 10px;
    }
</style>