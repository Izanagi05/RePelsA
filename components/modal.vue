<template>
  <div> 
    <dialog id="my_modal_1" class="modal" v-if="isOpen">
      <div class="modal-box   xl:max-w-[25%] lg:max-w-[25%] md:max-w-[35%] w-8/12   h-auto">
        <div class="">

            <div class="flex justify-end items-center">
                <form method="dialog"> 
          <button class="">
            <svg
              class="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
              />
            </svg>
          </button>
        </form>
    </div>
    <img
          src="~/assets/img/img.jpg"
          class="w-full rounded-xl mx-1"
          alt="Foto"
        />
        <p class="text-2xl font-semibold">{{dataCollegeStudent?.name}}</p>
        <p class="text-sm font-regular text-gray">{{dataCollegeStudent?.description}}</p>
        <div class="flex items-center mt-2 gap-1">
          <img src="~/assets/img/2-1.png" class="w-8 rounded-full" alt="rpl a" srcset="" />
          <img src="~/assets/img/3.png" class="w-8 rounded-full" alt="rpl a" srcset="" />
          <img src="~/assets/img/1.png" class="w-8 rounded-full" alt="rpl a" srcset="" />
        </div>
        
      </div>
    </div>
    </dialog>
  </div>
</template>

<script>
export default {
    props:['dataCollegeStudent', 'isOpen', 'isClose'],
//   mounted() {
//     // Automatically open the modal when component is mounted
//     this.openModal();
//   },
 
};
</script>

<style>
</style>