<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: 'Buscar' })

const texto = defineModel<string>({ default: '' })

const id = useId()
</script>

<template>
  <form class="flex items-center gap-3" @submit.prevent>
    <label :for="id" class="sr-only">Buscar</label>
    <div class="relative w-full">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-4 h-4 text-body"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        :id="id"
        v-model="texto"
        type="text"
        class="block w-full ps-9 pe-3 py-2.5 bg-neutral-primary-soft border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        :placeholder="placeholder"
      />
    </div>
    <button
      type="submit"
      class="shrink-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
    >
      Search
    </button>
  </form>
</template>
