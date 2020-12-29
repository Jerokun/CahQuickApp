import { Component, Input, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
	selector: 'app-checkbox-list',
	templateUrl: './checkbox-list.component.html',
	styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent implements OnInit {
	@Input() public data: string[];

	constructor(public viewService: ViewService) {}

	ngOnInit(): void {}
}
