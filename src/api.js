
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://ripley-test-isaac.herokuapp.com"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
const urlFinal = proxyurl + url;
export default urlFinal;