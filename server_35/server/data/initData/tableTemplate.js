
const commonProduct={
  selectedLine           :
  { colOrder:1 ,lb:'_',     type:"radio", 
    width:40,   showCol:true,  showColHead:true,    
  },
  id            :
    { colOrder:2 ,lb:'ID',     type:"number",
      width:65,   showCol:true,  showColHead:true,    
    },
  barcode           :
    { colOrder:3 ,lb:'บาร์โคด',type:"string",
      width:65,   showCol:true,  showColHead:true,    
    },
  productName      :
    { colOrder:4 ,lb:'ชื่อ',type:"string",
      width:100,   showCol:true,  showColHead:true,      
    },
  groupId      :
    { colOrder:5 ,lb:'ไอดีกลุ่ม',type:"number",
      width:70,   showCol:true,  showColHead:true,      
    },  
  groupName      :
    { colOrder:6 ,lb:'ชื่อกลุ่ม',type:"string",
      width:60,   showCol:true,  showColHead:true,      
    }, 
  unit      :
    { colOrder:7 ,lb:'หน่วย',type:"string",
      width:40,   showCol:true,  showColHead:true,      
    },
  price     :
    { colOrder:8 ,lb:'ราคา',     type:"number",
      width:60,   showCol:true,  showColHead:true,    
    },
}

const productTableTemplate={
...commonProduct,
isRawMat      :
  { colOrder:9 ,lb:'เป็นวัตถุดิบ',type:"boolean",
    width:100,   showCol:true,  showColHead:true,      
  },   
point      :
  { colOrder:10 ,lb:'แต้ม',type:"number",
    width:60,   showCol:true,  showColHead:true,      
  },  
stock      :
  { colOrder:11 ,lb:'ยอดสต็อค',type:"number",
    width:60,   showCol:true,  showColHead:true,      
  },   

order      :
  { colOrder:12 ,lb:'ยอดจอง',type:"number",
    width:60,   showCol:false,  showColHead:true,      
  },   
plan      :
  { colOrder:13 ,lb:'ยอดแผน',type:"number",
    width:60,   showCol:false,  showColHead:true,      
  },

active      :
  { colOrder:14 ,lb:'แอคทีฟ',type:"boolean",
    width:100,   showCol:true,  showColHead:true,      
  },  
remark      :
  { colOrder:15 ,lb:'หมายเหตุ',type:"string",
    width:200,   showCol:true,  showColHead:true,      
  },  
photoUrl1      :
  { colOrder:16 ,lb:'รูป',type:"arrayPhoto",
    width:200,   showCol:true,  showColHead:true,
  },
}


const partnerTableTemplate={
selectedLine           :
{ colOrder:1 ,lb:'_',     type:"radio",
  width:40,   showCol:true,  showColHead:true,    
},
id            :
{ colOrder:2 ,lb:'ID',     type:"number",
  width:40,   showCol:true,  showColHead:true,    
},
title           :
{ colOrder:3 ,lb:'คำนำหน้า',type:"string",
  width:60,   showCol:true,  showColHead:true,    
},
name      :
{ colOrder:4 ,lb:'ชื่อ',type:"string",
  width:100,   showCol:true,  showColHead:true,      
},
phone         :
{ colOrder:5 ,lb:'โทรศัพท์', type:"array",
  width:120,   showCol:true,  showColHead:true,      
},
partnerType      :
{ colOrder:6 ,lb:'ประเภทคู่ค้า',type:"string",
  width:70,   showCol:true,  showColHead:true,      
},    
address       :
{ colOrder:7 ,lb:'ที่อยู่',type:"array",                      
  width:200,   showCol:true,  showColHead:true,
},
active      :
  { colOrder:8 ,lb:'แอคทีฟ',type:"boolean",
    width:100,   showCol:true,  showColHead:true,                         
  }, 
remainingCustomerPoint      :
  { colOrder:9 ,lb:'point',type:"number",
    width:70,   showCol:true,  showColHead:true,      
  }, 
totalSpending      :
  { colOrder:10 ,lb:'ยอดใช้จ่าย',type:"number",
    width:70,   showCol:true,  showColHead:true,      
  }, 
remark      :
{ colOrder:11 ,lb:'หมายเหตุ',type:"string",
  width:200,   showCol:true,  showColHead:true,      
},  

}
//============================

const printTableTemplate={
  selectedLine     :{colOrder:1 ,lb:'_',type:"radio",width:40,showCol:true,showColHead:true}, 
  printLb          :{colOrder:2 ,lb:'หัวข้อ',type:"string",width: 120,showCol:true,showColHead:true}, 
  printValue       :{colOrder:3 ,lb:'ค่า',type:"string",width:120,showCol:true,showColHead:true}, 
  printFieldName   :{colOrder:4 ,lb:'ค่า',type:"string",width:120,showCol:true,showColHead:true},
  printFontSize    :{colOrder:5 ,lb:'ขนาดฟอนท์',type:"string",width:80,showCol:true,showColHead:true},
  printWidth       :{colOrder:6 ,lb:'ความกว้าง',type:"string",width:80,showCol:true,showColHead:true},
  printPosition    :{colOrder:7 ,lb:'ตำแหน่ง',type:"string",width:80,showCol:true,showColHead:true},
  show             :{colOrder:8 ,lb:'แสดง',type:"boolean",width:80,showCol:true,showColHead:true},
}  
  
//============================
const transactionTableTemplate={
selectedLine           :
  { colOrder:1 ,lb:'_',     type:"radio",
    width:40,   showCol:true,  showColHead:true,    
  }, 
id            :
  { colOrder:2 ,lb:'ID',     type:"number",
    width:100,   showCol:true,  showColHead:true,    
  },
date           :
  { colOrder:3 ,lb:'วันที่',type:"date",
  width: 90,   showCol:true,  showColHead:true,    
  }, 
remindDate           :
  { colOrder:4 ,lb:'วันที่เตือน',type:"date",
  width: 90,   showCol:false,  showColHead:true,    
  }, 
/*
branchId          :
  { colOrder:5 ,lb:'รหัสสาขา',type:"string",
    width:60,   showCol:true,  showColHead:true,    
  },
branchName          :
  { colOrder:6 ,lb:'ชื่อสาขา',type:"string",
    width:60,   showCol:true,  showColHead:true,    
},
*/
transactionType      :
  { colOrder:7 ,lb:'ประเภทเอกสาร',type:"string",
    width:80,   showCol:true,  showColHead:true,      
  },
transactionStatus      :
  { colOrder:8 ,lb:'สถานะเอกสาร',type:"string",
    width:80,   showCol:true,  showColHead:true,      
  },
active      :
  { colOrder:9 ,lb:'แอคทีฟ',type:"string",
    width:80,   showCol:true,  showColHead:true,      
  },

table      :
  { colOrder:10 ,lb:'โต๊ะ',type:"string",
    width:80,   showCol:true,  showColHead:true,      
  },

tableStatus      :
  { colOrder:11 ,lb:'สถานะโต๊ะ',type:"string",
    width:80,   showCol:true,  showColHead:true,      
  },

queue      :
  { colOrder:12 ,lb:'คิว',type:"number",
    width:80,   showCol:true,  showColHead:true,      
  },

queueStatus      :
  { colOrder:13 ,lb:'สถานะคิว',type:"string",
    width:80,   showCol:true,  showColHead:true,      
  },
/////////////////////////////////////////////
effectStock      :
  { colOrder:14 ,lb:'กระทบสต็อก',type:"string",
    width:80,   showCol:false,  showColHead:true,      
  },
effectSpending      :
  { colOrder:15 ,lb:'กระทบยอดสะสม',type:"string",
    width:80,   showCol:false,  showColHead:true,      
  },
effectCustomerPoint      :
  { colOrder:16 ,lb:'กระทบแต้มสะสม',type:"string",
    width:80,   showCol:false,  showColHead:true,      
  },


partnerId      :
  { colOrder:17 ,lb:'ไอดีคู่ค้า',type:"number",
    width:60,   showCol:true,  showColHead:true,      
  },  
partnerType      :
  { colOrder:18 ,lb:'ประเภทคู่ค้า',type:"string",
    width:60,   showCol:true,  showColHead:true,      
  },  
title          :
  { colOrder:19 ,lb:'คำนำหน้า',type:"string",
    width:60,   showCol:true,  showColHead:true,    
  },
name      :
  { colOrder:20 ,lb:'ชื่อ',type:"string",
    width:100,   showCol:true,  showColHead:true,      
  },
phone         :
  { colOrder:21 ,lb:'โทรศัพท์', type:"array",
    width:110,   showCol:true,  showColHead:true,      
  }, 
address       :
  { colOrder:22 ,lb:'ที่อยู่',type:"string",
    width:200,   showCol:true,  showColHead:true,
  },

paymentType      :
  { colOrder:23 ,lb:'ประเภทการชำระเงิน',type:"string",
    width:80,   showCol:true,  showColHead:true,      
  },
total            :
{ colOrder:24 ,lb:'รวม',     type:"number",
  width:70,   showCol:true,  showColHead:true,showSum:true     
},
totalReduction           :
{ colOrder:25 ,lb:'รวมส่วนลด',     type:"number",
  width:70,   showCol:true,  showColHead:true, showSum:true   
},
totalTax           :
{ colOrder:26 ,lb:'รวมภาษี',     type:"number",
  width:70,   showCol:true,  showColHead:true, showSum:true   
},

grandTotal            :
{ colOrder:27 ,lb:'สุทธิ',     type:"number",
  width:80,   showCol:true,  showColHead:true, showSum:true    
},
totalPoint      :
  { colOrder:28 ,lb:'แต้ม',type:"number",
    width:70,   showCol:true,  showColHead:true,      
  }, 
reductCustomerPoint      :
  { colOrder:29 ,lb:'หักแต้มสะสม',type:"number",
    width:150,   showCol:true,  showColHead:true,      
  }, 

remark      :
{ colOrder:30 ,lb:'หมายเหตุ',type:"string",
  width:200,   showCol:false,  showColHead:true,      
},  

}


//======================
//======================
const productDetailTableTemplate={
//selectedLine :{ colOrder: ,lb:'_',     type:"radio",width:40,   showCol:true,  showColHead:true},  
//icon: {colOrder: ,lb: "",type: "icon", width: 60, showCol: true, showColHead: true},
id: {colOrder:1 ,lb: "ไอดี",type: "number", width: 60, showCol: true, showColHead: true},
barcode: { colOrder:2 ,lb: "บาร์โค้ด",type: "string", width: 100, showCol: true, showColHead: true},
productName: {colOrder:3 ,lb: "ชื่อ",type: "string", width: 240, showCol: true, showColHead: true},

groupId: {colOrder:4 ,lb: "ไอดีกลุ่ม",type: "number", width: 60, showCol: true, showColHead: true },
groupName: {colOrder:5 ,lb: "ชื่อกลุ่ม",type: "string", width: 90, showCol: true, showColHead: true},

quantity: {colOrder:6 ,lb: "จำนวน",type: "number", width: 60, showCol: true, showColHead: true,showSum:true},
unit: {colOrder:7 ,lb: "หน่วย",type: "string", width: 80, showCol: true, showColHead: true},
price: {colOrder:8 ,lb: "ราคา",type: "number", width: 100, showCol: true, showColHead: true},
result: {colOrder:9 ,lb: "รวม",type: "number", width: 100, showCol: true, showColHead: true,showSum:true},
isRawMat: { colOrder:10 ,lb: "เป็นวัตถุดิบ",type: "boolean", width: 40, showCol: true, showColHead: true},
remark: {colOrder:11 ,lb: "หมายเหตุ",type: "string", width: 200, showCol: true, showColHead: true},
}

const productDetailTableTemplateForForm={
  selectedLine :{ colOrder:1 ,lb:'_',     type:"radio",width:40,   showCol:true,  showColHead:true},  
  //icon: {colOrder: ,lb: "",type: "icon", width: 60, showCol: true, showColHead: true},
  id: {colOrder:2 ,lb: "ไอดี",type: "number", width: 60, showCol: true, showColHead: true},
  barcode: { colOrder:3 ,lb: "บาร์โค้ด",type: "string", width: 100, showCol: true, showColHead: true},
  productName: {colOrder:4 ,lb: "ชื่อ",type: "string", width: 240, showCol: true, showColHead: true},

  groupId: {colOrder:5 ,lb: "ไอดีกลุ่ม",type: "number", width: 60, showCol: false, showColHead: true },
  groupName: {colOrder:6 ,lb: "ชื่อกลุ่ม",type: "string", width: 90, showCol: false, showColHead: true},

  quantity: {colOrder:7 ,lb: "จำนวน",type: "number", width: 60, showCol: true, showColHead: true},
  unit: {colOrder:8 ,lb: "หน่วย",type: "string", width: 80, showCol: true, showColHead: true},
  price: {colOrder:9 ,lb: "ราคา",type: "price", width: 100, showCol: true, showColHead: true},
  result: {colOrder:10 ,lb: "รวม",type: "number", width: 100, showCol: true, showColHead: true},
  isRawMat: { colOrder:11 ,lb: "เป็นวัตถุดิบ",type: "boolean", width: 40, showCol: true, showColHead: true},
  point: { colOrder:12 ,lb:'แต้ม',type:"number",width:70,   showCol:true,  showColHead:true}, 
  remark: {colOrder:13 ,lb: "หมายเหตุ",type: "string", width: 200, showCol: true, showColHead: true},

  //partnerId:{ colOrder: ,lb:'ไอดีคู่ค้า',type:"number",width:60,   showCol:true,  showColHead:true},  
  //name:{ colOrder: ,lb:'ชื่อ',type:"string",width:100,   showCol:true,  showColHead:true},
  jobStatus:{ colOrder:14 ,lb:'สถานะงาน',type:"string",width:100,   showCol:true,  showColHead:true},
  detailTime:{ colOrder:15 ,lb:'เวลาสั่ง',type:"time",width:100,   showCol:true,  showColHead:true},

}



const basicDataTableTemplate={
id            :
{ colOrder:1 ,lb:'ไอดี',     type:"number",
  width:50,   showCol:true,  showColHead:true,    
},
routeAddress            :
{ colOrder:2 ,lb:'url',     type:"string",
  width:200,   showCol:true,  showColHead:true,    
},
routeName           :
{ colOrder:3 ,lb:'ชื่อสิทธิ์',type:"string",
  width:100,   showCol:true,  showColHead:true,    
},
userLevel           :
{ colOrder:4 ,lb:'กลุ่มผู้มีสิทธิ์',type:"array",
  width:350,   showCol:true,  showColHead:true,    
},

}

//===========================

const billMenuTableTemplate={

  id:{...transactionTableTemplate.id,colOrder:1},
  date:{...transactionTableTemplate.date,colOrder:2},
  time:
  { colOrder:3,lb:'เวลา',type:"time",
  width: 90,   showCol:true,  showColHead:true,    
  }, 
  detailTime:
  { colOrder:4,lb:'เวลาสั่ง',type:"time",
  width: 100,   showCol:true,  showColHead:true,    
  }, 
  transactionType:{...transactionTableTemplate.transactionType,colOrder:5},
  table:{...transactionTableTemplate.table,colOrder:6},
  tableStatus:{...transactionTableTemplate.tableStatus,colOrder:7},

  queue:{...transactionTableTemplate.queue,colOrder:8},
  queueStatus:{...transactionTableTemplate.queueStatus,colOrder:9},
   
  productId:{...productDetailTableTemplateForForm.id,colOrder:10},
  productBarcode:{...productDetailTableTemplateForForm.barcode,colOrder:11},
  productName:{...productDetailTableTemplateForForm.productName,colOrder:12},

  quantity:{...productDetailTableTemplateForForm.quantity,colOrder:13},
  unit:{...productDetailTableTemplateForForm.unit,colOrder:14},
  price: {...productDetailTableTemplateForForm.price,type: "number",colOrder:15},
  jobStatus:{...productDetailTableTemplateForForm.jobStatus,colOrder:16}  

}

  
const basicDataTransactionTableTemplate={
  transactionType:{colOrder:1 ,lb: "ประเภทบิล",type: "string", width: 100, showCol: true, showColHead: true},
  effectStock:{colOrder:2 ,lb: "กระทบสต็อก",type: "string", width: 100, showCol: true, showColHead: true},
  effectSpending:{colOrder:3 ,lb: "กระทบยอดใช้จ่าย",type: "string", width: 100, showCol: true, showColHead: true},
  effectCustomerPoint:{colOrder:4 ,lb: "กระทบแต้มสะสม",type: "string", width: 100, showCol: true, showColHead: true},
}
  
const basicDataTaxTableTemplate={
  taxName:{colOrder:1 ,lb: "ชื่อภาษี",type: "string", width: 100, showCol: true, showColHead: true},
  taxActive:{colOrder:2 ,lb: "ใช้งานภาษี",type: "boolean", width: 100, showCol: true, showColHead: true},
  taxRate:{colOrder:3 ,lb: "อัตราภาษี",type: "number", width: 100, showCol: true, showColHead: true},
  taxInPercentage:{colOrder:4 ,lb: "เป็นเปอร์เซ็น",type: "boolean", width: 100, showCol: true, showColHead: true},
}

const basicDataReductionTableTemplate={
  reductionName:{colOrder:1 ,lb: "ชื่อส่วนลด",type: "string", width: 100, showCol: true, showColHead: true},
  reductionActive:{colOrder:2 ,lb: "ใช้งานส่วนลด",type: "boolean", width: 100, showCol: true, showColHead: true},
  reductionRate:{colOrder:3 ,lb: "อัตราส่วนลด",type: "number", width: 100, showCol: true, showColHead: true},
  reductionInPercentage:{colOrder:4 ,lb: "เป็นเปอร์เซ็น",type: "boolean", width: 100, showCol: true, showColHead: true},
}

const userListTableTemplate={
  id:       { colOrder:1 ,lb:'ไอดี',type:"number", width:50,   showCol:true,  showColHead:true},
  username: { colOrder:2 ,lb:'ยูซเซอร์เนม',type:"string",width:100,   showCol:true,  showColHead:true},
  active :  { colOrder:3 ,lb:'แอคทีฟ',type:"boolean", width:50,   showCol:true,  showColHead:true},
  userLevel:{ colOrder:4 ,lb:'ระดับผู้ใช้',type:"string",width:100,   showCol:true,  showColHead:true},
  name:     { colOrder:5,lb:'ชื่อ',type:"string",width:100,   showCol:true,  showColHead:true},
  surname:  { colOrder:6 ,lb:'นามสกุล',type:"string",width:100,   showCol:true,  showColHead:true},
  //branchId: { colOrder:7 ,lb:'เลขที่สาขา',type:"number", width:50,   showCol:true,  showColHead:true},
  //branchName:{ colOrder:8 ,lb:'ชื่อสาขา',type:"string",width:100,   showCol:true,  showColHead:true},
}

//=========================

const tableTemplate = {
basicDataTableTemplate,
productTableTemplate,
productDetailTableTemplate,
productDetailTableTemplateForForm,
productDetailTableTemplateForTransaction:productDetailTableTemplateForForm,
partnerTableTemplate,

transactionTableTemplate,
billMenuTableTemplate,
printTableTemplate,
basicDataTransactionTableTemplate,
basicDataTaxTableTemplate,
basicDataReductionTableTemplate,
userListTableTemplate
//transactionLogTableTemplate,
//transactionGraphTableTemplate,
//transactionWiDetailGraphTableTemplate
}

module.exports = tableTemplate
