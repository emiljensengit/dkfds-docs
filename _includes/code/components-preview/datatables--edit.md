--- 
permalink: /preview-components/datatables--edit.html
layout: iframed 
title: Datatables--edit.html
---
<div class="container">
    <p class="form-label">Funktionalitet i overflow-menu</p>
    <table id="js-datatable-example-edit" class="table table--zebra table--lines w-percent-100">
        <thead>
            <tr>
                <th>Navn</th>
                <th>Vej</th>
                <th>By</th>
                <th>Firmanavn</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <!-- filled in by js-->
        </tbody>
    </table>
</div>

<div class="container pt-7">
    <p class="form-label">Funktionalitet uden overflow-menu</p>
    <table id="js-datatable-example-edit2" class="table table--zebra table--lines w-percent-100">
        <thead>
            <tr>
                <th>Navn</th>
                <th>Vej</th>
                <th>By</th>
                <th>Firmanavn</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <!-- filled in by js-->
        </tbody>
    </table>
</div>

<!-- MODAL EDIT START -->
<div class="modal" id="modal-edit" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true"
            aria-labelledby="modal-edit-title">
            <header class="modal__header">
                <h1 class="modal__title h2" id="modal-edit-title">
                    Datatable details row edit
                </h1>
            </header>
            <main class="modal__content" id="modal-edit-content">
                <div class="row">
                    <div class="col-12">
                        <div class="alert alert-error alert--show-icon"
                            role="alert" aria-label="Beskedbox der viser en fejlmeddelselse">
                            <div class="alert-body">
                                <h3 class="alert-heading">Error alert -
                                    with icon</h3>
                                <p class="alert-text">Sed ut perspiciatis
                                    unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                                    laudantium.</p>
                            </div>
                        </div>
                        <input id="edit-row-id" name="" type="hidden">
                        <div class="form-group">
                            <label class="form-label">Navn:</label>
                            <input class="form-input" id="edit-navn" name=""
                                type="text">
                        </div>
                        <div class="form-group input-error">
                            <label class="form-label " for="input-error">Vejnavn</label>
                            <span class="form-hint" id="input-hint-message-input-error">For
                                example, lærkevej</span>
                            <span class="input-error-message" id="input-error-message-input-error"
                                role="alert">Fejl i vejnavn</span>
                            <input class="form-input" id="edit-vejnavn"
                                name="input-error" type="text"
                                aria-describedby="input-error-message-input-error">
                        </div>
                        <div class="form-group">
                            <label class="form-label">By:</label>
                            <input class="form-input" id="edit-by" name=""
                                type="text">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Firmanavn:</label>
                            <input class="form-input" id="edit-firmanavn"
                                name="" type="text">
                        </div>
                    </div>
                </div>
            </main>
            <footer class="modal__footer">
                <button class="button button-primary js-edit-save-trigger"
                    aria-label="Save changes to the row">Gem</button>
                <button class="button button-quaternary"
                    data-micromodal-close aria-label="Close this dialog window, no changes saved">Annuller</button>
                <!--<button class="button button-primary">En knap</button>
                <button class="button button-secondary" data-micromodal-close aria-label="Close this dialog window">Knap som lukker modal</button>-->
            </footer>
            <button class="modal__close button button-quaternary"
                aria-label="Close modal" data-micromodal-close>Luk</button>
        </div>
    </div>
</div>
<!-- MODAL EDIT END -->

<!-- MODAL DELETE START -->
<div class="modal" id="modal-delete" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true"
            aria-labelledby="modal-delete-title">
            <header class="modal__header">
                <h1 class="modal__title h2" id="modal-delete-title">
                    Godkend slet
                </h1>
            </header>
            <main class="modal__content" id="modal-delete-content">
                <p>Er du sikker på at du gerne vil slette rækken?</p>
            </main>
            <footer class="modal__footer">
                <button class="button button-primary js-delete-trigger">Ja</button>
                <button class="button button-secondary"
                    data-micromodal-close aria-label="Close this dialog window">Nej</button>
            </footer>
            <button class="modal__close button button-quaternary"
                aria-label="Close modal" data-micromodal-close>Luk</button>
        </div>
    </div>
</div>
<!-- MODAL DELETE END -->