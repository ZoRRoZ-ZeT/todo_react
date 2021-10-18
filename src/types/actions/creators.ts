export type IAction<TType extends string, TPayload extends unknown> = {
  type: TType;
  payload?: TPayload;
};

export const createSocketAction = <TType extends string, Payload>(
  type: TType
) => {
  const ActionSend = `${type}__SEND` as `${TType}__SEND`;
  const ActionReceive = `${type}__RECEIVE` as `${TType}__RECEIVE`;

  type SendType = IAction<`${TType}__SEND`, Payload>;
  type ReceiveType = IAction<`${TType}__RECEIVE`, Payload>;
  return {
    send: (payload?: Payload): SendType => ({
      type: `${type}__SEND`,
      payload,
    }),
    receive: (payload?: Payload): ReceiveType => ({
      type: `${type}__RECEIVE`,
      payload,
    }),
    types: {
      SEND: ActionSend,
      RECEIVE: ActionReceive,
    },
  };
};

export const createAsyncAction = <
  TType extends string,
  RPayload,
  SPayload,
  FPayload
>(
  type: TType
) => {
  const ActionRequest = `${type}__REQUEST` as `${TType}__REQUEST`;
  const ActionSuccess = `${type}__SUCCESS` as `${TType}__SUCCESS`;
  const ActionFailed = `${type}__FAILED` as `${TType}__FAILED`;

  type RequestType = IAction<`${TType}__REQUEST`, RPayload>;
  type SuccessType = IAction<`${TType}__SUCCESS`, SPayload>;
  type FailedType = IAction<`${TType}__FAILED`, FPayload>;
  return {
    request: (payload?: RPayload): RequestType => ({
      type: `${type}__REQUEST`,
      payload,
    }),
    success: (payload?: SPayload): SuccessType => ({
      type: `${type}__SUCCESS`,
      payload,
    }),
    failed: (payload?: FPayload): FailedType => ({
      type: `${type}__FAILED`,
      payload,
    }),
    types: {
      REQUEST: ActionRequest,
      SUCCESS: ActionSuccess,
      FAILED: ActionFailed,
    },
  };
};
