import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { HtmlComponent } from './html.component';
import { NgxTinymceModule } from 'ngx-tinymce';

@NgModule({
	imports: [
		CoreModule,
		NgxTinymceModule.forRoot({
	      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.7.1/',
	  })
	],
	declarations: [
		HtmlComponent
	],
	exports: [
		HtmlComponent
	],
	providers: []

})

export class HtmlModule { }
