import {combineReducers} from 'redux';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors/errors_reducer';
import uiReducer from './ui/ui_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  ui: uiReducer,
  errors: ErrorsReducer
});

export default RootReducer;