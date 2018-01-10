var str = "7E-01-00-00-21-01-41-42-16-47-25-00-01-00-2C-01-2F-37-30-31-31-31-42-53-4A-4D-31-31-2D-32-30-30-30-30-30-30-30-01-D4-C1-42-38-38-38-38-38-34-7E";

var strs = new Array();

strs = str.split("-");


for (i = 0; i < strs.length; i++) {
    var strs16 = parseInt(strs[i],16);
    console.log(strs16); //分割后的字符输出 
}