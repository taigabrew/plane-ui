<template>
  <transition
    :css="false"
    @beforeEnter="beforeEnter"
    @enter="enter"
    @leave="leave"
    mode="out-in"
  >
    <slot />
  </transition>
</template>

<script>
import anime from 'animejs'

export default {
  methods: {
    beforeEnter(el) {
      anime.set(el, {
        translateZ: 0.01,
        scaleY: 0.01,
        opacity: 0.001,
        transformOrigin: 'top left'
      })
    },
    enter(el, done) {
      anime({
        targets: el,
        opacity: 1,
        scaleY: 1,
        easing: 'easeInSine',
        duration: 50,
        complete: done
      })
    },
    leave(el, done) {
      anime({
        targets: el,
        opacity: 0.001,
        scaleY: 0.01,
        easing: 'easeOutSine',
        duration: 50,
        complete: done
      })
    }
  }
}
</script>
