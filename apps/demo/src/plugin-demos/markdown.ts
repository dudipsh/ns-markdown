import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMarkdown } from '@demo/shared';
import {} from '@ns-markdown/markdown';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMarkdown {
  text = 'this is test'
}
