<script setup>
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <TopBar />
    <NavBar />

    <div class="pt-20 lg:pb-60 xl:pb-0 px-16">
        <div class="flex pt-16 pb-32">
            <div class="w-1/2">
                <h1 class="text-3xl font-bold">Buat Aduan Kamu Sekarang!</h1>
                <div class="pt-4">
                    Anda dapat menceritakan perundungan atau kekerasan seksual yang Anda alami/saksikan. Kerahasiaan dijamin. Dokumentasi peristiwa/cerita adalah langkah awal yang penting.
                </div>
            </div>
            <div class="w-1/2 space-y-6 pl-20">
                <div>
                    <button class="bg-green-500 py-2 px-2 space-x-6 rounded text-white lg:w-full xl:w-1/2 flex items-center hover:opacity-90">
                        <div class="px-2 py-1.5 bg-white rounded-md">
                            <img src="../assets/icon/whats-app-image.svg" width="16" height="16">
                        </div>
                        <span class="text-center">
                            Hubungi Kami via Whatsapp
                        </span>
                    </button>
                </div>
                <div>
                    <button class="bg-red-500 py-2 px-2 space-x-6 rounded text-white lg:w-full xl:w-1/2 flex items-center hover:opacity-90">
                        <div class="px-2 py-1.5 bg-white rounded-md">
                            <img src="../assets/icon/gmail-image.svg" width="20" height="20">
                        </div>
                        <span class="text-center">
                            Hubungi Kami via Email
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <div class="pb-32 pt-6 flex">
            <div class="w-1/4">
                <div class="flex items-center h-10">
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                    <div class="h-0.5 w-full bg-slate-300"></div>
                </div>
                <div>
                    <h3 class="font-bold">Menghubungi</h3>
                    <div class="text-xs m-0 text-slate-400 opacity-90">Langkah Pertama</div>
                    <div class="pt-2 text-sm text-slate-500">
                        Mahasiswa menghubungi tim Satgas STMIK STI&k Jakarta via layanan yang sudah disediakan.
                    </div>
                </div>
            </div>
            <div class="w-1/4">
                <div class="flex items-center h-10">
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                    <div class="h-0.5 w-full bg-slate-300"></div>
                </div>
                <div>
                    <h3 class="font-bold">Konsultasi</h3>
                    <div class="text-xs m-0 text-slate-400 opacity-90">Langkah Kedua</div>
                    <div class="pt-2 text-sm text-slate-500">
                        Melakukan konsultasi dengan tim Satgas untuk menggali kebutuhkan dan keinginan korban.
                    </div>
                </div>
            </div>
            <div class="w-1/4">
                <div class="flex items-center h-10">
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                    <div class="h-0.5 w-full bg-slate-300"></div>
                </div>
                <div>
                    <h3 class="font-bold">Pemberian Layanan</h3>
                    <div class="text-xs m-0 text-slate-400 opacity-90">Langkah Ketiga</div>
                    <div class="pt-2 text-sm text-slate-500">
                        Menyediakan layanan konseling psikologi dan rumah aman berdasarkan kebutuhan korban.
                    </div>
                </div>
            </div>
            <div class="w-1/4">
                <div class="flex items-center h-10">
                    <div class="bg-[#ffc107] p-1 rounded-full">
                        <img src="../assets/icon/cloud-storage.svg" width="30">
                    </div>
                    <div class="h-0.5 w-full bg-slate-300"></div>
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