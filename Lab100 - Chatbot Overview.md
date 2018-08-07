Lab100 - Chatbot Overview
=======

이 랩에서는 MasterBot이라는 이름의 금융 챗봇을 살펴볼 것입니다. 이것은
수정 및 추가가 가능한 완전한 chat봇입니다.

아래의 파일이 있는지 확인 해 주세요. 

- labfiles\MasterBot_Korean\MasterBot

**Step 1 : Bot console로 들어가기**
=======

![Screen Shot 2018-07-25 at 6.05.10 P](media/15325093997336/Screen%20Shot%202018-07-25%20at%206.05.10%20PM.png)


**Step 2 : masterBot에서 "Get Balance Function" 테스트 하기**
=======

 ### 1. Bot의 메인 화면으로 들어가서, MasterBot을 찾습니다. 메인화면의
검색창에서 찾을 수 있습니다.

![Screen Shot 2018-01-08 at 3.21.58
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%203.21.58%20PM.png)

![Screen Shot 2018-01-08 at 3.22.17
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%203.22.17%20PM.png)

### 2. 만약에 MasterBot이 보이지 않다면, 오른쪽 상단의 Import 버튼을 눌러서
MasterBot을 import 해 주세요. import 버튼 클릭후, labfiles\MasterBot_Korean 내부 import.zip일을 import 하면 됩니다.

### 3. 이제는 챗봇의 다양한 부분을 살펴보고 어떻게 설계되었는지 볼 수
있습니다. 왼쪽에는 채팅 봇의 의도, 엔티티, 흐름, 구성 요소 및 설정을
작업 할 수있는 아이콘의 세로 목록을 표시하는 네비게이션 바가 있습니다.

![Screen Shot 2018-01-08 at 3.33.48
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%203.33.48%20PM.png)

    맨 오른쪽 위의 재생 아이콘 (흰색 삼각형이 오른쪽을 가리키고 있음)에 주목하십시오. 
    이 버튼은 대화방을 테스트하는 데 사용하는 버튼입니다. 재생 버튼을 클릭하십시오.

### 4. 챗봇을 테스트 해볼 수 있는 테스트 창이 나옵니다.

![Screen Shot 2018-01-08 at 3.40.21
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%203.40.21%20PM.png)

    Note : 방금 import 하셨다면, 테스트 전에 우측 상단의 Train 버튼을 눌러주세요.
    Tip : Reset 버튼은 대화를 초기화하고, 다시 재생 아이콘을 누르면, 테스트 창이 없어집니다. 

### 5. 이곳에서 "계좌의 잔고가 얼마입니까?" 문장으로 테스트 해보세요. 계좌를
처음부터 봇에게 알려줄 수 도 있습니다.

![Screen Shot 2018-01-08 at 5.20.09
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%205.20.09%20PM.png)

![Screen Shot 2018-01-08 at 5.20.56
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%205.20.56%20PM.png)

**Step 3 : masterBot에서 "Send Money Function" 테스트 하기**
=======

### 1. 이전에 보신것 처럼, Send money 기능도 테스트 해보세요

![Screen Shot 2018-01-08 at 5.30.07
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%205.30.07%20PM.png)\
 ![Screen Shot 2018-01-08 at 5.31.56
P](media/15153914320994/Screen%20Shot%202018-01-08%20at%205.31.56%20PM.png)

**Step 4 : masterBot에서 Custom Component를 통한 레이아웃구현과 Instant App기능 살펴보기**
=======
### 1. Invest Plan 기능도 테스트 해보세요. "금융 상품을 보여주세요."
![Screen Shot 2018-08-03 at 2.24.56 P](media/15325093997336/Screen%20Shot%202018-08-03%20at%202.24.56%20PM.png)

### 2. Link를 눌러서 Instant App에 작성한뒤, 봇에 돌아와서 메세지를 확인하세요. Instant App을 통해 작성한 정보가 Bot에게 Flawless하게 들어온 것을 확인 할 수 있습니다. 
![Screen Shot 2018-08-03 at 2.31.36 P](media/15325093997336/Screen%20Shot%202018-08-03%20at%202.31.36%20PM.png)

![Screen Shot 2018-08-03 at 2.29.50 P](media/15325093997336/Screen%20Shot%202018-08-03%20at%202.29.50%20PM.png)

**Step 5 : Common Response 사용하기**
=======
### 1. "가까운 영업점 보여줘"로 NearBy를 테스트 해 보세요.

![Screen Shot 2018-08-03 at 2.32.50 P](media/15325093997336/Screen%20Shot%202018-08-03%20at%202.32.50%20PM.png)

### 2. 제공되는 "Common Response"를 사용하면, 아래처럼 보이는 여러가지 레이아웃을 쉽게 작성 할 수 있습니다.
![Screen Shot 2018-08-03 at 2.33.07 P](media/15325093997336/Screen%20Shot%202018-08-03%20at%202.33.07%20PM.png)

