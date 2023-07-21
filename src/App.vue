<script setup>
import TopBar from './components/TopBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <TopBar />
  <NavBar />
  
  <div>
    <!-- Content -->
    <section class="px-4 pt-16">
      <div class="flex justify-center pt-8">
        <div class="flex bg-slate-200 text-sm space-x-2 p-2 py-2 rounded-full items-center">
          <span class="bg-yellow-500 px-4 py-1.5 flex justify-center items-center font-semibold rounded-full">Baru</span>
          <h5 class="text-slate-500 font-semibold">Layanan Konsultasi dan Pengaduan</h5>
          <span class="text-slate-500 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>

      <div class="pt-8">
        <h1 class="font-bold text-xl text-center">Kami Dengar, Peduli, Tangani</h1>
        <p class="text-center pt-4 text-slate-500">Pencegahan dan Penanganan Perundangan dan Kekerasan Seksual di STMIK STI&K Jakarta</p>

        <div class="pt-6 flex">
          <button class="flex w-full rounded-lg py-3 font-bold justify-center items-center space-x-2 bg-yellow-500">
            <h1>Buat Aduan Sekarang</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section class="mt-16 px-4 py-4 bg-slate-100">
      <h1 class="font-bold">Apa itu Satgas PPKS STMIK STI&K Jakarta?</h1>
      <p class="text-slate-600 pt-4">Mengenal lebih dekat apa dan kenapa Satgas ini dibentuk.</p>
      <p class="pt-8 text-slate-600">Satuan Tugas (Satgas) Pencegahan dan Penanganan Kekerasa Seksual (PPKS) STMIK STI&K Jakarta adalah satuan tugas khusus yang dibentuk oleh pimpinan STMIK STI&K untuk menangani masalah perundungan dan kekerasan seksual di lingkungan kampus. Satgas ini bertugas untuk mewujudkan kondisi kampus yang aman dan nyaman bagi semua sivitas akademika. Satgas PPKS STMIK STI&K Jakarta juga bertindak sejalan dengan mandat dari Kementerian Pendidikan dan Kebudayaan (Kemendikbud) untuk mencegah dan menangani perundungan dan kekerasan seksual di lingkungan perguruan tinggi agar proses pembelajaran dapat berlangsung dengan kondusif dan aman.</p>

      <div class="pt-16">
        <h1 class="font-bold">Apa yang bisa kami bantu?</h1>
        <p class="text-slate-600 pt-4">Beberapa bantuan yang coba kami berikan untuk melakukan pencegahan dan penanganan kekerasa seksual</p>
      </div>

      <div>
        <div class="flex justify-center pt-8">
          <img src="./assets/images/any_story_img.png">
        </div>
        <h1 class="font-bold text-center">Ada Cerita?</h1>
        <p class="text-slate-600 pt-4 text-center">Kami di sini untuk mendengarkan dan mendukungmu. Anda bisa mendokumentasikan dan, jika sudah siap, bisa menyampaikan kejadian yang kamu alami/lihat.</p>
      </div>

      <div>
        <div class="flex justify-center pt-8">
          <img src="./assets/images/consulting_img.png">
        </div>
        <h1 class="font-bold text-center">Pendamping / Konsultasi dengan ahli</h1>
        <p class="text-slate-600 pt-4 text-center">Kami menyediakan pendampingan/konsutasi psikologi, hukum, dan kesehatan sesuai kebutuhanmu.</p>
      </div>

      <div>
        <div class="flex justify-center pt-8">
          <img src="./assets/images/sharing_img.png">
        </div>
        <h1 class="font-bold text-center">Kenali Ragam Perundangan dan Kekerasan Seksual</h1>
        <p class="text-slate-600 pt-4 text-center">Cari tahu apa saja bentuk-bentuk perundangan dan kekerasan seksual, serta penyebab dan dampaknya.</p>
      </div>

    </section>
    <!-- Content -->
  </div>
</template>


