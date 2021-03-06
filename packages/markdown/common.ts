import { CSSType, Observable, Property, TextField, TextView } from '@nativescript/core';


 @CSSType('MarkdownView')
export class MarkdownCommon extends TextView {

   android: any /* android.widget.TextView */;
   ios: any /* UITextView */;

  static sayHello() {
    console.log('commoon,,,')
  }
}


export const markdownProperty = new Property<MarkdownCommon, string>({
  name: "markdown",
  defaultValue: "",
  affectsLayout: true
});

markdownProperty.register(MarkdownCommon);
