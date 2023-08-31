<template>
  <Transition name="blur" mode="out-in">
    <div class="flex justify-center items-center fixed bottom-20 right-4 z-10" v-show="showBar">
      <button class="bg-green-800 rounded-full text-white cursor-pointer p-2" @click="scrollToTop">
        <Icon name="mdi:arrow-top" size="1.55em" class="text-white" />
      </button>
    </div>
  </Transition>
</template>

<script setup>
const showBar = ref(false);

const scrollFunction = () => {
  showBar.value = true;

  let documentHeight = document.body.scrollHeight;
  let currentScroll = window.scrollY + window.innerHeight;
  let modifier = 50;

  if (currentScroll + modifier > documentHeight || window.scrollY < 200) {
    showBar.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  document.addEventListener("scroll", scrollFunction);
});

onUnmounted(() => {
  document.removeEventListener("scroll", scrollFunction);
});
</script>
