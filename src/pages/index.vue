<template>
  <div>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
