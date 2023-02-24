//Patch for progress event XHR
(function(jQuery, window, undefined) {
  //is onprogress supported by browser?
  var hasOnProgress = ("onprogress" in jQuery.ajaxSettings.xhr());
  //If not supported, do nothing
  console.log('hasOnProgress');
  console.log(hasOnProgress);
  if (!hasOnProgress) {
    return;
  }
  //patch ajax settings to call a progress callback
  var oldXHR = jQuery.ajaxSettings.xhr;
  jQuery.ajaxSettings.xhr = function() {
    var xhr = oldXHR.apply(this, arguments);
    if(xhr instanceof window.XMLHttpRequest) {
        xhr.addEventListener('progress', this.progress, false);
    }
    if(xhr.upload) {
        xhr.upload.addEventListener('progress', this.progress, false);
    }
    return xhr;
  };
})(window.jQuery_3_2_1, window);

/**
*
* jquery.binarytransport.js
*
* @description. jQuery ajax transport for making binary data type requests.
* @version 1.0
* @author Henry Algus <henryalgus@gmail.com>
*
*/

(function($, undefined) {
  "use strict";

  // use this transport for "binary" data type
  $.ajaxTransport("+binary", function(options, originalOptions, jqXHR) {
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == 'binary')) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob))))) {
      return {
        // create new XMLHttpRequest
        send: function(headers, callback) {
          // setup all variables
          var xhr = new XMLHttpRequest(),
            url = options.url,
            type = options.type,
            async = options.async || true,
            // blob or arraybuffer. Default is blob
            dataType = options.responseType || "blob",
            data = options.data || null,
            username = options.username || null,
            password = options.password || null,
            overrideMimeType = options.overrideMimeType || 'application/octet-stream';

          xhr.addEventListener('load', function() {
            var data = {};
            data[options.dataType] = xhr.response;
            // make callback and send data
            callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
          });
          xhr.addEventListener('error', function() {
            var data = {};
            data[options.dataType] = xhr.response;
            // make callback and send data
            callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
          });
          xhr.open(type, url, async, username, password);
          // setup custom headers
          for (var i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          xhr.overrideMimeType = overrideMimeType;
          xhr.responseType = dataType;
          xhr.send(data);
        },
        abort: function() {}
      };
    }
  });
})(window.jQuery_3_2_1);
