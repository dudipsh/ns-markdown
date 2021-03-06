import { EventData, Page } from '@nativescript/core';
import { MainViewModel } from "./main-view-model";
import { registerElement } from '@nativescript/angular';

registerElement('MarkdownView', () => require('../../../packages/markdown').MarkdownView);


export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new MainViewModel();
}
