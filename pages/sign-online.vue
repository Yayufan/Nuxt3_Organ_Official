<template>
    <div>
        <Breadcrumbs firstRoute="簽署器捐" secoundRoute="線上簽署"></Breadcrumbs>
        <div class="common-section">
            <h1 class="common-title">線上簽署</h1>

            <div class="content-box">
                <p class="title">器官捐贈同意書</p>
                <div class="statement">
                    <p>本人瞭解醫療有其極限，而愛心可以延續，經閱讀，知悉後列說明後，願意簽署
                        <a class="donation-form" href="/files/organs-donate-consent.pdf" target="_blank">
                            <u>【器官捐贈同意書】</u>
                        </a>，並將此意願註記於健保卡，於生命之盡頭，捐贈可用器官，讓其他需要的病人能因此而獲得重生機會。

                        如須撤銷器捐同意，請下載
                        <a class="cancel-form" href="/files/cancel-organs-donate.pdf" target="_blank">
                            <u>【撤銷器捐同意書】</u>
                        </a>填寫後由寄正本到本會。
                    </p>

                </div>
            </div>

            <div class="form-section">
                <p class="notice">(以下欄位有<span>*</span>標示者為必填)</p>
                <el-form ref="ruleFormRef" class="form" :model="form" :rules="formRules" label-position="left"
                    :validate-on-rule-change="false">
                    <el-form-item label="簽署人：" label-width="330" prop="name" class="form-item1">
                        <el-input v-model="form.name" type="text"></el-input>
                    </el-form-item>

                    <el-form-item label="國籍" label-width="330" prop="country" class="form-item1">
                        <el-radio-group v-model="form.country">
                            <el-radio label="台灣籍" value="台灣籍"></el-radio>
                            <el-radio label="外國籍" value="外國籍"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="國民身分證統一編號/居留證號：" prop="idCard" label-width="330" class="form-item1">
                        <el-input v-model="form.idCard" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="出生日期：" label-width="330" prop="birthday" class="form-item1">
                        <el-date-picker v-model="form.birthday" type="date" value-format="YYYY-MM-DD"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="性別：" label-width="330" prop="gender" class="form-item1">
                        <el-radio-group v-model="form.gender">
                            <el-radio label="男" value="1"></el-radio>
                            <el-radio label="女" value="2"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="連絡電話：" label-width="330" prop="contactNumber" class="form-item1">
                        <el-input v-model="form.contactNumber" type="tel"></el-input>
                    </el-form-item>
                    <el-form-item label="手機號碼：" label-width="330" prop="phoneNumber" class="form-item1">
                        <el-input v-model="form.phoneNumber" type="tel"></el-input>
                    </el-form-item>
                    <el-form-item label="E-Mail：" label-width="310" prop="email" class="unnecessary email">
                        <el-input class="email-input" v-model="form.email" type="email"></el-input>
                    </el-form-item>
                    <el-form-item label="聯絡地址：" label-width="330" prop="address" class="form-item1 address">
                        <el-input v-model="form.address" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="法定代理人姓名：" label-width="330" prop="legalRepresentativeName" class="form-item1">
                        <el-input v-model="form.legalRepresentativeName" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="法定代理人國民身分證統一編號：" class="legal-representative-ID"
                        prop="legalRepresentativeIdCard" label-width="330">
                        <el-input v-model="form.legalRepresentativeIdCard" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="本人獲得器官捐贈同意卡：" class="unnecessary form-item1 consent-card">
                        <el-radio-group v-model="form.consentCard">
                            <el-radio label="希望" value="1"></el-radio>
                            <el-radio label="不希望" value="-1"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div class="text-area">
                        <el-form-item class="reason unnecessary" label="簽署的原因：" label-width="auto">
                            <el-input v-model="form.reason" type="textarea" rows="6"></el-input>
                        </el-form-item>
                        <el-form-item class="word-to-family unnecessary" label="給家人的話：" label-width="auto">
                            <el-input v-model="form.wordToFamily" type="textarea" rows="6"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item class="donate-organs unnecessary" label="願意捐贈器官/組織項目(可複選)" prop="donateOrgans">
                        <el-checkbox-group v-model="form.donateOrgans">
                            <div class="checkbox-div">
                                <el-checkbox value="all">
                                    <template #default>
                                        <span class="donate-all-color">全部捐贈</span>
                                    </template>
                                </el-checkbox>
                                <el-checkbox value="heart">
                                    <template #default>
                                        <span class="organ-color">心臟</span>
                                    </template>
                                </el-checkbox>
                                <el-checkbox value="liver">
                                    <template #default>
                                        <span class="organ-color">肝臟</span>
                                    </template>
                                </el-checkbox>

                                <el-checkbox value="pancreas">
                                    <template #default>
                                        <span class="organ-color">胰臟</span>
                                    </template>
                                </el-checkbox>


                            </div>
                            <div class="checkbox-div">
                                <el-checkbox value="lung">
                                    <template #default>
                                        <span class="organ-color">肺臟</span>
                                    </template>
                                </el-checkbox>
                                <el-checkbox value="kidney">
                                    <template #default>
                                        <span class="organ-color">腎臟</span>
                                    </template>
                                </el-checkbox>

                                <el-checkbox value="smallIntestine">
                                    <template #default>
                                        <span class="tissue-color">小腸</span>
                                    </template>
                                </el-checkbox>

                                <el-checkbox value="heartValve">
                                    <template #default>
                                        <span class="tissue-color">心瓣膜</span>
                                    </template>
                                </el-checkbox>

                            </div>
                            <div class="checkbox-div">
                                <el-checkbox value="skin">
                                    <template #default>
                                        <span class="tissue-color">皮膚</span>
                                    </template>
                                </el-checkbox>
                                <el-checkbox value="cornea">
                                    <template #default>
                                        <span class="tissue-color">眼角膜</span>
                                    </template>
                                </el-checkbox>
                                <el-checkbox value="bones">
                                    <template #default>
                                        <span class="tissue-color">骨骼</span>
                                    </template>
                                </el-checkbox>
                                <el-checkbox value="bloodVessels">
                                    <template #default>
                                        <span class="tissue-color">血管</span>
                                    </template>
                                </el-checkbox>
                            </div>
                        </el-checkbox-group>
                    </el-form-item>
                    <div class="instructions-div">
                        <el-form-item>
                            <el-checkbox v-model="approveInstructions" class="instructions"><u
                                    @click="drawer = true">我已閱讀並同意說明事項</u></el-checkbox>
                        </el-form-item>
                    </div>

                    <div class="captcha-box">
                        <client-only>
                            <img v-if="captchaImg" :src="captchaImg" @click="refreshCaptcha" alt="點擊刷新驗證碼"
                                class="captcha-image" />
                        </client-only>
                        <el-form-item prop="verificationCode" class="captcha-label">
                            <el-input v-model="form.verificationCode" type="text"></el-input>
                        </el-form-item>
                    </div>

                    <div class="submit-section">
                        <el-form-item>
                            <el-button class="submit" @click="submitForm(ruleFormRef)">送出資料</el-button>
                            <el-button class="reset" @click="resetForm(ruleFormRef)">重新填寫</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <el-drawer v-model="drawer" direction="rtl" size="30%">
                <template #header>
                    <h4 class="drawer-header">說明事項</h4>
                </template>
                <template #default>
                    <div class="drawer-content-box">
                        <p class="notice">
                            <span>★</span>提醒您，線上送出資料後，請務必<u>列印同意書</u>，簽名後郵寄至本會，後續辦理健保IC卡登錄，才算完成器捐意願預立。如不便列印，請來信或致電告知姓名、收件地址，由本會郵寄同意書。
                        </p>
                        <p>說明事項：</p>
                        <p class="instructions-title">
                            一、依人體器官移植條例之規定，器官捐贈必須為無償之行為，且器官之摘取，應於病人之診治醫師判定死亡後為之（含腦死判定）。如病人為非病死或疑似為非病死者，必須於依法相驗完畢後，且經檢察官認無繼續勘驗之必要後，才能施行。
                        </p>

                        <p class="instructions-title">二、另依人體器官移植條例第六條之規定，醫師自往生者遺體摘取器官以供移植，須符合下列規定之一：


                        <p> 　（一）往生者生前以書面（如本同意書）或遺囑同意。
                        </p>
                        <p> 　（二）往生者最近親屬以書面同意。</p>
                        </p>

                        <p class="instructions-title">
                            三、您簽署的器官捐贈同意書，將依人體器官移植條例第六條規定，加註於健保卡並掃描存檔於「衛生福利部安寧療護及器官捐贈意願資訊系統」；如醫院、醫師遇有病人經診斷其病情於近期內進行至死亡已不可避免，且該病人無法清楚表達意識之情況下，將以此作為決定器官捐贈之依循，並可讓家屬充分瞭解病人生前之意願。醫院、醫師絕不會因知悉此捐贈意願而不施予必要治療。
                        </p>
                        <p class="instructions-title"> 四、捐贈者如患無法控制的感染性疾病，如庫賈氏病（Creutzfeldt-Jakob
                            Disease，CJD）…等等，為避免因器官移植而傳染給受贈者，醫院、醫師得不接受病人之器官捐贈。
                        </p>
                        <p class="instructions-title">
                            五、您所表達之器官捐贈意願，可隨時查詢或撤回。如欲查詢或撤回該意願，可聯絡「衛生福利部安寧療護及器官捐贈意願資料處理小組」單位協助處理，電話：02-2393-3298。
                        </p>
                        <p class="instructions-title"> 六、本資料僅供器官捐贈意願表達使用，將依個人資料保護法，善盡保密之責任。
                        </p>
                    </div>
                </template>

            </el-drawer>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import type { FormInstance, FormRules } from 'element-plus'




// ---------------------------------------------------

/**身分證校驗函數 */
// 定义校验结果类型
interface CheckResult {
    valid: boolean;
    message: string;
}

// 地區碼轉換表
const codeMap: Record<string, number> = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 34,
    J: 18,
    K: 19,
    L: 20,
    M: 21,
    N: 22,
    O: 35,
    P: 23,
    Q: 24,
    R: 25,
    S: 26,
    T: 27,
    U: 28,
    V: 29,
    W: 32,
    X: 30,
    Y: 31,
    Z: 33,
};


// 校验逻辑國民身分證字號函数
function checkCkDigit(code: string): CheckResult {
    if (!/^[A-Z][12][0-9]{8}$/.test(code)) {
        return { valid: false, message: "身分證格式不正確" };
    }

    const placeCode = codeMap[code[0]];
    if (!placeCode) {
        return { valid: false, message: "首碼無效" };
    }

    const bodyCode = code.substring(1, 9);
    console.log()
    const lastCode = code[9];

    const calHead = (num: number): number =>
        Math.floor(num / 10) * 1 + (num % 10) * 9;

    const calBody = (code: string): number => {
        let sum = 0;
        for (let i = 0; i < code.length; i++) {
            sum += parseInt(code[i]) * (8 - i);
        }
        return sum;
    };

    const idSum =
        calHead(placeCode) + calBody(bodyCode) + parseInt(lastCode) * 1;
    const isValid = idSum % 10 === 0;

    return isValid
        ? { valid: true, message: "合法" }
        : { valid: false, message: "身分證號不合法" };
}

// 舊版居留證號驗證邏輯
const checkOldResidentCertificate = (code: string): CheckResult => {
    if (!/^[A-Z][A-D][0-9]{8}$/.test(code)) {
        return { valid: false, message: '舊版居留證格式不正確' };
    }

    const placeCode = codeMap[code[0]];
    const genderCode = codeMap[code[1]] % 10; // 取個位數;
    // console.log("舊版校驗性別碼為: ", genderCode)
    const bodyCode = code.substring(2, 9);
    // console.log("舊版校驗區域碼為 ", bodyCode)

    const lastCode = code[9];

    if (!placeCode || genderCode === undefined) {
        return { valid: false, message: '首碼或性別碼無效' };
    }

    // 計算num 除以10的商,並向下取整,獲取10位數字
    // 例如，num = 23，则 Math.floor(23 / 10) 为 2。
    const calHead = (num: number): number => {
        // console.log("舊版校驗地區值 ", (Math.floor(num / 10) * 1) + ((num % 10) * 9))
        return (Math.floor(num / 10) * 1) + ((num % 10) * 9);
    }


    const calBody = (code: string): number => {
        let sum = 0;
        // console.log("舊版body code長度", code.length)
        for (let i = 0; i < code.length; i++) {
            // console.log("當前code號 ", code[i])
            sum += parseInt(code[i]) * (7 - i);
        }
        return sum;
    };

    const idSum =
        calHead(placeCode) + genderCode * 8 + calBody(bodyCode) + parseInt(lastCode) * 1;

    console.log("舊版居留證號值", idSum)

    const isValid = idSum % 10 === 0;

    return isValid
        ? { valid: true, message: '合法' }
        : { valid: false, message: '舊版居留證號不合法' };
};

// 新版居留證驗證邏輯
const checkNewResidentCertificate = (code: string): CheckResult => {
    if (!/^[A-Z][89][0-9]{8}$/.test(code)) {
        return { valid: false, message: '新版居留證格式不正確' };
    }

    const placeCode = codeMap[code[0]];
    const bodyCode = code.substring(1, 9);
    console.log("新版body code ", bodyCode)
    const lastCode = code[9];

    if (!placeCode === undefined) {
        return { valid: false, message: '首碼無效' };
    }

    const calHead = (num: number): number =>
        Math.floor(num / 10) * 1 + (num % 10) * 9;

    const calBody = (code: string): number => {
        let sum = 0;
        for (let i = 0; i < code.length; i++) {
            sum += parseInt(code[i]) * (8 - i);
        }
        return sum;
    };

    const idSum =
        calHead(placeCode) + calBody(bodyCode) + parseInt(lastCode) * 1;

    console.log("新版居留證號值", idSum)

    const isValid = idSum % 10 === 0;

    return isValid
        ? { valid: true, message: '合法' }
        : { valid: false, message: '新版居留證號不合法' };
};

// 居留證驗證邏輯（舊版或新版）
const checkResidentCertificate = (code: string): CheckResult => {
    const oldResult = checkOldResidentCertificate(code);
    const newResult = checkNewResidentCertificate(code);

    if (oldResult.valid || newResult.valid) {
        return { valid: true, message: '合法' };
    } else {
        return { valid: false, message: '居留證號不合法' };
    }
};


/**--------------------------------------------------------------- */

// 動態驗證函數
const validateIdCard = (rule: any, value: string, callback: any) => {
    if (form.country === '台灣籍') {
        const result = checkCkDigit(value);
        if (!result.valid) {
            callback(new Error(result.message));
        } else {
            callback();
        }
    } else if (form.country === '外國籍') {
        const result = checkResidentCertificate(value);
        if (!result.valid) {
            callback(new Error(result.message));
        } else {
            callback();
        }
    } else {
        callback(new Error("請先選擇國籍"));
    }
};




//-----------------------------------------------------------

/** 驗證碼，僅在客户端执行 */
// 定義驗證碼圖片
const captchaImg = ref('')

// 只在客户端调用
const refreshCaptcha = async () => {
    try {
        const response = await CSRrequest.get('organ-donation-consent/captcha',)

        console.log('響應為:', response)

        captchaImg.value = response.data.image
        form.verificationKey = response.data.key

        console.log("驗證碼key為:", form.verificationKey)


    } catch (error) {
        console.error('刷新驗證碼失敗', error)
    }
}

//頁面掛載時調用
onMounted(() => {
    refreshCaptcha()
})


/**------------------------- */

const approveInstructions = ref(false)
const drawer = ref(false)
const isReadInstructions = ref(false)
const ruleFormRef = ref<FormInstance>()
const formRules = reactive<FormRules<form>>({
    name: [
        {
            required: true,
            message: '請輸入簽署人',
            trigger: 'blur'
        }
    ],
    idCard: [
        {
            required: true,
            message: '請輸入國民身分證統一編號/居留證號',
            trigger: 'blur'
        },
        {
            validator: validateIdCard,
            trigger: "blur",
        },
    ],
    birthday: [
        {

            required: true,
            message: '請輸入出生日期',
            trigger: 'change'
        },
        {
            type: 'date',
            message: '請依照正確格是輸入: yyyy-mm-dd',
            trigger: 'change'
        },
        // { validator: checkAge, trigger: 'blur' }
    ],
    gender: [
        {
            required: true,
            message: '請選擇性別',
            trigger: 'blur'
        }
    ]
    ,
    contactNumber: [
        {
            required: true,
            message: '請輸入連絡電話',
            trigger: 'blur'
        }
    ],
    phoneNumber: [
        {
            required: true,
            message: '請輸入手機號碼',
            trigger: 'blur'
        }
    ],
    address: [
        {
            required: true,
            message: '請輸入聯絡地址',
            trigger: 'blur'
        }
    ],
    // legalRepresentativeName: [
    //     {
    //         required: false,
    //         message: '請輸入法定代理人姓名',
    //         trigger: 'change'
    //     }
    // ],
    // legalRepresentativeIdCard: [
    //     {
    //         required: false,
    //         message: '請輸入法定代理人國民身分證統一編號'
    //         , trigger: 'change'
    //     },
    // ],
    donateOrgans: [
        {
            type: 'array',
            required: true,
            message: '請至少勾選一個捐贈項目',
            trigger: 'change',
        },
    ],
    verificationCode: [
        {
            required: true,
            message: '請輸入驗證碼'
            , trigger: 'blur'
        }
    ],
    country: [
        {
            required: true,
            message: '請選擇國籍'
            , trigger: 'blur'
        }
    ]

})

interface form {
    name: string,
    idCard: string,
    birthday: string,
    gender: string,
    contactNumber: string,
    phoneNumber: string,
    email: string,
    address: string,
    legalRepresentativeName: string,
    legalRepresentativeIdCard: string,
    consentCard: string,
    reason: string,
    wordToFamily: string,
    donateOrgans: string[],
    verificationKey: string,
    verificationCode: string,
    country: string
}

const form = reactive<form>({
    name: '',
    idCard: '',
    birthday: '',
    gender: '',
    contactNumber: '',
    phoneNumber: '',
    email: '',
    address: '',
    legalRepresentativeName: '',
    legalRepresentativeIdCard: '',
    consentCard: '-1',
    reason: '',
    wordToFamily: '',
    donateOrgans: [],
    verificationKey: "",
    verificationCode: "",
    country: ""
})


/**
 * 
 * 
 */
/** 年齡校驗  */
// 年龄检查逻辑
// function checkAge(rule: any, value: any, callback: Function) {
//     if (!value) {
//         return callback(new Error('請選擇出生日期'));
//     }
//     const today = new Date();
//     const birthDate = new Date(value);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     if (age < 20) {
//         if (!form.legalRepresentativeName || !form.legalRepresentativeIdCard) {
//             return callback(new Error('未滿20歲，必須填寫法定代理人信息'));
//         }
//     }
//     callback();
// }

// 监听生日字段变化，动态设置法定代理人信息的必填规则
watch(() => form.birthday, (newValue) => {
    const today = new Date();
    const birthDate = new Date(newValue);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        formRules.legalRepresentativeName = [{ required: true, message: '法定代理人姓名為必填項目', trigger: 'blur' }];
        formRules.legalRepresentativeIdCard = [{ required: true, message: '法定代理人身分證為必填項目', trigger: 'blur' }, {
            validator: (
                rule: unknown,
                value: string,
                callback: (error?: Error) => void
            ) => {
                const { valid, message } = checkCkDigit(value);
                if (!valid) callback(new Error(message));
                else callback();
            },
            trigger: "blur",
        },];
    } else {
        formRules.legalRepresentativeName = [{
            required: false,
            message: '請輸入法定代理人姓名',
            trigger: 'blur'
        }];
        formRules.legalRepresentativeIdCard = [
            {
                required: false,
                message: '請輸入法定代理人身分證',
                trigger: 'blur'
            }
        ];
    }
});



//-----------------------------------

watch(() => approveInstructions.value, (newVal) => {
    if (newVal && !isReadInstructions.value) {
        drawer.value = true;
    }
})

watch(() => drawer.value, (newVal) => {
    if (newVal) {
        isReadInstructions.value = true;
    }
})

const insertConsentForm = async () => {
    let res = await CSRrequest.post("organ-donation-consent", {
        body: form
    })
    return res

}

const ScreenLoading = () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
        loading.close()
    }, 2000)
}

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            if (approveInstructions.value) {
                // console.log('submit!', form)
                ScreenLoading()
                let res = await insertConsentForm()
                if (res.code != 200) {
                    ElMessage.error(res.msg)
                    //錯誤後重刷新驗證碼
                    refreshCaptcha()
                    return
                }
                ElMessage.success("上傳成功")
                resetForm(ruleFormRef.value)


            } else {
                ElMessage.error('請先閱讀並同意說明事項')
            }
        } else {
            ElMessage.error("請填寫完整的資訊")
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    form.consentCard = '-1'
    form.donateOrgans = []
    console.log(form);
}


</script>

<style lang="scss" scoped>
.common-section {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    @media screen and (max-width:850px) {
        margin: 3% 0;
    }

    @media screen and (max-width:481px) {
        margin: 3% 0 3% 3%;
    }

    @media screen and (max-width:481px) {
        :deep(.el-drawer) {
            width: 80% !important;
        }

    }

    .common-title {
        color: $main-color;
        font-weight: $common-title-font-weight;
        font-size: $common-title-font-size;
        letter-spacing: $common-title-letter-spacing;
        margin-left: 10%;
        margin-bottom: 3%;

        &::before {
            display: inline;
            content: "";
            border-left: 3px solid $main-color;
            padding-right: 10px;
        }

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .title {
            background: $main-color;
            color: white;
            // width: 10vw;
            display: inline-block;
            text-align: center;
            padding: 5px 15px;
            letter-spacing: 0.1rem;
            border-radius: 35px;
            font-size: $paragraph-title-font-size;
        }

        .statement {
            color: $main-content-color;
            max-width: 80%;
            margin: 1% 0 2rem 4rem;
            font-size: $paragraph-font-size;

            @media screen and (max-width:850px) {
                max-width: 100%;
                margin: 2% 5% 2% 0;
                font-size: 0.9rem;
            }

            p {
                @media screen and (max-width:850px) {
                    display: inline;
                    line-height: 1.5;

                }
            }
        }

        .donation-form {
            color: $main-color;
            padding: 0 5px;
            font-size: 1.3rem;

            @media screen and (max-width:850px) {
                font-size: 1rem;
            }
        }

        .cancel-form {
            color: red;
            padding: 0 5px;
            font-size: 1.3rem;

            @media screen and (max-width:850px) {
                font-size: 1rem;
            }
        }
    }

    //表單區塊
    .form-section {
        background: #F2F2F1;
        // padding: 1% 10%;
        padding: 1% 11%;

        @media screen and (max-width:850px) {
            margin-left: 8%;
        }

        @media screen and (max-width:850px) {
            margin-left: 1%;
        }

        // 提醒標示
        .notice {
            color: $main-content-color;
            margin: 3% 0 3% 5%;

            span {
                color: red;
            }
        }

        .form {

            .form-item1,
            .legal-representative-ID {

                @media screen and (max-width:481px) {
                    flex-direction: column;
                }


                :deep(.el-form-item__label) {
                    font-size: 1.3rem;
                    color: black;

                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 250px !important;
                        // width: 40% !important;

                    }
                }

                .el-radio {
                    margin-right: 1vw;

                    :deep(.el-radio__label) {
                        font-size: 1.3rem;
                        color: black;

                        @media screen and (max-width:850px) {
                            font-size: 0.9rem;
                            width: 60% !important;

                        }
                    }
                }
            }

            .email {

                @media screen and (max-width:481px) {
                    flex-direction: column;
                }

                :deep(.el-form-item__label) {
                    margin-right: 0.3rem;

                    @media screen and (max-width:850px) {
                        margin-right: 0;
                        font-size: 0.9rem;
                        width: 39% !important;

                    }
                }
            }

            .address {
                margin-bottom: 5vw;
            }

            .unnecessary {
                padding-left: 0.9rem;

                @media screen and (max-width:481px) {
                    padding-left: inherit;
                }

                :deep(.el-form-item__label) {
                    font-size: 1.3rem;
                    color: black;

                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        // width: 65%;
                        width: 70%;

                    }
                }
            }

            //法定代理人身分證
            .legal-representative-ID {
                margin-bottom: 3vw;

                :deep(.el-form-item__label) {
                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 16rem !important;
                    }
                }
            }

            .consent-card {
                :deep(.el-form-item__label) {
                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 12rem !important;
                    }
                }
            }

            :deep(.el-input) {
                width: 100%;
            }

            .text-area {
                display: flex;

                @media screen and (max-width:850px) {
                    display: block;
                }

                .reason,
                .word-to-family {
                    display: block;
                    width: 50%;

                    @media screen and (max-width:850px) {
                        width: 100%;

                    }

                    :deep(.el-textarea__inner) {
                        border-radius: 25px;
                    }

                }
            }

            .donate-organs {
                display: block;
                max-width: 100%;

                .el-checkbox-group {
                    width: 100%;

                    .checkbox-div {
                        display: flex;
                        justify-content: space-between;

                        .donate-all-color {
                            color: black;
                            font-weight: 600;
                        }

                        .organ-color {
                            color: #c65a73;
                            font-weight: 600;
                        }

                        .tissue-color {
                            color: #dd7e1a;
                            font-weight: 600;
                        }

                    }
                }

                .el-checkbox {
                    margin: 1rem 0 0 0;
                    max-width: 100%;
                    min-width: 30%;

                    @media screen and (max-width:850px) {
                        margin-right: 0;
                    }
                }

                :deep(.el-checkbox__label) {
                    font-size: 1.3rem;
                    color: $main-content-color;

                    @media screen and (max-width:850px) {
                        font-size: 0.9rem;
                        width: 60% !important;
                        margin-right: 0.3rem;

                    }
                }
            }

            .instructions-div {
                margin-top: 3rem;
                display: flex;
                justify-content: center;

                :deep(.el-checkbox__label) {
                    color: #9d5b39;
                    font-size: 1.3rem;
                    font-weight: 600;
                }

                :deep(.el-checkbox__inner) {
                    border-radius: 25px;
                }
            }

            .captcha-box {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                margin-top: 1rem;
                margin-bottom: 1.3rem;

                .captcha-label {
                    margin-bottom: 0;
                    margin-left: 20px;
                }

            }

            .submit-section {
                display: flex;
                justify-content: center;

                .el-button {
                    border-radius: 25px;
                    color: white;
                    font-size: $inner-box-font-size;
                    padding: 0 2rem;
                }

                .submit {
                    background: #E9B2B1;
                }

                .reset {
                    background: #F49E19;
                }
            }
        }
    }

    .drawer-header {
        color: $main-color;
        font-size: 1.3rem;
        margin: 1rem 0;
    }

    .drawer-content-box {
        margin: 0 1rem;
        // color: black;

        .notice {
            color: $main-color;
            font-weight: bold;
            margin-bottom: 1rem;

            span {
                color: red;
            }
        }

        .instructions-title {
            color: $main-content-color;
            margin: 1rem 0;
        }

    }
}
</style>