Tinytest.add("example", function (test) {
  var args = [1, 2];

  SimpleSchema = {
    messages: function () {
      test.equal(args, arguments);
    }
  };

  SimpleSchema.messages(1, 2);
});
