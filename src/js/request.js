/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
 const httprequest = axios.create({
    baseURL: "",
    //timeout: 1000,
    headers: {
      token: "",
    },
  });
  
  // 请求拦截器
  httprequest.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  function get(url, params) {
    return new Promise((resolve, reject) => {
      httprequest
        .get(url, { params: params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  // qs.stringify(data)
  function post(url, data) {
    return new Promise((resolve, reject) => {
      httprequest
        .post(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  
  