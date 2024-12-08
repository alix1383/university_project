<template>
  <div
    class="mx-auto mt-28 flex w-4/5 flex-col items-center justify-center rounded-xl bg-base-200 shadow-lg md:w-3/5"
  >
    <span class="my-5 text-5xl font-bold">Login Page</span>
    <form class="flex w-3/5 flex-col gap-3 py-3" action="">
      <label class="input input-bordered flex items-center gap-2">
        <userIcon />
        <input type="text" class="grow" placeholder="Username" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <passwordIcon />
        <input
          type="password"
          class="grow"
          value="password"
          placeholder="Password"
        />
      </label>
      <div class="flex gap-1">
        <button class="btn btn-accent btn-active w-full shrink rounded-r-none">
          Login
        </button>
        <button class="btn btn-ghost btn-active w-full shrink rounded-l-none">
          Forget Password
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import passwordIcon from "~/components/icons/password.vue";
import userIcon from "~/components/icons/user.vue";
</script>
