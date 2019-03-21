import {Action, State, StateContext} from '@ngxs/store';
import {SaveVersionSuccess} from './app.actions';

export interface ICodeInputState {
  versions_pristine: any[],
  versions: any[]
}

const codeInputState: ICodeInputState = {
  versions: [{id: 1, updated_fields:{'workflow':true}}],
  versions_pristine: [{id: 1, updated_fields:{'workflow':true}}]
};

@State<ICodeInputState>({
  name: 'version',
  defaults: codeInputState
})
export class VersionStateReducer {

  @Action(SaveVersionSuccess)
  SaveVersionSuccess({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: SaveVersionSuccess) {
    let state = getState();
    let index = state.versions.findIndex((version) => version.id === payload.version.id);
    let index_pristine = state.versions_pristine.findIndex((version) => version.id === payload.version.id);

    state.versions[index] = {
      ...payload.version
    };
    state.versions_pristine[index_pristine] = {
      ...payload.version
    };
    patchState({...state});
}
}
