import Vue      from 'vue'
import Vuex     from 'vuex'
import goods    from './modules/goods.js'
import pets     from './modules/pets.js'
import buttons  from './modules/buttons.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        goods,
        pets,
        buttons
    }
})
