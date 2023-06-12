enum RequestState {
  PADDING = 0,
  SUCCESS = 200,
  ERROR = 500,
}
export default class Request<T> {
  private state = RequestState.PADDING; //  状态
  private msg = ""; //                      消息
  private data?: T; //                      数据
  static async request<T>(func: (...args: any) => Promise<T>, primary: any) {
    const request = new Request<T>();
    try {
      await func.call(undefined, ...primary);
      request.state = RequestState.SUCCESS;
    } catch {
      request.state = RequestState.ERROR;
    }
    return request;
  }
  success() {
    return this.state === RequestState.SUCCESS;
  }
  error() {
    return this.state === RequestState.ERROR;
  }
  getDate() {
    return this.data;
  }
  getMsg() {
    return this.msg;
  }
}
