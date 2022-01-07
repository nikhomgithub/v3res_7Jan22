const { partner } = require("../../routes/params")

const formTemplate=[
    {   formName:"shopInfo",
        formHead:"รายละเอียดร้าน (หัวบิล)",
        formLanguage:"Thai",
        id: "Thai-shopInfo",
        shopId:"shopa",
        template:[
            {key:"name",lb:"ชื่อร้าน"},
            {key:"address",lb:"ที่อยู่"},
            {key:"contact",lb:"ติดต่อ"},
            {key:"branch",lb:"สาขา"},
            {key:"other",lb:"อื่นๆ"},
            {key:"logo",lb:"โลโก้"},
        ]
    },
    //===========================
    {   formName:"shopInfo",
        formHead:"Shop Infomation",
        formLanguage:"English",
        id: "English-shopInfo",
        shopId:"shopa",
        template:[
        {key:"name",lb:"Shop Name"},
        {key:"address",lb:"Address"},
        {key:"contact",lb:"Contact"},
        {key:"branch",lb:"Branch"},
        {key:"other",lb:"Other"},
        {key:"logo",lb:"Logo"},
        ]
   },
    //===========================
    {formName:"shopInfo",
       formHead:"Shop Infomation",
       formLanguage:"Default",
       id: "Default-shopInfo",
       shopId:"shopa",
       template:[
       {key:"name",lb:"Shop Name"},
       {key:"address",lb:"Address"},
       {key:"contact",lb:"Contact"},
       {key:"branch",lb:"Branch"},
       {key:"other",lb:"Other"},
       {key:"logo",lb:"Logo"},
       ]
  },
   //============================
  //==============================
    {   formName:"setting",
        formHead:"ตั้งค่าระบบ",
        formLanguage:"Thai",
        id: "Thai-setting",
        shopId:"shopa",
        template:[
            {key:"backup",lb:"สำรองข้อมูลเมื่อเปิดโปรแกรม"},
            {key:"password",lb:"เปลี่ยนรหัสร้าน"},
            {key:"user",lb:"เพิ่มผู้ใช้"},
            {key:"routeAuth",lb:"กำหนดสิทธิ์ผู้ใช้"},
            {key:"language",lb:"เลือกภาษา"}
        ]
    },
    //=========================
    {   formName:"setting",
        formHead:"System Setting",
        formLanguage:"English",
        id: "English-setting",
        shopId:"shopa",
        template:[
            {key:"backup",lb:"Back Up"},
            {key:"password",lb:"Change Shop Password"},
            {key:"user",lb:"Add User"},
            {key:"routeAuth",lb:"User Level"},
            {key:"language",lb:"Language Setting"}
        ]
    },
    {   formName:"setting",
        formHead:"System Setting",
        formLanguage:"Default",
        id: "Default-setting",
        shopId:"shopa",
        template:[
            {key:"backup",lb:"Back Up"},
            {key:"password",lb:"Change Shop Password"},
            {key:"user",lb:"Add User"},
            {key:"routeAuth",lb:"User Level"},
            {key:"language",lb:"Language Setting"}
        ]
    },
    //=========================
    {   formName:"basicValue",
        formHead:"ตั้งค่าพื้นฐาน ",
        formLanguage:"Thai",
        id: "Thai-basicValue",
        shopId:"shopa",
        template:[
            {key:"language",lb:"ภาษา"},
            {key:"branch",lb:"สาขา"},
            {key:"partnerType",lb:"ประเภทคู่ค้า"},
            {key:"unit",lb:"หน่วย"},
            {key:"title",lb:"คำนำหน้า"},
            {key:"transactionType",lb:"ประเภทบิล"},
            {key:"transactionStatus",lb:"สถานะบิล"},
            {key:"table",lb:"โต๊ะ"},
            {key:"tableStatus",lb:"สถานะโต๊ะ"},
            {key:"jobStatus",lb:"สถานะงาน"},
            {key:"tax",lb:"ภาษี"},
            {key:"reduction",lb:"ส่วนลด"},
            {key:"userLevel",lb:"กำหนดสิทธิ์ผู้ใช้"},
            {key:"paymentType",lb:"ประเภทการชำระเงิน"},
        ]
    },
    //=======================
    {formName:"basicValue",
    formHead:"Basic Setting",
    formLanguage:"English",
    id: "English-basicValue",
    shopId:"shopa",
    template:[
        {key:"language",lb:"Language"},
        {key:"branch",lb:"Branch"},
        {key:"partnerType",lb:"Customer Type"},
        {key:"unit",lb:"Unit"},
        {key:"title",lb:"Title"},
        {key:"transactionType",lb:"Bill Type"},
        {key:"transactionStatus",lb:"Bill Status"},
        {key:"table",lb:"Table"},
        {key:"tableStatus",lb:"Table Status"},
        {key:"jobStatus",lb:"Job Status"},
        {key:"tax",lb:"Tax"},
        {key:"reduction",lb:"Reduction"},
        {key:"userLevel",lb:"User Level"},
        {key:"paymentType",lb:"Payment Type"},
    ]
    },
    {formName:"basicValue",
    formHead:"Basic Setting",
    formLanguage:"Default",
    id: "Default-basicValue",
    shopId:"shopa",
    template:[
        {key:"language",lb:"Language"},
        {key:"branch",lb:"Branch"},
        {key:"partnerType",lb:"Customer Type"},
        {key:"unit",lb:"Unit"},
        {key:"title",lb:"Title"},
        {key:"transactionType",lb:"Bill Type"},
        {key:"transactionStatus",lb:"Bill Status"},
        {key:"table",lb:"Table"},
        {key:"tableStatus",lb:"Table Status"},
        {key:"jobStatus",lb:"Job Status"},
        {key:"tax",lb:"Tax"},
        {key:"reduction",lb:"Reduction"},
        {key:"userLevel",lb:"User Level"},
        {key:"paymentType",lb:"Payment Type"},
    ]
    },
    //=============================
    {   formName:"shopChangePassword",
        formHead:"เปลี่ยนรหัสร้าน",
        formLanguage:"Thai",
        id: "Thai-shopChangePassword",
        shopId:"shopa",
        template:[
            {key:"shopName",lb:"ชื่อร้าน"},
            {key:"password",lb:"รหัส"},
            {key:"newPassword1",lb:"รหัสใหม่"},
            {key:"newPassword2",lb:"ยืนยันรหัสใหม่"},
        ]
    },
        //=============================
    {   formName:"shopChangePassword",
        formHead:"เปลี่ยนรหัสร้าน",
        formLanguage:"English",
        id: "English-shopChangePassword",
        shopId:"shopa",
        template:[
            {key:"shopName",lb:"Shop Name"},
            {key:"password",lb:"Password"},
            {key:"newPassword1",lb:"New Password"},
            {key:"newPassword2",lb:"Confirm New Password"},
        ]
    },
    {   formName:"shopChangePassword",
        formHead:"เปลี่ยนรหัสร้าน",
        formLanguage:"Default",
        id: "Default-shopChangePassword",
        shopId:"shopa",
        template:[
            {key:"shopName",lb:"Shop Name"},
            {key:"password",lb:"Password"},
            {key:"newPassword1",lb:"New Password"},
            {key:"newPassword2",lb:"Confirm New Password"},
        ]
        },
    //=============================
    {   formName:"addUser",
        formHead:"เพิ่มผู้ใช้",
        formLanguage:"Thai",
        id: "Thai-addUser",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ไอดี"},
            {key:"username",lb:"ยูสเซอร์เนม"},
            {key:"password",lb:"รหัส"},
            {key:"userLevel",lb:"ระดับผู้ใช้"},
            {key:"name",lb:"ชื่อ"},
            {key:"surname",lb:"นามสกุล"},
        ]
    },
    {   
        formName:"addUser",
        formHead:"Add User",
        formLanguage:"English",
        id: "English-addUser",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"username",lb:"Username"},
            {key:"password",lb:"password"},
            {key:"userLevel",lb:"User Level"},
            {key:"name",lb:"Name"},
            {key:"surname",lb:"Surname"},
        ]
    },
    {   
        formName:"addUser",
        formHead:"Add User",
        formLanguage:"Default",
        id: "Default-addUser",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"username",lb:"Username"},
            {key:"password",lb:"password"},
            {key:"userLevel",lb:"User Level"},
            {key:"name",lb:"Name"},
            {key:"surname",lb:"Surname"},
        ]
    },

//========================
    {   
        formName:"basicDataTableTemplate",
        formHead:"ตารางสิทธิ์การใช้งาน",
        formLanguage:"Thai",
        id: "Thai-basicDataTableTemplate",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ไอดี"},
            {key:"routeAddress",lb:"url"},
            {key:"routeName",lb:"ชื่อสิทธิ์"},
            {key:"userLevel",lb:"กลุ่มผู้มีสิทธิ์"},
        ]
    },
    {   
        formName:"basicDataTableTemplate",
        formHead:"Route Auth Table",
        formLanguage:"English",
        id: "English-basicDataTableTemplate",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"routeAddress",lb:"url"},
            {key:"routeName",lb:"Route Name"},
            {key:"userLevel",lb:"User Level"}
        ]
    },
    {   
        formName:"basicDataTableTemplate",
        formHead:"Route Auth Table",
        formLanguage:"Default",
        id: "Default-basicDataTableTemplate",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"routeAddress",lb:"url"},
            {key:"routeName",lb:"Route Name"},
            {key:"userLevel",lb:"User Level"}
        ]
    },
    //================================
    {   
        formName:"partnerTableTemplate",
        formHead:"ตารางลูกค้า",
        formLanguage:"Thai",
        id: "Thai-partnerTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ไอดี"},
            {key:"title",lb:"คำนำหน้า"},
            {key:"name",lb:"ชื่อ"},
            {key:"phone",lb:"โทร"},
            {key:"partnerType",lb:"ประเภท"},
            {key:"address",lb:"ที่อยู่"},
            {key:"remark",lb:"หมายเหตุ"},
        ]
    },
    {   
        formName:"partnerTableTemplate",
        formHead:"Partner Table",
        formLanguage:"English",
        id: "English-partnerTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"title",lb:"title"},
            {key:"name",lb:"name"},
            {key:"phone",lb:"phone"},
            {key:"partnerType",lb:"type"},
            {key:"address",lb:"address"},
            {key:"remark",lb:"remark"},
        ]
    },
    {   
        formName:"partnerTableTemplate",
        formHead:"Partner Table",
        formLanguage:"Default",
        id: "Default-partnerTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"title",lb:"title"},
            {key:"name",lb:"name"},
            {key:"phone",lb:"phone"},
            {key:"partnerType",lb:"type"},
            {key:"address",lb:"address"},
            {key:"remark",lb:"remark"},
        ]
    },
    //============================
    {   
        formName:"productTableTemplate",
        formHead:"ตารางสินค้า",
        formLanguage:"Thai",
        id: "Thai-productTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ไอดี"},
            {key:"barcode",lb:"บาร์โค้ด"},
            {key:"productName",lb:"ชื่อสินค้า"},
            {key:"groupId",lb:"ไอดีกลุ่ม"},
            {key:"groupName",lb:"ชื่อกลุ่ม"},
            {key:"unit",lb:"หน่วย"},
            {key:"price",lb:"ราคา"},
            {key:"isRawMat",lb:"เป็นวัตถุดิบ"},
            {key:"stock",lb:"ยอดสต็อก"},
            {key:"order",lb:"ยอดสั่ง"},
            {key:"plan",lb:"ยอดแผน"},
            {key:"remark",lb:"หมายเหตุ"},
        ]
    },
    {   
        formName:"productTableTemplate",
        formHead:"Product Table",
        formLanguage:"English",
        id: "English-productTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group Id"},
            {key:"groupName",lb:"Group Name"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"isRawMat",lb:"isRawMat"},
            {key:"stock",lb:"Stock"},
            {key:"order",lb:"Order"},
            {key:"plan",lb:"Plan"},
            {key:"remark",lb:"Remark"},
        ]
    },
    {   
        formName:"productTableTemplate",
        formHead:"Product Table",
        formLanguage:"Default",
        id: "Default-productTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group Id"},
            {key:"groupName",lb:"Group Name"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"isRawMat",lb:"isRawMat"},
            {key:"stock",lb:"Stock"},
            {key:"order",lb:"Order"},
            {key:"plan",lb:"Plan"},
            {key:"remark",lb:"Remark"},
        ]
    },
    //============================
    {   
        formName:"transactionTableTemplate",
        formHead:"ตารางบิล",
        formLanguage:"Thai",
        id: "Thai-transactionTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ไอดี"},
            {key:"date",lb:"วันที่"},
            {key:"remindDate",lb:"วันที่เตือน"},
            {key:"branch",lb:"สาขา"},
            {key:"transactionType",lb:"ประเภทบิล"},
            {key:"transactionStatus",lb:"สถานะบิล"},
            {key:"active",lb:"แอคทีฟ"},
            {key:"table",lb:"โต๊ะ"},
            {key:"tableStatus",lb:"สถานะโต๊ะ"},
            {key:"effectStock",lb:"กระทบสต็อก"},
            {key:"effectOrder",lb:"กระทบจอง"},
            {key:"effectPlan",lb:"กระทบแผน"},
            {key:"partnerId",lb:"ไอดีลูกค้า"},
            {key:"partnerType",lb:"ประเภทลูกค้า"},
            {key:"title",lb:"คำนำหน้า"},
            {key:"name",lb:"ชื่อ"},
            {key:"phone",lb:"โทร"},
            {key:"address",lb:"ที่อยู่"},
            {key:"paymentType",lb:"ประเภทการชำระเงิน"},
            {key:"total",lb:"รวม"},
            {key:"reduction",lb:"ส่วนลด"},
            {key:"tax",lb:"ภาษี"},
            {key:"grandTotal",lb:"สุทธิ"},
            {key:"remark",lb:"หมายเหตุ"},
        ]
    },
    {   
        formName:"transactionTableTemplate",
        formHead:"Bill Table",
        formLanguage:"English",
        id: "English-transactionTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"date",lb:"Date"},
            {key:"remindDate",lb:"Remind Date"},
            {key:"branch",lb:"Branch"},
            {key:"transactionType",lb:"Bill Type"},
            {key:"transactionStatus",lb:"Bill Status"},
            {key:"active",lb:"Active"},
            {key:"table",lb:"Table"},
            {key:"tableStatus",lb:"Table Status"},
            {key:"effectStock",lb:"Effect Stock"},
            {key:"effectOrder",lb:"Effect Order"},
            {key:"effectPlan",lb:"Effect Plan"},
            {key:"partnerId",lb:"Customer ID"},
            {key:"partnerType",lb:"Customer Type"},
            {key:"title",lb:"Title"},
            {key:"name",lb:"Name"},
            {key:"phone",lb:"Phone"},
            {key:"address",lb:"Address"},
            {key:"paymentType",lb:"Payment Type"},
            {key:"total",lb:"Total"},
            {key:"reduction",lb:"Reduction"},
            {key:"tax",lb:"Tax"},
            {key:"grandTotal",lb:"Grand Total"},
            {key:"remark",lb:"Remark"},
        ]
    },
    {   
        formName:"transactionTableTemplate",
        formHead:"Bill Table",
        formLanguage:"Default",
        id: "Default-transactionTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"date",lb:"Date"},
            {key:"remindDate",lb:"Remind Date"},
            {key:"branch",lb:"Branch"},
            {key:"transactionType",lb:"Bill Type"},
            {key:"transactionStatus",lb:"Bill Status"},
            {key:"active",lb:"Active"},
            {key:"table",lb:"Table"},
            {key:"tableStatus",lb:"Table Status"},
            {key:"effectStock",lb:"Effect Stock"},
            {key:"effectOrder",lb:"Effect Order"},
            {key:"effectPlan",lb:"Effect Plan"},
            {key:"partnerId",lb:"Customer ID"},
            {key:"partnerType",lb:"Customer Type"},
            {key:"title",lb:"Title"},
            {key:"name",lb:"Name"},
            {key:"phone",lb:"Phone"},
            {key:"address",lb:"Address"},
            {key:"paymentType",lb:"Payment Type"},
            {key:"total",lb:"Total"},
            {key:"reduction",lb:"Reduction"},
            {key:"tax",lb:"Tax"},
            {key:"grandTotal",lb:"Grand Total"},
            {key:"remark",lb:"Remark"},
        ]
    },


//=========================
    {   
        formName:"ProductDetailTableTemplate",
        formHead:"ตารางรายละเอียดสินค้า",
        formLanguage:"Thai",
        id: "Thai-ProductDetailTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ไอดี"},
            {key:"barcode",lb:"บาร์โค้ด"},
            {key:"productName",lb:"ชื่อสินค้า"},
            {key:"groupId",lb:"ไอดีกลุ่ม"},
            {key:"groupName",lb:"ชื่อกลุ่ม"},
            {key:"quantity",lb:"จำนวน"},
            {key:"unit",lb:"หน่วย"},
            {key:"price",lb:"ราคา"},
            {key:"result",lb:"รวม"},
            {key:"isRawMat",lb:"เป็นวัตถุดิบ"},
            {key:"remark",lb:"หมายเหตุ"},
        ]
    },
    {   
        formName:"ProductDetailTableTemplate",
        formHead:"Product Detail Table",
        formLanguage:"English",
        id: "English-ProductDetailTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"Barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group ID"},
            {key:"groupName",lb:"Group Name"},
            {key:"quantity",lb:"Quantity"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"result",lb:"Result"},
            {key:"isRawMat",lb:"isRawMat"},
            {key:"remark",lb:"Remark"},
        ]
    },
    {   
        formName:"ProductDetailTableTemplate",
        formHead:"Product Detail Table",
        formLanguage:"Default",
        id: "Default-ProductDetailTableTemplate",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"Barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group ID"},
            {key:"groupName",lb:"Group Name"},
            {key:"quantity",lb:"Quantity"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"result",lb:"Result"},
            {key:"isRawMat",lb:"isRawMat"},
            {key:"remark",lb:"Remark"},
        ]
    },
//===============================

    {   
        formName:"ProductDetailTableTemplateForForm",
        formHead:"ตารางรายละเอียดสินค้า 2",
        formLanguage:"Thai",
        id: "Thai-ProductDetailTableTemplateForForm",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ไอดี"},
            {key:"barcode",lb:"บาร์โค้ด"},
            {key:"productName",lb:"ชื่อสินค้า"},
            {key:"groupId",lb:"ไอดีกลุ่ม"},
            {key:"groupName",lb:"ชื่อกลุ่ม"},
            {key:"quantity",lb:"จำนวน"},
            {key:"unit",lb:"หน่วย"},
            {key:"price",lb:"ราคา"},
            {key:"result",lb:"รวม"},
            {key:"isRawMat",lb:"เป็นวัตถุดิบ"},
            {key:"remark",lb:"หมายเหตุ"},

            {key:"partnerId",lb:"ไอดีลูกค้า"},
            {key:"name",lb:"ชื่อ"},
            {key:"jobStatus",lb:"สถานะงาน"},

        ]
    },
    {   
        formName:"ProductDetailTableTemplateForForm",
        formHead:"Product Detail Table2",
        formLanguage:"English",
        id: "English-ProductDetailTableTemplateForForm",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"Barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group ID"},
            {key:"groupName",lb:"Group Name"},
            {key:"quantity",lb:"Quantity"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"result",lb:"Result"},
            {key:"isRawMat",lb:"isRawMat"},
            {key:"remark",lb:"Remark"},

            {key:"partnerId",lb:"Partner ID"},
            {key:"name",lb:"Name"},
            {key:"jobStatus",lb:"Job Status"},
        ]
    },
    {   
        formName:"ProductDetailTableTemplateForForm",
        formHead:"Product Detail Table2",
        formLanguage:"Default",
        id: "Default-ProductDetailTableTemplateForForm",
        shopId:"shopa",
        template:[
            {key:"selectedLine",lb:"_"},
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"Barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group ID"},
            {key:"groupName",lb:"Group Name"},
            {key:"quantity",lb:"Quantity"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"result",lb:"Result"},
            {key:"isRawMat",lb:"isRawMat"},
            {key:"remark",lb:"Remark"},

            {key:"partnerId",lb:"Partner ID"},
            {key:"name",lb:"Name"},
            {key:"jobStatus",lb:"Job Status"},
        ]
    },
    {
        formName:"partnerFilter",
        formHead:"",
        formLanguage:"Thai",
        id: "Thai-partnerFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ไอดี"},
            {key:"title",lb:"คำนำหน้า"},
            {key:"name",lb:"ชือ"},
            {key:"phone",lb:"โทร"},
            {key:"remark",lb:"หมายเหตุ"},
        ]
    },
    {
        formName:"partnerFilter",
        formHead:"",
        formLanguage:"English",
        id: "English-partnerFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"title",lb:"Title"},
            {key:"name",lb:"Name"},
            {key:"phone",lb:"Phone"},
            {key:"remark",lb:"Remark"},
        ]
    },
    {
        formName:"partnerFilter",
        formHead:"",
        formLanguage:"Default",
        id: "Default-partnerFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"title",lb:"Title"},
            {key:"name",lb:"Name"},
            {key:"phone",lb:"Phone"},
            {key:"remark",lb:"Remark"},
        ]
    },

    {
        formName:"productFilter",
        formHead:"",
        formLanguage:"Thai",
        id: "Thai-productFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ไอดี"},
            {key:"barcode",lb:"บาร์โค้ด"},
            {key:"productName",lb:"ชื่อสินค้า"},
            {key:"groupId",lb:"ไอดีกลุ่ม"},
            {key:"groupName",lb:"ชื่อกลุ่ม"},
            {key:"unit",lb:"หน่วย"},
            {key:"price",lb:"ราคา"},
            {key:"isRawMat",lb:"เป็นวัตถุดิบ"},
            {key:"remark",lb:"หมายเหตุ"},
        ]
    },
    {
        formName:"productFilter",
        formHead:"",
        formLanguage:"English",
        id: "English-productFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"Barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group ID"},
            {key:"groupName",lb:"Group Name"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"isRawMat",lb:"IsRawMat"},
            {key:"remark",lb:"Remark"},
        ]
    },

    {
        formName:"productFilter",
        formHead:"",
        formLanguage:"Default",
        id: "Default-productFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"barcode",lb:"Barcode"},
            {key:"productName",lb:"Product Name"},
            {key:"groupId",lb:"Group ID"},
            {key:"groupName",lb:"Group Name"},
            {key:"unit",lb:"Unit"},
            {key:"price",lb:"Price"},
            {key:"isRawMat",lb:"IsRawMat"},
            {key:"remark",lb:"Remark"},
        ]
    },

    {
        formName:"transactionFilter",
        formHead:"",
        formLanguage:"Thai",
        id: "Thai-transactionFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ไอดี"},
            {key:"date",lb:"วันที่"},
            {key:"branch",lb:"สาขา"},
            {key:"transactionType",lb:"ประเภทเอกสาร"},
            {key:"transactionStatus",lb:"สถานะเอกสาร"},
            {key:"partnerId",lb:"ไอดีลูกค้า"},
            {key:"name",lb:"ชื่อลูกค้า"},
            {key:"phone",lb:"โทร"},
        ]
    },
    {
        formName:"transactionFilter",
        formHead:"",
        formLanguage:"English",
        id: "English-transactionFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"date",lb:"Date"},
            {key:"branch",lb:"Branch"},
            {key:"transactionType",lb:"Transaction Type"},
            {key:"transactionStatus",lb:"Transaction Status"},
            {key:"partnerId",lb:"Partner ID"},
            {key:"name",lb:"Name"},
            {key:"phone",lb:"Phone"},
        ]
    },
    {
        formName:"transactionFilter",
        formHead:"",
        formLanguage:"Default",
        id: "Default-transactionFilter",
        shopId:"shopa",
        template:[
            {key:"id",lb:"ID"},
            {key:"date",lb:"Date"},
            {key:"branch",lb:"Branch"},
            {key:"transactionType",lb:"Transaction Type"},
            {key:"transactionStatus",lb:"Transaction Status"},
            {key:"partnerId",lb:"Partner ID"},
            {key:"name",lb:"Name"},
            {key:"phone",lb:"Phone"},
        ]
    },




    {
        formName:"partnerFilterForm",
        formHead:"",
        formLanguage:"Thai",
        id: "Thai-partnerFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"ค้นหาลูกค้า"},
            {key:"subject",lb:"หัวข้อ"},
            {key:"allTrue",lb:"ทุกข้อจริง"},
            {key:"someTrue",lb:"บางข้อจริง"},
            {key:"sortBySubject",lb:"เรียงตามหัวข้อ"},
            {key:"recordLimit",lb:"จำนวนรายการ"},
            {key:"recordPerPage",lb:"จำนวนรายการต่อหน้า"},
        ]
    },
    {
        formName:"partnerFilterForm",
        formHead:"",
        formLanguage:"English",
        id: "English-partnerFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"Search Customer"},
            {key:"subject",lb:"Subject"},
            {key:"allTrue",lb:"All True"},
            {key:"someTrue",lb:"Some True"},
            {key:"sortBySubject",lb:"Sort By Subject"},
            {key:"recordLimit",lb:"Record Limit"},
            {key:"recordPerPage",lb:"Record Per Page"},
        ]
    },
    {
        formName:"partnerFilterForm",
        formHead:"",
        formLanguage:"Default",
        id: "Default-partnerFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"Search Customer"},
            {key:"subject",lb:"Subject"},
            {key:"allTrue",lb:"All True"},
            {key:"someTrue",lb:"Some True"},
            {key:"sortBySubject",lb:"Sort By Subject"},
            {key:"recordLimit",lb:"Record Limit"},
            {key:"recordPerPage",lb:"Record Per Page"},
        ]
    },




    {
        formName:"productFilterForm",
        formHead:"",
        formLanguage:"Thai",
        id: "Thai-productFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"ค้นหาสินค้า"},
            {key:"subject",lb:"หัวข้อ"},
            {key:"allTrue",lb:"ทุกข้อจริง"},
            {key:"someTrue",lb:"บางข้อจริง"},
            {key:"sortBySubject",lb:"เรียงตามหัวข้อ"},
            {key:"recordLimit",lb:"จำนวนรายการ"},
            {key:"recordPerPage",lb:"จำนวนรายการต่อหน้า"},
        ]
    },
    {
        formName:"productFilterForm",
        formHead:"",
        formLanguage:"English",
        id: "English-productFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"Search Product"},
            {key:"subject",lb:"Subject"},
            {key:"allTrue",lb:"All True"},
            {key:"someTrue",lb:"Some True"},
            {key:"sortBySubject",lb:"Sort By Subject"},
            {key:"recordLimit",lb:"Record Limit"},
            {key:"recordPerPage",lb:"Record Per Page"},
        ]
    },
    {
        formName:"productFilterForm",
        formHead:"",
        formLanguage:"Default",
        id: "Default-productFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"Search Product"},
            {key:"subject",lb:"Subject"},
            {key:"allTrue",lb:"All True"},
            {key:"someTrue",lb:"Some True"},
            {key:"sortBySubject",lb:"Sort By Subject"},
            {key:"recordLimit",lb:"Record Limit"},
            {key:"recordPerPage",lb:"Record Per Page"},
        ]
    },


    {
        formName:"transactionFilterForm",
        formHead:"",
        formLanguage:"Thai",
        id: "Thai-transactionFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"ค้นหาสินบิล"},
            {key:"subject",lb:"หัวข้อ"},
            {key:"allTrue",lb:"ทุกข้อจริง"},
            {key:"someTrue",lb:"บางข้อจริง"},
            {key:"sortBySubject",lb:"เรียงตามหัวข้อ"},
            {key:"recordLimit",lb:"จำนวนรายการ"},
            {key:"recordPerPage",lb:"จำนวนรายการต่อหน้า"},
        ]
    },
    {
        formName:"transactionFilterForm",
        formHead:"",
        formLanguage:"English",
        id: "English-transactionFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"Search Bill"},
            {key:"subject",lb:"Subject"},
            {key:"allTrue",lb:"All True"},
            {key:"someTrue",lb:"Some True"},
            {key:"sortBySubject",lb:"Sort By Subject"},
            {key:"recordLimit",lb:"Record Limit"},
            {key:"recordPerPage",lb:"Record Per Page"},
        ]
    },
    {
        formName:"transactionFilterForm",
        formHead:"",
        formLanguage:"Default",
        id: "Default-transactionFilterForm",
        shopId:"shopa",
        template:[
            {key:"formHead",lb:"Search Bill"},
            {key:"subject",lb:"Subject"},
            {key:"allTrue",lb:"All True"},
            {key:"someTrue",lb:"Some True"},
            {key:"sortBySubject",lb:"Sort By Subject"},
            {key:"recordLimit",lb:"Record Limit"},
            {key:"recordPerPage",lb:"Record Per Page"},
        ]
    },





]


module.exports = formTemplate