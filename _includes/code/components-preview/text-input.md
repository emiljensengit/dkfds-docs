--- 
permalink: /preview-components/text-input.html
layout: iframed 
title: Text-input.html
---
<div class="container">

    <div class="form-group">
        <label class="form-label " for="input-type-text">Inputfelt med
            label</label>
        <span class="form-hint" id="input-hint-message-input-type-text">Fx
            12345678</span>

        <input class="form-input   " placeholder="" id="input-type-text"
            value="" name="input-type-text" type="text">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-focus">Inputfelt i fokus</label>

        <input class="form-input  focus " placeholder="" id="input-focus"
            value="" name="input-focus" type="text">
    </div>

    <div class="form-group form-error">
        <label class="form-label " for="form-error">Inputfelt med fejl</label>
        <span class="form-hint" id="input-hint-message-form-error">Fx
            12345678</span>
        <span class="form-error-message" id="form-error-message-form-error"
            role="alert">Hjælpsom fejlbesked</span>
        <input class="form-input   " placeholder="" id="form-error" value=""
            name="form-error" type="text" aria-describedby="form-error-message-form-error"
            aria-describedby="input-hint-message-form-error">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-disabled">Inputfelt som er
            låst</label>

        <input class="form-input   " placeholder="" id="input-disabled"
            value="" name="" type="text" disabled="disabled">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-optional">Inputfelt som er
            valgfrit<span class="weight-normal"> (frivilligt)</span></label>

        <input class="form-input   " placeholder="" id="input-optional"
            value="" name="" type="text">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-readonly">Inputfelt som er
            readonly</label>

        <input class="form-input   " placeholder="" id="input-readonly"
            value="012345-6789" name="" type="text" readonly>
    </div>

</div>