<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { useRoute } from 'vue-router';

const isScrollingToTerms = ref(false);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default {
  setup() {
    const route = useRoute()
    const currentRoute = computed(() => route.fullPath)
    const activeClass = computed(() => {
      return 'text-red-600'
    });
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
      currentRoute,
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
        'md:top-9': !this.isScrolled,
        'bg-white': this.isScrolled, // Add additional classes based on your styling needs
        'shadow-md': this.isScrolled,
        // Add other classes as needed for your navbar styling
      };
    },
  },
};
</script>

<template>
    <div :class="navClasses" class="navbar flex lg:justify-between items-center p-2 lg:px-16 lg:py-4 border-b-2 bg-white fixed w-full text-sm">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10">
            <img src="../assets/images/logo.png">
          </div>
          <h1 class="font-semibold">Satgas PPKS STMIK Jakarta STI&K</h1>
        </div>
        <div class="hidden lg:block">
            <ul class="flex space-x-6">
                <li>
                  <router-link to="/" :class="currentRoute === '/' ? 'border-b pb-2 border-amber-400' : ''">Home</router-link>
                </li>
                <li>
                  <router-link to="/#termsAndCondition" :class="currentRoute === '/#termsAndCondition' ? 'border-b pb-2 border-amber-400' : ''">Perundangan & Kekerasan Seksual</router-link>
                </li>
                <li>
                  <router-link to="/reporting" :class="currentRoute === '/reporting' ? 'border-b pb-2 border-amber-400' : ''">Alur Pelaporan</router-link>
                </li>
                <!-- <li>FAQ</li> -->
                <li>
                  <router-link to="/about-us" :class="currentRoute === '/about-us' ? 'border-b pb-2 border-amber-400' : ''">Tentang Kami</router-link>
                </li>
            </ul>
        </div>
      </div>
</template>

<style>
.on-top {
  top: 0;
}
</style>