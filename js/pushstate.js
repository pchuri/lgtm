$( document ).ajaxComplete(function(e, xhr, settings) {
      console.log(settings.url);
      if (settings.url !== "/notifications/header") {
        window.postMessage({ action: "lgtm:refresh" }, "*");
      }
});
