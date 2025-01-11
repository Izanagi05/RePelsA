import footerRepels from "~/components/footerRepels.vue";
import gradientText from "~/components/gradientText.vue";
export default {
  components: { gradientText, footerRepels },
  data() {
    return {
      tes: "is",
      isOpen: true,
      dataCollegeStudent: null,
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
  methods: {
    openModal(person) {
      this.isOpen = true;
      this.dataCollegeStudent = Object.assign({}, person);
      const modal = document.getElementById("my_modal_1");
      if (modal) {
        modal.showModal();
      }
    },
  },
};