# Simple Schema Translations

This package provides translations for `aldeed:simple-schema`. It's a simple `tap:i18n` integration.

## Install
```
  meteor add naturaily:simple-schema-translations
```

**Disclaimer**: You should already have `aldeed:simple-schema` and `tap:i18n` installed!

## How to use

### Translate labels

If you want to translate labels then you have to edit all your JSON files from `i18n` directory.
Just add an object like this one:

```javascript
  "simpleSchema" : {
    "labels" : {
      "FirstSchemaName" : {
        "username" : "Nazwa użytkownika",
        "password" : "Hasło",
        "email" : "",
      },
      "Namespace.SchemaName" : {
        "title" : "Tytuł",
        "message" : "Wiadomość"
      }
    }
  }
```

Remember to pass empty string `""` if you want to use default content for a label.

### Translate error messages

You have to add an object like the one below to your `i18n/*.i18n.json` file:

```javascript
"simpleSchema" : {
  "errors" : {
    "required": "[label] jest wymagany",
    "regex" : {
      "SimpleSchema.RegEx.Email" : "[label] musi być poprawnym adresem e-mail"
    }
  }
}
```

## License
**The MIT License (MIT)**

Copyright (c) 2015 Naturaily

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
