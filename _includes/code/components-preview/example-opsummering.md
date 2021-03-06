--- 
permalink: /preview-components/example-opsummering.html
layout: iframed 
title: Example-opsummering.html
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

                <p class="user"><b class="username">Christian Emil Vestergaard Christiansen<br><span class="weight-normal">Forsikringens Forsikringsfirma</span></b>
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
                    Vejledende udtalelse fra AES i privat erstatningssag
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
            <p class="user"><b>Christian Emil Vestergaard Christiansen</b><br>Forsikringens Forsikringsfirma</p>
                <a href="#" class="button button-secondary button-signout">
                    Log ud
                </a>
        </div>

        <div class="solution-info-mobile">
            <p><b>Erhvervsministeriet</b></p>
            <p>Support: 72 20 60 00 <br> <button class="button-unstyled button-contact"
                    data-micromodal-trigger="modal-contact">Kontakt<svg class="icon-svg "><use xlink:href="#menu-right"></use></svg></button></p>
        </div>

        <div class="navbar">
            <div class="navbar-inner navbar-context-actions container">
                <div class="nav-actions">
                    <a href="" class="function-link"> <svg class="icon-svg " ><use xlink:href="#save"></use></svg>
                        Gem kladde</a>
                </div>
            </div>
        </div>

    </nav> <!-- collapsible nav end-->
</header>

<main class="container page-container">

    <div class="overflow-menu  overflow-menu--open-right ">
        <button class="button-overflow-menu js-dropdown " data-js-target="#overflow_steps"
            aria-haspopup="true" aria-expanded="false">
            Trin 9 af 9
            <svg class="icon-svg"><use xlink:href="#menu-down"></use></svg>
            <span class="sr-only">Åbner overflow menu</span>
        </button>
        <div class="overflow-menu-inner" id="overflow_steps" aria-hidden="true">

            <ul class='sidenav-list'>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-1'>
                        1. Oplysninger om afsender
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-2'>
                        2. Hvis AES har spørgsmål til sagen
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-3'>
                        3. Oplysninger om skadelidte
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-4'>
                        4. Sagens natur
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-5'>
                        5. Oplysninger om sagen
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-6'>
                        6. Tilføj dokumentation for første undersøgelse af
                        skaden
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-7'>
                        7. Tilføj dokumentation fra sagen
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-8'>
                        8. Tilføj kommentarer til sagen
                        <span class='sidenav-icon'>
                            <svg class='icon-svg'><use xlink:href='#check'></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-9'
                        class='active'>
                        9. Opsummering
                    </a>
                </li>
            </ul>

        </div>
    </div>

    <div class="row">
        <div class="col-12 col-lg-8">
            <h1>Opsummering</h1>
            <p class="font-lead">Her kan du kontrollere, om oplysningerne
                er korrekte.</p>
            <h2>Dine oplysninger</h2>
            <table class="table table--borderless table--compact table--responsive-headers mb-7">
                <tbody>
                    <tr>
                        <th class="w-percent-md-30">Virksomhedens navn</th>
                        <td>Forsikringens forsikring (enhed)</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-1">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Kontaktperson</th>
                        <td>John Doe<br>privatskade@ff.dk<br>+45 1234 5678</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-2">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Afsender er</th>
                        <td>Forsikringens forsikring (enhed)</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-1">Rediger</a></td>
                    </tr>
                </tbody>
            </table>
            <h3 class="h4">Oplysninger om skadelidte</h3>
            <table class="table table--borderless table--compact table--responsive-headers mt-6 mb-7">
                <tbody>
                    <tr>
                        <th class="w-percent-md-30">Skadelidtes navn</th>
                        <td>Susanne Maria Zaggariasen</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-3">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Skadelidtes CPR</th>
                        <td>110687-1478</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-3">Rediger</a></td>
                    </tr>
                </tbody>
            </table>
            <h3 class="h4">Oplysninger om sagen</h3>
            <table class="table table--borderless table--compact table--responsive-headers mt-6 mb-7">
                <tbody>
                    <tr>
                        <th class="w-percent-md-30">Sagstype</th>
                        <td>Erstatningsansvarloven</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-4">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Emne</th>
                        <td>Mén (6.220 kr.)</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-4">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Skadedato</th>
                        <td>1/10-2017</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-5">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Sagsnummer</th>
                        <td>prsk013456</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-5">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Verserende retsag</th>
                        <td>Nej</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-5">Rediger</a></td>
                    </tr>
                    <tr>
                        <th class="w-percent-md-30">Skadelidtes advokat</th>
                        <td>Nej</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-5">Rediger</a></td>
                    </tr>
                </tbody>
            </table>
            <h3 class="h4">Yderligere oplysninger</h3>
            <table class="table table--borderless table--compact table--responsive-headers mt-6 mb-7">
                <tbody>
                    <tr>
                        <th class="w-percent-md-30">Faktuelle oplysninger</th>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Fusce quis lectus quis sem
                            lacinia nonummy.
                            Proin mollis lorem non dolor. In hac habitasse
                            platea dictumst. Nulla ultrices odio.
                            Donec augue. Phasellus dui. Maecenas facilisis
                            nisl vitae nibh. Proin vel seo est vitae eros
                            pretium dignissim.
                            Aliquam aliquam sodales orci. Suspendisse
                            potenti. Nunc adipiscing euismod arcu. Quisque
                            facilisis mattis lacus.
                        </td>
                        <td class="align-text-md-right"><a href="#">Rediger</a></td>
                    </tr>
                </tbody>
            </table>
            <h2>Bilagsoversigt</h2>
            <h3 class="h4">Første undersøgelse af skade</h3>
            <table class="table table--borderless table--compact table--responsive-headers mt-6 mb-7">
                <thead>
                    <tr>
                        <th>Original titel</th>
                        <th>Navngivning</th>
                        <th>Kommentar</th>
                        <th>Størrelse</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>prn1023152_attest.pdf</td>
                        <td>Journal fra egen læge</td>
                        <td>2/10-2017</td>
                        <td>2,3 mb</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-7">Rediger</a></td>
                    </tr>
                </tbody>
            </table>
            <h3 class="h4">Oplysninger om varigt mén</h3>
            <table class="table table--borderless table--compact table--responsive-headers mt-6 mb-7">
                <thead>
                    <tr>
                        <th>Original titel</th>
                        <th>Navngivning</th>
                        <th>Kommentar</th>
                        <th>Størrelse</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>prn1023152_attest.pdf</td>
                        <td>Journal fra egen læge</td>
                        <td>2/10-2017</td>
                        <td>2,3 mb</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-7">Rediger</a></td>
                    </tr>
                    <tr>
                        <td>prn1023152_attest.pdf</td>
                        <td>Journal fra egen læge</td>
                        <td>2/10-2017</td>
                        <td>2,3 mb</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-7">Rediger</a></td>
                    </tr>
                </tbody>
            </table>
            <h3 class="h4">Første undersøgelse af skade</h3>
            <table class="table table--borderless table--responsive-headers table--compact mt-6">
                <thead>
                    <tr>
                        <th>Original titel</th>
                        <th>Navngivning</th>
                        <th>Kommentar</th>
                        <th>Størrelse</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>prn1023152_attest.pdf</td>
                        <td>Journal fra egen læge</td>
                        <td>2/10-2017</td>
                        <td>2,3 mb</td>
                        <td class="align-text-md-right"><a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-7">Rediger</a></td>
                    </tr>
                </tbody>
            </table>

            <nav class="page-navigation">
                <a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-10"
                    class="button button-primary">Send sagen til AES</a>
                <a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-8"
                    class="button button-quaternary"><svg class="icon-svg "><use xlink:href="#menu-left"></use></svg>Tilbage</a>
            </nav>
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