import { RootState } from '../../../store/store';

export const getPhrase = (state:RootState) => state.info.phrase
export const getLoading = (state:RootState) => state.info.status
export const getPhError = (state:RootState) => state.info.error
