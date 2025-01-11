<template>
  <div class="bg-custom-10">
    <Navbar />

    <modal
      :dataCollegeStudent="dataCollegeStudent"
      isClose="isClose"
      :isOpen="isOpen"
    />

    <div
      class="bg-color-custom-11 xl:px-20 relative px-6 lg:px-20 py-20 home"
      style="border-bottom-right-radius: 200px"
    >
      <div class="yellowGradient" style="bottom: -150px;
    right: -293px;"></div>
      <div class="redGradient"></div>
      <div class="blueGradient"></div>

      <svg
        class="absolute z-1 left-8"
        width="560"
        height="560"
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="280"
          cy="280"
          r="240"
          fill="#010506"
          stroke="#0D0D0D"
          stroke-width="80"
        />
      </svg>
      <div class="grid grid-cols-12 overflow-x-hidden">
        <div
          class="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:order-1 lg:order-1 md:order-1 order-2 z-10 h-full flex justify-start items-end"
        >
          <div class="w-4/5">
            <gradient-text
              bg_gradient_class="bg_gradient_text"
              message="Faces"
            />
            <p class="xl:text-7xl lg:text-7xl text-5xl text-color-custom-10">
              Behind the
            </p>
            <gradient-text
              bg_gradient_class="bg_gradient_text"
              message="Future"
            />
            <p class="lg:mt-8 xl:mt-8 mt-4 text-md text-color-custom-10">
              Explore our world of coding and collaboration. Meet future
              software engineers and the memories we're creating.
            </p>
            <a
              href="https://www.instagram.com/softwareengineer1a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                class="rounded-full text-xl mt-8 flex items-center bg-color-custom-10 p-3"
              >
                Our Instagram
                <span class="ml-2 p-2 rounded-full icon_ig"
                  ><img
                    src="~/assets/img/svg/ig.svg"
                    alt=""
                    class="w-5"
                    srcset=""
                /></span>
              </button>
            </a>
          </div>
        </div>
        <div
          class="xl:col-span-6 lg:col-span-6 lg:mb-0 xl:mb-0 mb-6 md:col-span-6 col-span-12 xl:order-2 lg:order-2 md:order-2 order-1 xl:p-6 lg:p-6"
        >
          <div class="grid grid-cols-12">
            <div class="col-span-8 xl:pt-2 flex justify-center align-center">
              <div class="z-30">
                <div class="flex justify-between mb-8">
                  <img
                    src="~/assets/img/img.jpg"
                    class="lg:w-44 lg:h-40 xl:w-44 xl:h-40 h-28 rounded-tl-full rounded-bl-full"
                    alt=""
                    srcset=""
                  />
                  <img
                    src="~/assets/img/img.jpg"
                    class="lg:w-40 xl:h-40 h-28 rounded-full"
                    alt=""
                    srcset=""
                  />
                </div>
                <img
                  src="~/assets/img/img.jpg"
                  class="lg:w-full xl:w-full w-48"
                  style="
                    border-top-left-radius: 30%;
                    border-bottom-right-radius: 30%;
                  "
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div class="col-span-4 pt-x flex justify-end">
              <div class="flex flex-col justify-between lg:h-full">
                <div class="flex justify-center">
                  <img
                    src="~/assets/img/img.jpg"
                    class="lg:w-32 xl:w-32 z-30 xl:h-40 lg:h-40 object-cover"
                    style="border-top-left-radius: 30%"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="flex justify-center"></div>
                <div class="flex justify-center">
                  <img
                    src="~/assets/img/img.jpg"
                    class="lg:h-40 xl:h-40 h-28 z-30 object-cover rounded-full"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="flex justify-center">
                  <img
                    src="~/assets/img/img.jpg"
                    class="xl:w-32 xl:h-40 lg:w-32 z-30 lg:h-40 object-cover rounded-bl-full rounded-br-full"
                    alt=""
                    srcset=""
                  />
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:px-20 px-6 lg:px-20 Activity relative bg-color-custom-10 z-20 py-20 z-10">
      <div class="grid grid-cols-12">
        <div class="xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-12">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6">
              <div class="card main-shadow bg-color-custom-9 rounded-xl">
                <img
                  src="~/assets/img/card1.png"
                  class="rounded-tl-xl rounded-tr-xl h-56 w-full object-cover"
                  alt=""
                  srcset=""
                />
                <div class="p-4">
                  <div class="font-semibold text-xl">Activity 1</div>
                </div>
              </div>
            </div>
            <div class="col-span-6">
              <div class="card main-shadow bg-color-custom-9 rounded-xl">
                <img
                  src="~/assets/img/card1.png"
                  class="rounded-tl-xl rounded-tr-xl h-56 w-full object-cover"
                  alt=""
                  srcset=""
                />
                <div class="p-4">
                  <div class="font-semibold text-xl">Activity1</div>
                </div>
              </div>
            </div>
            <div class="col-span-6">
              <div class="card main-shadow bg-color-custom-9 rounded-xl">
                <img
                  src="~/assets/img/card1.png"
                  class="rounded-tl-xl rounded-tr-xl h-56 w-full object-cover"
                  alt=""
                  srcset=""
                />
                <div class="p-4">
                  <div class="font-semibold text-xl">Activity1</div>
                </div>
              </div>
            </div>
            <div class="col-span-6">
              <div class="card main-shadow bg-color-custom-9 rounded-xl">
                <img
                  src="~/assets/img/card1.png"
                  class="rounded-tl-xl rounded-tr-xl h-56 w-full object-cover"
                  alt=""
                  srcset=""
                />
                <div class="p-4">
                  <div class="font-semibold text-xl">Activity1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12 lg:mt-0 xl:mt-0 md:mt-0 mt-6 flex justify-center"
        >
          <div class="max-w-80">
            <gradient-text
              bg_gradient_class="bg_gradient_text"
              message="Spotlight"
            />
            <p class="xl:text-7xl lg:text-7xl text-5xl text-black">Our</p>
            <gradient-text
              bg_gradient_class="bg_gradient_text"
              message="Activity"
            />
            <p class="text-black font-thin text-md pt-5">
              find out what we've been up to lately, there are plenty of other
              activities waiting for you!
            </p>
            <button
              class="rounded-full border-2 border-black py-2 px-5 mt-5 main-shadowbutton"
            >
              Explore All Activity
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="member bg-color-custom-10 relative z-20 pb-20">
      <div class="xl:px-20 px-6 lg:px-20">
        <gradient-text bg_gradient_class="bg_gradient_text" message="Members" />
      </div>
      <div
        class="flex flex-wrap justify-center gap-10 xl:px-20 px-6 lg:px-20 mt-8"
      >
        <div v-for="(person, index) in people" :key="index" class="">
          <div
            class="card-name main-shadowcardname border-2 border-black rounded-lg p-2 flex xl:w-60 lg:w-60 md:w-60 w-60 items-center justify-start"
            @click="openModal(person)"
          >
            <div>{{ index + 1 }}.</div>
            <img
              src="~/assets/img/img.jpg"
              class="w-10 rounded-full mx-1"
              alt="Foto"
            />
            <div class="flex flex-col justify-between">
              <div class="font-semibold">{{ person.name }}</div>
              <div class="text-sm">{{ person.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-color-custom-11 relative xl:px-20 px-6 lg:px-20 py-20 about">
      <svg
        class="absolute z-1 right-14"
        width="450"
        height="450"
        viewBox="0 0 510 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="255"
          cy="255"
          r="227.5"
          fill="#010506"
          stroke="#0D0D0D"
          stroke-width="55"
        />
      </svg>
      <svg
        class="absolute z-1 left-96 bottom-8"
        width="280"
        height="280"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="150"
          cy="150"
          r="127.5"
          stroke="#0D0D0D"
          stroke-width="45"
        />
      </svg>

      <div class="yellowGradient" style="top: -300px;
    right: 50%;"></div>
      <div class="blueAboutGradient" style=" bottom: -150px;
    left: -293px;"></div>
      <div class="redAboutGradient" style=" bottom: -150px;
    right: -293px;"></div>
      <gradient-text bg_gradient_class="bg_gradient_text2" message="About" />
      <div class="grid grid-cols-12 mt-8 xl:gap-8 lg:gap-8 gap-4">
        <div class="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
          <div class="grid grid-cols-12">
            <div class="col-span-6 z-20">
              <img src="~/assets/img/img.jpg" alt="" srcset="" class="p-1" />
              <img
                src="~/assets/img/img.jpg"
                class="w-full h-36 p-1 object-cover"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-span-6 z-20">
              <img
                src="~/assets/img/img.jpg"
                class="w-full h-36 p-1 object-cover"
                alt=""
                srcset=""
              />
              <img src="~/assets/img/img.jpg" alt="" srcset="" class="p-1" />
            </div>
          </div>
        </div>
        <div
          class="xl:col-span-4 z-20 lg:col-span-4 md:col-span-4 md:col-start-8 xl:col-start-8 lg:col-start-8 col-span-12"
        >
          <div class="w-">
            <p class="text-white font-thin text-md pt-5">
              <span
                :class="[
                  'xl:text-7xl lg:text-7xl text-5xl',
                  'bg_gradient_text3',
                  'font-semibold',
                ]"
                >Welcome</span
              >
              to RPL A! We are a group of Software Engineering students who love
              technology and teamwork. In our class, we learn how to code, solve
              problems, and work on exciting projects
              <span
                :class="[
                  'xl:text-7xl lg:text-7xl text-5xl',
                  'bg_gradient_text3',
                  'font-semibold',
                ]"
                >together</span
              >
            </p>
            <p class="text-white font-thin text-md pt-5">
              Each of us brings something different to the group, making RPL A a
              fun and creative place to learn. We’re not just classmates – we’re
              a team, helping each other grow and get ready for the future in
              <span
                :class="[
                  'xl:text-7xl lg:text-7xl text-5xl',
                  'bg_gradient_text3',
                  'font-semibold',
                ]"
                >tech</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
   <footerRepels />
  </div>
</template> 
<script setup lang="ts"> 
import footerRepels from "~/components/footerRepels.vue";
import gradientText from "~/components/gradientText.vue";
interface Person {
  name: string;
  description: string;
  image: string;
} 
useHead({
  title: "REPELS A 17 - Landing Page",
  meta: [
    { name: "description", content: "Halaman utama REPELS A 17" },
    { property: "og:title", content: "REPELS A 17 - Landing Page" },
    { property: "og:description", content: "Selamat datang di halaman utama REPELS A 17!" },
    { property: "og:image", content: "https://repels-a.vercel.app/_nuxt/img/bgawal.f2374ae.jpg" },
    { property: "og:url", content: "https://repels-a.vercel.app/" },
    { property: "twitter:title", content: "REPELS A 17 - Landing Page" },
    { property: "twitter:description", content: "Selamat datang di halaman utama REPELS A 17!" },
    { property: "twitter:image", content: "https://repels-a.vercel.app/_nuxt/img/bgawal.f2374ae.jpg" },
    { property: "twitter:url", content: "https://repels-a.vercel.app/" },
  ],
  link: [{ rel: "canonical", href: "https://repels-a.vercel.app/" }],
}); 
const tes = ref("is");
const isOpen = ref(false);
const dataCollegeStudent = ref<Person | null>(null);
const people = ref<Person[]>([
  {
    name: "Laela",
    description: "Repels A",
    image: "~/assets/img/card1.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Satria",
    description: "Repels A",
    image: "~/assets/img/card2.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Faiz",
    description: "Repels A",
    image: "~/assets/img/card3.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Naufal",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Ilham",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Daffa",
    description: "Repels A",
    image: "~/assets/img/card1.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Elsa",
    description: "Repels A",
    image: "~/assets/img/card2.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Advent",
    description: "Repels A",
    image: "~/assets/img/card3.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Fadil",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Yuni",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Sunan",
    description: "Repels A",
    image: "~/assets/img/card1.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Ai",
    description: "Repels A",
    image: "~/assets/img/card2.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Irfan",
    description: "Repels A",
    image: "~/assets/img/card3.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Tsabita",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Afif",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Hilmi",
    description: "Repels A",
    image: "~/assets/img/card1.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Fadhlu",
    description: "Repels A",
    image: "~/assets/img/card2.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Adam",
    description: "Repels A",
    image: "~/assets/img/card3.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Rayen",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Iza",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Sakhi",
    description: "Repels A",
    image: "~/assets/img/card1.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Nabil",
    description: "Repels A",
    image: "~/assets/img/card2.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Galih",
    description: "Repels A",
    image: "~/assets/img/card3.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Iqbal",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Dinda",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Maya",
    description: "Repels A",
    image: "~/assets/img/card1.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Faisal",
    description: "Repels A",
    image: "~/assets/img/card2.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Fariz",
    description: "Repels A",
    image: "~/assets/img/card3.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Nisa",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
  {
    name: "Ajeng",
    description: "Repels A",
    image: "~/assets/img/card4.png",
    ig:'',
    tt:'',
    ld:'',
  },
]);

// Methods
function tess(): void {
  tes.value = "hayy";
  console.log(tes.value);
}

function openModal(person: Person): void {
  isOpen.value = true;
  dataCollegeStudent.value = { ...person };
  const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
}
</script> 

<style>
</style>