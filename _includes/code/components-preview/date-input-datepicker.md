--- 
permalink: /preview-components/date-input-datepicker.html
layout: iframed 
title: Date-input-datepicker.html
---
<div class="container">

    <fieldset>
        <div class="form-group">
            <label class="form-label icon-link">Indsendelsesfrist</label>
            <span class="form-hint">For eksempel: 05 12 2018</span>
            <span class="form-error-message" id="form-error-message-input-error"
                role="alert"></span>
            <div class="date-group js-calendar-group mt-3">
                <div class="form-group form-group-day">
                    <label class="form-label" for="date_of_day_2">Dag</label>
                    <input class="form-input js-calendar-day-input" id="date_of_day_2"
                        type="tel" min="1" max="31" maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$" title="Indskriv dag på månenden som tal">
                </div>
                <div class="form-group form-group-month">
                    <label class="form-label" for="date_of_month_1">Måned</label>
                    <input class="form-input js-calendar-month-input" id="date_of_month_1"
                        type="tel" min="1" max="12" maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$" title="Indskriv månedens nummer">
                </div>
                <div class="form-group form-group-year ">
                    <label class="form-label" for="date_of_year_3">År</label>
                    <input class="form-input js-calendar-year-input" for="date_of_year_3"
                        type="tel" min="1900" max="3000" maxlength="4"
                        pattern="^[0-9]{0,4}$" data-input-regex="^[0-9]{0,4}$"
                        title="Indskriv årstal">
                </div>

                <button class="button-unstyled button-open-calendar js-calendar-datepicker">
                    <svg class="icon-svg "><use xlink:href="#calendar"></use></svg>
                </button>

            </div>
        </div>
    </fieldset>

</div>