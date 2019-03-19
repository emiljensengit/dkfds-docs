--- 
permalink: /preview-components/password-reset-form.html
layout: iframed 
title: Password-reset-form.html
---
<form class="form">
    <fieldset>
        <legend class="drop_text">Reset password</legend>
        <span class="serif">Please enter your new password</span>

        <div class="alert alert-info">
            <div class="alert-body">
                <h3 class="alert-heading">Passwords must:</h3>
            </div>
            <ul class="checklist" id="validation_list">
                <li data-validator="length">Be at least 8 characters</li>
                <li data-validator="uppercase">Have at least 1 uppercase
                    character</li>
                <li data-validator="numerical">Have at least 1 numerical
                    character</li>
                <li>Another requirement</li>
            </ul>
        </div>

        <label for="password">New password</label>
        <input id="password" name="password" type="password"
            aria-describedby="validation_list" data-validate-length=".{8,}"
            data-validate-uppercase="[A-Z]" data-validate-numerical="\d"
            data-validation-element="#validation_list">

        <label for="confirmPassword">Confirm password</label>
        <input id="confirmPassword" name="confirmPassword" type="password">
        <p class="form-note">
            <a href="javascript:void(0);" class="show_multipassword"
                aria-controls="password-reset confirmPassword">Show my
                typing</a>
        </p>

        <input type="submit" value="Reset password">
    </fieldset>
</form>