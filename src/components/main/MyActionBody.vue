<template>
    <div class="myActionBody" :class="this.$store.getters.class + ' ' + this.$store.getters.otherClass">
        <myAddNew v-if="this.$store.getters.class === 'myAddNew'"/>
        <myDel v-if="this.$store.getters.class === 'myDel'"/>
        <myChange v-if="this.$store.getters.class === 'myChange'"/>
    </div>
</template>

<script>
    import myAddNew from '../bodies/MyAddNew.vue'
    import myDel    from '../bodies/MyDel.vue'
    import myChange from '../bodies/MyChange.vue'

    export default {
        name: 'MyActionBody',
        components: {
            myAddNew,
            myDel,
            myChange
        }
    }
</script>

<style scoped>
    .myActionBody {
        width: 80%;
        border-radius: 10px;
        transition: .6s;
        background: rgba(255, 255, 255, .4);
        padding: 10px;
    }
    .false {
        height: 0;
        font-size: 1px;
        padding: 0;
    }
    .myAddNew {
        height: 90px;
    }
    .myChange {
        height: 90px;
    }
    .myDel {
        height: 90px;
    }
    .add45 {
        height: 135px !important;
    }
    .add90 {
        height: 180px !important;
    }
</style>