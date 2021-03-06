import { platformNativeScriptDynamic, registerElement } from '@nativescript/angular';
import { AppModule } from "./app.module";

registerElement('Markdown', () => require('../../../dist/packages/markdown').Markdown);

platformNativeScriptDynamic().bootstrapModule(AppModule);
