<template>
  <div class="space-y-4">
    <h1 class="text-lg">
      This is page <span class="font-bold">{{ page }}</span>
    </h1>
    <div class="flex space-x-4 items-center justify-start">
      <button class="bg-gray-200 rounded p-1.5 px-4 hover:bg-gray-300" @click="callApi">Call API</button>
      <p>API alive : {{ isAlive }}</p>
    </div>
    <pre class="text-xs">{{ random }}</pre>
  </div>
</template>

<script setup lang="ts">
const page = 'home'

const { data: random } = await useAsyncData(async () => process.server && $fetch(`https://random-data-api.com/api/users/random_user`))

const isAlive = ref('no idea')
async function callApi() {
  console.log(`Calling api from ${page} page`)
  isAlive.value = await utils.callApi()
}
</script>
