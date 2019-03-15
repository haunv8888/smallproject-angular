export const DATA_TYPES = {
  USERS: 'users',
  USERS_DETAIL: 'userdetail',
  PHOTOS: 'photos',
  ALBUMS: 'albums',
};

export interface IDataList {
  items: {};
  loading: boolean;
  error: any;
}

export interface DataState {
  [typeItem: string]: IDataList;
  route?: any;	
}