<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const isScrollingToTerms = ref(false);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default {
  setup() {
    const isScrolled = ref(false);

    // Add scroll event listener when component is mounted
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    // Remove scroll event listener when component is unmounted
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    // Scroll event handler
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 9; // Adjust 9 to your desired scroll threshold
    };

    const scrollToTermsAndCondition = () => {
      if (isScrollingToTerms.value) {
        scrollToSection('termsAndCondition');
      }
    };

    onBeforeRouteUpdate((to, from, next) => {
      if (to.hash === '#termsAndCondition') {
        isScrollingToTerms.value = true;
      } else {
        isScrollingToTerms.value = false;
      }
      next();
    });

    scrollToTermsAndCondition();
    
    return {
      isScrolled,
      scrollToTermsAndCondition
    };
  },
  beforeRouteEnter(to, from, next) {
    if (to.hash === '#termsAndCondition') {
      next((vm) => {
        vm.scrollToTermsAndCondition();
      });
    } else {
      next();
    }
  },
  computed: {
    navClasses() {
      return {
        'fixed transition-transform duration-300': true,
        'top-0': this.isScrolled,
        'top-9': !this.isScrolled,
        'bg-white': this.isScrolled, // Add additional classes based on your styling needs
        'shadow-md': this.isScrolled,
        // Add other classes as needed for your navbar styling
      };
    },
  },
};
</script>

<template>
    <div :class="navClasses" class="navbar flex justify-between items-center px-16 py-4 border-b-2 bg-white fixed w-full">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10">
            <img src="../assets/images/logo.png">
          </div>
          <h1 class="font-semibold">Satgas PPKS STMIK STI&K Jakarta</h1>
        </div>
        <div>
            <ul class="flex space-x-6">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/#termsAndCondition">Perundangan & Kekerasan Seksual</router-link>
                </li>
                <li>
                  <router-link to="/reporting">Alur Pelaporan</router-link>
                </li>
                <li>FAQ</li>
                <li>Tentang Kami</li>
            </ul>
        </div>
        <div>
          <h1 class="text-[#ffc107] font-bold font-serif text-lg">GRATIS</h1>
        </div>
      </div>
</template>

<style>
.on-top {
  top: 0;
}
</style>