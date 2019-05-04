<template>
  <div>
    <h1 class="font-bold text-sm tracking-wide mb-6 uppercase text-gray-600">
      Компоненты системы
    </h1>
    <Tabs :list="categories">
      <template v-for="(tab, key) in categories" v-slot:[key]>
        <div v-if="key === 'editors'" :key="key">
          <InputGroup title="Текстовые поля ввода" description="бла-бла-бла">
            привет
          </InputGroup>
        </div>
        <div v-if="key === 'dialogs'" :key="key">
          <InputGroup title="Диалоги" description="бла-бла-бла">
            Диалоги
          </InputGroup>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script>
import Tabs from '~/components/Tabs'
import InputGroup from '~/components/editors/InputGroup'

export default {
  components: { Tabs, InputGroup },
  data() {
    return {
      categories: {
        editors: 'Редакторы',
        dialogs: 'Диалоги'
      }
    }
  }
}
</script>
