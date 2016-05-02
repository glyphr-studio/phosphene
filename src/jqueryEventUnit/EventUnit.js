(function ($) {
  var mutedToken = "_muted";

  $.fn.extend({
    notify: function () {
      if (!this.data(mutedToken)) this.trigger(...arguments);
    },
    mute: function () {
      this.data(mutedToken, true);
    },
    unmute: function() {
      this.data(mutedToken, false);
    }
  })
})($);