import { Tutorial } from '../models/tutorial.model';
import { 
    State,
    Selector,
    Action,
    StateContext
 } from "@ngxs/store";
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.action';

export class TutorialStateModel {
    tutorials: Tutorial[];
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState {

    // The @Selector() decorator allows you to create functions to return data, or return specific results from your data.
    // These allow you to reduce code in your components and access them from multiple locations.
    @Selector() 
    static getTutorials( state: TutorialStateModel) {
        return state.tutorials;
    }

    //We use the @Action() decorator to handle dispatched actions.
    // We've defined 2 actions for adding a tutorial and removing one. Both actions include a payload, 
    // as both require data in order to handle the action appropriately, but payloads are not required.
    @Action(AddTutorial)
    add( 
        { getState, patchState}: StateContext<TutorialStateModel>,
        { payload }: AddTutorial ) {

            // You can use getState() to get the current state, setState() and patchState().
            // We're using patchState() instead of setState() as it helps to reduce the necessary code.
            const state = getState();
            patchState({
                tutorials: [...state.tutorials, payload]
            })
        }

        @Action(RemoveTutorial)
        remove( { getState, patchState}: StateContext<TutorialStateModel>, { payload }: RemoveTutorial ) {

                patchState ( {

                    tutorials: getState().tutorials.filter( a => a.name != payload)
                    
                })
            }    
}