import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'whtml',
	templateUrl: './html.component.html',
	styleUrls: ['./html.component.scss']
})
export class HtmlComponent{
	@Input() model: any = "";
	@Input() disabled: boolean = false;
	@Input() inline: boolean = false;
	@Input() placeholder: string = "";
	@Output() modelChange = new EventEmitter()
	constructor() {}
}
