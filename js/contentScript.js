// Add Event Listeners for Background Script
chrome.runtime.onMessage.addListener(function (message) {
    const { action } = message;
    console.log(action, message);

    //  Get Run and Submit Buttons
    const run = document.getElementsByClassName('btn bb-compile msR ')[0];
    const submit = document.getElementsByClassName('btn btn-primary bb-submit ans-submit')[0];
    const next = document.getElementsByClassName('ui-btn ui-btn-normal ui-btn-secondary submission-wrapper-next-entity-btn ui-btn-link ui-btn-styled')[0];

    // Based on the action, perform the appropriate action
    switch (action) {
        case 'run':
            if (run) {
                run.click();
            }
            break;
        case 'submit':
            if (submit) {
                submit.click();
            }
            break;
        case 'next':
            if (next) {
            next.click();
            }
        break;
        default:
            break;
    }
});