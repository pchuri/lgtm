$(document).on("pjax:end", function() {
    window.postMessage({ action: "lgtm:refresh" }, "*");
    console.log("pjax:end");
});

$("#partial-new-comment-form-actions > button:first-child").live("click", function () {
    commentButton.on("DOMSubtreeModified", function () {
        window.postMessage({ action: "lgtm:refresh" }, "*");
    });
});
