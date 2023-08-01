
const baseConfig = require('./wdio.conf').config;
const GlobalData=require('./test/data/GlobalData')
GlobalData.BASE_URL="https://li-uat.languageloop.com.au/LoopedIn_th/Login.aspx"
GlobalData.DEV_URL="https://li-uat.languageloop.com.au/DeveloperScreen/Home.aspx"
GlobalData.ODTI_DID_URL="https://li-uat.languageloop.com.au/OnDemandTI_UI/"
GlobalData.ADMIN_TOOLS_URL="https://li-uat.languageloop.com.au/AdminDataTools/"


const uatconfig = Object.assign(baseConfig, {

});

exports.config = uatconfig;



