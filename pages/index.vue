<template>
  <div class="">
    <Navbar />
    <div class="bg-color-custom-11 xl:px-20 px-6  lg:px-20 py-20 home" style="border-bottom-right-radius:200px ">
      <div class="yellowGradient"></div>
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
      <div class="grid grid-cols-12">
        <div class="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:order-1 lg:order-1 md:order-1 order-2 z-10 h-full flex justify-start items-end">
          <div class="w-4/5">
            <gradient-text
              bg_gradient_class="bg_gradient_text"
              message="Faces"
            />
            <p class="xl:text-7xl lg:text-7xl text-5xl text-color-custom-10">Behind the</p>
            <gradient-text
              bg_gradient_class="bg_gradient_text"
              message="Future"
            />
            <p class="lg:mt-8 xl:mt-8 mt-4 text-md text-color-custom-10">
              Explore our world of coding and collaboration. Meet future software engineers and the memories we're creating.
            </p>
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
          </div>
        </div>
        <div class="xl:col-span-6 lg:col-span-6 lg:mb-0 xl:mb-0 mb-6 md:col-span-6 col-span-12 xl:order-2 lg:order-2 md:order-2 order-1  xl:p-6 lg:p-6">
          <div class="grid grid-cols-12">
            <div class="col-span-8 xl:pt-2 flex justify-center align-center">
              <div class="z-30">
                <div class="flex justify-between mb-8 ">
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
    <div class="xl:px-20 px-6  lg:px-20 Activity pt-20 z-10">
      <div class="grid grid-cols-12">
        <div class=" xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-12">
          
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6 ">
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
        <div class="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12 lg:mt-0 xl:mt-0 md:mt-0 mt-6  flex justify-center">
          <div class="max-w-80">
            <gradient-text
              bg_gradient_class="bg_gradient_text"
              message="Spotlight"
            />
            <p class="xl:text-7xl lg:text-7xl text-5xl   text-black">Our</p>
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
    <div class="member py-20">
      <div class="xl:px-20 px-6  lg:px-20">
        <gradient-text bg_gradient_class="bg_gradient_text" message="Members" />
      </div>
      <div class="flex flex-wrap justify-center gap-10 xl:px-20 px-6  lg:px-20 mt-8">
        <div
          v-for="(person, index) in people"
          :key="index"
          class=""
        >
          <div
            class="card-name main-shadowcardname border-2 border-black rounded-lg p-2 flex xl:w-60 lg:w-60 md:w-60 w-60 items-center justify-start"
          >
            <div>{{ index + 1 }}.</div>
            <img
              src="~/assets/img/img.jpg"
              class="w-10 rounded-full mx-1"
              alt="Foto"
            />
            <div class="flex flex-col justify-between ">
              <div class="font-semibold">{{ person.name }}</div>
              <div class="text-sm">{{ person.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-color-custom-11 xl:px-20 px-6  lg:px-20 py-20 about">
      <gradient-text
        bg_gradient_class="bg_gradient_text2"
        message="About"
      />
      <div class="grid grid-cols-12 mt-8 xl:gap-8 lg:gap-8 gap-4">
        <div class="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12  ">
          <div class="grid grid-cols-12  ">
            <div class="col-span-6">
              <img src="~/assets/img/img.jpg" alt="" srcset="" class="p-1" />
              <img
                src="~/assets/img/img.jpg"
                class="w-full h-36 p-1 object-cover"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-span-6">
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
        <div class="xl:col-span-4 lg:col-span-4 md:col-span-4 md:col-start-8 xl:col-start-8 lg:col-start-8 col-span-12">
        <div class=" w-">
          <p class="text-white font-thin text-md pt-5" > 
            <span :class="['xl:text-7xl lg:text-7xl text-5xl', 'bg_gradient_text3', 'font-semibold']">Welcome</span> 
            to RPL A! We are a group of Software Engineering students who love
            technology and teamwork. In our class, we learn how to code, solve
            problems, and work on exciting projects 
            <span :class="['xl:text-7xl lg:text-7xl text-5xl', 'bg_gradient_text3', 'font-semibold']">together</span> 
          </p> 
          <p class="text-white font-thin text-md pt-5">
            Each of us brings something different to the group, making RPL A a fun and creative place to learn. We’re not just classmates – we’re a team, helping each other grow and get ready for the future in 
            <span :class="['xl:text-7xl lg:text-7xl text-5xl', 'bg_gradient_text3', 'font-semibold']">tech</span> 
          </p> 
        </div>
        </div>
      </div>
    </div>
    <div class="footer  bg-color-custom-10 pt-20">
      <div class=" bg-color-custom-11" style="border-top-right-radius:100px;border-top-left-radius:100px; ">
        <div class="xl:py-14 lg:py-14 py-4">
          <div class=" flex justify-center  items-center"> 
            <div class="w-2/5">
              <img src="~/assets/img/logo.png" class="mx-auto w-1/4 " alt="" srcset="">
              <div class="flex justify-between xl:my-6 my-4 lg:my-6">
                <p class="text-white">Spotlight</p>
                <p class="text-white ">Member</p>
                <p class="text-white">About</p>
              </div>
            </div>
          </div>
          <img src="~/assets/img/2.png" class="w-10 mx-auto" alt="" srcset="">
        </div> 
        <div class="copyright bg-[#FFFFFF0A]  p-4">
          <div class="text-center text-color-custom-10">© 2024 RPL A Class. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gradientText from "~/components/gradientText.vue";
export default {
  components: { gradientText },
  data() {
    return {
      tes: "is",
      people: [
        {
          name: "John Doe",
          description: "College Student",
          image: "~/assets/img/card1.png",
        },
        {
          name: "Jane Smith",
          description: "Software Engineer",
          image: "~/assets/img/card2.png",
        },
        {
          name: "Mike Johnson",
          description: "Graphic Designer",
          image: "~/assets/img/card3.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "John Doe",
          description: "College Student",
          image: "~/assets/img/card1.png",
        },
        {
          name: "Jane Smith",
          description: "Software Engineer",
          image: "~/assets/img/card2.png",
        },
        {
          name: "Mike Johnson",
          description: "Graphic Designer",
          image: "~/assets/img/card3.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "John Doe",
          description: "College Student",
          image: "~/assets/img/card1.png",
        },
        {
          name: "Jane Smith",
          description: "Software Engineer",
          image: "~/assets/img/card2.png",
        },
        {
          name: "Mike Johnson",
          description: "Graphic Designer",
          image: "~/assets/img/card3.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "John Doe",
          description: "College Student",
          image: "~/assets/img/card1.png",
        },
        {
          name: "Jane Smith",
          description: "Software Engineer",
          image: "~/assets/img/card2.png",
        },
        {
          name: "Mike Johnson",
          description: "Graphic Designer",
          image: "~/assets/img/card3.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "John Doe",
          description: "College Student",
          image: "~/assets/img/card1.png",
        },
        {
          name: "Jane Smith",
          description: "Software Engineer",
          image: "~/assets/img/card2.png",
        },
        {
          name: "Mike Johnson",
          description: "Graphic Designer",
          image: "~/assets/img/card3.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "John Doe",
          description: "College Student",
          image: "~/assets/img/card1.png",
        },
        {
          name: "Jane Smith",
          description: "Software Engineer",
          image: "~/assets/img/card2.png",
        },
        {
          name: "Mike Johnson",
          description: "Graphic Designer",
          image: "~/assets/img/card3.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
        {
          name: "Emily Davis",
          description: "Marketing Specialist",
          image: "~/assets/img/card4.png",
        },
      ],
    };
  },
  methods: {
    tess() {
      this.tes = "hayy";
      console.log(this.tess);
    },
  },
};
</script>

<style>
</style>