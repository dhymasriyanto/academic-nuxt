<template>
  <div class="container-xl">
    <!-- Page title -->
    <div class="page-header d-print-none">
      <div class="row align-items-center">
        <div class="col">
          <!-- Page pre-title -->
          <div class="page-pretitle">
            Siswa
          </div>
          <h2 class="page-title">
            Data Siswa
          </h2>
        </div>
        <!-- Page title actions -->
        <div class="col-auto ms-auto d-print-none">
          <div class="btn-list">
            <span class="d-none d-sm-inline">
              <a href="#" class="btn btn-white">
                Tombol pilihan lain
              </a>
            </span>
            <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
              <!-- Download SVG icon from http://tabler-icons.io/i/plus --> <plus-icon />
              Tambah data
            </a>
            <a href="#" class="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Tambah data baru">
              <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
              <plus-icon />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style>

</style>
