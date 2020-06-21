import {
  TypedUseSelectorHook,
  useSelector as overriddenUseSelector,
} from 'react-redux';

import { RootState } from 'app/rootReducer';

export const useSelector: TypedUseSelectorHook<RootState> = overriddenUseSelector;
