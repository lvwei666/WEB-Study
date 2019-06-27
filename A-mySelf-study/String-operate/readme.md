js字符串截取函数slice()、substring()、substr()

取字符串的三个函数:slice(start,[end]),substring(start,[end])和substr(start,[length])
相关属性：

- slice()
第一个参数代表开始位置,第二个参数代表结束位置的下一个位置,截取出来的字符串的长度为第二个参数与第一个参数之间的差;若参数值为负数,则将该值加上字符串长度后转为正值;若第一个参数等于大于第二个参数,则返回空字符串.

- substring()
第一个参数代表开始位置,第二个参数代表结束位置的下一个位置;若参数值为负数,则将该值转为0;两个参数中,取较小值作为开始位置,截取出来的字符串的长度为较大值与较小值之间的差.

- substr()
第一个参数代表开始位置,第二个参数代表截取的长度

PS：字符串都从0开始计起


函数：split() 
功能：使用一个指定的分隔符把一个字符串分割存储到数组
例子：
str=”jpg|bmp|gif|ico|png”;
arr=theString.split(”|”);
//arr是一个包含字符值”jpg”、”bmp”、”gif”、”ico”和”png”的数组

函数：Join() 
功能：使用您选择的分隔符将一个数组合并为一个字符串
例子：
var delimitedString=myArray.join(delimiter);
var myList=new Array(”jpg”,”bmp”,”gif”,”ico”,”png”);
var portableList=myList.join(”|”);
//结果是jpg|bmp|gif|ico|png