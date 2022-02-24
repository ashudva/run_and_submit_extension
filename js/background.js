// Grab the action when a shortcut is pressed

chrome.commands.onCommand.addListener(function (command) {
    const action = command.split('-')[0];

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log('action:', action, 'command:', command);
        chrome.tabs.sendMessage(tabs[0].id, { action });
    });
});