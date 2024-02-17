<script setup>
import axios from 'axios'
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { reactive, ref, onMounted, computed } from 'vue'

const validationError = ref(null);
const user = ref(null);
const ticket = ref(null);
const state = reactive({
    errorMessage: '',
    successMessage: ''
})


async function getUser() {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE__APP_URL}/api/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = response.data;
        user.value = data.user;
        ticket.value = data.user.ticket;
        // console.log(user.value.ticket);
    } catch (error) {
        console.log(error);
    }
}

const isHasTicket = computed(() => {
  if (user.value != null && user.value?.ticket != null) return true;
  else return false;
})

onMounted(() => {
    getUser();
})
</script>

<template>
    <TopBar />
    <NavBar />

    <div class="pt-20 lg:pb-60 xl:pb-0 px-16">
        <div class="w-full pt-12">
            <h1 class="text-3xl font-bold">Status aduan anda : # {{ ticket?.no_ticket }}</h1>
        </div>
        <div class="pb-32 pt-6 flex">
            <div class="w-1/4" v-if="['Pending', 'Consultation', 'Service', 'Resolved'].includes(ticket?.status)">
                <div class="flex items-center h-10">
                    <div class="h-0.5 w-full bg-slate-300"></div>
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                </div>
                <div>
                    <h3 class="font-bold">Menghubungi</h3>
                    <div class="text-xs m-0 text-slate-400 opacity-90">Langkah Pertama</div>
                    <div class="pt-2 text-sm text-slate-500">
                        Mahasiswa menghubungi tim Satgas STMIK STI&k Jakarta via layanan yang sudah disediakan.
                    </div>
                </div>
            </div>
            <div class="w-1/4" v-if="['Consultation', 'Service', 'Resolved'].includes(ticket?.status)">
                <div class="flex items-center h-10">
                    <div class="h-0.5 w-full bg-slate-300"></div>
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                </div>
                <div>
                    <h3 class="font-bold">Konsultasi</h3>
                    <div class="text-xs m-0 text-slate-400 opacity-90">Langkah Kedua</div>
                    <div class="pt-2 text-sm text-slate-500">
                        Melakukan konsultasi dengan tim Satgas untuk menggali kebutuhkan dan keinginan korban.
                    </div>
                </div>
            </div>
            <div class="w-1/4" v-if="['Service', 'Resolved'].includes(ticket?.status)">
                <div class="flex items-center h-10">
                    <div class="h-0.5 w-full bg-slate-300"></div>
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                </div>
                <div>
                    <h3 class="font-bold">Pemberian Layanan</h3>
                    <div class="text-xs m-0 text-slate-400 opacity-90">Langkah Ketiga</div>
                    <div class="pt-2 text-sm text-slate-500">
                        Menyediakan layanan konseling psikologi dan rumah aman berdasarkan kebutuhan korban.
                    </div>
                </div>
            </div>
            <div class="w-1/4" v-if="ticket?.status == 'Resolved'">
                <div class="flex items-center h-10">
                    <div class="h-0.5 w-full bg-slate-300"></div>
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                </div>
                <div>
                    <h3 class="font-bold">Penanganan</h3>
                    <div class="text-xs m-0 text-slate-400 opacity-90">Langkah Terakhir</div>
                    <div class="pt-2 text-sm text-slate-500">
                        Satgas mengirim rekomendasi pada Rektor tentang tindakan yang akan dilakukan mengenai kasus tersebut.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>