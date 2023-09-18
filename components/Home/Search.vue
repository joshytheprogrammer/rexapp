<template>
  <div class="py-16 text-center" id="rexapp_s_c">
    <h2 class="text-3xl font-medium">Rexapp Search Constructor</h2>
    <p class="py-4 px-2">The Rexapp Search Constructor can help you find parts using information available to you.</p>
    <div class="bg-green-200 px-6 py-4 mx-6 lg:mx-8 rounded-md">
      <form class="flex justify-around flex-wrap gap-2 transition-all duration-300 py-4" @submit.prevent="submit">
        <select class="bg-white focus:shadow-md rounded-md outline-none cursor-pointer px-2 py-2" v-model="search.manufacturer">
          <option value="" selected>Select Manufacturer</option>
          <option v-for="m in manufacturers" :key="m" :value="m">{{ m }}</option>
        </select>
        <select class="bg-white focus:shadow-md rounded-md outline-none cursor-pointer px-2 py-3" v-model="search.year">
          <option value="" selected>Select Year</option>
          <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
        </select>
        <select class="bg-white focus:shadow-md rounded-md outline-none cursor-pointer px-2 py-3" v-model="search.category">
          <option value="" selected>Select Category</option>
          <option v-for="c in categories" :key="c._id" :value="c.name">{{ c.name }}</option>
        </select>
        <select class="bg-white focus:shadow-md rounded-md outline-none cursor-pointer px-2 py-3" v-model="search.state">
          <option value="" selected disabled>--Condition--</option>
          <option value="New" >Brand New</option>
          <option value="Used">Used</option>
        </select>
        <button class="p-4 shadow-md rounded-md bg-green-800 border border-green-800 text-white" type="submit">Construct Search</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const {constructSearch} = useSearchUtilities();

const currentYear = new Date().getFullYear();
const startYear = 1990;
const years = generateYearsArray(startYear, currentYear);
const manufacturers = [
  "Toyota",
  "Honda",
  "Ford",
  "Nissan",
  "Hyundai",
  "Kia",
  "Volkswagen",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Land Rover",
  "Chevrolet",
  "Peugeot",
  "Subaru",
  "Mitsubishi",
  "Lexus",
  "Infiniti",
  "Jaguar",
  "Renault",
  "Suzuki",
  "Jeep",
  "Dodge",
  "Acura",
  "GMC",
  "Chrysler",
  "RAM",
  "Fiat",
  "Alfa Romeo",
  "Mini",
  "Volvo",
  "Skoda",
  "Porsche",
  "Maserati",
  "Rolls-Royce",
  "Bentley",
  "Aston Martin",
  "Lamborghini",
  "Bugatti",
  "Tesla",
  "McLaren",
  "Citroën",
  "DAF",
  "Daewoo",
  "Foton",
  "Geely",
  "Higer",
  "JAC",
  "Mahindra",
  "Tata",
  "Zotye",
  "Innoson"
].sort();

const search = reactive({
  manufacturer: '',
  year: '',
  category: '',
  state: ''
})

const { data } = await useFetch('/categories/all?fields=_id,name&sort=name&limit=20', {
  baseURL: useRuntimeConfig().public.baseURL,
});

const categories = data.value?.categories.sort();

function generateYearsArray(startYear, endYear) {
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
}

function submit(){ 
  constructSearch(search); 
}
</script>

<style lang="scss" scoped>

</style>