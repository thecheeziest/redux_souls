import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    charImg: '',
    charDisplay : '',
    charInfoData: {},
    charListData: [
        {id:1, name: '장욱', eng: 'JangUk', imgurl: './images/JangUk.jpg', pic: './images/JangUk2.jpg', pic2: './images/JangUk3.jpg', theme1: '드라마', theme2: '영화', title1: '검색어를 입력하세요 WWW', title2: '어쩌다 발견한 하루', title3: '장사리 : 잊혀진 영웅들', cName: '장욱', cInfo: '대호국 ‘장씨 집안’의 도련님. 3년 전 사건으로 죽음 끝에서 얼음돌을 품고 살아 돌아왔다. 얼음돌을 품은 힘으로 환혼인들을 잡고 있기에 그 힘과 힘이 주는 두려움으로 사람들 사이에서는 ‘괴물 잡는 괴물’ 이라 불린다.', ment1: '우리 애가 잠을 못 자서요.', mentby1: '- 추섭사 실패를 부숴버린 후 진호경에게 장욱이', ment2: '나는 딱 한 번 엮였는데 어쩌다 이런 미친 신붓감을 만났을까?', mentby2: '- 갑자기 청혼을 하는 진부연에게 장욱이', link1: 'https://www.youtube.com/watch?v=aNTMz9A1lKQ', head1: '[tvN DRAMA] 토크쇼', cList1: '출연 : 이재욱, 고윤정, 황민현, 유준상, 신승호, 오나라', linkM1: '환혼즈가 다 알려드립니다! 1-2화 비하인드부터 3-4화 스포까지★', link2: 'https://www.youtube.com/watch?v=KYYEQnepMxE', head2: '[tvN DRAMA] 인터뷰', cList2: '출연 : 이재욱, 고윤정', linkM2: '이재욱X고윤정의 꽁냥꽁냥 케미♥ 장욱이 유죄인간이 된 이유ㅋㅋ', link3: 'https://www.elle.co.kr/article/73722E', head3: '[ELLE] 화보', cList3: '출연 : 이재욱, 고윤정', linkM3: '환혼 빛과 그림자의 두 사람, 이재욱과 고윤정은 서로를 놓지 않기로 결심했다'},

        {id:2, name: '진부연', eng: 'JinBuyeon', imgurl: './images/JinBuyeon.jpg', pic: './images/JinBuyeon2.jpg', pic2: './images/JinBuyeon3.jpg', theme1: '드라마', theme2: '영화', title1: '스위트홈', title2: '로스쿨', title3: '헌트', cName: '진부연', cInfo: '낙수의 얼굴을 지닌 신비로운 신녀. 3년 전 사건으로 석화된 후, 마의 이선생의 도움으로 다시 살아나면서 모든 기억과 신력을 잃어버렸다. 기억과 함께 신력이 돌아오기 시작한다.', ment1: '그거 마시면 우리 정말 부부가 되는 거다.', mentby1: '- 독주를 마시려는 장욱에게 진부연이', ment2: '이 정도 거리에서, 계속 네 옆에 있을 거야. 약속이다.', mentby2: '- 계속 아프면 돌아간다고 할까 봐 추섭사 실패를 부쉈다는 장욱에게 진부연이', link1: 'http://youtube.com/watch?v=KYYEQnepMxE&feature=youtu.be', head1: '[tvN DRAMA] 인터뷰', cList1: '이재욱, 고윤정', linkM1:'이재욱X고윤정의 꽁냥꽁냥 케미♥ 장욱이 유죄인간이 된 이유ㅋㅋ', link2: 'https://www.youtube.com/watch?v=jfu3tSoF8LI', head2: '[tvN DRAMA] 인터뷰', cList2: '이재욱, 고윤정, 황민현, 신승호', linkM2: '[환혼 지식 퀴즈 대결] 환잘알을 찾아라! 빛팀vs그림자팀 대결에 점점 늘어가는 벌칙', link3: 'https://www.youtube.com/watch?v=0nyfIyMtgPA', head3: '[Mustang 88 FM] 인터뷰', cList3: '이재욱, 고윤정, 황민현, 신승호, 유인수', linkM3: 'SPILL "ALCHEMY OF SOULS" BARENG CIA & CAST'},

        {id:3, name: '진초연', eng: 'JinChoyeon', imgurl: './images/JinChoyeon.jpg', pic: './images/JinChoyeon2.jpg', pic2: './images/JinChoyeon3.jpg', theme1: '드라마', theme2: '곡', title1: '소녀의 세계', title2: 'CLOSER', title3: '비밀정원', title4: '살짝 설렜어', cName: '진초연', cInfo: '‘송림’의 젊은 총수. 박진의 조카. 박진의 은퇴 이후 ‘송림’을 물려받았다. 술법과는 달리 사업에는 재능이 있어 상단 일에 성과를 내고 있다.', ment1: '환혼인에게서 정혼자의 아버지도 구하지 못했으면서 이제 와 누구를 구하신다는 겁니까?', mentby1: '- 환혼인이 진요원 안으로 숨어들자 위험하니 들여보내 달라는 박당구에게 진초연이', ment2: '나는 당신이 나를 잊을 거라고, 단 한 번도 상상해 본 적이 없습니다. 내가 버리기 전에.', mentby2: '- 3년간 간직한 연인 부적을 아직까지 갖고 있었냐고 묻는 박당구에게 진초연이', link1: 'https://youtu.be/8Ww0yCxhYns', head1: '[YOUTUBE] EP. 5', cList1: '아린, 유인수', linkM1:'♡순애보♡ 아린, 3년간 간직한 유인수의 마음 허락', link2: 'https://youtu.be/UdkaWL3kuJs', head2: '[YOUTUBE] 초당커플 서사 정리', cList2: '아린, 유인수', linkM2: '초당커플 재결합 서사 정리✨ 파혼 후 흑화한 아린과, 아직 아린을 잊지 못한 유인수', link3: 'https://youtu.be/gKKZeVqYTjQ', head3: '[YOUTUBE] EP. 1', cList3: '아린, 유인수', linkM3: '3년 전 환혼인 사건 이후 첫 재회한 유인수X아린, 원망의 마음'},

        {id:4, name: '서율', eng: 'SeoYul', imgurl: './images/SeoYul.jpg', pic: './images/SeoYul2.jpg', pic2: './images/SeoYul3.jpg', theme1: '드라마', theme2: '곡', title1: '라이브온', title2: '여보세요', title3: '에너제틱', title4: '부메랑', cName: '서율', cInfo: '최고 명문가인 ‘서씨 집안’의 천재 귀공자. 3년 전 사건으로 본가인 서호성으로 돌아갔다가 3년만에 돌아왔다. 남모르는 고통 속에 힘들어한다.', ment1: '그럼 욱이 넌 계속 춥겠구나.', mentby1: '- 얼음돌이 귀기를 몰고 다녀서 자신 때문에 정진각에 냉기가 도는 거라고 말하는 장욱에게 서율이', ment2: '심장을 뜯어내어 마음을 부순다.', mentby2: '- 낙수와 같이 죽기로 결심한 서율이 호각을 태우며', link1: 'https://youtu.be/OvyQS7A3ZHY', head1: '[NETFLIX] 게임', cList1: '이재욱, 고윤정, 황민현, 신승호, 유인수', linkM1:'환혼즈의 젠가 인터뷰 + 기상천외한 벌칙', link2: 'https://youtu.be/jfu3tSoF8LI', head2: '[tvN DRAMA] 인터뷰', cList2: '이재욱, 고윤정, 황민현, 신승호', linkM2: '[환혼 지식 퀴즈 대결] 환잘알을 찾아라! 빛팀vs그림자팀 대결에 점점 늘어가는 벌칙', link3: 'https://youtu.be/0nyfIyMtgPA', head3: '[Mustang 88 FM] 인터뷰', cList3: '이재욱, 고윤정, 황민현, 신승호, 유인수', linkM3: 'SPILL "ALCHEMY OF SOULS" BARENG CIA & CAST'},

        {id:5, name: '박당구', eng: 'ParkDanggu', imgurl: './images/ParkDanggu.jpg', pic: './images/ParkDanggu2.jpg', pic2: './images/ParkDanggu3.jpg', theme1: '드라마', theme2: '영화', title1: '지금 우리 학교는', title2: '나쁜 엄마', title3: '기억의 밤', title4: '제비', cName: '박당구', cInfo: '‘송림’의 젊은 총수. 박진의 조카. 박진의 은퇴 이후 ‘송림’을 물려받았다. 술법과는 달리 사업에는 재능이 있어 상단 일에 성과를 내고 있다.', ment1: '지난 3년간 혹시 이런 상황이 올까 가슴 졸였습니다. 상상만 해도 눈물이 났는데, 막상 닥치니 그냥 죽을 것 같네요.', mentby1: '- 자신이 보낸 보석함을 돌려주려는 진초연에게 박당구가', ment2: '예, 세상에서 제일 빛나고 예쁩니다.', mentby2: '- 볼에 입을 맞추고 금강석을 머리에 꽂은 후 예쁘냐고 묻는 진초연에게 박당구가', link1: 'https://youtu.be/nJxAphXhKt4', head1: '[NETFLIX] 게임', cList1: '이재욱, 고윤정, 황민현, 신승호, 유인수', linkM1:'선물이 갖고 싶은 이재욱 고윤정 황민현 신승호 유인수 (EP2)', link2: 'https://youtu.be/0nyfIyMtgPA', head2: '[Mustang 88 FM] 인터뷰', cList2: '이재욱, 고윤정, 황민현, 신승호, 유인수', linkM2: 'SPILL "ALCHEMY OF SOULS" BARENG CIA & CAST', link3: 'https://youtu.be/h_yzZS4HCl0', head3: '[NETFLIX] 게임', cList3: '이재욱, 고윤정, 황민현, 신승호, 유인수', linkM3: '예능신과 환혼한 배우들의 몸으로 말해요 (EP1)'},

        {id:6, name: '김도주', eng: 'KimDoju', imgurl: './images/KimDoju.jpg', pic: './images/KimDoju2.jpg', pic2: './images/KimDoju3.jpg', theme1: '드라마', theme2: '영화', title1: 'SKY 캐슬', title2: '라켓소년단', title3: '장르만 로맨스', title4: '압꾸정', cName: '김도주', cInfo: '장씨 집안의 대소사를 책임지는 실세. 박진과의 마음을 확인한 뒤 사랑을 나누고 있지만, 3년 전 사건으로 더욱 힘들어하는 욱이의 곁을 떠나지 못한다.', ment1: '뭐라고 부르면 어떻습니까. 제가 도련님, 그래도 마음은… 제 아들인데요.', mentby1: '- 뭐라고 불러야 할지 모르겠다는 장욱에게 김도주가', ment2: '아니....... 닭싸움을 한 거야, 개싸움을 한 거야?', mentby2: '-장욱과 다툰 진부연에게 김도주가', link1: 'https://youtu.be/p-VlB4kxRCE', head1: '[YOUTUBE] EP. 8', cList1: '오나라, 유준상', linkM1:'사랑과 우정 사이(?) 혼란한 상황 속 오나라에게 진심 내비친 유준상', link2: 'https://youtu.be/NGGN1NRIXfs', head2: '[YOUTUBE] EP. 20', cList2: '오나라, 유준상', linkM2: '눈치 없는 연애바보 유준상, 오나라 속도 모르고...(답답)', link3: 'https://youtu.be/qLJWhxK-fSM', head3: '[YOUTUBE] EP. 11', cList3: '오나라, 이재욱', linkM3: '영원한 도련님 편 오나라, 이재욱 향한 각별한 마음 ♡'},

        {id:7, name: '박진', eng: 'ParkJin', imgurl: './images/ParkJin.jpg', pic: './images/ParkJin2.jpg', pic2: './images/ParkJin3.jpg', theme1: '드라마', theme2: '영화', title1: '넝쿨째 굴러온 당신', title2: '경이로운 소문', title3: '신과 함께 (특별 출연)', title4: '정직한 후보 (특별 출연)', cName: '박진', cInfo: '박씨집안이 이끄는 최대 기업 ‘송림’의 전 총수. 3년 전 사건에 대한 책임을 지고 총수 자리에서 물러났다. 소일거리로 밭을 가꾸고, 음식을 하며 소박한 은퇴생활을 즐기는 중이다.', ment1: '나 송림의 박진. 월성에서 온 김연에게 나의 아내가 되어줄 것을 청하오.', mentby1: '- 김도주에게 청혼하며 박진이', ment2: '소중한 사람이면 버리듯 보낸다 생각하면 안 된다.', mentby2: '- 진부연을 진요원으로 돌려보내려는 장욱에게 박진이', link1: 'https://youtu.be/5GZptTQIDR0', head1: '[YOUTUBE] EP. 10', cList1: '유준상, 만장회', linkM1:'얼음돌의 힘을 탐내는 왕실&만장회 홀로 막으려는 유준상!', link2: 'https://youtu.be/pF0j6_bF2u8', head2: '[YOUTUBE] EP. 10', cList2: '유준상, 오나라, 박은혜', linkM2: '진요원을 지키는 오나라X박은혜, 어쩔 수 없는 유준상의 선택', link3: 'https://youtu.be/0Vwx4KrmtLw', head3: '[YOUTUBE] EP. 9', cList3: '유준상, 오나라, 이도경', linkM3: '눈치없는 유준상에 급발진한 오나라X이도경ㅋㅋㅋ'}
    ],
    tabMenu: [
        {id: 1, tab: '배우 소개', on: true},
        {id: 2, tab: '극중 역할', on: false},
        {id: 3, tab: '명대사', on: false},
        {id: 4, tab: '콘텐츠', on: false},
    ]
}

export const charListSlice = createSlice({
    name: 'charList',
    initialState,
    reducers: {
        changeInfo(state, action) {
            const foundItem = state.charListData.find(item => item.id === action.payload);
            state.charInfoData = foundItem;
            state.charImg = foundItem ? foundItem.imgurl : null;
            state.charDisplay = 'on';
            state.tabMenu = state.tabMenu.map(item => item.id === 1 ? {...item, on: true} : {...item, on: false})
        },
        changeImage(state, action) {
            state.charImg = action.payload
        },
        onTab(state, action) {
            state.tabMenu = state.tabMenu.map(item => item.id === action.payload ? {...item, on: true} : {...item, on: false})
        }
    }
})

export const {changeInfo, changeImage, onTab} = charListSlice.actions
export default charListSlice.reducer