import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewService } from 'src/app/services/lobby/view.service';
import * as _ from 'lodash';

@Component({
	selector: 'app-checkbox-list',
	templateUrl: './checkbox-list.component.html',
	styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent implements OnInit {
	@Input() public data: string[];
	@Output() private selectionChange = new EventEmitter<string[]>();

	currentSelection: string[];

	constructor(public viewService: ViewService) {}

	ngOnInit(): void {
		try {
			this.currentSelection = this.data;
		} catch (e) {
			console.error(e);
			this.currentSelection = [null];
		}
	}

	public updateCurrentSelection(event: string): void {
		let currentSelection = this.currentSelection;

		if (_.find(currentSelection, event)) {
			this.selectionChange.emit(currentSelection);
		}
	}
}
