<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu.vue';
import Footer from '@/components/Footer/Footer.vue';

</script>

<template>
  <div class="bg-zinc-50 max-w-full">
    <!-- <div v-if="false" class="h-screen flex justify-center items-center">
			<VIcon
				name="fa-circle-notch"
				animation="spin"
				speed="slow"
				class="mr-2 size-14 md:size-40"
			/>
		</div> -->
		<div class="wrapper">
      <NavigationMenu />
      <div class="container">
        <router-view />
      </div>
      <Footer/>
			<Toaster />
		</div>
  </div>

</template>
