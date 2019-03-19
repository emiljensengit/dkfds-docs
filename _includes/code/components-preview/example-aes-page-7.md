--- 
permalink: /preview-components/example-aes-page-7.html
layout: iframed 
title: Example-aes-page-7.html
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
                    <a href="" class="function-link"><svg class="icon-svg " ><use xlink:href="#save"></use></svg>
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
            Trin 7 af 9
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
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-7'
                        class='active'>
                        7. Tilføj dokumentation fra sagen
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-8'>
                        8. Tilføj kommentarer til sagen
                    </a>
                </li>
                <li>
                    <a href='/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-9'>
                        9. Opsummering
                    </a>
                </li>
            </ul>

        </div>
    </div>

    <h1>Tilføj dokumentation fra sagen</h1>
    <div>

        <div class="form-group ">
            <input id="id-documentation-1" type="checkbox" name="Oplysninger om varigt mén"
                value="Oplysninger om varigt mén" class="form-checkbox  checkbox-large js-checkbox-toggle-content"
                data-js-target='#collapse-check' aria-controls='collapse-check'
                aria-expanded='false'>
            <label for="id-documentation-1" class="">Oplysninger om varigt
                mén</label>
        </div>

        <div id="collapse-check" aria-hidden="true" class="box-border-l collapsed">
            <div class="py-4">
                <button href="example-aes-page-8" class="button button-secondary mt-4">Tilføj
                    dokument</button>
                <table class="table table--borderless table--compact table--responsive-headers mt-5">
                    <thead>
                        <tr>
                            <th>Filnavn</th>
                            <th>Navngiv dokument</th>
                            <th>Kommentar (frivilligt)</th>
                            <th class="align-text-right">Slet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="break-word w-percent-md-40"><svg class="icon-svg " ><use xlink:href="#file"></use></svg>
                                prn0237452_attest.pdf</td>
                            <td class="mt-4 mt-lg-0">
                                <div class="form-group">
                                    <label class="form-label sr-only" for="select-dokumentationdtype1">Vælg
                                        dokumentationstype</label>
                                    <select class=" form-select" name="Navngiv dokument"
                                        id="select-dokumentationdtype1">
                                        <option value></option>

                                    </select>
                                </div>
                            </td>
                            <td class="mt-4 mt-lg-0">

                                <div class="form-group">
                                    <label class="form-label sr-only" for="id-documentation-1-expanded">Kommentar<span
                                            class="weight-normal">
                                            (Frivilligt)</span></label>

                                    <textarea class="form-input input-width-m" placeholder="" id="id-documentation-1-expanded" name="Kommentar" type="text" ></textarea>
                                </div>

                            </td>
                            <td class="align-text-md-right mt-4 mt-lg-0"><a
                                    href="#" class="function-link link-right"
                                    title="Slet fil"><svg class="icon-svg " ><use xlink:href="#delete-outline"></use></svg></a></td>
                        </tr>
                        <tr>
                            <td class="mt-4 mt-lg-0 break-word w-percent-md-40"><svg class="icon-svg " ><use xlink:href="#file"></use></svg>
                                sgn1023152_attest.pdf</td>
                            <td class="mt-4 mt-lg-0">
                                <div class="form-group">
                                    <label class="form-label sr-only" for="select-dokumentationdtype2">Vælg
                                        dokumentationstype</label>
                                    <select class=" form-select" name="Navngiv dokument"
                                        id="select-dokumentationdtype2">
                                        <option value></option>

                                    </select>
                                </div>
                            </td>
                            <td class="mt-4 mt-lg-0">

                                <div class="form-group">
                                    <label class="form-label sr-only" for="id-documentation-2-expanded">Kommentar<span
                                            class="weight-normal">
                                            (Frivilligt)</span></label>

                                    <textarea class="form-input input-width-m" placeholder="" id="id-documentation-2-expanded" name="Kommentar" type="text" ></textarea>
                                </div>

                            </td>
                            <td class="align-text-md-right mt-4 mt-lg-0"><a
                                    href="#" class="function-link link-right"
                                    title="Slet fil"><svg class="icon-svg " ><use xlink:href="#delete-outline"></use></svg></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="mt-3">

        <div class="form-group ">
            <input id="id-documentation-2" type="checkbox" name="Oplysninger om tabt erhvervsevne"
                value="Oplysninger om tabt erhvervsevne" class="form-checkbox  checkbox-large js-checkbox-toggle-content"
                data-js-target='#collapse-check1' aria-controls='collapse-check1'
                aria-expanded='false'>
            <label for="id-documentation-2" class="">Oplysninger om tabt
                erhvervsevne</label>
        </div>

        <div id="collapse-check1" aria-hidden="true" class="box-border-l collapsed">
            <div class="py-4">
                <button href="example-aes-page-8" class="button button-secondary mt-4">Tilføj
                    dokument</button>
                <table class="table table--borderless table--compact table--responsive-headers mt-5">
                    <thead>
                        <tr>
                            <th>Filnavn</th>
                            <th>Navngiv dokument</th>
                            <th>Kommentar (frivilligt)</th>
                            <th class="align-text-right">Slet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="break-word w-percent-md-40"><svg class="icon-svg " ><use xlink:href="#file"></use></svg>
                                dkf4903283_attest.pdf</td>
                            <td class="mt-4 mt-lg-0">
                                <div class="form-group">
                                    <label class="form-label sr-only" for="select-dokumentationdtype3">Vælg
                                        dokumentationstype</label>
                                    <select class=" form-select" name="Navngiv dokument"
                                        id="select-dokumentationdtype3">
                                        <option value></option>

                                    </select>
                                </div>
                            </td>
                            <td class="mt-4 mt-lg-0">

                                <div class="form-group">
                                    <label class="form-label sr-only" for="id-documentation-3-expanded">Kommentar<span
                                            class="weight-normal">
                                            (frivilligt)</span></label>

                                    <textarea class="form-input input-width-m" placeholder="" id="id-documentation-3-expanded" name="Kommentar" type="text" ></textarea>
                                </div>

                            </td>
                            <td class="align-text-md-right mt-4 mt-lg-0"><a
                                    href="#" class="function-link link-right"
                                    title="Slet fil"><svg class="icon-svg " ><use xlink:href="#delete-outline"></use></svg></a></td>
                        </tr>
                        <tr>
                            <td class="mt-4 mt-lg-0 break-word w-percent-md-40"><svg class="icon-svg " ><use xlink:href="#file"></use></svg>
                                kfo1127303_attest.pdf</td>
                            <td class="mt-4 mt-lg-0">
                                <div class="form-group">
                                    <label class="form-label sr-only" for="select-dokumentationdtype4">Vælg
                                        dokumentationstype</label>
                                    <select class=" form-select" name="Navngiv dokument"
                                        id="select-dokumentationdtype4">
                                        <option value></option>

                                    </select>
                                </div>
                            </td>
                            <td class="mt-4 mt-lg-0">

                                <div class="form-group">
                                    <label class="form-label sr-only" for="id-documentation-4-expanded">Kommentar<span
                                            class="weight-normal">
                                            (frivilligt)</span></label>

                                    <textarea class="form-input input-width-m" placeholder="" id="id-documentation-4-expanded" name="Kommentar" type="text" ></textarea>
                                </div>

                            </td>
                            <td class="align-text-md-right mt-4 mt-lg-0"><a
                                    href="#" class="function-link link-right"
                                    title="Slet fil"><svg class="icon-svg " ><use xlink:href="#delete-outline"></use></svg></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="mt-3">

        <div class="form-group ">
            <input id="id-documentation-3" type="checkbox" name="Tilføj andre dokumenter"
                value="Tilføj andre dokumenter" class="form-checkbox  checkbox-large js-checkbox-toggle-content"
                data-js-target='#collapse-check2' aria-controls='collapse-check2'
                aria-expanded='false'>
            <label for="id-documentation-3" class="">Tilføj andre
                dokumenter</label>
        </div>

        <div id="collapse-check2" aria-hidden="true" class="box-border-l collapsed">
            <div class="py-4">
                <button href="example-aes-page-8" class="button button-secondary mt-4">Tilføj
                    dokument</button>
                <table class="table table--borderless table--compact table--responsive-headers mt-5">
                    <thead>
                        <tr>
                            <th>Filnavn</th>
                            <th>Navngiv dokument</th>
                            <th>Kommentar (frivilligt)</th>
                            <th class="align-text-right">Slet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="break-word w-percent-md-40"><svg class="icon-svg " ><use xlink:href="#file"></use></svg>
                                ohb3428439_attest.pdf</td>
                            <td class="mt-4 mt-lg-0">
                                <div class="form-group">
                                    <label class="form-label sr-only" for="select-dokumentationdtype5">Vælg
                                        dokumentationsype</label>
                                    <select class=" form-select" name="Navngiv dokument"
                                        id="select-dokumentationdtype5">
                                        <option value></option>

                                    </select>
                                </div>
                            </td>
                            <td class="mt-4 mt-lg-0">

                                <div class="form-group">
                                    <label class="form-label sr-only" for="id-documentation-5-expanded">Kommentar<span
                                            class="weight-normal">
                                            (Frivilligt)</span></label>

                                    <textarea class="form-input input-width-m" placeholder="" id="id-documentation-5-expanded" name="Kommentar" type="text" ></textarea>
                                </div>

                            </td>
                            <td class="align-text-md-right mt-4 mt-lg-0"><a
                                    href="#" class="function-link link-right"
                                    title="Slet fil"><svg class="icon-svg " ><use xlink:href="#delete-outline"></use></svg></a></td>
                        </tr>
                        <tr>
                            <td class="mt-4 mt-lg-0 break-word w-percent-md-40"><svg class="icon-svg " ><use xlink:href="#file"></use></svg>
                                sdv5644382_attest.pdf</td>
                            <td class="mt-4 mt-lg-0">
                                <div class="form-group">
                                    <label class="form-label sr-only" for="select-dokumentationdtype6">Vælg
                                        dokumentationstype</label>
                                    <select class=" form-select" name="Navngiv dokument"
                                        id="select-dokumentationdtype6">
                                        <option value></option>

                                    </select>
                                </div>
                            </td>
                            <td class="mt-4 mt-lg-0">

                                <div class="form-group">
                                    <label class="form-label sr-only" for="id-documentation-6-expanded">Kommentar<span
                                            class="weight-normal">
                                            (Frivilligt)</span></label>

                                    <textarea class="form-input input-width-m" placeholder="" id="id-documentation-6-expanded" name="Kommentar" type="text" ></textarea>
                                </div>

                            </td>
                            <td class="align-text-md-right mt-4 mt-lg-0"><a
                                    href="#" class="function-link link-right"
                                    title="Slet fil"><svg class="icon-svg " ><use xlink:href="#delete-outline"></use></svg></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <nav class="page-navigation">
        <a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-8"
            class="button button-primary">Næste</a>
        <a href="/dkfds-docs/pages/eksempler/AES-erstatningssag/aes-6"
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