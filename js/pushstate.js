$(document).on("pjax:end", function() {
  window.postMessage({ action: "lgtm:refresh" }, "*");
});

$( document ).ajaxComplete(function() {
      if (location.href.split("/").pop() !== "pulls") {
        window.postMessage({ action: "lgtm:refresh" }, "*");
      }
});
