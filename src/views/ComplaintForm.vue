<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

const state = reactive({
    nama: '',
    email: '',
    no_wa: '',
    jenis_pengaduan: '',
    deskripsi: '',
    errorMessage: '',
    successMessage: ''
})

const categories = ref([
    {
        value: "A",
        label: "Perundungan Online / Cyberbullying"
    },
    {
        value: "B",
        label: "Perundungan Fisik/ Physical Bullying"
    },
    {
        value: "C",
        label: "Perundungan Verbal/ Verbal Bullying"
    },
    {
        value: "D",
        label: "Kekerasan Seksual/ Sexual Violence"
    },
    {
        value: "E",
        label: "Perundungan Sosial/ Social Bullyings"
    }
])

const attachments = ref([]);
const validationError = ref(null);

function handleFileChange(event) {
    const files = event.target.files;
    for (const file of files) {
        attachments.value.push(file);
    }
}

async function onSubmit() {
    try {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("nama", state.nama);
        formData.append("email", state.email);
        formData.append("no_wa", state.no_wa);
        formData.append("jenis_pengaduan", state.jenis_pengaduan);
        formData.append("deskripsi", state.deskripsi);
        for (const attachment of attachments.value) {
            formData.append("attachments[]", attachment);
        }
        const response = await axios.post('http://127.0.0.1:8000/api/tickets', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });

        window.scrollTo(0, 0);
        state.successMessage = response.data.message;
        state.nama = '';
        state.email = '';
        state.no_wa = '';
        state.jenis_pengaduan = '';
        state.deskripsi = '';
        attachments.value = [];
        setTimeout(() => {
            state.successMessage = '';
        }, 2000);
    } catch (error) {
        if (error.response.status == 422) {
            validationError.value = error.response.data.errors;
        } else {
            errorMessage = 'Something went wrong!';
        }
        setTimeout(() => {
            validationError.value = null;
            errorMessage = '';
        }, 2000);
    }

}

async function getUser() {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getUser();
})
</script>

<template>
    <TopBar />
    <NavBar />
    <div class="pt-28 lg:pb-60 xl:pb-20 px-16 flex flex-col items-center justify-center">
        <div v-if="state.errorMessage != ''" class="w-1/2 pb-6">
            <div class="w-full bg-red-600 text-white py-1 flex justify-center items-center space-x-4 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd" d="M7.5 1.709a.75.75 0 0 1 1 0 8.963 8.963 0 0 0 4.84 2.217.75.75 0 0 1 .654.72 10.499 10.499 0 0 1-5.647 9.672.75.75 0 0 1-.694-.001 10.499 10.499 0 0 1-5.647-9.672.75.75 0 0 1 .654-.719A8.963 8.963 0 0 0 7.5 1.71ZM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
                <span>{{ state.errorMessage }}</span>
            </div>
        </div>

        <div v-if="state.successMessage != ''" class="w-1/2 pb-6">
            <div class="w-full bg-green-500 text-white py-1 flex justify-center items-center space-x-4 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>

                <span>{{ state.successMessage }}</span>
            </div>
        </div>

        <div class="border border-slate-200 py-2 px-2 lg:w-full xl:w-1/2">
            <form action="#" @submit.prevent="onSubmit">
                <h1 class="text-center">Buat Pengaduan</h1>
                
                <div class="pt-4">
                    <label for="nama" class="block text-gray-700 text-sm font-bold mb-2">Nama : </label>
                    <span class="text-red-500 py-0 my-0 text-xs">{{ validationError?.nama[0] }}</span>
                    <input v-model="state.nama" id="nama" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>

                <div class="pt-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email :</label>
                    <span class="text-red-500 py-0 my-0 text-xs">{{ validationError?.email[0] }}</span>
                    <input v-model="state.email" id="email" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>

                <div class="pt-4">
                    <label for="no_wa" class="block text-gray-700 text-sm font-bold mb-2">No WhatsApp :</label>
                    <span class="text-red-500 py-0 my-0 text-xs">{{ validationError?.no_wa[0] }}</span>
                    <input v-model="state.no_wa" id="no_wa" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>

                <div class="pt-4">
                    <label for="jenis_pengaduan" class="block text-gray-700 text-sm font-bold mb-2">Jenis Pengaduan :</label>
                    <span class="text-red-500 py-0 my-0 text-xs">{{ validationError?.jenis_pengaduan[0] }}</span>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="jenis_pengaduan" id="jenis_pengaduan" v-model="state.jenis_pengaduan">
                        <option 
                            v-for="category of categories" 
                            :key="category.value" 
                            :value="category.value"
                        >{{ category.label }}</option>
                    </select>
                </div>

                <div class="pt-4">
                    <label for="deskripsi" class="block text-gray-700 text-sm font-bold mb-2">Deskripsi :</label>
                    <span class="text-red-500 py-0 my-0 text-xs">{{ validationError?.deskripsi[0] }}</span>
                    <textarea v-model="state.deskripsi" id="deskripsi" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>

                <div class="pt-4">
                    <label for="attachment" class="block text-gray-700 text-sm font-bold mb-2">Attachment :</label>
                    <input id="attachment" type="file" multiple accept=".jpg,.png" @change="handleFileChange" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                
                <div class="pt-6 flex justify-end">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>

    <Footer />
</template>