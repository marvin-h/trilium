"use strict";

function syncNow() {
    $.ajax({
        url: baseApiUrl + 'sync/now',
        type: 'POST',
        success: result => {
            if (result.success) {
                status.checkStatus();

                message("Sync triggered.");
            }
            else {
                error("Sync failed");
            }
        },
        error: () => error("Sync failed")
    });
}