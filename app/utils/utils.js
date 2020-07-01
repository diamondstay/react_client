const Utils = {
  escapeString(string) {
    return string.replace(/[^A-Z0-9\.]+/gi, '_');
  },
  buildUrlWithParams(url, params, removeEncode) {
    let ret = '';
    url += '?';
    for (const d in params) {
      if (params[d] || params[d] === 0) {
        if (removeEncode) {
          ret += `${d}=${params[d]}&`;
        } else {
          ret += `${encodeURIComponent(d)}=${encodeURIComponent(params[d])}&`;
        }
      }
    }
    ret = ret.replace(/&$/, '');
    return url + ret;
  },
};

export default Utils;
