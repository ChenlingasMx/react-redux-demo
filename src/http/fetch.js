/**
 * 请求方法
 */

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  let response
  alert(`网络请求失败,${res.status}`);
  const error = new Error(res.statusText);
  error.response = response;
  throw error;
};

/**
 * 捕获成功登陆过时状态码等
 * @param res
 * @returns {*}
 */
const judgeOkState = async res => {
  const cloneRes = await res.clone().json();
  //TODO:能够在这里管控全局请求
  if (cloneRes.code !== 200) {
    alert(`${cloneRes.msg}${cloneRes.code}`);
  }
  return res;
};

/**
 * 捕获失败
 * @param error
 */
const handleError = error => {
  if (error instanceof TypeError) {
    alert(`网络请求失败啦！${error}`);
  }
  return { //防止页面崩溃，由于每一个接口都有判断res.code以及data
    code: -1,
    data: false,
  };
};

class http {
  /**
  *静态的fetch请求通用方法
  * @param url
  * @param options
  * @returns {Promise<unknown>}
  */
  static async staticFetch(url = '', options = {}) {

    const defaultOptions = {
      /*容许携带cookies*/
      credentials: 'include',
      /*容许跨域**/
      mode: 'cors',
      headers: {
        token: null,
        Authorization: null,
        // 当请求方法是POST，若是不指定content-type是其余类型的话，默认为以下↓，要求参数传递样式为 key1=value1&key2=value2，但实际场景以json为多
        // 'content-type': 'application/x-www-form-urlencoded',
      },
    };
    if (options.method === 'POST' || 'PUT') {
      defaultOptions.headers['Content-Type'] = 'application/json; charset=utf-8';
    }
    const newOptions = { ...defaultOptions, ...options };
    console.log('newOptions', newOptions);
    return fetch(url, newOptions)
      .then(checkStatus)
      .then(judgeOkState)
      .then(res => res.json())
      .catch(handleError);
  }

  /**
  *post请求方式
  * @param url
  * @returns {Promise<unknown>}
  */
  post(url, params = {}, option = {}) {
    const options = Object.assign({ method: 'POST' }, option);
    //通常咱们经常使用场景用的是json，因此须要在headers加Content-Type类型
    options.body = JSON.stringify(params);

    //能够是上传键值对形式，也能够是文件，使用append创造键值对数据
    if (options.type === 'FormData' && options.body !== 'undefined') {
      let params = new FormData();
      for (let key of Object.keys(options.body)) {
        params.append(key, options.body[key]);
      }
      options.body = params;
    }
    return http.staticFetch(url, options); //类的静态方法只能经过类自己调用
  }

  /**
  * put方法
  * @param url
  * @returns {Promise<unknown>}
  */
  put(url, params = {}, option = {}) {
    const options = Object.assign({ method: 'PUT' }, option);
    options.body = JSON.stringify(params);
    return http.staticFetch(url, options); //类的静态方法只能经过类自己调用
  }

  /**
  * get请求方式
  * @param url
  * @param option
  */
  get(url, option = {}) {
    const options = Object.assign({ method: 'GET' }, option);
    return http.staticFetch(url, options);
  }
}

const request = new http(); //new生成实例
export const { post, get, put } = request;
export default request;