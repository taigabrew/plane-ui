<template>
  <div>
    <input
      type="radio"
      value="One"
      :checked="picked == 'One'"
      @change="e => (picked = e.target.value)"
    />
    <input
      type="radio"
      value="Two"
      :checked="picked == 'Two'"
      @change="e => (picked = e.target.value)"
    />
    <span>Picked: {{ picked }}</span>
  </div>
</template>
