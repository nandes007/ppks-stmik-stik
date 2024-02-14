<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'

const state = reactive({
  errorMessage: '',
  successMessage: '',
  isLoading: false
})

const tickets = ref([]);

async function setup() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/tickets', {
          params: {
            status: 'Resolved'
          },
          headers: {
              'Content-Type': 'application/json'
          }
        });

        const data = response.data;
        tickets.value = data.tickets.data;
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
        Resolved Ticket
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
          <thead>
            <tr>
              <th class="border-2 border-slate-400 py-3">
                #
              </th>
              <th class="border-2 border-slate-400">
                No Ticket
              </th>
              <th class="border-2 border-slate-400 w-1/5">
                Nama
              </th>
              <th class="border-2 border-slate-400 w-1/5">
                Jenis Pengaduan
              </th>
              <th class="border-2 border-slate-400 w-1/5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="tickets <= 0">
              <td
                colspan="5"
                class="border-2 border-slate-400 py-1.5 text-sm font-thin italic text-center"
              >
                Belum ada pengaduan
              </td>
            </tr>
            <tr v-if="state.isLoading">
              <td
                colspan="3"
                class="border-2 border-slate-400 py-1.5 text-center text-sm font-thin italic"
              >
                <p>loading . . .</p>
              </td>
            </tr>
            <tr
              v-for="(ticket, index) in tickets"
              v-else
              :key="ticket.id"
              :index="index"
            >
              <td class="border-2 border-slate-400 py-1.5 text-center">
                {{ ++index }}
              </td>
              <td class="border-2 border-slate-400 pl-2">
                {{ ticket.no_ticket }}
              </td>
              <td class="border-2 border-slate-400 pl-2">
                {{ ticket.nama }}
              </td>
              <td class="border-2 border-slate-400 pl-2">
                {{ ticket.category_formatted }}
              </td>
              <td class="border-2 border-slate-400">
                <div class="flex justify-around px-2">
                  <router-link
                    :to="`/admin/show-ticket/${ticket.id}`"
                    class="flex items-center bg-green-500 px-2 py-1 text-sm rounded text-white hover:opacity-90"
                  >
                    Show
                    <span class="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                      </svg>
                    </span>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <ul class="pagination mt-2 flex justify-end">
        <li
          v-if="!pagination.stateObj.isFirstPage"
          class="page-item"
        >
          <a
            href="#"
            class="page-link border px-2 py-1 border-slate-500"
            @click="openPrevPage()"
          >Previous</a>
        </li>
        <li
          v-for="link in pagination.paginationLinks"
          :key="link"
          class="page-item"
          :class="{ 'active': link == pagination.currentPage }"
        >
          <a
            v-if="link != 0"
            href="#"
            class="page-link border px-2 py-1 border-slate-500"
            :disabled="link == pagination.currentPage"
            @click.prevent="openPage(link)"
          >{{ link }}</a>
          <a
            v-if="link == 0"
            href="javascript:;"
            class="page-link"
            disabled="disabled"
          >...</a>
        </li>
        <li
          v-if="!pagination.stateObj.isLastPage"
          class="page-link"
        >
          <a
            href="#"
            class="page-link border px-2 py-1 border-slate-500"
            @click.prevent="openNextPage()"
          >Next</a>
        </li>
      </ul> -->
    </div>
  </div>
  </template>
  