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
    <div class="bg-white border-r-2 border-amber-300 fixed top-0 bottom-0 left-0 z-10 w-4/5 block lg:hidden">
        <div class="flex items-center space-x-2 border-b-2 pl-2 pb-2 pt-2">
            <div class="w-10 h-10">
                <img src="../../assets/images/logo.png">
            </div>
            <h1 class="font-semibold text-sm">Satgas PPKS STMIK Jakarta STI&K</h1>
        </div>
        <div class="">
            <ul class="mobile-nav">
                <li class="flex items-center" :class="currentRoute === '/' ? 'bg-red-400' : ''">
                  <router-link to="/" class="w-full h-full">Home</router-link>
                </li>
                <li class="flex items-center" :class="currentRoute === '/#termsAndCondition' ? 'bg-red-400' : ''">
                  <router-link to="/#termsAndCondition" class="w-full h-full">Perundangan & Kekerasan Seksual</router-link>
                </li>
                <li class="flex items-center" :class="currentRoute === '/reporting' ? 'bg-red-400' : ''">
                  <router-link to="/reporting" class="w-full h-full">Alur Pelaporan</router-link>
                </li>
                <!-- <li>FAQ</li> -->
                <li class="flex items-center" :class="currentRoute === '/about-us' ? 'bg-red-400' : ''">
                  <router-link to="/about-us" class="w-full h-full">Tentang Kami</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.mobile-nav li {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
}
</style>