<template>
  <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon" />
      </button>
      <h1 class="navbar-brand navbar-brand-autodark">
        <a href="">
          <!--ur image here-->
          <img src="../static/logo2.png" width="110" height="32" alt="Tabler" class="navbar-brand-image">
        </a>
      </h1>
      <div class="navbar-nav flex-row d-lg-none">
        <a href="?theme=dark" class="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
          <!-- Download SVG icon from http://tabler-icons.io/i/moon -->
          <moon-icon />
        </a>
        <a href="?theme=light" class="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
          <!-- Download SVG icon from http://tabler-icons.io/i/sun -->
          <sun-icon />
        </a>
        <div class="nav-item dropdown d-none d-md-flex me-3">
          <a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications">
            <!-- Download SVG icon from http://tabler-icons.io/i/bell -->
            <bell-icon />
            <span class="badge bg-red" />
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-card">
            <div class="card">
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consectetur exercitationem fugiat in ipsa ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis et magni maxime necessitatibus ullam.
              </div>
            </div>
          </div>
        </div> <div class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm" style="background-image: url(https://ui-avatars.com/api/?name=Ujang)" />
            <div class="d-none d-xl-block ps-2">
              <div>Ujang</div>
              <div class="mt-1 small text-muted">Mahasiswa</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item">Profil & Akun</a>
            <div class="dropdown-divider" />
            <a href="#" class="dropdown-item">Pengaturan</a>
            <a href="#" class="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      <div id="navbar-menu" class="collapse navbar-collapse">
        <ul class="navbar-nav pt-lg-3">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <!-- Download SVG icon from http://tabler-icons.io/i/home -->
                <home-icon />
              </span>
              <span class="nav-link-title">
                Beranda
              </span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#navbar-base"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              role="button"
              aria-expanded="false"
            >
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <!-- Download SVG icon from http://tabler-icons.io/i/package -->
                <package-icon />
              </span>
              <span class="nav-link-title">
                Siswa
              </span>
            </a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                  <a class="dropdown-item" href="./empty.html">
                    Semua Data
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style>

</style>
