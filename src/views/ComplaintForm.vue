<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const state = reactive({
    nama: '',
    email: '',
    no_wa: '',
    jenis_pengaduan: '',
    deskripsi: ''
})

async function onSubmit() {
    console.log("here");
    console.log(state.nama);
    try {
        const formData = new FormData();
        formData.append("nama", "blabla");
        formData.append("email", "blabla");
        formData.append("no_wa", "blabla");
        formData.append("jenis_pengaduan", "blabla");
        formData.append("deskripsi", "blabla");
        const response = await axios.post('http://127.0.0.1:8000/api/tickets', formData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}
</script>

<template>
    <div class="pt-28 pb-20 px-16 flex justify-center">
        <div class="border border-slate-200 py-2 px-2 w-1/2">
            <form action="#" @submit.prevent="onSubmit">
                <h1 class="text-center">Buat Pengaduan</h1>
                
                <div class="pt-10">
                    <label for="nama" class="block text-gray-700 text-sm font-bold mb-2">Nama :</label>
                    <input v-model="state.nama" id="nama" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>

                <div class="pt-10">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email :</label>
                    <input v-model="state.email" id="email" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>

                <div class="pt-10">
                    <label for="no_wa" class="block text-gray-700 text-sm font-bold mb-2">No WhatsApp :</label>
                    <input v-model="state.no_wa" id="no_wa" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>

                <div class="pt-10">
                    <label for="jenis_pengaduan" class="block text-gray-700 text-sm font-bold mb-2">Jenis Pengaduan :</label>
                    <input v-model="state.jenis_pengaduan" id="jenis_pengaduan" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>

                <div class="pt-10">
                    <label for="deskripsi" class="block text-gray-700 text-sm font-bold mb-2">Deskripsi :</label>
                    <textarea v-model="state.deskripsi" id="deskripsi" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                
                <div class="pt-6 flex justify-end">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>