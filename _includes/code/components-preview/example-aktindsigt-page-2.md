--- 
permalink: /preview-components/example-aktindsigt-page-2.html
layout: iframed 
title: Example-aktindsigt-page-2.html
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
                    Ansøg om indsigt
                </a>
            </div>

            <!--2B: Solution header: Authority name + text-->
            <div class="solution-info">
                <!-- nav-secondary -->

                <h6 class="h5 authority-name"> Styrelsen for Eksempler</h6>

                <p>Support: 72 20 60 00 · <button class="button-unstyled button-contact"
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
            <p class="user"><b>Christian Emil Vestergaard Christiansen</b></p>
            <a href="#" class="button button-secondary button-signout">
                Log ud
            </a>
        </div>

        <div class="solution-info-mobile">
            <p><b>Erhvervsministeriet</b></p>
            <p><button class="button-unstyled button-contact"
                    data-micromodal-trigger="modal-contact">Kontakt<svg class="icon-svg "><use xlink:href="#menu-right"></use></svg></button></p>
        </div>

    </nav> <!-- collapsible nav end-->
</header>

<main class="container page-container">

    <div class="overflow-menu  overflow-menu--open-right ">
        <button class="button-overflow-menu js-dropdown " data-js-target="#overflow_steps"
            aria-haspopup="true" aria-expanded="false">
            Trin 2 af 3
            <svg class="icon-svg"><use xlink:href="#menu-down"></use></svg>
            <span class="sr-only">Åbner overflow menu</span>
        </button>
        <div class="overflow-menu-inner" id="overflow_steps" aria-hidden="true">

            <ul class='sidenav-list'>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/aktindsigt/aktindsigt-1'>
                        1. Inden du går igang
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/aktindsigt/aktindsigt-2'
                        class='active'>
                        2. Oplysninger om dig
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/aktindsigt/aktindsigt-3'>
                        3. Bekræft oplysninger
                    </a>
                </li>
            </ul>

        </div>
    </div>

    <h1>Oplysninger om dig</h1>
    <form class="form">
        <fieldset>
            <div class="mt-0">

                <div class="form-group">
                    <label class="form-label " for="id-fornavn">Fornavn</label>

                    <input class="form-input  input-width-m " placeholder=""
                        id="id-fornavn" value="" name="Input til fornavn"
                        type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-efternavn">Efternavn</label>

                    <input class="form-input  input-width-m " placeholder=""
                        id="id-efternavn" value="" name="Input til efternavn"
                        type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-gade-vej">Gade/vej</label>

                    <input class="form-input  input-width-m " placeholder=""
                        id="id-gade-vej" value="" name="Input til gade/vej"
                        type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-husnummer">Husnummer</label>

                    <input class="form-input  input-width-xxs "
                        placeholder="" id="id-husnummer" value="" name="Input til husnummer"
                        type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-etage">Etage<span
                            class="weight-normal"> (frivilligt)</span></label>

                    <input class="form-input  input-width-xxs "
                        placeholder="" id="id-etage" value="" name="Input til etage"
                        type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-side">Side<span
                            class="weight-normal"> (frivilligt)</span></label>
                    <span class="form-hint" id="input-hint-message-id-side">Fx:
                        TV, 2. dør</span>

                    <input class="form-input  input-width-xs " placeholder=""
                        id="id-side" value="" name="Input til side" type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-postnummer">Postnummer</label>

                    <input class="form-input  input-width-xxs "
                        placeholder="" id="id-postnummer" value="" name="Input til postnummer"
                        type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-by">By</label>

                    <input class="form-input  input-width-m " placeholder=""
                        id="id-by" value="" name="Input til by" type="text">
                </div>

            </div>
            <div class="mt-5">

                <div class="form-group">
                    <label class="form-label " for="id-co-adresse">Evt.
                        CO-adresse<span class="weight-normal">
                            (frivilligt)</span></label>

                    <input class="form-input  input-width-m " placeholder=""
                        id="id-co-adresse" value="" name="Input til CO-adresse"
                        type="text">
                </div>

            </div>
            <div class="mt-5">
                <label class="form-label">Er der tidligere søgt om
                    aktindsigt?</label>
            </div>
            <div class="mt-3">

                <div class="form-group ">
                    <input id="id-aktindsigt-ja" type="radio" name="aktindsigt"
                        value="Ja" class="form-radio  radio-large ">
                    <label for="id-aktindsigt-ja" class="radio-large">Ja
                    </label>
                </div>

            </div>
            <div class="mt-3">

                <div class="form-group ">
                    <input id="id-aktindsigt-nej" type="radio" name="aktindsigt"
                        value="Ja" class="form-radio  radio-large ">
                    <label for="id-aktindsigt-nej" class="radio-large">Nej
                    </label>
                </div>

            </div>
        </fieldset>
    </form>
    <nav class="page-navigation">
        <a href="/dkfds-docs/pages/eksempler/aktindsigt/aktindsigt-3"
            class="button button-primary">Næste</a>
        <a href="/dkfds-docs/pages/eksempler/aktindsigt/aktindsigt-1"
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