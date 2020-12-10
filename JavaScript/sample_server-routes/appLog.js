// This is to handle app runtime events and information, namely errors.

function appLog(error) {
    console.error(error.message);
}

exports.appLog = appLog;