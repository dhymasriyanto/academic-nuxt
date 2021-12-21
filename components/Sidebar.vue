<template>
  <div class="wrapper">
    <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span class="navbar-toggler-icon" />
        </button>
        <h1 class="navbar-brand navbar-brand-autodark">
          <a href=".">
          <!-- <img src="./static/logo-white.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image"> -->
          </a>
        </h1>
        <div class="navbar-nav flex-row d-lg-none">
          <div class="nav-item d-none d-md-flex me-3">
            <div class="btn-list">
              <a href="https://github.com/tabler/tabler" class="btn" target="_blank" rel="noreferrer">
                <!-- Download SVG icon from http://tabler-icons.io/i/brand-github -->
                <brand-github />
                Source code
              </a>
              <a href="https://github.com/sponsors/codecalm" class="btn" target="_blank" rel="noreferrer">
                <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                <heart-icon />
                Sponsor
              </a>
            </div>
          </div>
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
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <span class="avatar avatar-sm" style="background-image: url(./static/avatars/000m.jpg)" />
              <div class="d-none d-xl-block ps-2">
                <div>Paweł Kuna</div>
                <div class="mt-1 small text-muted">UI Designer</div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" class="dropdown-item">Set status</a>
              <a href="#" class="dropdown-item">Profile & account</a>
              <a href="#" class="dropdown-item">Feedback</a>
              <div class="dropdown-divider" />
              <a href="#" class="dropdown-item">Settings</a>
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
                  Home
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
                  Interface
                </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="./empty.html">
                      Empty page
                    </a>
                    <a class="dropdown-item" href="./accordion.html">
                      Accordion
                    </a>
                    <a class="dropdown-item" href="./blank.html">
                      Blank page
                    </a>
                    <a class="dropdown-item" href="./buttons.html">
                      Buttons
                    </a>
                    <a class="dropdown-item" href="./cards.html">
                      Cards
                    </a>
                    <a class="dropdown-item" href="./cards-masonry.html">
                      Cards Masonry
                    </a>
                    <a class="dropdown-item" href="./colors.html">
                      Colors
                    </a>
                    <a class="dropdown-item" href="./dropdowns.html">
                      Dropdowns
                    </a>
                    <a class="dropdown-item" href="./icons.html">
                      Icons
                    </a>
                    <a class="dropdown-item" href="./modals.html">
                      Modals
                    </a>
                    <a class="dropdown-item" href="./maps.html">
                      Maps
                    </a>
                    <a class="dropdown-item" href="./map-fullsize.html">
                      Map fullsize
                    </a>
                    <a class="dropdown-item" href="./maps-vector.html">
                      Vector maps
                    </a>
                  </div>
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="./navigation.html">
                      Navigation
                    </a>
                    <a class="dropdown-item" href="./charts.html">
                      Charts
                    </a>
                    <a class="dropdown-item" href="./pagination.html">
                      Pagination
                    </a>
                    <a class="dropdown-item" href="./skeleton.html">
                      Skeleton
                    </a>
                    <a class="dropdown-item" href="./tabs.html">
                      Tabs
                    </a>
                    <a class="dropdown-item" href="./tables.html">
                      Tables
                    </a>
                    <a class="dropdown-item" href="./carousel.html">
                      Carousel
                    </a>
                    <a class="dropdown-item" href="./lists.html">
                      Lists
                    </a>
                    <a class="dropdown-item" href="./typography.html">
                      Typography
                    </a>
                    <a class="dropdown-item" href="./offcanvas.html">
                      Offcanvas
                    </a>
                    <a class="dropdown-item" href="./markdown.html">
                      Markdown
                    </a>
                    <div class="dropend">
                      <a
                        class="dropdown-item dropdown-toggle"
                        href="#sidebar-authentication"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="false"
                        role="button"
                        aria-expanded="false"
                      >
                        Authentication
                      </a>
                      <div class="dropdown-menu">
                        <a href="./sign-in.html" class="dropdown-item">Sign in</a>
                        <a href="./sign-up.html" class="dropdown-item">Sign up</a>
                        <a href="./forgot-password.html" class="dropdown-item">Forgot password</a>
                        <a href="./terms-of-service.html" class="dropdown-item">Terms of service</a>
                        <a href="./auth-lock.html" class="dropdown-item">Lock screen</a>
                      </div>
                    </div>
                    <div class="dropend">
                      <a
                        class="dropdown-item dropdown-toggle"
                        href="#sidebar-error"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="false"
                        role="button"
                        aria-expanded="false"
                      >
                        Error pages
                      </a>
                      <div class="dropdown-menu">
                        <a href="./error-404.html" class="dropdown-item">404 page</a>
                        <a href="./error-500.html" class="dropdown-item">500 page</a>
                        <a href="./error-maintenance.html" class="dropdown-item">Maintenance page</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./form-elements.html">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
                  <checkbox-icon />
                </span>
                <span class="nav-link-title">
                  Forms
                </span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#navbar-extra"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                role="button"
                aria-expanded="false"
              >
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                  <star-icon />
                </span>
                <span class="nav-link-title">
                  Extra
                </span>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="./activity.html">
                  Activity
                </a>
                <a class="dropdown-item" href="./gallery.html">
                  Gallery
                </a>
                <a class="dropdown-item" href="./invoice.html">
                  Invoice
                </a>
                <a class="dropdown-item" href="./search-results.html">
                  Search results
                </a>
                <a class="dropdown-item" href="./pricing.html">
                  Pricing cards
                </a>
                <a class="dropdown-item" href="./users.html">
                  Users
                </a>
                <a class="dropdown-item" href="./license.html">
                  License
                </a>
                <a class="dropdown-item" href="./music.html">
                  Music
                </a>
                <a class="dropdown-item" href="./widgets.html">
                  Widgets
                </a>
                <a class="dropdown-item" href="./wizard.html">
                  Wizard
                </a>
              </div>
            </li>
            <li class="nav-item active dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#navbar-layout"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                role="button"
                aria-expanded="true"
              >
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <!-- Download SVG icon from http://tabler-icons.io/i/layout-2 -->
                  <layout-2-icon />
                </span>
                <span class="nav-link-title">
                  Layout
                </span>
              </a>
              <div class="dropdown-menu show">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="./layout-horizontal.html">
                      Horizontal
                    </a>
                    <a class="dropdown-item" href="./layout-vertical.html">
                      Vertical
                    </a>
                    <a class="dropdown-item" href="./layout-vertical-transparent.html">
                      Vertical transparent
                    </a>
                    <a class="dropdown-item" href="./layout-vertical-right.html">
                      Right vertical
                    </a>
                    <a class="dropdown-item" href="./layout-condensed.html">
                      Condensed
                    </a>
                    <a class="dropdown-item active" href="./layout-combo.html">
                      Combined
                    </a>
                  </div>
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="./layout-navbar-dark.html">
                      Navbar dark
                    </a>
                    <a class="dropdown-item" href="./layout-navbar-sticky.html">
                      Navbar sticky
                    </a>
                    <a class="dropdown-item" href="./layout-navbar-overlap.html">
                      Navbar overlap
                    </a>
                    <a class="dropdown-item" href="./layout-rtl.html">
                      RTL mode
                    </a>
                    <a class="dropdown-item" href="./layout-fluid.html">
                      Fluid
                    </a>
                    <a class="dropdown-item" href="./layout-fluid-vertical.html">
                      Fluid vertical
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./docs/index.html">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <!-- Download SVG icon from http://tabler-icons.io/i/file-text -->
                  <file-text-icon />
                </span>
                <span class="nav-link-title">
                  Documentation
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <header class="navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none">
      <div class="container-xl">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="navbar-nav flex-row order-md-last">
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
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <span class="avatar avatar-sm" style="background-image: url(https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=)" />
              <div class="d-none d-xl-block ps-2">
                <div>Paweł Kuna</div>
                <div class="mt-1 small text-muted">UI Designer</div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" class="dropdown-item">Set status</a>
              <a href="#" class="dropdown-item">Profile & account</a>
              <a href="#" class="dropdown-item">Feedback</a>
              <div class="dropdown-divider" />
              <a href="#" class="dropdown-item">Settings</a>
              <a href="#" class="dropdown-item">Logout</a>
            </div>
          </div>
        </div>
        <div id="navbar-menu" class="collapse navbar-collapse">
          <div>
            <form action="." method="get">
              <div class="input-icon">
                <span class="input-icon-addon">
                  <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                  <search-icon />
                </span>
                <input type="text" class="form-control" placeholder="Search…" aria-label="Search in website">
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
