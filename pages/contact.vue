<template>
   <div class="">
    <div class="px-8 py-10 text-green-800 font-semibold text-center">
      <h2 class="text-3xl ">Get In Touch</h2>
      <p class="w-full md:w-3/4 lg:w-1/2 mx-auto text-gray-500 font-medium py-4">Have questions, feedback, or inquiries? We'd love to hear from you. Feel free to reach out to us using the contact form below.</p>
    </div>
    <div class="flex flex-col lg:flex-row justify-center items-center w-full lg:w-fit mx-auto py-10">
      <div class="block space-y-4 bg-green-800 p-8 h-fit text-white lg:rounded-md">
        <div class="block">
          <h2 class="text-xl font-medium">Hotlines</h2>
          <p class="flex items-center py-4">
            <Icon name="mdi:phone" size="2.55em" />
            <p class="font-medium px-2 space-x-2">
              <NuxtLink class="hover:text-black" to="tel:+01234-567890">+01234-567890</NuxtLink>
              <NuxtLink class="hover:text-black" to="tel:+01234-567890">+01234-567890</NuxtLink>
            </p>
          </p>
        </div>
        <div class="block">
          <h2 class="text-xl font-medium">Our Mail</h2>
          <p class="flex items-center py-4">
            <Icon name="material-symbols:mail" size="2.55em" />
            <p class="font-medium px-2 space-y-2">
              <NuxtLink class="block hover:text-black" to="mailto:+info@rexapp.com">info@rexapp.com</NuxtLink>
              <NuxtLink class="block hover:text-black" to="mailto:+support@rexapp.com">support@rexapp.com</NuxtLink>
            </p>
          </p>
        </div>
        <div class="block">
          <h2 class="text-xl font-medium">Office Location</h2>
          <p class="flex items-center py-4">
            <Icon name="vaadin:office" size="2.55em" />
            <p class="font-medium px-2 space-y-2">
              <NuxtLink class="block hover:text-black" to="https://goo.gl/maps/UySJxqtFhNGuNPEa7">33 Adegoke Street, Masha Surulere,<br> off Ogunlana Drive, Lagos.</NuxtLink>
            </p>
          </p>
        </div>
        <div class="block">
          <h2 class="text-xl font-medium">Online Help Centers</h2>
          <p class="flex items-center py-4">
            <Icon name="wpf:online" size="2.55em" />
            <p class="font-medium px-2 space-x-2">
              <NuxtLink class="hover:text-black" to="facebook.com">Facebook</NuxtLink>
              <NuxtLink class="hover:text-black" to="twitter.com">Twitter</NuxtLink>
              <NuxtLink class="hover:text-black" to="instagram.com">Instagram</NuxtLink>
              <NuxtLink class="hover:text-black" to="youtube.com">Youtube</NuxtLink>
            </p>
          </p>
        </div>
      </div>
      <div class="rounded-md px-4 lg:px-20 py-8 w-11/12 h-fit ">
        <h2 class="text-2xl font-medium pb-4">Contact us</h2>
        <form action="#" method="POST" class="">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
              <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-green-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Let's talk</button>
          </div>
        </form>
      </div>
    </div>
    <div class="w-full h-96 ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.0663269587055!2d3.3506568999999997!3d6.504887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3d1128a477%3A0x7950266f39268a83!2s33%20Adegoke%20St%2C%20Ikate%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1693845666388!5m2!1sen!2sng" width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact Rexapp either offline and online via the info provided here.',
  ogTitle: 'Contact Rexapp either offline and online.',
  ogImage: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1695123250/rexapp/logo_wmh7dg.png',
});
</script>