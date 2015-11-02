$(document).on("pjax:end", function() {
  window.postMessage({ action: "lgtm:refresh" }, "*");
});

function callRefresh() {
  if (location.href.split("/").pop() !== "pulls") {
    window.postMessage({ action: "lgtm:refresh" }, "*");
  }
}

var refreshInterval = 1000;
setInterval(callRefresh, refreshInterval);