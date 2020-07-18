/**
 * 
 * @param {string} string 字符串
 * @returns 返回一个去掉空格的字符串
 */
export function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
