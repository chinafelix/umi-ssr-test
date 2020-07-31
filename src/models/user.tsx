import { Effect, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
  isValidate: boolean
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
  namespace: 'user',
  state: {
    name: '聚米科技信息服务有限公司',
    isValidate: true
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
      // dispatch({
      //   type: 'query'
      // })
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
