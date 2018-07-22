<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement">AsyncIncrement</button>
        <button class="btn btn-primary" @click="asyncDecrement">AsyncDecrement</button>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    // ...mapMutations([
    //   'increment',
    //   'decrement'
    // ])
    // increment() { //mutation
    //   this.$store.commit('increment')
    // },
    // decrement() {
    //   this.$store.commit('decrement')
    // }
    ...mapActions([
      'increment',
      'decrement',
      'asyncIncrement',
      'asyncDecrement'
    ])
  }
}
</script>