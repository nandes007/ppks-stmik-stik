<script setup>
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <TopBar />
    <NavBar />

    <div class="pt-20 lg:pb-80 xl:pb-0 px-16">
        <div class="flex justify-center pt-16 pb-48">
            <div class="w-full">
                <h1 class="text-4xl font-bold text-center">Satuan Tugas</h1>
                <h5 class="text-center pt-4 text-slate-500 text-xl">Kami Siap Membantu Anda</h5>

                <div class="pt-14 flex justify-center ">
                    <table class="table-fixed lg:w-full xl:w-1/2">
                        <tr>
                            <td class="border-b-2 border-slate-300 pr-16 pl-4 py-4">Ketua SATGAS</td>
                            <td class="border-b-2 border-slate-300 pl-8">: Melani Dewi Lusita. S.Kom., MMSI</td>
                        </tr>
                        <tr>
                            <td class="border-b-2 border-slate-300 pr-16 pl-4 py-4">Sekretaris</td>
                            <td class="border-b-2 border-slate-300 pl-8">: Laras Dewi Adisti. SP., MMSI</td>
                        </tr>
                        <tr>
                            <td class="border-b-2 border-slate-300 pr-16 pl-4 py-4">Anggota</td>
                            <td class="border-b-2 border-slate-300 pl-8">: Dr. Edi Pranoto. SE., MM., M.Ilkom</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>