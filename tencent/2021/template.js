// 实现一个字符串的模板引擎方法：template(str, obj) ，将str中的变量替换后返回目标字符串
// 例如：template("${ name }你好,欢迎来到${ company}", {name: '张三', company: '腾讯'})
// 结果为："张三你好,欢迎来到腾讯"
function template(str, obj) {
  // 通过正则匹配
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    const reg = new RegExp("\\${\\s*" + key + "\\s*}", "g");
    str = str.replace(reg, val);
  });
  return str;
}

console.log(
  template("${ name }你好,欢迎来到${ company}", {
    name: "张三",
    company: "腾讯",
  })
);
