import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from 'reducers/auth';
import log from 'reducers/log';
import status from 'reducers/status';
import version from 'reducers/version';

export default combineReducers({
  auth,
  form,
  log,
  status,
  version,
});