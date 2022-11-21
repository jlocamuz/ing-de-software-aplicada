import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 35989,
  title: 'Fantástico',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-21T06:01'),
};

export const sampleWithPartialData: IPost = {
  id: 93202,
  title: 'Serbia',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-20T22:14'),
};

export const sampleWithFullData: IPost = {
  id: 23240,
  title: 'recontextualize virtual copying',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-20T23:55'),
};

export const sampleWithNewData: NewPost = {
  title: 'withdrawal',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-21T01:26'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
