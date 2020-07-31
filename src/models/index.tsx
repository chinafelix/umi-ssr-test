import { Effect, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
  level: number;
}

export interface IndexModelType {
  namespace: string;
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: '未知用户',
    level: 0
  },
  effects: {
    *query({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload
      })
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  }
};

export default IndexModel;
