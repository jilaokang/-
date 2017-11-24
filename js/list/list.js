// ide-change ide-value=true | false

var ide_value = "false";

$(".weui-switch").click(function() {
  ide_value = ide.checked;
});

if(ide_value){
  
}


var life = new Vue({
  el: "#block",
  data: {
    life: [
      {
        id: 01,
        item: "不显示",
        include: 0,
        font: "&#xe60e;",
        color: "#111111",
        display: "0",
        url: ""
      },
      {
        id: 01,
        item: "一卡通缴费",
        include: 0,
        font: "&#xe60e;",
        color: "#111111",
        display: "true",
        url: ""
      },
      {
        id: 01,
        item: "一卡通缴费",
        include: 0,
        font: "&#xe60e;",
        color: "#111111",
        display: "true",
        url: ""
      },
      {
        id: 01,
        item: "一卡通缴费",
        include: 0,
        font: "&#xe60e;",
        color: "#111111",
        display: "true",
        url: ""
      }
    ],
    thought:[
      {
        id: 01,
        item: "一卡通缴费",
        include: 0,
        font: "&#xe60e;",
        color: "#111111",
        display: "true",
        url: ""
      },
      {
        id: 01,
        item: "一卡通缴费",
        include: 0,
        font: "&#xe60e;",
        color: "#111111",
        display: "true",
        url: ""
      }   
    ]
  }
});
