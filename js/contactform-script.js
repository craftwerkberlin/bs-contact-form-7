jQuery(document).ready(function ($) {

    /* Validation Events for changing response CSS classes */
    document.addEventListener('wpcf7invalid', function (event) {
        $('.wpcf7-response-output').addClass('alert alert-danger');
    }, false);
    document.addEventListener('wpcf7spam', function (event) {
        $('.wpcf7-response-output').addClass('alert alert-warning');
    }, false);
    document.addEventListener('wpcf7mailfailed', function (event) {
        $('.wpcf7-response-output, .wpcf7-response-output.wpcf7-display-none.wpcf7-acceptance-missing').addClass('alert alert-warning');
    }, false);
    document.addEventListener('wpcf7mailsent', function (event) {
        $('.wpcf7-response-output').addClass('alert alert-success');
        $('.wpcf7-response-output').removeClass('alert-danger');
    }, false);


    // Acceptance
    if (!$('.wpcf7-response-output.wpcf7-display-none').hasClass('wpcf7-acceptance-missing')) {
        $('.wpcf7-response-output.wpcf7-display-none').addClass('alert alert-danger')
    }

    document.addEventListener('wpcf7invalid', function (event) {
        $('label.custom-control.custom-checkbox').addClass('not-valid');
    }, false);
    document.addEventListener('wpcf7mailsent', function (event) {
        $('label.custom-control.custom-checkbox').removeClass('not-valid checked');
    }, false);


    $('input#2').change(function () {
        if ($(this).is(":checked")) {
            $('label.custom-control.custom-checkbox').addClass('checked');
        } else {
            $('label.custom-control.custom-checkbox.not-valid').removeClass('checked');
        }
    });

    // Disable Send Button
    $('input#2').click(function () {
        if ($('button.btn.btn-primary.wpcf7-submit').is(':disabled')) {
            $('button.btn.btn-primary.wpcf7-submit').removeAttr('disabled');
        } else {
            $('button.btn.btn-primary.wpcf7-submit').attr('disabled', 'disabled');
        }
    });

}); // jQuery End
