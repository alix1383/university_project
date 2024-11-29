<template>
  <div class="mt-28 bg-base-200 rounded-xl md:w-3/5 flex flex-col items-center justify-center w-4/5 mx-auto shadow-lg">
    <span class="my-5 text-5xl font-bold">Login Page</span>
    <form class="flex flex-col w-3/5 gap-3 py-3" action="">
      <label class="input input-bordered flex items-center gap-2">
        <userIcon />
        <input type="text" class="grow" placeholder="Username" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <passwordIcon />
        <input type="password" class="grow" value="password" placeholder="Password" />
      </label>
      <div class="flex gap-1">
        <button class="btn btn-active btn-accent shrink w-full rounded-r-none">Login</button>
        <button class="btn btn-active btn-ghost shrink w-full rounded-l-none">Forget Password</button>
      </div>


    </form>

  </div>


</template>

<script lang="ts" setup>
import passwordIcon from '~/components/icons/password.vue';
import userIcon from '~/components/icons/user.vue';


</script>