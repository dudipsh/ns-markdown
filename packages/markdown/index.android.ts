import { MarkdownCommon, markdownProperty } from './common';

declare var android;
declare var io: any;
// @ts-ignore

import { fontSizeProperty } from '@nativescript/core';



​const md = io.noties.markwon;


export class Markdown extends MarkdownCommon {
  _android: any = null; // android.widget.TextView
​
  markwon: any;
​​

  constructor() {
    super();
  }

​
  //
  // get android(): android.widget.TextView {
  //   return this._android;
  // }

  public createNativeView() {
    const img = io.noties.markwon.image;
    this.markwon = md.Markwon.builder(this._context)
      .usePlugin(img.ImagesPlugin.create())
      .build();

    this._android = new android.widget.TextView(this._context);
    this._android.setInputType(android.text.InputType.TYPE_NULL);
    return this._android;
  }

  [fontSizeProperty.setNative](fontSize: number) {
    this._android.setTextSize(Number(fontSize));
  }

  [markdownProperty.setNative](markdown: string) {
    this.markwon.setMarkdown(this.nativeView, markdown);
  }


}
