const tempFormTemplate=

[
    {
        formName:'',
        formHead:'',
        formLanguage:'English',
        id: 2,
        shopId:'shopa',
        template:[
            { key: 'active', lb: 'Active' },
            { key: 'address', lb: 'Address' },
            { key: 'addNewUser', lb: 'Add User' },

            { key: 'allTrue', lb: 'All True' },
            { key: 'barcode', lb: 'Barcode' },
            { key: 'branch', lb: 'Branch' },
            { key: 'branchId', lb: 'Branch ID' },
            { key: 'branchName',lb:'Branch Name'},


            { key: 'changePassword', lb: 'Change Shop Password' },
            { key: 'contact', lb: 'Contact' },
            { key: 'date', lb: 'Date' },
            { key: 'effectSpending', lb: 'Effect Spending' },
            { key: 'effectCustomerPoint', lb: 'Effect Customer Point' },
            { key: 'effectStock', lb: 'Effect Stock' },

            { key: 'formHead-shopInfo', lb: 'Shop Info' },

            { key: 'formHead-searchBill', lb: 'Search Bill' },
            { key: 'formHead-searchCustomer', lb: 'Search Customer' },
            { key: 'formHead-searchProduct', lb: 'Search Product' },
            { key: 'formHead-basicValue', lb:'Basic Setting'},
            { key: 'formHead-setting', lb:'System Setting'},
            { key: 'formHead-shopChangePassword', lb:'Shop Change Password'},
            { key: 'formHead-user', lb:'UserList'},
            { key: 'formHead-addUser', lb:'Add User'},
            { key: 'formHead-editUser', lb:'Edit User'},
            { key: 'formHead-changeUserPassword', lb:'Change User Password'},

            { key: 'formHead-partnerFilterForm', lb:'Partner Filter'},
            { key: 'formHead-productFilterForm', lb:'Product Filter'},
            { key: 'formHead-transactionFilterForm', lb:'Bill Filter'},
            { key: 'formHead-taxForm', lb:'Tax Table'},
            { key: 'formHead-reductionForm', lb:'Reduction Table'},

            
            { key: 'grandTotal', lb: 'Grand Total' },
            { key: 'groupHead', lb: 'Group Of Product' },
            { key: 'groupId', lb: 'Group ID' },
            { key: 'newGroupId', lb: 'New Group ID' },

            { key: 'groupName', lb: 'Group Name' },

            { key: 'parentId', lb: 'Parent ID' },
            { key: 'newParentId', lb: 'New Parent ID' },

            { key: 'id', lb: 'ID' },
            { key: 'isRawMat', lb: 'IsRawMat' },
            { key: 'jobStatus', lb: 'Job Status' },
            { key: 'selectLanguage', lb: 'Select Language' },
            { key: 'language', lb: 'Language' },
            { key: 'logoActive', lb: 'Logo' },
            { key: 'name', lb: 'Name' },
            { key: 'nameOfShop', lb: 'Name Of Shop' },
            { key: 'newId', lb: 'New ID' },

            { key: 'newPassword1', lb: 'New Password' },
            { key: 'newPassword2', lb: 'Confirm New Password' },

            { key: 'order', lb: 'Order' },
            { key: 'other', lb: 'Other' },
            { key: 'partnerId', lb: 'Customer ID' },
            { key: 'partnerType', lb: 'Customer Type' },
            { key: 'password', lb: 'Password' },
            { key: 'paymentType', lb: 'Payment Type' },
            { key: 'phone', lb: 'Phone' },
            { key: 'plan', lb: 'Plan' },
            { key: 'price', lb: 'Price' },
            { key: 'productName', lb: 'Product Name' },
            { key: 'quantity', lb: 'Quantity' },
            { key: 'recordLimit', lb: 'Record Limit' },
            { key: 'recordPerPage', lb: 'Record Per Page' },
            { key: 'reduction', lb: 'Reduction' },
            { key: 'remark', lb: 'Remark' },
            { key: 'remindDate', lb: 'Remind Date' },
            { key: 'result', lb: 'Result' },
            { key: 'routeAddress', lb: 'url' },
            { key: 'routeAuth', lb: 'Authorization' },
            { key: 'routeName', lb: 'Route Name' },
            { key: 'selectedLine', lb: '#' },
            { key: 'shopName', lb: 'Shop Name' },
            { key: 'shop_name', lb: 'Name Of Shop' },
            { key: 'someTrue', lb: 'Some True' },
            { key: 'sortBySubject', lb: 'Sort By Subject' },
            { key: 'stock', lb: 'Stock' },
            { key: 'subject', lb: 'Subject' },
            { key: 'surname', lb: 'Surname' },
            { key: 'table', lb: 'Table' },
            { key: 'tableStatus', lb: 'Table Status' },
            { key: 'queue',lb:'Queue'},
            { key: 'queueStatus', lb: 'Queue Status'},
            { key: 'tax', lb: 'Tax' },
            { key: 'title', lb: 'Title' },
            { key: 'total', lb: 'Total' },
            { key: 'transactionStatus', lb: 'Bill Status' },
            { key: 'transactionType', lb: 'Bill Type' },
            { key: 'unit', lb: 'Unit' },
            { key: 'user', lb: 'User' },
            { key: 'userLevel', lb: 'User Level' },
            { key: 'username', lb: 'Username' },
            { key: 'formHead-ShopInfomation',lb:'Shop Information'},
            { key: 'formHead-customerConfirmForm', lb:'Confirm Customer Info'},
            { key: 'formHead-transactionConfirmForm', lb:'Confirm Transaction Info'},
            { key: 'formHead-widthLeftForm', lb:'Set Width'},
            { key: 'formHead-customerPointForm', lb:'CustomerPoint'},
            { key: 'formHead-transactionForm', lb:'Transaction Table'},


            {key:'insertUp',lb:'Insert Up'},
            {key:'insertDown',lb:'Insert Down'},
            {key:'selectAll',lb:'Select All'},
            {key:'unSelectAll',lb:'Unselect All'},
            {key:'moveUp',lb:'Move Up'},
            {key:'moveDown',lb:'Move Down'},
            {key:'delete',lb:'Delete'},
            {key:'import',lb:'Import'},
            {key:'selectImage',lb:'Select Image'},
            {key:'productAddForm',lb:'Product Add Form'},
            {key:'productEditForm',lb:'Product Edit Form'},
            {key:'groupAddForm',lb:'Product Group Add Form'},
            {key:'groupEditForm',lb:'Product Group Edit Form'},
            {key:'partnerAddForm',lb:'Partner Add Form'},
            {key:'partnerEditForm',lb:'Partner Edit Form'},

            {key:'photoUrl1',lb:'Photo'},


            {key:'time',lb:'Time'},
            {key:'totalTax',lb:'Total Tax'},
            {key:'totalReduction',lb:'Total Reduction'},
            {key:'selection',lb:'#'},
            {key:'reductionName',lb:'Reduction Name'},
            {key:'reductionRate',lb:'Reduction Rate'},
            {key:'reductionInPercentage',lb:'in %'},
            {key:'reductionAmount',lb:'Total'},

            {key:'taxName',lb:'Tax Name'},
            {key:'taxRate',lb:'Tax Rate'},
            {key:'taxInPercentage',lb:'in %'},
            {key:'taxAmount',lb:'Tax Amount'},

            {key:'widthLeft',lb:'Width Left'},
            {key:'productId',lb:'Product ID'},
            {key:'productBarcode',lb:'Product Barcode'},
            {key:'time',lb:'Time'},

            {key:'rawMatName',lb:'Raw Mat Name'},
            {key:'rawMatGroupId',lb:'Group ID'},
            {key:'rawMatGroupName',lb:'Group Name'},
            {key:"includeTransactionHead",lb:"Include Transaction Head"},

            {key:'point',lb:'Point'},
            {key:'totalPoint',lb:'Total Point'},
            {key:'totalSpending',lb:'Total Spending'},
           
            {key:'remainingCustomerPoint',lb:'Remaining Customer Point'},
            {key:'reductCustomerPoint',lb:'Reduct Customer Point'},
            {key:'remainingPoint',lb:'Remaining Point'},

            {key:'formHead-printForm', lb:'Paper Setup'},
            {key:'widthUnit',lb:'Width Unit'},
            {key:'fontUnit',lb:'Font Unit'},
            {key:'totalWidth',lb:'Total Width'},
            {key:'showTableHead',lb:'Show Table Head'},
            {key:'header1',lb:'Header 1'},
            {key:'header2',lb:'Header 2'},
            {key:'table1',lb:'Table1'},
            {key:'footer1',lb:'Footer 1'},
            {key:'footer2',lb:'Footer 2'},

            {key:'printLb',lb:'Label'},
            {key:'printValue',lb:'Constant'},
            {key:'printFieldName',lb:'Variable'},
            {key:'printFontSize',lb:'Font Size'},
            {key:'printWidth',lb:'Width'},
            {key:'printPosition',lb:'Position'},
            {key:'transaction',lb:'Transaction'},
            {key:'printPage',lb:'Print Page'},


            {key:'formHead-branchSettingPage',lb:'Branch Setting'},
            {key:'languageSetting',lb:'Language Setting'},
            {key:'printPageSetting',lb:'Print Page Setting'},
         
            {key:'tableName',lb:'Table Name'},
            {key:'tableActive',lb:'Table Active'},

            {key:'formHead-tableSettingModal',lb:'Table Setting..'},
            {key:'subject',lb:'Subject...'},
            {key:'show',lb:'Show...'},

            {key:'formHead-shopLogInForm',lb:'Shop Log In'},
            {key:'formHead-userLogInForm',lb:'User Log In'},
            {key:'createNewUser',lb:'Create New User'},


            {key:'formHead-addGroupForm',lb:"Add Group Form"},
            {key:'formHead-editGroupForm',lb:"Edit Group Form"},
            {key:"treeTitle",lb:"Select Parent Group"},
            {key:"gcode",lb:"Group Code"},
            {key:"level",lb:"Group Level"},
            
            {key:'formHead-jobStatusForm',lb:"Job Status Form"},
            {key:'detailTime',lb:"Order Time"},

            {key:'change',lb:"Change"},
            {key:'cash',lb:'Cash'}
        ]
    },

    {
        formName:'',
        formHead:'',
        formLanguage:'Thai',
        id: 3,
        shopId:'shopa',
        template:[
            { key: 'active', lb: 'แอคทีฟ' },
            { key: 'address', lb: 'ที่อยู่' },
            { key: 'addNewUser', lb: 'เพิ่มผู้ใช้'},

            { key: 'allTrue', lb: 'ทุกข้อจริง' },
            { key: 'barcode', lb: 'บาร์โค้ด' },
            { key: 'branch', lb: 'สาขา' },
            { key: 'branchId', lb: 'เลขที่สาขา' },
            { key: 'branchName', lb: 'ชื่อสาขา' },

            { key: 'changePassword', lb: 'เปลี่ยนรหัสร้าน' },
            { key: 'contact', lb: 'ติดต่อ' },
            { key: 'date', lb: 'วันที่' },
            { key: 'effectSpending', lb: 'กระทบยอดใช้จ่าย' },
            { key: 'effectCustomerPoint', lb: 'กระทบแต้มสะสม' },
            { key: 'effectStock', lb: 'กระทบสต็อก' },
           
            { key: 'formHead-shopInfo', lb: 'ข้อมูลสาขา' },//ข้อมูลร้าน

            { key: 'formHead-searchBill', lb: 'ค้นหาสินบิล' },
            { key: 'formHead-searchCustomer', lb: 'ค้นหาลูกค้า' },
            { key: 'formHead-searchProduct', lb: 'ค้นหาสินค้า' },

            { key: 'formHead-basicValue', lb:'ตั้งค่าพื้นฐาน'},
            { key: 'formHead-setting', lb:'ตั้งค่าระบบ'},
            { key: 'formHead-shopChangePassword', lb:'เปลี่ยนรหัสร้าน'},
            { key: 'formHead-user', lb:'รายชื่อผู้ใช้'},
            { key: 'formHead-addUser', lb:'เพิ่มรายชื่อผู้ใช้'},
            { key: 'formHead-editUser', lb:'แก้ไขรายชื่อผู้ใช้'},
            { key: 'formHead-changeUserPassword', lb:'แก้ไขรหัสผู้ใช้'},

            { key: 'formHead-partnerFilterForm', lb:'ค้นหาลูกค้า'},
            { key: 'formHead-productFilterForm', lb:'ค้นหาสินค้า'},
            { key: 'formHead-transactionFilterForm', lb:'ค้นหาบิล'},
            { key: 'formHead-customerConfirmForm', lb:'ยืนยันข้อมูลลูกค้า'},
            { key: 'formHead-transactionConfirmForm', lb:'ยืนยันข้อมูลบิล'},
            { key: 'formHead-widthLeftForm', lb:'ตั้งค่าความกว้าง'},
            { key: 'formHead-customerPointForm', lb:'แต้มสะสมลูกค้า'},
            { key: 'formHead-transactionForm', lb:'ตารางบิล'},
            { key: 'formHead-taxForm', lb:'ตารางภาษี'},
            { key: 'formHead-reductionForm', lb:'ตารางส่วนลด'},



            { key: 'grandTotal', lb: 'สุทธิ' },
            { key: 'groupHead', lb: 'กลุ่มสินค้า' },
            { key: 'groupId', lb: 'ไอดีกลุ่ม' },

            { key: 'newGroupId', lb: 'ไอดีกลุ่มใหม่' },

            { key: 'groupName', lb: 'ชื่อกลุ่ม' },
            { key: 'parentId', lb: 'ไอดีกลุ่มแม่' },
            { key: 'newParentId', lb: 'ไอดีกลุ่มแม่ใหม่' },
          

            { key: 'id', lb: 'ไอดี' },
            { key: 'isRawMat', lb: 'เป็นวัตถุดิบ' },
            { key: 'jobStatus', lb: 'สถานะงาน' },
            { key: 'selectLanguage', lb: 'เลือกภาษา' },
            { key: 'language', lb: 'ภาษา' },
            { key: 'logoActive', lb: 'โลโก้' },
            { key: 'name', lb: 'ชื่อ' },
            { key: 'nameOfShop', lb: 'ชื่อร้าน' },
            { key: 'newId', lb: 'ไอดีใหม่' },

            { key: 'newPassword1', lb: 'รหัสใหม่' },
            { key: 'newPassword2', lb: 'ยืนยันรหัสใหม่' },
            { key: 'order', lb: 'ยอดสั่ง' },
            { key: 'other', lb: 'อื่นๆ' },
            { key: 'partnerId', lb: 'ไอดีลูกค้า' },
            { key: 'partnerType', lb: 'ประเภทลูกค้า' },
            { key: 'password', lb: 'รหัส' },
            { key: 'paymentType', lb: 'ประเภทการชำระเงิน' },
            { key: 'phone', lb: 'โทร' },
            { key: 'plan', lb: 'ยอดแผน' },
            { key: 'price', lb: 'ราคา' },
            { key: 'productName', lb: 'ชื่อสินค้า' },
            { key: 'quantity', lb: 'จำนวน' },
            { key: 'recordLimit', lb: 'จำนวนรายการ' },
            { key: 'recordPerPage', lb: 'จำนวนรายการต่อหน้า' },
            { key: 'reduction', lb: 'ส่วนลด' },
            { key: 'remark', lb: 'หมายเหตุ' },
            { key: 'remindDate', lb: 'วันที่เตือน' },
            { key: 'result', lb: 'รวม' },
            { key: 'routeAddress', lb: 'url' },
            { key: 'routeAuth', lb: 'กำหนดสิทธิ์ผู้ใช้' },
            { key: 'routeName', lb: 'ชื่อสิทธิ์' },
            { key: 'selectedLine', lb: '#' },
            { key: 'shopName', lb: 'ชื่อร้าน' },
            { key: 'shop_name', lb: 'ชื่อร้าน' },
            { key: 'someTrue', lb: 'บางข้อจริง' },
            { key: 'sortBySubject', lb: 'เรียงตามหัวข้อ' },
            { key: 'stock', lb: 'ยอดสต็อก' },
            { key: 'subject', lb: 'หัวข้อ' },
            { key: 'surname', lb: 'นามสกุล' },
            { key: 'table', lb: 'โต๊ะ' },
            { key: 'tableStatus', lb: 'สถานะโต๊ะ' },
            { key: 'queue',lb:'คิว'},
            { key: 'queueStatus', lb: 'สถานะคิว'},
            { key: 'tax', lb: 'ภาษี' },
            { key: 'title', lb: 'คำนำหน้า' },
            { key: 'total', lb: 'รวม' },
            { key: 'transactionStatus', lb: 'สถานะบิล' },
            { key: 'transactionType', lb: 'ประเภทบิล' },
            { key: 'unit', lb: 'หน่วย' },
            { key: 'user', lb: 'ผู้ใช้' },
            { key: 'userLevel', lb: 'กลุ่มผู้มีสิทธิ์' },
            { key: 'username', lb: 'ยูสเซอร์เนม' },
            { key: 'formHead-ShopInfomation',lb:'ข้อมูลร้าน'},
    
            {key:'insertUp',lb:'แทรกบน'},
            {key:'insertDown',lb:'แทรกล่าง'},
            {key:'selectAll',lb:'เลือกทั้งหมด'},
            {key:'unSelectAll',lb:'ยกเลิกเลือก'},
            {key:'moveUp',lb:'เลื่อนขึ้น'},
            {key:'moveDown',lb:'เลื่อนลง'},
            {key:'delete',lb:'ลบ'},
            {key:'import',lb:'นำเข้า'},
            {key:'selectImage',lb:'เลือกภาพ'},
            {key:'productAddForm',lb:'เพิ่มสินค้า'},
            {key:'productEditForm',lb:'แก้ไขสินค้า'},
            {key:'groupAddForm',lb:'เพิ่มกลุ่ม'},
            {key:'groupEditForm',lb:'แก้ไขกลุ่ม'},
            {key:'partnerAddForm',lb:'เพิ่มลูกค้า'},
            {key:'partnerEditForm',lb:'แก้ไขลูกค้า'},

            {key:'photoUrl1',lb:'รูป'},


            {key:'time',lb:'เวลา'},
            {key:'totalTax',lb:'รวมภาษี'},
            {key:'totalReduction',lb:'รวมส่วนลด'},
            {key:'selection',lb:'#'},
            {key:'reductionName',lb:'ชื่อส่วนลด'},
            {key:'reductionActive',lb:'ใช้งานส่วนลด'},

            {key:'reductionRate',lb:'อัตราส่วนลด'},
            {key:'reductionInPercentage',lb:'in %'},
            {key:'reductionAmount',lb:'รวม'},

            {key:'taxName',lb:'ชื่อภาษี'},
            {key:'taxActive',lb:'ใช้งานภาษี'},

            {key:'taxRate',lb:'อัตราภาษี'},
            {key:'taxInPercentage',lb:'in %'},
            {key:'taxAmount',lb:'รวม'},

            {key:'widthLeft',lb:'ความกว้างฝั่งซ้าย'},
            {key:'productId',lb:'ไอดีสินค้า'},
            {key:'productBarcode',lb:'บาร์โค้ดสินค้า'},
            {key:'time',lb:'เวลา'},

            {key:'rawMatName',lb:'ชื่อวัตถุดิบ'},
            {key:'rawMatGroupId',lb:'ID กลุ่มวัตถุดิบ'},
            {key:'rawMatGroupName',lb:'ชื่อกลุ่มวัตถุดิบ'},
            {key:"includeTransactionHead",lb:"รวมข้อมูลหัวบิลท้ายบิล"},

            {key:'point',lb:'แต้ม'},
            {key:'totalPoint',lb:'รวมแต้ม'},
            {key:'totalSpending',lb:'ยอดใช้จ่ายลูกค้า'},
            
            {key:'reductCustomerPoint',lb:'หักแต้มสะสมลูกค้า'},
            {key:'remainingCustomerPoint',lb:'แต้มสะสมของลูกค้า'},
            {key:'remainingPoint',lb:'แต้มสะสมคงเหลือของลูกค้า'},

            {key:'formHead-printForm', lb:'ตั้งค่ากระดาษ'},
            {key:'widthUnit',lb:'หน่วยความกว้าง'},
            {key:'fontUnit',lb:'หน่วยฟ้อนท์'},
            {key:'totalWidth',lb:'ความกว้างรวม'},
            {key:'showTableHead',lb:'แสดงหัวตาราง'},
            {key:'header1',lb:'หัวบิล1'},
            {key:'header2',lb:'หัวบิล2'},
            {key:'table1',lb:'ตาราง1'},
            {key:'footer1',lb:'ท้ายบิล1'},
            {key:'footer2',lb:'ท้ายบิล2'},

            {key:'printLb',lb:'ป้าย'},
            {key:'printValue',lb:'ค่าคงที่'},
            {key:'printFieldName',lb:'ค่าตัวแปร'},
            {key:'printFontSize',lb:'ขนาดฟอนท์'},
            {key:'printWidth',lb:'ความกว้าง'},
            {key:'printPosition',lb:'ตำแหน่ง'},
            {key:'transaction',lb:'บิล'},
            {key:'printPage',lb:'ตั้งค่าหน้ากระดาษ'},

            {key:'formHead-branchSettingPage',lb:'ตั้งค่าสาขา'},//ตั้งค่าหน้าสาขา
            {key:'languageSetting',lb:'ภาษา'},//ภาษาเริ่มต้น
            {key:'printPageSetting',lb:'หน้ากระดาษ'},//หน้ากระดาษเริ่มต้น

            {key:'tableName',lb:'ชื่อโต๊ะ'},
            {key:'tableActive',lb:'ใช้งานโต๊ะ'},

            {key:'formHead-tableSettingModal',lb:'ตั้งค่าตาราง'},
            {key:'subject',lb:'หัวข้อ'},
            {key:'show',lb:'แสดง'},

            {key:'formHead-shopLogInForm',lb:'ล็อกอินร้านค้า'},
            {key:'formHead-userLogInForm',lb:'ล็อกอินผู้ใช้'},
            {key:'createNewUser',lb:'สร้างบัญชีผู้ใช้ใหม่'},

            {key:'formHead-groupPage',lb:'Group Page'},
            {key:'formHead-groupPage',lb:'กลุ่มสินค้า'},


            {key:'formHead-addGroupForm',lb:"เพิ่มกลุ่มสินค้า"},
            {key:'formHead-editGroupForm',lb:"แก้ไขกลุ่มสินค้า"},
            {key:"treeTitle",lb:"เลือกกลุ่มสินค้าแม่"},
            {key:"gcode",lb:"โค้ดกลุ่ม"},
            {key:"level",lb:"ระดับกลุ่ม"},

            {key:'formHead-jobStatusForm',lb:"สถานะงาน"},
            {key:'detailTime',lb:"เวลาสั่ง"},
            {key:'change',lb:"เงินทอน"},
            {key:'cash',lb:'เงินสด'}
          
        ]
    }
]

const formTemplate=[
    {...tempFormTemplate[0],id:1,formLanguage:'Default'},
    tempFormTemplate[0],
    tempFormTemplate[1]
]

module.exports = formTemplate
