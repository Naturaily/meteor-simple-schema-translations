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

  return messagesChain.pairs().map(pairToRegexObject).value();
}

function getSchema(name) {
  schema = window;

  _.each(name.split('.'), function(name){
    schema = schema[name];
  });

  if(schema === window) return null;
  else return schema;
}

// PUBLIC FUNCTIONS (to use inside of the package)

translateErrorMessages = function (messages) {
  var regexMessages;

  if (typeof messages === "object") {
    messages.regEx = parseRegexMessages(messages.regex);
    messages       = _.omit(messages, "regex");
    messages       = _.extend({}, originalMessages, messages);
  } else {
    messages = originalMessages;
  }

  SimpleSchema.messages(messages);
};

translateLabels = function (labels) {
  _.each(_.pairs(labels), function(pair) {
    schema = getSchema(pair[0]);
    schema.labels(pair[1]);
  });
};
