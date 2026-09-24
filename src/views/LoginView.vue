<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const usuario = ref('')
const contrasena = ref('')
const recordarme = ref(false)

const router = useRouter()

function onSubmit() {
  // Mockup: sin backend todavía, el ingreso lleva directo al inicio.
  router.push('/inicio')
}
</script>

<template>
  <main class="flex min-h-full items-center justify-center bg-neutral-secondary-soft p-6">
    <div
      class="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs"
    >
      <form @submit.prevent="onSubmit">
        <h5 class="text-xl font-semibold text-heading mb-6">Ingresar</h5>

        <div class="mb-4">
          <label for="usuario" class="block mb-2.5 text-sm font-medium text-heading">
            Usuario <span class="text-fg-danger">*</span>
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-body"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16.5a5.5 5.5 0 0 0-5.5-5.5h-2A5.5 5.5 0 0 0 1 16.5M10 4a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                />
              </svg>
            </div>
            <input
              id="usuario"
              v-model="usuario"
              type="text"
              autocomplete="username"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full ps-10 pe-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="Ingresar Usuario"
              required
            />
          </div>
        </div>

        <div>
          <label for="contrasena" class="block mb-2.5 text-sm font-medium text-heading">
            Contraseña <span class="text-fg-danger">*</span>
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-body"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 7V5a3 3 0 0 0-6 0v2M3 7h10a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
                />
              </svg>
            </div>
            <input
              id="contrasena"
              v-model="contrasena"
              type="password"
              autocomplete="current-password"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full ps-10 pe-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="•••••••••"
              required
            />
          </div>
        </div>

        <div class="flex items-start my-6">
          <div class="flex items-center">
            <input
              id="checkbox-recordarme"
              v-model="recordarme"
              type="checkbox"
              class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
            <label for="checkbox-recordarme" class="ms-2 text-sm font-medium text-heading">
              Recordarme
            </label>
          </div>
          <a href="#" class="ms-auto text-sm font-medium text-fg-brand hover:underline">
            Olvidé mi contraseña
          </a>
        </div>

        <button
          type="submit"
          class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3"
        >
          Ingresar
        </button>

        <a href="#" class="text-sm font-medium text-fg-brand hover:underline">Crear cuenta</a>
      </form>
    </div>
  </main>
</template>
