<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'

const state = reactive({
  errorMessage: '',
  successMessage: '',
  isLoading: false
})

const param = defineProps({
  id: {
    type: String,
    required: true
  }
})

const ticket = ref(null);

async function setup() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://127.0.0.1:8000/api/tickets/${param.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = response.data;
      ticket.value = data.ticket;
      console.log(data);
    } catch (error) {
      state.errorMessage = 'Something went wrong!';
      setTimeout(() => {
          state.errorMessage = '';
      }, 2000);
    }
}

async function update(status) {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("status", status);
      const response = await axios.put(`http://127.0.0.1:8000/api/tickets/${param.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = response.data;
      ticket.value = data.ticket;
      console.log(data);
    } catch (error) {
      state.errorMessage = 'Something went wrong!';
      setTimeout(() => {
          state.errorMessage = '';
      }, 2000);
    }
}

onMounted(() => {
  setup();
})
</script>

<template>
  <div>
      <h3 class="text-3xl font-medium text-gray-700">
        Ticket : # {{ ticket?.no_ticket ?? '' }}
      </h3>
  
    <div class="mt-5">
      <!-- <div class="flex justify-end p-4">
        <router-link
          to="/admin/master/products/create"
          class="bg-green-500 px-2 py-2 rounded text-slate-100 hover:opacity-90"
        >
          Create new product
        </router-link>
      </div> -->
      <!-- <MessageComponent :success-message="productStateObj.successMessage" /> -->
      <div class="flex">
        <table class="table-auto border-collapse border border-slate-400 w-full">
            <tr>
                <td class="border-2 border-slate-400 pl-2">Nama</td>
                <td class="border-2 border-slate-400 pl-2">:</td>
                <td class="border-2 border-slate-400 pl-2">{{ ticket?.nama ?? '' }}</td>
            </tr>
            <tr>
                <td class="border-2 border-slate-400 pl-2">Status</td>
                <td class="border-2 border-slate-400 pl-2">:</td>
                <td class="border-2 border-slate-400 pl-2">{{ ticket?.status ?? '' }}</td>
            </tr>
            <tr>
                <td class="border-2 border-slate-400 pl-2">Email</td>
                <td class="border-2 border-slate-400 pl-2">:</td>
                <td class="border-2 border-slate-400 pl-2">{{ ticket?.email ?? '' }}</td>
            </tr>
            <tr>
                <td class="border-2 border-slate-400 pl-2">No WhatsApp</td>
                <td class="border-2 border-slate-400 pl-2">:</td>
                <td class="border-2 border-slate-400 pl-2">{{ ticket?.no_wa ?? '' }}</td>
            </tr>
            <tr>
                <td class="border-2 border-slate-400 pl-2">Jenis Pengaduan</td>
                <td class="border-2 border-slate-400 pl-2">:</td>
                <td class="border-2 border-slate-400 pl-2">{{ ticket?.jenis_pengaduan ?? '' }}</td>
            </tr>
            <tr>
                <td class="border-2 border-slate-400 pl-2">Deskripsi</td>
                <td class="border-2 border-slate-400 pl-2">:</td>
                <td class="border-2 border-slate-400 pl-2">{{ ticket?.deskripsi ?? '' }}</td>
            </tr>
            <tr>
                <td class="border-2 border-slate-400 pl-2">Attachment</td>
                <td class="border-2 border-slate-400 pl-2">:</td>
                <td class="border-2 border-slate-400 pl-2">{{ ticket?.deskripsi ?? '' }}</td>
            </tr>
        </table>
    </div>

    <div class="flex justify-end py-6">
        <div v-if="ticket?.status == 'Pending'">
            <button @click="update('Consultation')" class="flex items-center bg-green-500 px-2 py-1 text-sm rounded text-white hover:opacity-90">Konsultasi</button>
        </div>
        <div v-if="ticket?.status == 'Consultation'">
            <button @click="update('Service')" class="flex items-center bg-green-500 px-2 py-1 text-sm rounded text-white hover:opacity-90">Pemberi Layanan</button>
        </div>
        <div v-if="ticket?.status == 'Service'">
            <button @click="update('Resolved')" class="flex items-center bg-green-500 px-2 py-1 text-sm rounded text-white hover:opacity-90">Penanganan</button>
        </div>
    </div>
    
    </div>
  </div>
</template>
  