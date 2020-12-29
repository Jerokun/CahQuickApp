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
		this.currentSelection = this.data;
	}

	public updateCurrentSelection(event: string): void {
		let currentSelection = this.currentSelection;

		if (_.find(currentSelection, event) === false) {
			console.log('Could not find name, adding to the list');
			currentSelection.push(event);
		} else {
			console.log('Name found, removing from the list');
			currentSelection = _.remove(currentSelection, event);
		}

		this.currentSelection = currentSelection;
		this.selectionChange.emit(currentSelection);
	}

	public checkIfSelected(name: string): boolean {
		return _.find(this.currentSelection, name);
	}
}
