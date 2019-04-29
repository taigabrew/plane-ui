<template>
  <div>
    <h1 class="leading-loose my-6">
      <span v-if="error.statusCode === 404">
        Извините, но у нас нет такой страницы
      </span>
      <span v-else>
        Произошла ошибка
      </span>
    </h1>
    <nuxt-link to="/">
      Вернуться на главную
    </nuxt-link>
  </div>
</template>
