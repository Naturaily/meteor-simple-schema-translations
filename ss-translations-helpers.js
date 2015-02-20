var originalMessages = _.clone(SimpleSchema._globalMessages);

// PRIVATE FUNCTIONS 

function pairToRegexObject(pair) {
  var obj = {msg: pair[1]};

  if (pair[0] !== "default")
    obj.exp = SimpleSchema.RegEx[pair[0]];

  return obj;
}

function parseRegexMessages(obj) {
  var messagesChain = _.chain(obj).clone();

  messagesChain.pairs().map(pairToRegexObject);

  return messagesChain.value();
}

function changeRegexMessages(messages, regexMessages) {
  
}

// PUBLIC FUNCTIONS (to use inside of the package)

translateErrorMessages = function (messages) {
  var regexMessages;

  if (typeof messages === "object") {
    regexMessages = parseRegexMessages(messages.regex);
    messages = _.omit(messages, "regex");
    messages = _.extend({}, originalMessages, messages);
    changeRegexMessages(messages, regexMessages);
  } else {
    messages = originalMessages;
  }

  SimpleSchema.messages(messages);
};

translateLabels = function (labels) {
  _.each(_.pairs(labels), function(pair) {
    schema = window[pair[0]];
    schema.labels(pair[1]);
  });
};
