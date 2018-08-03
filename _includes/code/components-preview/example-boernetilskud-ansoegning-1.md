--- 
permalink: /preview-components/example-boernetilskud-ansoegning-1.html
layout: iframed 
title: Example-boernetilskud-ansoegning-1.html
---
<header class="header" role="banner">

    <!--1A: Portal header -->
    <div class="portal-header">
        <div class="container portal-header-inner">
            <a href="javascript:void(0);" title="Hjem" aria-label="logo link" class="logo"></a>
            <button class="button button-secondary button-menu-open js-menu-open ml-auto"
                aria-haspopup="menu" title="Åben mobil menu">Menu</button>

            <!-- 1B: Portal header: info + actions-->
            <div class="portal-info">

                <p class="user"><b class="username">Christian Emil Vestergaard Christiansen</b>                    </p>

                <a href="#" class="button button-secondary" role="button">
                    Log ud
                </a>
            </div>
        </div>
    </div>

    <!--2A: Solutiuon header -->
    <div class="solution-header">
        <div class="container solution-header-inner">
            <div class="solution-heading content">
                <a href="#" title="Hjem" aria-label="logo link">
                    Familieydelser - børnetilskud
                </a>
            </div>

            <!--2B: Solution header: Authority name + text-->
            <div class="solution-info">
                <!-- nav-secondary -->

                <h6 class="h6 authority-name"> Ministeriet for Eksempel</h6>

                <p>Tlf.: 33 28 38 38</p>

            </div>
        </div>
    </div>

    <div class="overlay"></div>
    <nav role="navigation" class=" nav">
        <!-- collapsible-->
        <button class="button button-tertiary button-menu-close js-menu-close" title="Luk mobil menu">
            <svg class="icon-svg "><use xlink:href="#close"></use></svg> Luk
        </button>

        <!-- 3: Main navigation-->
        <div class="navbar navbar-primary">
            <!--3A: Main navigation-->
            <div class="navbar-inner container">
                <ul class="nav-primary">
                    <li>
                        <a href="/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-oversigt"
                            class="nav-link" title="Designsystem">
                            <span>Oversigt</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Eksempler">
                            <span>Beskeder</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Kom godt i gang">
                            <span>Udbetalinger</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Fællesoffentlige krav">
                            <span>Sager</span>
                        </a>
                    </li>
                    <li>
                        <a href="/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-1"
                            class="nav-link current" title="Fællesoffentlige krav">
                            <span>Ansøgninger</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Fællesoffentlige krav">
                            <span>Ændringer</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Fællesoffentlige krav">
                            <span>Dokumentation</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 3: Main navigation end-->

        <div class="portal-info-mobile">
            <p class="user"><b>Christian Emil Vestergaard Christiansen</b></p>
            <a href="#" class="button button-secondary button-signout">
                Log ud
            </a>
        </div>

        <div class="solution-info-mobile">
            <p><b>Erhvervsministeriet</b></p>
            <p>
                <button class="button-unstyled button-contact" data-micromodal-trigger="modal-contact">Kontakt<svg class="icon-svg "><use xlink:href="#menu-right"></use></svg></button>
            </p>
        </div>

    </nav>
    <!-- collapsible nav end-->
</header>

<main class="container page-container">
    <header class="page-header">

        <div class="overflow-menu  overflow-menu--open-right ">
            <button class="button-overflow-menu js-dropdown " data-js-target="#overflow_steps"
                aria-haspopup="true" aria-expanded="false">
                Trin 1 af 6
                <svg class="icon-svg"><use xlink:href="#menu-down"></use></svg>
                <span class="sr-only">Åbner overflow menu</span>
            </button>
            <div class="overflow-menu-inner" id="overflow_steps" aria-hidden="true">

                <ul class='sidenav-list'>
                    <li>
                        <a href='/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-1'
                            class='active'>
                            1. Hvilke børn søger du tilskud til?
                        </a>
                    </li>
                    <li>
                        <a href='/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-2'>
                            2. Hvornår blev du eller bliver du enlig?
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            3.
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            4.
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            5.
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            6.
                        </a>
                    </li>
                </ul>

            </div>
        </div>

        <h1 class="mt-0">Hvilke børn søger du tilskud til?</h1>
    </header>
    <section class="page-content content">
        <div class="row">
            <div class="col-12 col-md-8 col-lg-5">
                <h2 class="h3 mb-4">Jeg søger tilskud til:</h2>
                <form class="form">
                    <fieldset>

                        <div class="alert alert-warning" role="alert" aria-label="Beskedbox der viser en advarsel">
                            <div class="alert-body">
                                <p class="alert-heading">Allerede registreret</p>
                                <p class="alert-text">Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <input id="checkbox-id-1" type="checkbox" name="" value="checkbox1_selected"
                                class=" checkbox-large " disabled>
                            <label for="checkbox-id-1" class="">Keld Hedagaardsen <br> 353535-3535 <br> Fælles</label>
                        </div>

                        <div class="alert alert-warning" role="alert" aria-label="Beskedbox der viser en advarsel">
                            <div class="alert-body">
                                <p class="alert-heading">Allerede registreret</p>
                                <p class="alert-text">Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <input id="checkbox-id-2" type="checkbox" name="" value="checkbox2_selected"
                                class=" checkbox-large " disabled>
                            <label for="checkbox-id-2" class="">Anita Hedagaardsen <br> 353535-3535 <br> Fælles</label>
                        </div>

                        <div class="form-group">
                            <input id="checkbox-id-3" type="checkbox" name="" value="checkbox3_selected"
                                class=" checkbox-large ">
                            <label for="checkbox-id-3" class=""><b>Ylmig Hedagaardsen</b> <br> 353535-3535 <br>                                Fælles</label>
                        </div>

                        <button class="button button-secondary mt-4">
                            <svg class="icon-svg "><use xlink:href="#add"></use></svg>                            Tilføj barn</button>
                    </fieldset>
                    <div>
                </form>
                </div>
            </div>

    </section>
    <footer class="page-footer">
        <a href="/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-2"
            class="button button-primary">Næste</a>
    </footer>
</main>

<footer>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 footer-col">
                    <div class=" align-left ">
                        <ul class="unstyled-list">
                            <li>
                                <span class="h6 weight-semibold">Ministeriet for Eksempel</span>
                            </li>
                            <li>
                                <p>Styrelsen for Eksempel</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 footer-col">
                    <div class=" align-right ">
                        <ul class="unstyled-list">
                            <li>
                                <a class="function-link" href="mailto:support@example.dk">support@example.dk</a>
                            </li>
                            <li>
                                <a class="function-link" href="tel:12 34 56 78">12 34 56 78</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>