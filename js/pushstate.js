if (location.href.split("/").pop() !== "pulls") {
  $( document ).ajaxComplete(function() {
    window.postMessage({ action: "lgtm:refresh" }, "*");
});
}
