import {MAX_PERCENT_NUMBER, MAX_RATING_NUMBER} from '../const.ts';

export const getRatingInPercents = (currentRatingNumber: number): string => `${currentRatingNumber / MAX_RATING_NUMBER * MAX_PERCENT_NUMBER}%`;
