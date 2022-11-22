import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 35989,
  title: 'Fantástico',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-22T05:50'),
};

export const sampleWithPartialData: IPost = {
  id: 93202,
  title: 'Serbia',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-21T22:03'),
};

export const sampleWithFullData: IPost = {
  id: 23240,
  title: 'recontextualize virtual copying',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-21T23:44'),
};

export const sampleWithNewData: NewPost = {
  title: 'withdrawal',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-22T01:15'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
