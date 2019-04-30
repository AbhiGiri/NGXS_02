import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Store, Select } from '@ngxs/store';
import { RemoveTutorial } from 'src/app/actions/tutorial.action';
import { TutorialState } from 'src/app/state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // tutorials$: Observable<Tutorial>; ..............commented

  
  // we can make use of our state's Selector function for returning the state in even less code:
  // This allows us to use the @Select decorator to pass in the getTutorials selector that we created in the state!
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>

  constructor( private store: Store) {
  // Here, we're using an instance of Store to select the tutorials from the state and binding it to an observable.
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials); ................Commented

   }

  //  also creating a method, to handle dispatching the RemoveTutorial action.
   deleteTutorial(name) {
     this.store.dispatch( new RemoveTutorial(name));
   }


  ngOnInit() {
  }

}
