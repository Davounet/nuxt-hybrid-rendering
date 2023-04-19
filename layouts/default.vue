<template>
  <div>
    <ul class="list-none flex p-4 bg-gray-100 justify-around items-center">
      <li><nuxt-link class="font-medium p-2 px-4 rounded hover:bg-gray-200" to="/">Home</nuxt-link></li>
      <li><nuxt-link class="font-medium p-2 px-4 rounded hover:bg-gray-200" to="/about">About</nuxt-link></li>
      <li><nuxt-link class="font-medium p-2 px-4 rounded hover:bg-gray-200" to="/cart">Cart</nuxt-link></li>
    </ul>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="postcss">
.router-link-exact-active {
  @apply bg-white;
}
</style>
