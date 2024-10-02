!<template>
  <div>
  <div :class="isActive ? 'menu menuactivembl pt-0' : 'menu pt-0'">
    <div class="text-end pr-6 pt-6 ">
      <button id="menu" @click="isActive=!isActive"
    class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
    type="button">
    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="#ffffff" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </span>
  </button>
    </div>
    <ul class="mt-6">
    <li class="nav-itemmb "><a class="nxlink text-white text-decoration-none" href="#home"  @click="isActive=!isActive">Home</a></li>
      <li class="nav-itemmb "><a class="nxlink text-white text-decoration-none" @click="isActive=!isActive" href="#about">About</a></li>
      <li class="nav-itemmb "><a class="nxlink text-white text-decoration-none" @click="isActive=!isActive" href="#skills">Skill</a></li>
      <li class="nav-itemmb "><a class="nxlink text-white text-decoration-none" @click="isActive=!isActive" href="#portofolio">Portofolio</a></li>

  </ul>
</div>
  <div class="w-full    bg-transparent bg-opacity-90 fixed  top-0 shadow lg:px-20 lg:py-3 z-[9999]">
    <nav class=" ">
  <div class="container flex flex-wrap items-center justify-between mx-auto ">
    <div class=" flex items-center justify-start">

        <img src="~/assets/img/logo.png" class="w-10 object-cover" alt="" srcset="">
        <a href="#"
        class="mr-4 block cursor-pointer  text-color-custom-10 py-1.5 font-semibold">
        RePels A
    </a>
</div>
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" class="flex items-center text-color-custom-10">Spotlight</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" class="flex items-center text-color-custom-10">Member</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" class="flex items-center text-color-custom-10">About</a>
        </li> 
      </ul>
    </div>
    <button id="menu" @click="isActive=!isActive"
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="#ffffff" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
  
    
</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isActive:false,
    }
  },
    methods: {
      aktif(){
       var d= document.getElementById("menu")
       d.classList.add('menuactivembl')
      }
    },
}
</script>

<style>
.menu{
  display: none;
}

@media only screen and (max-width: 947px){
  .menu{
    display: block;
    position: fixed;
      height: 100vh;
      width: 100%;
      z-index: 999;
      top: -1800px;
      left: 0;
      background: #111111da;
      text-align: center;
      padding-top: 80px;
      transition: 0.3s ease-in;
    }
    .menuactivembl{
      display: block;
      top:0;
      transition: 0.3s ease-in;
  }
  .bardeks{
    display: none;
  }
  .barmbl{
    display:block;
    transition: 0.3s ease-in;

  }
  .barmbl:hover{

    box-shadow:  0px 0px 24px 4px   #18c5ff;
}
}
</style>