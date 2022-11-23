import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 35989,
  title: 'Fantastic',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-23T05:53'),
};

export const sampleWithPartialData: IPost = {
  id: 93202,
  title: 'Seychelles',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-22T22:06'),
};

export const sampleWithFullData: IPost = {
  id: 23240,
  title: 'recontextualize virtual copying',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-22T23:47'),
};

export const sampleWithNewData: NewPost = {
  title: 'withdrawal',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2022-11-23T01:18'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
