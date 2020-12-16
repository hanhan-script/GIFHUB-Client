import { combineReducers } from 'redux';
import {
  NEXT_EDITING_STEP,
  PREVIOUS_EDITING_STEP,
  SAVE_START_TIME_STAMP,
  SAVE_DURATION_STAMP,
  SAVE_IMAGE_SIZE_AND_POSITION,
  SAVE_FINAL_FILE_FORMAT,
} from '../constants/actionTypes';

function changeEditingStep(state = 0, action) {
  switch (action.type) {
    case NEXT_EDITING_STEP:
      return state + 1;
    case PREVIOUS_EDITING_STEP:
      return state ? state - 1 : state;
    default:
      return state;
  }
};

function saveStartTimeStamp(state = 0, action) {
  switch (action.type) {
    case SAVE_START_TIME_STAMP:
      return action.payload;
    default:
      return state;
  }
}

function saveDurationStamp(state = 0, action) {
  switch (action.type) {
    case SAVE_DURATION_STAMP:
      return action.payload;
    default:
      return state;
  }
}

function saveImageSizeAndPosition(state = {}, action) {
  switch (action.type) {
    case SAVE_IMAGE_SIZE_AND_POSITION:
      return {...action.payload};
    default:
      return state;
  }
}

function saveFinalFileFormat(state = '', action) {
  switch(action.type) {
    case SAVE_FINAL_FILE_FORMAT:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  saveFinalFileFormat,
  changeEditingStep,
  saveStartTimeStamp,
  saveDurationStamp,
  saveImageSizeAndPosition,
});
