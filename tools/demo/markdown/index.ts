import { DemoSharedBase } from '../utils';
import {Markdown} from '@ns-markdown/markdown';

export class DemoSharedMarkdown extends DemoSharedBase {
	testIt() {
    Markdown.sayHello()
	}
}
