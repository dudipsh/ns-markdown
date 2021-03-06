import { Component, NgZone } from '@angular/core';
import { DemoSharedMarkdown } from '@demo/shared';
import {} from '@ns-markdown/markdown';

@Component({
	selector: 'demo-markdown',
	templateUrl: 'markdown.component.html',
})
export class MarkdownComponent {
	demoShared: DemoSharedMarkdown;
  text = '**test** [example](http://example.com)';
	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedMarkdown();
	}
}
