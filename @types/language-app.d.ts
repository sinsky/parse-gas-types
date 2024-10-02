interface LanguageApp{
/**Automatically translates some text from a source language to a destination language.

```
// The code below will write "Esta es una prueba" to the log.
  var spanish = LanguageApp.translate('This is a test', 'en', 'es');
  Logger.log(spanish);
```

A list of language codes is available [here](/translate/docs/languages).
@param text the text to translate
@param sourceLanguage the language code in which text is written. If it is set to the empty
    string, the source language code will be auto-detected
@param targetLanguage the language code to which the text should be translated
@return the translated text*/translate(text:string,sourceLanguage:string,targetLanguage:string):string;
/**Automatically translates some text from a source language to a destination language.

```
// The code below will write "Esta es una <strong>prueba</strong>" to the log.
  var spanish = LanguageApp.translate('This is a &lt;strong&gt;test&lt;/strong&gt;',
                                      'en', 'es', {contentType: 'html'});
  Logger.log(spanish);
```

A list of language codes is available [here](/translate/docs/languages).
@param text the text to translate
@param sourceLanguage the language code in which text is written. If it is set to the empty
    string, the source language code will be auto-detected
@param targetLanguage the language code to which the text should be translated
@param advancedArgs optional JavaScript object fields
@return the translated text*/translate(text:string,sourceLanguage:string,targetLanguage:string,advancedArgs:Object):string;}const LanguageApp:LanguageApp;