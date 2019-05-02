<template>
  <div>
    <input
      type="checkbox"
      value="foo"
      :checked="!!isChecked"
      @change="e => (isChecked = e.target.checked)"
    />
  </div>
</template>
