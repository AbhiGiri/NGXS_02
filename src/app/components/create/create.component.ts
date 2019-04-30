import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor( private store: Store) { }

  //Similar to Ngrx, we use .dispatch() to dispatch an action. In our case,
  //we're importing AddTutorial from our actions and dispatching it with a payload of name and url,
  //which will come from a form.
  addTutorial( name, url ) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }


  ngOnInit() {
  }

}
