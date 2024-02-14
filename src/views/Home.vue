<script setup>
import Consultation from '../components/sections/Consultation.vue'
import Description from '../components/sections/Description.vue'
import Ilustration from '../components/sections/Ilustration.vue'
import TermAndCondition from '../components/sections/TermAndCondition.vue'
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <TopBar />
    <NavBar />

    <Consultation />
    <Description />
    <Ilustration />
    <TermAndCondition />

    <Footer />
  </div>
</template>