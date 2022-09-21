import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, StyledText } from '../components/CommonComponent'
import { FlexBox } from '../components/MainComponent'

const SignupBox = styled.div`
    width: 30%;
    height: auto;
    padding: 30px 30px 20px 30px;
    border: 2px solid rgba(204,170,144,0.3);
    border-radius: 10px;
    margin:50px 0px;
`

const DetailText = styled.div`
    width:auto;
    height: 100px;
    overflow: auto;
    border: 1px solid lightgray;
    padding:10px;
    min-height:25px;
    margin:5px;
`

export default function SignupTerm(props) {
    const Navigate = useNavigate();
    //쇼핑몰 이용약관
    const [check1, setCheck1] = useState(false);
    //개인정보처리방침
    const [check2, setCheck2] = useState(false);
    //개인정보처리의 위탁
    const [check3, setCheck3] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    function Check1Change() {
        setCheck1(!check1);
    }
    function Check2Change() {
        setCheck2(!check2);
    }
    function Check3Change() {
        setCheck3(!check3);
    }
    //모두 동의
    function CheckAllChange() {
        setCheck1(!checkAll);
        setCheck2(!checkAll);
        setCheck3(!checkAll);
        setCheckAll(!checkAll);
    }
    // 모두 동의 완료시 다음 단계로 이동
    function NextStep() {
        if (check1 && check2 && check3) {
            props.setStep(2);
            Navigate("signupUser");
        } else {
            alert("모두 동의해야만 다음단계로 갈 수 있습니다.");
        }
    }

    useEffect(() => {
        if (check1 && check2 && check3) {
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    }, [check1, check2, check3]);

    return (
        <div>

            {/* 이용약관 */}
            <FlexBox direction="column" align="flex-start" width="auto">
                <StyledText size="14px" style={{ display: 'inline' }}>쇼핑몰 이용약관</StyledText>
                <DetailText>
                    <StyledText size="12px" weight="300">
                        제1조(목적)
                        <br />이 약관은 연준주식회사(전자상거래 사업자)가 운영하는 '달달하개'에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
                        <br /><br />※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br /><br /><br />제2조(정의)
                        <br /><br /> ① “몰”이란 OO 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                        <br /><br />② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                        <br /><br />③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
                        <br /><br />④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.
                        <br /><br /><br />제3조 (약관 등의 명시와 설명 및 개정)
                        <br /><br />① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호․모사전송번호․전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 00 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
                        <br /><br />② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회․배송책임․환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
                        <br /><br />③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                        <br /><br />④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.  이 경우 "몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
                        <br /><br />⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
                        <br /><br />⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.
                        <br /><br /><br />제4조(서비스의 제공 및 변경)
                        <br /><br />① “몰”은 다음과 같은 업무를 수행합니다.
                        <br /><br />1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
                        <br /><br />2. 구매계약이 체결된 재화 또는 용역의 배송
                        <br /><br />3. 기타 “몰”이 정하는 업무
                        <br /><br />② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
                        <br /><br />③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
                        <br /><br />④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                        <br /><br /><br />제5조(서비스의 중단)
                        <br /><br />① “몰”은 컴퓨터 등 정보통신설비의 보수점검․교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
                        <br /><br />② “몰”은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                        <br /><br />③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 “몰”은 제8조에 정한 방법으로 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 “몰”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.
                        <br /><br /><br />제6조(회원가입)
                        <br /><br />① 이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
                        <br /><br />② “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                        <br /><br />1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.
                        <br /><br />2. 등록 내용에 허위, 기재누락, 오기가 있는 경우
                        <br /><br />3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우
                        <br /><br />③ 회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.
                        <br /><br />④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.
                    </StyledText>
                </DetailText>
                <div style={{ alignSelf: "flex-end" }}><input type="checkbox" name="Term" value="이용약관" onChange={(e) => Check1Change()} checked={check1} /><label for="이용약관"><StyledText size="14px" style={{ display: 'inline' }}>동의합니다</StyledText> </label></div>
            </FlexBox>

            {/* 개인정보처리방침 */}
            <FlexBox direction="column" align="flex-start" width="auto">
                <StyledText size="14px" style={{ display: 'inline' }}>개인정보 처리 방침</StyledText>
                <DetailText>
                    <StyledText size="12px" weight="300">
                        '달달하개'은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                        <br /><br />○ 이 개인정보처리방침은 2021년 1월 1부터 적용됩니다.
                        <br /><br /><br />제1조(개인정보의 처리 목적)
                        <br /><br />'달달하개'은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                        <br /><br /><br />제2조(개인정보의 처리 및 보유 기간)
                        <br /><br />①'달달하개'은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                        <br /><br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                        <br /><br />1.재화 또는 서비스 제공
                        <br /><br />재화 또는 서비스 제공와 관련한 개인정보는 수집.이용에 관한 동의일로부터 1년까지 위 이용목적을 위하여 보유.이용됩니다.
                        <br /><br />보유근거 : 본 앱 사용으로 인한 개인정보를 별도로 수집 및 보관하지 않습니다.
                        <br /><br />관련법령 :
                        <br /><br />예외사유 :
                        <br /><br /><br />제3조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)
                        <br /><br />① 정보주체는 텍스트박스에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                        <br /><br />② 제1항에 따른 권리 행사는텍스트박스에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 텍스트박스은(는) 이에 대해 지체 없이 조치하겠습니다.
                        <br /><br />③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                        <br /><br /> ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
                        <br /><br />⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                        <br /><br />⑥ 텍스트박스은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                        <br /><br />제4조(처리하는 개인정보의 항목 작성)
                        <br /><br />① '달달하개'은(는) 다음의 개인정보 항목을 처리하고 있습니다.
                        <br /><br />1
                        <br /><br />필수항목 : 광고사용의 위한 정보
                        <br /><br />선택항목 :
                        <br /><br /><br />제5조(개인정보의 파기)
                        <br /><br />① '달달하개'은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                        <br /><br />② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                        <br /><br />1. 법령 근거 :
                        <br /><br />2. 보존하는 개인정보 항목 : 별도 보존하는 개인정보 항목이 없습니다.
                        <br /><br />③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                        <br /><br />1. 파기절차
                        <br /><br />'달달하개'은(는) 파기 사유가 발생한 개인정보를 선정하고, '달달하개' 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                        <br /><br />2. 파기방법
                        <br /><br />앱 사용자의 사용정보를 수집 및 보유하지 않습니다. 따라서 파기 해야 하는 개인정보를
                        가지고 있지 않습니다.
                        <br /><br /><br />제6조(개인정보의 안전성 확보 조치)
                        <br /><br />'달달하개'은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                        <br /><br />1. 정기적인 자체 감사 실시
                        개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
                        <br /><br />2. 개인정보 취급 직원의 최소화 및 교육
                        개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
                        <br /><br />3. 개인정보에 대한 접근 제한
                        개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
                        <br /><br /><br />제7조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)
                        <br /><br />텍스트박스 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.
                        <br /><br /><br />제8조 (개인정보 보호책임자)
                        <br /><br />① 텍스트박스 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                        <br /><br />▶ 개인정보 보호책임자 및 담당 부서
                        <br /><br />성명 :홍남경
                        <br /><br />직책 :대표
                        <br /><br />직급 :대표
                        <br /><br />연락처 :010-8548-8104, help.textbox@gmail.com,
                        <br /><br />※ 개인정보 보호 담당부서로 연결됩니다.
                    </StyledText>
                </DetailText>
                <div style={{ alignSelf: "flex-end" }}><input type="checkbox" name="Term" value="개인정보처리방침" onChange={(e) => Check2Change()} checked={check2} /><label for="개인정보처리방침"><StyledText size="14px" style={{ display: 'inline' }}>동의합니다</StyledText> </label></div>
            </FlexBox>

            {/* 개인정보처리의 위탁 */}
            <FlexBox direction="column" align="flex-start" width="auto">
                <StyledText size="14px" style={{ display: 'inline' }}>개인정보처리의 위탁</StyledText>
                <DetailText>
                    <StyledText size="12px" weight="300">
                        표준 개인정보처리위탁 계약서(안)
                        <br /><br /><br /><br />사용자(이하 “위탁자”이라 한다)과 달달하개(이하 “수탁자”이라 한다)는 “위탁자”의 개인정보 처리업무를 “수탁자”에게 위탁함에 있어 다음과 같은 내용으로 본 업무위탁계약을 체결한다.
                        <br /><br /><br /><br />제1조 (목적) 이 계약은 “위탁자”가 개인정보처리업무를 “수탁자”에게 위탁하고, “수탁자”는 이를 승낙하여 “수탁자”의 책임아래 성실하게 업무를 완성하도록 하는데 필요한 사항을 정함을 목적으로 한다.
                        <br /><br /><br /><br />제2조 (용어의 정의) 본 계약에서 별도로 정의되지 아니한 용어는「개인정보 보호법」, 같은 법 시행령 및 고시,「개인정보의 안전성 확보조치 기준」(개인정보보호위원회 고시 제2021-2호) 및「표준 개인정보 보호지침」(개인정보보호위원회 고시 제2020-1호)에서 정의된 바에 따른다.
                        <br /><br /><br /><br />제3조 (위탁업무의 목적 및 범위) “수탁자”는 계약이 정하는 바에 따라 개인 목적으로 다음과 같은 개인정보 처리 업무를 수행한다. 각호의 업무 예시 : 고객만족도 조사 업무, 회원가입 및 운영 업무, 사은품 배송을 위한 이름, 주소, 연락처 처리 등
                        <br /><br /><br /><br />제4조 (위탁업무 기간) 이 계약서에 의한 개인정보 처리업무의 기간은 다음과 같다.
                        <br /><br /><br /><br />제5조 (재위탁 제한) ① “수탁자”는 “위탁자”의 사전 승낙을 얻은 경우를 제외하고 “위탁자”와의 계약상의 권리와 의무의 전부 또는 일부를 제3자에게 양도하거나 재위탁할 수 없다.
                        <br /><br />② “수탁자”가 다른 제3의 회사와 수탁계약을 할 경우에는 “수탁자”는 해당 사실을 계약 체결 7일 이전에  “위탁자”에게 통보하고 협의하여야 한다.
                        <br /><br /><br /><br />제6조 (개인정보의 안전성 확보조치) “수탁자”는「개인정보 보호법」제23조제2항 및 제24조제3항 및 제29조, 같은 법 시행령 제21조 및 제30조, 「개인정보의 안전성 확보조치 기준」(개인정보보호위원회 고시 제2021-2호)에 따라 개인정보의 안전성 확보에 필요한 관리적․기술적 조치를 취하여야 한다.
                        <br /><br /><br /><br />제7조 (개인정보의 처리제한) ① “수탁자”는 계약기간은 물론 계약 종료 후에도 위탁업무 수행 목적 범위를 넘어 개인정보를 이용하거나 이를 제3자에게 제공 또는 누설하여서는 안 된다.
                        <br /><br />② “수탁자”는 계약이 해지되거나 또는 계약기간이 만료된 경우 위탁업무와 관련하여 보유하고 있는 개인정보를 「개인정보 보호법」시행령 제16조 및「개인정보의 안전성 확보조치 기준」(개인정보보호위원회 고시 제2021-2호)에 따라 즉시 파기하거나 “위탁자”에게 반납하여야 한다.
                        <br /><br />③ 제2항에 따라 “수탁자”가 개인정보를 파기한 경우 지체없이 “위탁자”에게 그 결과를 통보하여야 한다.
                        <br /><br /><br /><br />제8조 (수탁자에 대한 관리·감독 등) ① “위탁자”는 “수탁자”에 대하여 다음 각 호의 사항을 감독할 수 있으며, “수탁자”는 특별한 사유가 없는 한 이에 응하여야 한다.
                        <br /><br />1. 개인정보의 처리 현황
                        <br /><br />2. 개인정보의 접근 또는 접속현황
                        <br /><br />3. 개인정보 접근 또는 접속 대상자
                        <br /><br />4. 목적외 이용․제공 및 재위탁 금지 준수여부5. 암호화 등 안전성 확보조치 이행여부6. 그 밖에 개인정보의 보호를 위하여 필요한 사항
                        <br /><br />② “위탁자”는 “수탁자”에 대하여 제1항 각 호의 사항에 대한 실태를 점검하여 시정을 요구할 수 있으며, “수탁자”는 특별한 사유가 없는 한 이행하여야 한다.
                        <br /><br />③ “위탁자”는 처리위탁으로 인하여 정보주체의 개인정보가 분실·도난·유출·변조 또는 훼손되지 아니하도록 1년에 (  )회 “수탁자”를 교육할 수 있으며, “수탁자”는 이에 응하여야 한다. 「개인정보 안전성 확보조치 기준 고시」(개인정보보호위원회 고시 제2021-2호) 및 「개인정보 보호법」 제26조에 따라 개인정보처리자 및 취급자는 개인정보보호에 관한 교육을 의무적으로 시행하여야 한다.
                        <br /><br /> 제1항에 따른 교육의 시기와 방법 등에 대해서는 “위탁자”는 “수탁자”와 협의하여 시행한다.
                        <br /><br /><br /><br />제9조 (정보주체 권리보장) ① “수탁자”는 정보주체의 개인정보 열람, 정정·삭제, 처리 정지 요청 등에 대응하기 위한 연락처 등 민원 창구를 마련해야 한다.
                        <br /><br /><br /><br />제10조 (개인정보의 파기) ① “수탁자”는 제4조의 위탁업무기간이 종료되면 특별한 사유가 없는 한 지체 없이 개인정보를 파기하고 이를 “위탁자”에게 확인받아야 한다.
                        <br /><br /><br /><br />제11조 (손해배상) ① “수탁자” 또는 “수탁자”의 임직원 기타 “수탁자”의 수탁자가 이 계약에 의하여 위탁 또는 재위탁 받은 업무를 수행함에 있어 이 계약에 따른 의무를 위반하거나 “수탁자” 또는 “수탁자”의 임직원 기타 “수탁자”의 수탁자의 귀책사유로 인하여 이 계약이 해지되어 “위탁자” 또는 개인정보주체 기타 제3자에게 손해가 발생한 경우 “수탁자”는 그 손해를 배상하여야 한다.
                        <br /><br />② 제1항과 관련하여 개인정보주체 기타 제3자에게 발생한 손해에 대하여 “위탁자”가 전부 또는 일부를 배상한 때에는 “위탁자”는 이를 “수탁자”에게 구상할 수 있다.
                        <br /><br /><br /><br />본 계약의 내용을 증명하기 위하여 계약서 2부를 작성하고, “위탁자”와 “수탁자”가 서명 또는 날인한 후 각 1부씩 보관한다.
                    </StyledText>
                </DetailText>
                <div style={{ alignSelf: "flex-end" }}><input type="checkbox" name="Term" value="개인정보처리의 위탁" onChange={(e) => Check3Change()} checked={check3} /><label for="개인정보처리의 위탁"><StyledText size="14px" style={{ display: 'inline' }}>동의합니다</StyledText> </label></div>
            </FlexBox>

            <br />
            <FlexBox direction="column" align="center">
                <div style={{ justifySelf: "flex-end" }}><input type="checkbox" name="Term" value="전체동의" onChange={(e) => CheckAllChange()} checked={checkAll} /><label for="전체동의"><StyledText size="14px" weight="500" style={{ display: 'inline' }}>전체 동의합니다</StyledText> </label></div>
                <StyledButton nextbutton style={{ alignSelf: "flex-end" }} onClick={(e) => NextStep()}>다음</StyledButton>
            </FlexBox>
        </div >
    )
}
