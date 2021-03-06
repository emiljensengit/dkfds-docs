--- 
permalink: /preview-components/example-flytning-page-1.html
layout: iframed 
title: Example-flytning-page-1.html
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
                        Sprog

                    </a>
                </div>
            </div>
        </div>

    </nav> <!-- collapsible nav end-->
</header>

<main class="container page-container">

    <div class="overflow-menu  overflow-menu--open-right ">
        <button class="button-overflow-menu js-dropdown " data-js-target="#overflow_steps"
            aria-haspopup="true" aria-expanded="false">
            Trin 1 af 5
            <svg class="icon-svg"><use xlink:href="#menu-down"></use></svg>
            <span class="sr-only">Åbner overflow menu</span>
        </button>
        <div class="overflow-menu-inner" id="overflow_steps" aria-hidden="true">

            <ul class='sidenav-list'>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-1'
                        class='active'>
                        1. Oversigt
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-2'>
                        2. Personer
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-3'>
                        3. Adresse
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-4'>
                        4. Særlig flytning
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/digital-flytning/flytning-5'>
                        5. Lægevalg
                    </a>
                </li>
            </ul>

        </div>
    </div>

    <h1>Oversigt</h1>
    <p class="font-lead">Digital Flytning er kommunernes digitale
        folkeregister, hvor du kan melde flytning og samtidig foretage
        valg af læge.</p>
    <h2>Anmelder</h2>
    <div class="mt-5">
        <label class="form-label">Navn</label>
        <p class="mt-0">Klaus Egegreen Hansen (090889-2210)</p>
    </div>
    <div class="mt-5">
        <label class="form-label">Flytter fra</label>
        <p class="mt-0">Odensegade 23, 4tv. 2100 København</p>
    </div>
    <div class="mt-5">
        <label class="form-label">Du har følgende beskyttelse på din
            nuværende adresse:</label>
        <ul class="mb-0">
            <li>Markedsføringsbeskyttelse</li>
            <li>Vejviserbeskyttelse</li>
            <li>Navne- og adressebeskyttelse</li>
        </ul>
    </div>
    <div class="mb-8 mt-4">

        <div class="alert alert alert-warning alert--show-icon alert--paragraph"
            role="alert" aria-label="warning">
            <div class="alert-body">
                <p class="alert-heading">Skal din nye adresse beskyttes
                    fra første dag?</p>
                <p class="alert-text">Hvis du ønsker navne- og
                    adressebeskyttelse i forbindelse med denne flytning,
                    bør du anmode om navne- og adressebeskyttelse, før du
                    anmelder flytning. Ellers risikerer du, at navne- og
                    adressebeskyttelsen ikke er gældende fra første dag på
                    din nye adresse.</p>
            </div>
        </div>

    </div>
    <div class="alert alert-info alert--paragraph" role="alert" aria-label="Adresse info">
        <div class="alert-body">
            <p class="alert-heading">Seneste flytninger</p>
            <table class="table table--borderless table--responsive-headers table--compact mt-5">
                <thead>
                    <tr>
                        <th>Dato</th>
                        <th>Fra adresse</th>
                        <th>Til adresse</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01-02-2014</td>
                        <td>Smallegade 6,<br>2000 Frederiksberg</td>
                        <td>Smallegade 12,<br>2000 Frederiksberg</td>
                    </tr>
                    <tr>
                        <td>01-02-2014</td>
                        <td>Smallegade 6,<br>2000 Frederiksberg</td>
                        <td>Smallegade 12,<br>2000 Frederiksberg</td>
                    </tr>
                    <tr>
                        <td>01-02-2014</td>
                        <td>Smallegade 6,<br>2000 Frederiksberg</td>
                        <td>Smallegade 12,<br>2000 Frederiksberg</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <nav class="page-navigation">
        <a href="/dkfds-docs/pages/eksempler/digital-flytning/flytning-2"
            class="button button-primary">Næste</a>
    </nav>

    <div class="mt-9">
        <h2 class="h5">Relaterede selvbetjeningsløsninger</h2>
    </div>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6">
            <div class="card">
                <div class="card-header">
                    <p class="h5 header-title" title="Card header"
                        aria-label="Card header adressebeskyttelse">Adressebeskyttelse</p>
                    <p class="sub-header">Her kan du kan oprette, rette
                        eller slette dine adressebeskyttelser.</p>
                </div>
                <div class="card-action">
                    <div class="action-links">
                        <ul class="nobullet-list">
                            <li>
                                <a href="#" class="icon-link">Adressebeskyttelse
                                    <svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6">
            <div class="card">
                <div class="card-header">
                    <p class="h5 header-title" title="Card header"
                        aria-label="Card header adressebeskyttelse">Udrejse</p>
                    <p class="sub-header">Hvis du flytter til udlandet,
                        skal du benytte nedenstående link.</p>
                </div>
                <div class="card-action">
                    <div class="action-links">
                        <ul class="nobullet-list">
                            <li>
                                <a href="#" class="icon-link">Anmeld
                                    udrejse <svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6">
            <div class="card">
                <div class="card-header">
                    <p class="h5 header-title" title="Card header"
                        aria-label="Card header adressebeskyttelse">Fuldmagt</p>
                    <p class="sub-header">Afgiv en eller flere fulmagt til
                        at anmelde flytning.</p>
                </div>
                <div class="card-action">
                    <div class="action-links">
                        <ul class="nobullet-list">
                            <li>
                                <a href="#" class="icon-link">Angiv
                                    fuldmagt <svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
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