--- 
permalink: /preview-components/example-flytning-page-5.html
layout: iframed 
title: Example-flytning-page-5.html
---
<header class="header" role="banner">

    <!--1A: Portal header -->
    <div class="portal-header">
        <div class="container portal-header-inner">
            <a href="javascript:void(0);" title="Hjem" aria-label="logo link"
                class="logo"></a>
            <button class="button button-secondary button-menu-open js-menu-open ml-auto"
                aria-haspopup="menu" title="Åben mobil menu">Menu</button>

            <!-- 1B: Portal header: info + actions-->
            <div class="portal-info">

                <p class="user"><b class="username">Christian Emil Vestergaard Christiansen</b>
                </p>

                <a href="#" class="button button-secondary" role="button">
                    Log ud
                </a>
            </div>
        </div>
    </div>

    <!--2A: Solutiuon header -->
    <div class="solution-header header-end">
        <div class="container solution-header-inner">
            <div class="solution-heading">
                <a href="#" title="Hjem" aria-label="logo link">
                    Digital flytning
                </a>
            </div>

            <!--2B: Solution header: Authority name + text-->
            <div class="solution-info">
                <!-- nav-secondary -->

                <h6 class="h5 authority-name"> Styrelsen for Eksempler</h6>

                <p><button class="button-unstyled button-contact"
                        data-micromodal-trigger="modal-contact">Kontakt<svg class="icon-svg"><use href="#menu-right"></use></svg></button></p>

            </div>
        </div>
    </div>

    <div class="overlay"></div>
    <nav role="navigation" class=" nav">
        <!-- collapsible-->
        <button class="button button-tertiary button-menu-close js-menu-close"
            title="Luk mobil menu"><svg class="icon-svg " ><use xlink:href="#close"></use></svg>Luk</button>

        <div class="portal-info-mobile">
            <p class="user"><b>Navn</b></p>

            <a href="#" class="button button-secondary button-signout">
                Log ud
            </a>
        </div>

        <div class="solution-info-mobile">
            <p><b>Erhvervsministeriet</b></p>
            <p><button class="button-unstyled button-contact"
                    data-micromodal-trigger="modal-contact">Kontakt<svg class="icon-svg "><use xlink:href="#menu-right"></use></svg></button></p>
        </div>

        <div class="navbar">
            <div class="navbar-inner navbar-context-actions container">
                <div class="nav-actions">
                    <a href="#" class="function-link"><svg class="icon-svg " ><use xlink:href="#"></use></svg>
                        Om digital flytning</a>
                    <a href="" class="function-link"><svg class="icon-svg " ><use xlink:href="#language"></use></svg>
                        Sprog</a>
                </div>
            </div>
        </div>

    </nav> <!-- collapsible nav end-->
</header>

<main class="container page-container">

    <div class="alert alert alert-error alert--show-icon" role="alert"
        aria-label="error">
        <div class="alert-body">
            <p class="alert-heading">Der er sket en fejl</p>
            <p class="alert-text">Der er sket en fejl hos KRAK. Afstanden
                til din nuværende læge kan ikke beregnes i øjeblikket.
                Beregningen er vigtig for at dit lægevalg kan blive
                registreret korrekt. Fejlen er blevet registreret og vil
                blive rettet hurtigst muligt. Prøv at registrere din
                flytning senere.</p>
        </div>
    </div>

    <div class="overflow-menu  overflow-menu--open-right ">
        <button class="button-overflow-menu js-dropdown " data-js-target="#overflow_steps"
            aria-haspopup="true" aria-expanded="false">
            Trin 5 af 5
            <svg class="icon-svg"><use xlink:href="#menu-down"></use></svg>
            <span class="sr-only">Åbner overflow menu</span>
        </button>
        <div class="overflow-menu-inner" id="overflow_steps" aria-hidden="true">

            <ul class='sidenav-list'>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-1'>
                        1. Oversigt
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-2'>
                        2. Personer
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-3'>
                        3. Adresse
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-4'>
                        4. Særlig flytning
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-5'
                        class='active'>
                        5. Lægevalg
                    </a>
                </li>
            </ul>

        </div>
    </div>

    <h1>Lægevalg</h1>
    <div class="mt-0">

        <div class="alert alert alert-info alert--paragraph" role="alert"
            aria-label="warning">
            <div class="alert-body">
                <p class="alert-heading">Når du anmelder flytning skal du
                    altid vælge læge også selv om det er tidligere læge du
                    ønsker.</p>
                <p class="alert-text"><br>Du kan kontakte Folkeregisteret, på telefonnr. 3366 3366, såfremt der er lukket for tilgang til læger inden for en radius af 5 km.<br><br>Flytter du inden for Københavns kommune, men uden for lægens 5 km grænse, kan du beholde lægen. Du skal acceptere ikke at kunne få sygebesøg af lægen.<br><br>Flytter du tik Københavns kommune uden for lægens km grænse, kan du kun beholde din læge, hvis du opfylder betingelserne og accepterer ikke at kunne få sygebesøg af lægen.<br><br>Betingelserne i § 1 stk 9, i Bekendtgørelsen om valg og skift af alment praktiserende læge og om behandling hos læge i praksissektoren for at kunne beholde lægen.<br><br>Du vil modtage dit nye sundhedskort i løbet af 2-3 uger. Hvis du ikke modtager dit nye sundhedskort, skal du kontakte kommunen inden 60 dage fra din flyttedato. Ellers kommer du til at betale for dit nye kort.</p>
            </div>
        </div>

    </div>
    <div class="mt-6">
        <label class="form-label">Ny adresse</label>
        <p class="mt-0">Odensegade 23, 4.tv. 2100 København Ø</p>
    </div>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
            <table class="table table--borderless table--compact table--responsive-headers mt-5">
                <thead>
                    <tr>
                        <th>Personer som flytter</th>
                        <th>Læge efter flytning</th>
                        <th>Afstand</th>
                        <th class="align-text-md-right">Skift læge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Klaus Egegreen Hansen</td>
                        <td>John Doe <br>Østerbrogade 893 18.tv. <br>2100 København Ø</td>
                        <td>0,6 Km</td>
                        <td class="align-text-md-right"><a href="#" title="Skift læge">
                                <svg class='icon-svg'><use xlink:href='#pencil'></use></svg></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <nav class="page-navigation">
        <a href="#" class="button button-primary">Næste</a>
        <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-4'
            class="button button-quaternary"><svg class="icon-svg "><use xlink:href="#menu-left"></use></svg>Tilbage</a>
    </nav>
</main>

<footer>
    <div class="footer">
        <div class="container">
            <div class="align-text-left">
                <ul class="unstyled-list inline-list">
                    <li><span class="h5 weight-semibold">Eksempelstyrelsen</span></li>
                    <li><a class="function-link" href="mailto:support@example.dk">support@example.dk</a></li>
                    <li><a class="function-link" href="tel:12 34 56 78">12
                            34 56 78</a></li>
                    <li><a href="#" class="function-link">Tilgængelighedserklæring</a></li>
                    <li><a href="#" class="function-link">Privatlivspolitik
                            (cookies)</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<div class="modal" id="modal-contact" aria-hidden="true">
    <div class="modal__overlay bg-modal" tabindex="-1"
        data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true"
            aria-labelledby="modal-contact-1">
            <header class="modal__header">
                <h1 class="modal__title h2" id="modal-contact-1">
                    Kontakt
                </h1>
            </header>
            <main class="modal__content">
                <div class="alert alert-warning" role="alert" aria-label="Beskedbox der viser en advarsel">
                    <div class="alert-body">
                        <h3 class="alert-heading">Vi har noget information
                            af advarende karakter</h3>
                        <p class="alert-text">Noget tekst, der forklarer
                            det af advarende karakter, som brugeren bør
                            vide inden denne ringer eller skriver. Noget
                            tekst, der forklarer det af advarende
                            karakter, som brugeren bør vide inden denne
                            ringer eller skriver.</p>
                    </div>
                </div>
                <h3>En form for support</h3>
                <p>Hvis du har spørgsmål om:</p>
                <ul>
                    <li>En ting som denne</li>
                    <li>Et andet emne som dette</li>
                </ul>
                <p>Kan du ringe direkte til: 12 34 56 78</p>
                <p>Telefonen er åben:</p>
                <p class="m-0">Mandag:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    kl. 9-17</p>
                <p class="m-0">Tirsdag-torsdag:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    kl. 9-17</p>
                <p class="m-0">Fredag:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    kl. kl. 9-14</p>
            </main>

            <button class="modal__close button button-secondary"
                aria-label="Close modal" data-micromodal-close>Luk</button>
        </div>
    </div>
</div>