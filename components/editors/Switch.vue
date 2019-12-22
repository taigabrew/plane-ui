<template>
  <div>
    <input
      :checked="!!isChecked"
      @change="e => (isChecked = e.target.checked)"
      type="checkbox"
      value="foo"
    />
  </div>
</template>
