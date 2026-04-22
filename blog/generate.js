#!/usr/bin/env node
// 블로그 카드 페이지 자동 생성기
// 사용법: node blog/generate.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// cards.js 에서 SVG / DESCS / DESCS_EN 로드
// vm에서 const는 샌드박스 객체에 노출되지 않으므로 var로 치환
const cardsSource = fs.readFileSync(path.join(__dirname, "../cards.js"), "utf8")
  .replace(/^const /gm, "var ");
const ctx = { Math, Array };
vm.createContext(ctx);
vm.runInContext(cardsSource, ctx);
const { DESCS, DESCS_EN, SVG_DEFS } = ctx;

// ──────────────────────────────────────────────
// 카드별 고정 메타데이터 (SVG·descs 제외)
// ──────────────────────────────────────────────
const CARDS = [
  {
    key: "highPriestess",
    file: "the-high-priestess-yes-no",
    numeral: "II",
    koName: "여사제",
    enName: "The High Priestess",
    introKo:
      "메이저 아르카나 II번, 여사제(The High Priestess)는 직관과 내면의 지혜를 상징합니다. " +
      "두 기둥 사이에 앉아 비밀의 두루마리를 품고 있는 그녀는 말하지 않고도 모든 것을 알고 있습니다. " +
      "그녀의 카드가 나왔다면, 지금은 드러난 정보보다 보이지 않는 것에 더 많은 진실이 있다는 신호입니다.",
    introEn:
      "The High Priestess is card II of the Major Arcana — the keeper of hidden knowledge and inner wisdom. " +
      "Seated between two pillars, scroll in hand, she knows everything without saying a word. " +
      "When her card appears, more truth lies in what's hidden than in what's visible.",
    uprightKo:
      "직관, 신비, 내면의 지혜, 숨겨진 지식. 표면 너머를 보는 힘이 깨어 있습니다. 서두르지 말고 조용히 관찰하세요.",
    reversedKo:
      "비밀, 정보 숨김, 직관 무시. 보이지 않는 곳에서 문제가 쌓이고 있을 수 있습니다. 내면의 소리에 귀 기울이세요.",
    uprightEn:
      "Intuition, mystery, hidden knowledge, inner wisdom. The power to see beneath the surface is active. Observe quietly rather than rushing.",
    reversedEn:
      "Secrets, withheld information, ignored instincts. Problems may be building out of sight. Listen to what your gut has been trying to tell you.",
  },
  {
    key: "empress",
    file: "the-empress-yes-no",
    numeral: "III",
    koName: "여황제",
    enName: "The Empress",
    introKo:
      "메이저 아르카나 III번, 여황제(The Empress)는 풍요와 창조, 모성의 에너지를 담은 카드입니다. " +
      "자연의 여왕인 그녀는 씨앗이 꽃을 피우고 꽃이 열매를 맺듯, 모든 것을 돌보고 성장시키는 힘을 가지고 있습니다. " +
      "이 카드가 나왔다면, 당신이 심은 것들이 풍성하게 자라날 때가 왔다는 뜻입니다.",
    introEn:
      "The Empress is card III of the Major Arcana — abundance, creativity, and nurturing energy embodied. " +
      "Queen of the natural world, she holds the power to grow everything she tends, just as a seed becomes a flower and a flower becomes fruit. " +
      "When this card appears, what you've planted is ready to flourish.",
    uprightKo:
      "풍요, 창조, 모성, 자연의 힘. 돌보고 키우는 것이 모두 결실을 맺습니다. 지금은 주는 것이 받는 것입니다.",
    reversedKo:
      "과잉 의존, 창의력 막힘, 방종. 지나친 배려가 오히려 성장을 막을 수 있습니다. 경계를 세우는 것도 사랑입니다.",
    uprightEn:
      "Abundance, creation, nurturing, the power of nature. Everything you tend and care for will bloom. Giving now is receiving.",
    reversedEn:
      "Over-dependence, creative block, indulgence. Too much giving without boundaries can stall growth. Setting limits is also an act of love.",
  },
  {
    key: "emperor",
    file: "the-emperor-yes-no",
    numeral: "IV",
    koName: "황제",
    enName: "The Emperor",
    introKo:
      "메이저 아르카나 IV번, 황제(The Emperor)는 권위와 구조, 안정의 카드입니다. " +
      "왕좌에 앉아 세상의 질서를 유지하는 그는 감정보다 이성, 혼돈보다 체계를 선호합니다. " +
      "이 카드가 나왔다면, 지금 당신에게 필요한 것은 명확한 규칙과 책임감 있는 리더십입니다.",
    introEn:
      "The Emperor is card IV of the Major Arcana — authority, structure, and stability. " +
      "Seated on his throne, he maintains order through reason over emotion, structure over chaos. " +
      "When this card appears, clear rules and responsible leadership are what the moment requires.",
    uprightKo:
      "권위, 안정, 구조, 리더십. 체계를 세우는 사람이 결과를 만들어냅니다. 원칙과 책임이 흐름을 잡아줍니다.",
    reversedKo:
      "고집, 독재, 경직성. 통제에 집착하면 유연성을 잃고 흐름이 막힙니다. 규칙이 사람보다 중요해지는 순간을 경계하세요.",
    uprightEn:
      "Authority, stability, structure, leadership. The one who builds systems produces results. Principle and responsibility hold the current steady.",
    reversedEn:
      "Stubbornness, rigidity, overcontrol. Clinging to authority blocks the flow you need. Watch for the moment the rules become more important than the people.",
  },
  {
    key: "hierophant",
    file: "the-hierophant-yes-no",
    numeral: "V",
    koName: "교황",
    enName: "The Hierophant",
    introKo:
      "메이저 아르카나 V번, 교황(The Hierophant)은 전통과 관습, 제도적 지혜의 카드입니다. " +
      "신성한 지식의 전달자인 그는 세대를 넘어 검증된 방식의 가치를 상기시켜 줍니다. " +
      "이 카드가 나왔다면, 지금은 새로운 실험보다 익숙하고 안정적인 방법이 더 유리한 시기입니다.",
    introEn:
      "The Hierophant is card V of the Major Arcana — tradition, convention, and institutional wisdom. " +
      "As a transmitter of sacred knowledge, he reminds us of the value of methods proven across generations. " +
      "When this card appears, familiar and stable approaches serve you better than fresh experiments.",
    uprightKo:
      "전통, 관습, 멘토, 신뢰. 검증된 방식이 지금 상황에 가장 잘 맞습니다. 기본에 충실할수록 유리합니다.",
    reversedKo:
      "틀에 박힌 사고, 규칙 위반, 반항. 기존 방식을 무조건 거부하면 혼란이 생깁니다. 변화는 이유가 있을 때 해야 합니다.",
    uprightEn:
      "Tradition, convention, mentorship, trust. The proven way fits this moment best. The more you stick to fundamentals, the better positioned you are.",
    reversedEn:
      "Dogma, rule-breaking, rebellion. Rejecting established ways without discernment invites confusion. Change should have a reason behind it.",
  },
  {
    key: "lovers",
    file: "the-lovers-yes-no",
    numeral: "VI",
    koName: "연인",
    enName: "The Lovers",
    introKo:
      "메이저 아르카나 VI번, 연인(The Lovers)은 사랑과 선택, 가치관의 일치를 상징합니다. " +
      "두 사람 위에 펼쳐진 날개는 서로 다른 두 세계가 하나로 연결되는 순간을 표현합니다. " +
      "이 카드는 단순한 연애를 넘어, 진심 어린 선택과 그에 따른 책임을 묻습니다.",
    introEn:
      "The Lovers is card VI of the Major Arcana — love, choice, and aligned values. " +
      "The wings spread above two figures represent the moment two separate worlds unite. " +
      "This card asks more than about romance — it asks about genuine choice and the responsibility that comes with it.",
    uprightKo:
      "사랑, 조화, 진심 어린 선택, 가치관의 일치. 마음을 따르는 결정이 옳습니다. 억지보다 진심이 더 멀리 갑니다.",
    reversedKo:
      "불일치, 잘못된 선택, 유혹. 감정에 휘둘려 중요한 것을 놓칠 수 있습니다. 선택 앞에서 진짜 원하는 것을 다시 확인하세요.",
    uprightEn:
      "Love, harmony, genuine choice, aligned values. The decision that follows your heart is the right one. Sincerity reaches further than performance.",
    reversedEn:
      "Misalignment, poor choices, temptation. Letting feelings take the wheel may cause you to miss what matters. Before choosing, check what you actually want.",
  },
  {
    key: "chariot",
    file: "the-chariot-yes-no",
    numeral: "VII",
    koName: "전차",
    enName: "The Chariot",
    introKo:
      "메이저 아르카나 VII번, 전차(The Chariot)는 의지와 결단, 돌파의 에너지를 담은 카드입니다. " +
      "상반된 두 스핑크스를 동시에 이끄는 전차꾼은 내면의 갈등을 통제하며 앞으로 나아갑니다. " +
      "이 카드가 나왔다면, 지금은 망설임을 멈추고 방향을 정한 뒤 밀어붙여야 할 때입니다.",
    introEn:
      "The Chariot is card VII of the Major Arcana — willpower, decisiveness, and breakthrough energy. " +
      "The charioteer driving two opposing sphinxes keeps inner conflict under control while pressing forward. " +
      "When this card appears, it's time to stop hesitating, set your direction, and push.",
    uprightKo:
      "의지, 결단력, 추진력, 승리. 방향을 정하고 밀어붙이면 길이 열립니다. 지금은 생각보다 실행이 답입니다.",
    reversedKo:
      "통제력 상실, 방향 없는 질주. 목표 없이 달리면 에너지만 낭비됩니다. 속도를 줄이고 목적지를 다시 확인하세요.",
    uprightEn:
      "Will, decisiveness, drive, victory. Set your direction and push — the path opens. Right now, action answers more than thinking does.",
    reversedEn:
      "Loss of control, directionless momentum. Racing without a destination wastes every bit of energy. Slow down and re-check where you're actually heading.",
  },
  {
    key: "strength",
    file: "the-strength-yes-no",
    numeral: "VIII",
    koName: "힘",
    enName: "Strength",
    introKo:
      "메이저 아르카나 VIII번, 힘(Strength)은 내면의 용기와 부드러운 통제의 카드입니다. " +
      "사자의 입을 부드럽게 다루는 인물은 야생의 힘을 폭력이 아닌 인내로 다스립니다. " +
      "진정한 힘은 억누르는 것이 아니라 이해하고 다루는 것에서 나옵니다.",
    introEn:
      "Strength is card VIII of the Major Arcana — inner courage and gentle mastery. " +
      "The figure softly closing a lion's mouth tames wild force through patience, not violence. " +
      "True power comes not from suppression but from understanding and composure.",
    uprightKo:
      "내면의 힘, 인내, 용기, 부드러운 통제. 강함은 힘으로 누르는 것이 아니라 차분하게 다루는 것입니다.",
    reversedKo:
      "자기 의심, 두려움에 굴복, 통제력 상실. 감정을 억압하면 오히려 폭발하게 됩니다. 직면이 해결책입니다.",
    uprightEn:
      "Inner strength, patience, courage, gentle mastery. True power is not force — it's composure and steady handling.",
    reversedEn:
      "Self-doubt, succumbing to fear, loss of inner control. Suppressing emotions only builds pressure toward an outburst. Facing them is the solution.",
  },
  {
    key: "hermit",
    file: "the-hermit-yes-no",
    numeral: "IX",
    koName: "은둔자",
    enName: "The Hermit",
    introKo:
      "메이저 아르카나 IX번, 은둔자(The Hermit)는 고독과 내면 탐구, 지혜의 카드입니다. " +
      "등불을 들고 산 정상에 홀로 선 노인은 외로움이 아닌 선택적 고독으로 내면의 진리를 밝힙니다. " +
      "이 카드가 나왔다면, 지금은 외부의 소음을 줄이고 내 안의 목소리에 귀 기울여야 할 때입니다.",
    introEn:
      "The Hermit is card IX of the Major Arcana — solitude, inner searching, and wisdom. " +
      "The old man alone on a mountaintop, lantern in hand, illuminates inner truth through chosen solitude, not loneliness. " +
      "When this card appears, it's time to quiet the noise outside and listen to the voice within.",
    uprightKo:
      "고독, 내면 탐구, 지혜의 등불, 성찰. 혼자만의 시간이 진짜 답을 줍니다. 안으로 향하세요.",
    reversedKo:
      "고립, 외로움, 세상과의 단절. 지나친 내향은 오히려 성장을 막을 수 있습니다. 은둔이 도피가 되고 있지는 않은지 살피세요.",
    uprightEn:
      "Solitude, inner searching, the lamp of wisdom, introspection. Time alone gives real answers. Turn inward.",
    reversedEn:
      "Isolation, loneliness, withdrawal from the world. Too much time inward can itself become a barrier to growth. Check that solitude hasn't become avoidance.",
  },
  {
    key: "wheeloffortune",
    file: "the-wheel-of-fortune-yes-no",
    numeral: "X",
    koName: "운명의 수레바퀴",
    enName: "Wheel of Fortune",
    introKo:
      "메이저 아르카나 X번, 운명의 수레바퀴(Wheel of Fortune)는 운명의 순환과 전환점의 카드입니다. " +
      "멈추지 않고 돌아가는 바퀴는 높은 곳이 있으면 낮은 곳도 있고, 낮은 곳이 있으면 반드시 높은 곳이 온다는 진리를 담고 있습니다. " +
      "이 카드가 나왔다면, 지금 바퀴가 당신 쪽으로 기울고 있다는 신호입니다.",
    introEn:
      "The Wheel of Fortune is card X of the Major Arcana — the cycle of fate and the turning point. " +
      "The ever-spinning wheel holds the truth that what goes up comes down and what is down will rise again. " +
      "When this card appears, the wheel is turning in your favour.",
    uprightKo:
      "운명, 전환점, 행운의 순환, 새로운 흐름. 바퀴가 당신 쪽으로 돌고 있습니다. 흐름을 타세요.",
    reversedKo:
      "나쁜 운, 예상 밖의 변화, 흐름에 저항. 바퀴는 돌게 되어 있습니다 — 흐름을 거스르면 더 오래 걸립니다.",
    uprightEn:
      "Fate, a turning point, the cycle of fortune, new flow. The wheel is turning in your direction. Ride the momentum.",
    reversedEn:
      "Bad luck, unexpected change, resistance to flow. The wheel will turn regardless — fighting it only delays things.",
  },
  {
    key: "justice",
    file: "the-justice-yes-no",
    numeral: "XI",
    koName: "정의",
    enName: "Justice",
    introKo:
      "메이저 아르카나 XI번, 정의(Justice)는 균형과 진실, 원인과 결과의 카드입니다. " +
      "저울과 검을 든 정의의 인물은 편견 없이 모든 것을 공정하게 헤아립니다. " +
      "이 카드가 나왔다면, 지금은 감정이 아닌 사실과 기준으로 판단해야 할 때입니다.",
    introEn:
      "Justice is card XI of the Major Arcana — balance, truth, and cause and effect. " +
      "The figure holding scales and sword weighs everything without bias. " +
      "When this card appears, facts and clear standards matter more than feelings.",
    uprightKo:
      "균형, 진실, 공정한 결과, 원인과 결과. 정직할수록 결과가 따라옵니다. 기준이 분명할 때 판단이 힘을 발휘합니다.",
    reversedKo:
      "불공정, 편견, 책임 회피. 균형이 무너지면 그 대가가 반드시 찾아옵니다. 감추는 것은 언제나 더 큰 문제로 돌아옵니다.",
    uprightEn:
      "Balance, truth, fair outcomes, cause and effect. Honesty produces results that hold. Clear standards give your judgment real force.",
    reversedEn:
      "Unfairness, bias, avoiding accountability. When balance breaks, consequences follow without fail. What is hidden always returns as a bigger problem.",
  },
  {
    key: "hangedMan",
    file: "the-hanged-man-yes-no",
    numeral: "XII",
    koName: "매달린 사람",
    enName: "The Hanged Man",
    introKo:
      "메이저 아르카나 XII번, 매달린 사람(The Hanged Man)은 자발적 멈춤과 새로운 시각의 카드입니다. " +
      "나무에 거꾸로 매달려 있지만 표정은 평온한 그는 다른 각도에서 세상을 봄으로써 새로운 진실을 발견합니다. " +
      "이 카드가 나왔다면, 억지로 나아가기보다 한 걸음 물러서서 관점을 바꿔야 할 때입니다.",
    introEn:
      "The Hanged Man is card XII of the Major Arcana — voluntary pause and a new perspective. " +
      "Hanging upside-down but wearing an expression of peace, he discovers new truth by seeing the world from a different angle. " +
      "When this card appears, step back rather than forcing forward — a shift in perspective is what's needed.",
    uprightKo:
      "자발적 멈춤, 새로운 시각, 희생, 기다림의 가치. 거꾸로 보면 보이지 않던 것이 보입니다. 멈춤은 후퇴가 아닙니다.",
    reversedKo:
      "쓸모없는 지연, 순교자 콤플렉스, 집착. 멈춤이 도피가 되고 있지는 않은지 살피세요. 지연에는 이유가 있어야 합니다.",
    uprightEn:
      "Voluntary pause, new perspective, sacrifice, the value of waiting. Hang upside-down and suddenly things come clear. A pause is not a retreat.",
    reversedEn:
      "Pointless delay, martyr complex, stubborn attachment. Check that your pause hasn't become avoidance. Delay should have a reason.",
  },
  {
    key: "death",
    file: "the-death-yes-no",
    numeral: "XIII",
    koName: "죽음",
    enName: "Death",
    introKo:
      "메이저 아르카나 XIII번, 죽음(Death) 카드는 실제 죽음이 아닌 변화와 전환을 상징합니다. " +
      "갑옷을 입은 기사가 지나가는 곳에서 낡은 것은 사라지고 새로운 것이 시작됩니다. " +
      "두려움 없이 맞아야 할 끝맺음, 그 너머에 진짜 새 출발이 기다리고 있습니다.",
    introEn:
      "The Death card is card XIII of the Major Arcana — not literal death, but transformation and transition. " +
      "Where the armoured knight passes, what is old disappears and something new begins. " +
      "The ending you must face without fear — beyond it, a genuine new beginning waits.",
    uprightKo:
      "변화, 끝과 시작, 전환, 해방. 끝나야 할 것이 끝나야 새 챕터가 열립니다. 두려움 없이 내려놓으세요.",
    reversedKo:
      "변화 거부, 집착, 부패. 바뀌어야 할 것을 붙잡을수록 더 큰 고통이 옵니다. 놓아줌이 시작입니다.",
    uprightEn:
      "Transformation, endings and beginnings, transition, liberation. What needs to end must end for the next chapter to open. Let go without fear.",
    reversedEn:
      "Resistance to change, clinging, stagnation. The more you hold on to what must go, the greater the eventual pain. Releasing is the beginning.",
  },
  {
    key: "temperance",
    file: "the-temperance-yes-no",
    numeral: "XIV",
    koName: "절제",
    enName: "Temperance",
    introKo:
      "메이저 아르카나 XIV번, 절제(Temperance)는 균형과 조화, 인내의 카드입니다. " +
      "두 컵 사이에서 물을 고요하게 흘려보내는 천사는 극단을 피하고 중간 길을 걷는 지혜를 보여줍니다. " +
      "이 카드가 나왔다면, 서두르지 말고 꾸준하고 균형 잡힌 페이스를 유지하는 것이 핵심입니다.",
    introEn:
      "Temperance is card XIV of the Major Arcana — balance, harmony, and patience. " +
      "An angel pouring water calmly between two cups demonstrates the wisdom of avoiding extremes and walking the middle path. " +
      "When this card appears, maintaining a steady and balanced pace — not rushing — is the key.",
    uprightKo:
      "균형, 절제, 인내, 조화로운 혼합. 극단을 피하고 중간 길을 걸으세요. 꾸준함이 결국 이깁니다.",
    reversedKo:
      "불균형, 과잉, 부조화. 어느 한쪽으로 치우치면 흐름이 깨집니다. 지나침을 경계하는 것이 먼저입니다.",
    uprightEn:
      "Balance, moderation, patience, harmonious blending. Avoid extremes and walk the middle path. Steadiness wins in the end.",
    reversedEn:
      "Imbalance, excess, disharmony. Leaning too far in any direction breaks the flow. Watching for excess is the first step.",
  },
  {
    key: "devil",
    file: "the-devil-yes-no",
    numeral: "XV",
    koName: "악마",
    enName: "The Devil",
    introKo:
      "메이저 아르카나 XV번, 악마(The Devil)는 집착과 욕망, 구속의 카드입니다. " +
      "사슬에 묶인 두 인물은 사실 느슨한 고리라 스스로 벗어날 수 있지만 그 사실을 모르고 있습니다. " +
      "이 카드가 나왔다면, 지금 당신을 붙잡고 있는 것이 외부의 힘이 아닌 내면의 집착일 수 있습니다.",
    introEn:
      "The Devil is card XV of the Major Arcana — obsession, desire, and bondage. " +
      "The two figures chained before him wear loose loops they could slip off — they simply don't realise it. " +
      "When this card appears, what holds you may not be an outside force but an inner attachment.",
    uprightKo:
      "집착, 욕망, 구속, 물질주의. 스스로 채운 족쇄는 스스로 풀 수 있습니다. 무엇이 당신을 붙잡고 있는지 직면하세요.",
    reversedKo:
      "해방, 집착의 해소, 의존에서 벗어남. 묶여 있던 것을 내려놓을 수 있습니다. 인식이 해방의 첫 걸음입니다.",
    uprightEn:
      "Obsession, desire, bondage, materialism. The shackles you've put on yourself can be removed by you. Face what's actually holding you.",
    reversedEn:
      "Liberation, releasing attachment, breaking dependency. What held you down can be set aside. Awareness is the first step to freedom.",
  },
  {
    key: "tower",
    file: "the-tower-yes-no",
    numeral: "XVI",
    koName: "탑",
    enName: "The Tower",
    introKo:
      "메이저 아르카나 XVI번, 탑(The Tower)은 갑작스러운 변화와 기존 구조의 붕괴를 상징합니다. " +
      "번개에 맞아 불길에 휩싸인 탑에서 두 인물이 추락하는 장면은 충격적이지만, 무너지는 것은 애초에 단단하지 않았던 것들입니다. " +
      "이 카드가 나왔다면, 지금은 밀어붙이는 것보다 상황을 냉정하게 재점검해야 합니다.",
    introEn:
      "The Tower is card XVI of the Major Arcana — sudden change and the collapse of existing structures. " +
      "The image of two figures falling from a lightning-struck tower in flames is shocking, but what falls was never truly solid. " +
      "When this card appears, reassessing the situation calmly matters more than pushing forward.",
    uprightKo:
      "갑작스러운 변화, 충격, 기존 구조의 붕괴. 무너지는 것은 애초에 단단하지 않았던 것들입니다. 붕괴 이후에 진짜 재건이 옵니다.",
    reversedKo:
      "위기 회피, 붕괴 지연, 두려움. 무너짐을 막으려는 집착이 오히려 더 큰 충격을 만듭니다. 피하는 것이 능사가 아닙니다.",
    uprightEn:
      "Sudden change, shock, collapse of existing structures. What falls was never truly solid to begin with. Real rebuilding comes after the fall.",
    reversedEn:
      "Avoidance of crisis, delayed collapse, fear. Trying to prevent what must fall only makes the eventual impact worse. Avoidance is not the answer.",
  },
  {
    key: "star",
    file: "the-star-yes-no",
    numeral: "XVII",
    koName: "별",
    enName: "The Star",
    introKo:
      "메이저 아르카나 XVII번, 별(The Star)은 희망과 치유, 영감의 카드입니다. " +
      "밤하늘 아래 조용히 물을 붓는 인물은 폭풍이 지난 후 찾아오는 고요한 회복의 시간을 보여줍니다. " +
      "이 카드가 나왔다면, 힘든 시간 이후에 찾아오는 따뜻한 빛처럼 앞길에 희망이 있다는 신호입니다.",
    introEn:
      "The Star is card XVII of the Major Arcana — hope, healing, and inspiration. " +
      "A figure quietly pouring water beneath a night sky shows the calm restoration that comes after the storm. " +
      "When this card appears, it's a signal that warmth and hope wait ahead — the light after a hard time.",
    uprightKo:
      "희망, 믿음, 치유, 영감. 어두운 밤 이후에 찾아오는 고요한 빛입니다. 포기하지 않은 자에게 길이 열립니다.",
    reversedKo:
      "희망 상실, 절망, 불신. 별빛이 가려져 있더라도 별은 여전히 거기 있습니다. 잠시 보이지 않는 것뿐입니다.",
    uprightEn:
      "Hope, faith, healing, inspiration. The quiet light that arrives after the darkest night. The path opens for those who didn't give up.",
    reversedEn:
      "Lost hope, despair, disbelief. Even when the starlight is hidden, the star is still there. It's only temporarily out of sight.",
  },
  {
    key: "moon",
    file: "the-moon-yes-no",
    numeral: "XVIII",
    koName: "달",
    enName: "The Moon",
    introKo:
      "메이저 아르카나 XVIII번, 달(The Moon)은 환상과 불확실성, 무의식의 카드입니다. " +
      "달빛 아래 짖는 개와 늑대, 웅덩이에서 기어 나오는 가재는 현실과 환상의 경계가 흐릿해지는 시간을 표현합니다. " +
      "이 카드가 나왔다면, 지금 보이는 것이 전부가 아니며 중요한 결정은 잠시 미루는 것이 현명합니다.",
    introEn:
      "The Moon is card XVIII of the Major Arcana — illusion, uncertainty, and the unconscious. " +
      "A dog and wolf howling at the moon, a crayfish emerging from a pool — images of a time when the line between reality and fantasy blurs. " +
      "When this card appears, what's visible isn't the whole truth, and major decisions are better deferred.",
    uprightKo:
      "환상, 두려움, 불확실성, 무의식. 보이는 것이 전부가 아닐 때 직관을 믿으세요. 안개가 걷힐 때까지 기다리세요.",
    reversedKo:
      "혼란 해소, 진실 드러남, 두려움에서 벗어남. 안개가 걷히기 시작합니다. 서서히 명확해지고 있습니다.",
    uprightEn:
      "Illusion, fear, uncertainty, the unconscious. When things aren't what they seem, trust your deeper instincts. Wait for the fog to lift.",
    reversedEn:
      "Clarity emerging, truth surfacing, fear releasing. The fog is beginning to lift. Things are slowly coming into focus.",
  },
  {
    key: "sun",
    file: "the-sun-yes-no",
    numeral: "XIX",
    koName: "태양",
    enName: "The Sun",
    introKo:
      "메이저 아르카나 XIX번, 태양(The Sun)은 기쁨과 성공, 활력의 카드입니다. " +
      "밝게 빛나는 태양 아래 아이가 활짝 웃으며 달리는 모습은 근심 없는 순수한 행복을 표현합니다. " +
      "이 카드가 나왔다면, 지금은 모든 것이 당신 편인 시기입니다. 밝게 빛나세요.",
    introEn:
      "The Sun is card XIX of the Major Arcana — joy, success, and vitality. " +
      "A child running and laughing under a blazing sun embodies pure, unclouded happiness. " +
      "When this card appears, everything is on your side right now. Shine brightly.",
    uprightKo:
      "기쁨, 성공, 활력, 긍정적 에너지. 태양은 숨길 수 없습니다 — 빛나세요. 운이 당신 손을 잡고 있습니다.",
    reversedKo:
      "일시적 구름, 과신, 에너지 과소비. 너무 밝게 타오르면 빨리 소진될 수 있습니다. 에너지를 현명하게 쓰세요.",
    uprightEn:
      "Joy, success, vitality, positive energy. The sun cannot be hidden — shine. Luck has taken your hand.",
    reversedEn:
      "Temporary clouds, overconfidence, energy drain. Burning too brightly can lead to quick exhaustion. Use your energy wisely.",
  },
  {
    key: "judgement",
    file: "the-judgement-yes-no",
    numeral: "XX",
    koName: "심판",
    enName: "Judgement",
    introKo:
      "메이저 아르카나 XX번, 심판(Judgement)은 각성과 부활, 소명의 카드입니다. " +
      "천사의 나팔 소리에 무덤에서 일어나는 인물들은 과거를 정리하고 진짜 자신으로 깨어나는 순간을 표현합니다. " +
      "이 카드가 나왔다면, 내면의 부름에 응답하고 다음 단계로 나아갈 때가 왔습니다.",
    introEn:
      "Judgement is card XX of the Major Arcana — awakening, rebirth, and a calling. " +
      "Figures rising from graves at the sound of an angel's trumpet represent the moment of clearing the past and waking into your true self. " +
      "When this card appears, it's time to answer the inner call and move to the next level.",
    uprightKo:
      "각성, 부활, 심판의 날, 소명. 내면의 목소리가 나아갈 길을 알고 있습니다. 부름에 응답할 용기를 내세요.",
    reversedKo:
      "자기 의심, 부름에 응하지 않음, 후회. 알고 있으면서도 외면하는 것이 가장 큰 손실입니다. 지금이 마지막 기회일 수 있습니다.",
    uprightEn:
      "Awakening, rebirth, reckoning, a calling. The voice within already knows the way forward. Find the courage to answer.",
    reversedEn:
      "Self-doubt, refusing the call, lingering regret. Knowing and still looking away is the greatest loss. This may be the last chance right now.",
  },
  {
    key: "world",
    file: "the-world-yes-no",
    numeral: "XXI",
    koName: "세계",
    enName: "The World",
    introKo:
      "메이저 아르카나 XXI번, 세계(The World)는 완성과 성취, 통합의 카드입니다. " +
      "월계관 안에서 춤추는 인물은 하나의 여정이 완전히 마무리되는 순간의 기쁨과 충만함을 표현합니다. " +
      "이 카드가 나왔다면, 당신은 한 사이클의 끝에 서 있습니다. 받아들이고 축하하세요.",
    introEn:
      "The World is card XXI of the Major Arcana — completion, achievement, and integration. " +
      "A figure dancing inside a laurel wreath expresses the joy and fullness of a journey brought to its perfect close. " +
      "When this card appears, you are standing at the end of a cycle. Receive it and celebrate.",
    uprightKo:
      "완성, 성취, 통합, 새로운 출발. 하나의 여정이 완성되고 다음 문이 열립니다. 지금 이 순간을 충분히 누리세요.",
    reversedKo:
      "완성 지연, 마무리 부족, 아쉬움. 조금만 더 가면 다 됩니다 — 포기하지 마세요. 끝맺음이 아직 필요합니다.",
    uprightEn:
      "Completion, achievement, integration, a new beginning. One journey ends in wholeness and the next door opens. Take time to fully receive this moment.",
    reversedEn:
      "Delayed completion, loose ends, near-miss. You're almost there — don't give up now. The finishing touch is still needed.",
  },
];

// ──────────────────────────────────────────────
// HTML 템플릿 함수
// ──────────────────────────────────────────────
function svgEl(svgInner) {
  return `<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">\n            ${svgInner}\n          </svg>`;
}

const SHARED_STYLE = `
      .blog-wrap { max-width: 680px; margin: 0 auto; padding: 2rem 1.4rem 6rem; }
      .topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.6rem; gap: 0.75rem; }
      .site-logo { font-family: "Caveat", cursive; font-size: 1.4rem; font-weight: 700; color: var(--fg); text-decoration: none; }
      .site-logo:hover { opacity: 0.75; }
      .topbar-right { display: flex; gap: 0.5rem; align-items: center; }
      .lang-switch { font-family: "IsYun", sans-serif; font-size: 0.82rem; padding: 0.3rem 0.75rem; border: 1.5px solid var(--border); background: var(--bg2); color: var(--fg2); text-decoration: none; box-shadow: var(--shadow-sm); transition: transform 0.1s, box-shadow 0.1s; }
      .lang-switch:hover { transform: translate(-1px,-1px); box-shadow: 3px 3px 0 var(--border); color: var(--fg); }
      .dark-toggle { font-family: "IsYun", sans-serif; font-size: 0.82rem; padding: 0.3rem 0.75rem; border: 1.5px solid var(--border); background: var(--btn-bg); color: var(--btn-fg); cursor: pointer; box-shadow: var(--shadow-sm); transition: transform 0.1s, box-shadow 0.1s; }
      .dark-toggle:hover { transform: translate(-1px,-1px); box-shadow: 3px 3px 0 var(--border); }
      .dark-toggle:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--border); }
      .breadcrumb { font-size: 0.82rem; color: var(--fg3); margin-bottom: 2rem; display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap; }
      .breadcrumb a { color: var(--fg2); text-decoration: none; border-bottom: 1px solid var(--border); }
      .breadcrumb a:hover { color: var(--fg); }
      .breadcrumb-sep { opacity: 0.4; }
      .hero { display: flex; flex-direction: column; align-items: center; gap: 1.4rem; margin-bottom: 2.8rem; }
      .card-display { width: 160px; height: 256px; border: 1.5px solid var(--border); box-shadow: var(--shadow); background: var(--card-bg); flex-shrink: 0; }
      .card-display svg { width: 100%; height: 100%; display: block; }
      .hero-text { text-align: center; }
      .card-number { font-family: "Caveat", cursive; font-size: 1rem; color: var(--fg3); margin-bottom: 0.3rem; }
      .card-title-big { font-family: "Caveat", cursive; font-size: 2.4rem; font-weight: 700; line-height: 1.15; margin-bottom: 0.6rem; }
      .verdict-badge { display: inline-block; font-family: "Caveat", cursive; font-size: 1.5rem; font-weight: 700; padding: 0.2rem 1rem; border: 1.5px solid var(--border); background: var(--bg2); box-shadow: var(--shadow-sm); }
      .section-heading { font-family: "Caveat", cursive; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.6rem; margin-top: 1.8rem; }
      .section-heading:first-of-type { margin-top: 0; }
      .prose { font-size: 1rem; color: var(--fg2); line-height: 1.8; margin-bottom: 1rem; }
      .direction-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin: 0.8rem 0 1.4rem; }
      .direction-card { padding: 0.9rem 1rem; border: 1.5px solid var(--border); background: var(--bg2); }
      .direction-label { font-size: 0.78rem; font-weight: 700; letter-spacing: 1px; color: var(--fg3); margin-bottom: 0.4rem; }
      .direction-text { font-size: 0.92rem; color: var(--fg2); line-height: 1.65; }
      .situation-list { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin: 0.6rem 0 1.2rem; }
      .situation-list li { display: grid; grid-template-columns: 5rem 1fr; gap: 0.6rem; align-items: start; padding: 0.7rem 0.9rem; border: 1.5px solid var(--border); background: var(--card-bg); font-size: 0.93rem; line-height: 1.65; }
      .sit-label { font-weight: 700; color: var(--fg3); font-size: 0.78rem; padding-top: 0.1rem; letter-spacing: 0.5px; }
      .sit-text { color: var(--fg2); }
      .cta-box { margin-top: 2.4rem; padding: 1.4rem 1.2rem; border: 1.5px solid var(--border); background: var(--bg2); text-align: center; box-shadow: var(--shadow); }
      .cta-heading { font-family: "Caveat", cursive; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem; }
      .cta-sub { font-size: 0.9rem; color: var(--fg2); margin-bottom: 1rem; line-height: 1.6; }
      .cta-btn { display: inline-block; font-family: "IsYun", sans-serif; font-size: 1rem; font-weight: 700; padding: 0.65rem 1.8rem; border: 1.5px solid var(--border); background: var(--btn-bg); color: var(--btn-fg); text-decoration: none; box-shadow: var(--shadow); transition: transform 0.1s, box-shadow 0.1s; }
      .cta-btn:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 var(--border); }
      .cta-btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--border); }
      .blog-footer { margin-top: 4rem; padding-top: 1.2rem; border-top: 1.5px solid var(--border); font-size: 0.82rem; color: var(--fg3); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
      .blog-footer a { color: var(--fg2); text-decoration: none; border-bottom: 1px solid var(--fg3); }
      .blog-footer a:hover { color: var(--fg); }
      @media (max-width: 480px) {
        .direction-grid { grid-template-columns: 1fr; }
        .situation-list li { grid-template-columns: 4rem 1fr; }
        .card-title-big { font-size: 2rem; }
      }
`;

const DARK_SCRIPT_KO = `
    <script>
      (function () {
        if (localStorage.getItem("dark") === "1") {
          document.getElementById("app").setAttribute("data-dark", "1");
          document.getElementById("darkBtn").textContent = "☀️ 라이트";
        }
      })();
      function toggleDark() {
        const app = document.getElementById("app");
        const btn = document.getElementById("darkBtn");
        const isDark = app.getAttribute("data-dark") === "1";
        if (isDark) { app.removeAttribute("data-dark"); btn.textContent = "🌙 다크"; localStorage.setItem("dark", "0"); }
        else { app.setAttribute("data-dark", "1"); btn.textContent = "☀️ 라이트"; localStorage.setItem("dark", "1"); }
      }
    <\/script>`;

const DARK_SCRIPT_EN = `
    <script>
      (function () {
        if (localStorage.getItem("dark") === "1") {
          document.getElementById("app").setAttribute("data-dark", "1");
          document.getElementById("darkBtn").textContent = "☀️ Light";
        }
      })();
      function toggleDark() {
        const app = document.getElementById("app");
        const btn = document.getElementById("darkBtn");
        const isDark = app.getAttribute("data-dark") === "1";
        if (isDark) { app.removeAttribute("data-dark"); btn.textContent = "🌙 Dark"; localStorage.setItem("dark", "0"); }
        else { app.setAttribute("data-dark", "1"); btn.textContent = "☀️ Light"; localStorage.setItem("dark", "1"); }
      }
    <\/script>`;

const KO_LABELS = ["연애", "인간관계", "직장", "공부", "돈", "건강", "기타"];
const EN_LABELS = ["LOVE", "PEOPLE", "WORK", "STUDY", "MONEY", "HEALTH", "OTHER"];

function genKo(card) {
  const d = DESCS[card.key];
  const en = DESCS_EN[card.key];
  const verdictKo = d.confidence;
  const verdictEn = en.confidence;
  const situations = KO_LABELS.map(
    (label, i) => `        <li>
          <span class="sit-label">${label}</span>
          <span class="sit-text">${d.descs[i]}</span>
        </li>`
  ).join("\n");

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${card.koName}(${card.enName}) 타로 YES or NO | 양자택일 타로 해석</title>
    <meta name="description" content="타로카드 ${card.koName}(${card.enName})의 YES or NO 의미를 알아보세요. 정방향·역방향 해석, 연애·직장·돈·건강 상황별 조언까지 한눈에 확인하세요." />
    <meta name="keywords" content="${card.koName} 타로, ${card.enName} 타로, ${card.koName}카드 yes no, 타로 ${card.koName} 정방향, 타로 ${card.koName} 역방향, 양자택일 타로" />
    <link rel="canonical" href="https://yesorno-tarot.vercel.app/blog/${card.file}.html" />
    <link rel="alternate" hreflang="ko" href="https://yesorno-tarot.vercel.app/blog/${card.file}.html" />
    <link rel="alternate" hreflang="en" href="https://yesorno-tarot.vercel.app/blog/en/${card.file}.html" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${card.koName}(${card.enName}) 타로 YES or NO | 양자택일 타로 해석" />
    <meta property="og:description" content="${card.koName} 카드가 나왔다면? ${verdictKo}입니다. 정방향·역방향 해석과 상황별 조언을 확인하세요." />
    <meta property="og:url" content="https://yesorno-tarot.vercel.app/blog/${card.file}.html" />
    <meta property="og:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="ko_KR" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${card.koName}(${card.enName}) 타로 YES or NO | 양자택일 타로 해석" />
    <meta name="twitter:description" content="${card.koName} 카드가 나왔다면? ${verdictKo}입니다. 정방향·역방향 해석과 상황별 조언을 확인하세요." />
    <meta name="twitter:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${card.koName}(${card.enName}) 타로 YES or NO 완전 해석",
        "description": "타로카드 ${card.koName}(${card.enName})의 YES or NO 의미, 정방향·역방향 해석, 상황별 조언을 설명합니다.",
        "url": "https://yesorno-tarot.vercel.app/blog/${card.file}.html",
        "inLanguage": "ko",
        "author": { "@type": "Organization", "name": "양자택일 타로" },
        "publisher": { "@type": "Organization", "name": "양자택일 타로", "url": "https://yesorno-tarot.vercel.app/" }
      }
    <\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../style.css" />
    <style>${SHARED_STYLE}</style>
  </head>
  <body id="app">
    <div class="blog-wrap">
      <div class="topbar">
        <a href="../index.html" class="site-logo">YES or NO ✦</a>
        <div class="topbar-right">
          <a href="./en/${card.file}.html" class="lang-switch">EN</a>
          <button class="dark-toggle" id="darkBtn" onclick="toggleDark()">🌙 다크</button>
        </div>
      </div>
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="../index.html">홈</a>
        <span class="breadcrumb-sep">›</span>
        <a href="./index.html">블로그</a>
        <span class="breadcrumb-sep">›</span>
        <span>${card.koName} (${card.enName})</span>
      </nav>
      <div class="hero">
        <div class="card-display">
          ${svgEl(SVG_DEFS[card.key])}
        </div>
        <div class="hero-text">
          <div class="card-number">메이저 아르카나 ${card.numeral}번</div>
          <div class="card-title-big">${card.koName}<br/>${card.enName}</div>
          <div class="verdict-badge">${verdictKo}</div>
        </div>
      </div>
      <h1 class="section-heading">${card.koName} 카드란?</h1>
      <p class="prose">${card.introKo}</p>
      <h2 class="section-heading">YES or NO 결론</h2>
      <p class="prose">${card.koName} 카드는 <strong>${verdictKo}</strong>를 의미합니다. ${d.descs[6]}</p>
      <h2 class="section-heading">정방향 / 역방향 해석</h2>
      <div class="direction-grid">
        <div class="direction-card">
          <div class="direction-label">▲ 정방향</div>
          <div class="direction-text">${card.uprightKo}</div>
        </div>
        <div class="direction-card">
          <div class="direction-label">▼ 역방향</div>
          <div class="direction-text">${card.reversedKo}</div>
        </div>
      </div>
      <h2 class="section-heading">상황별 조언</h2>
      <ul class="situation-list">
${situations}
      </ul>
      <div class="cta-box">
        <div class="cta-heading">지금 바로 카드를 뽑아보세요</div>
        <p class="cta-sub">오늘 내 질문에 어떤 카드가 답할까요?<br/>하루 세 번 무료로 양자택일 타로를 뽑을 수 있습니다.</p>
        <a href="../index.html" class="cta-btn">직접 뽑아보기 →</a>
      </div>
      <footer class="blog-footer">
        <span>© 2025 양자택일 타로</span>
        <span>
          <a href="./index.html">블로그 목록</a>
          &nbsp;·&nbsp;
          <a href="../index.html">앱으로 이동</a>
          &nbsp;·&nbsp;
          <a href="../privacy.html">개인정보처리방침</a>
        </span>
      </footer>
    </div>
    ${DARK_SCRIPT_KO}
  </body>
</html>`;
}

function genEn(card) {
  const d = DESCS[card.key];
  const en = DESCS_EN[card.key];
  const verdictEn = en.confidence;
  const situations = EN_LABELS.map(
    (label, i) => `        <li>
          <span class="sit-label">${label}</span>
          <span class="sit-text">${en.descs[i]}</span>
        </li>`
  ).join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${card.enName} Tarot YES or NO | Yes or No Tarot Reading</title>
    <meta name="description" content="${card.enName} tarot card YES or NO meaning explained. Upright and reversed interpretations, plus advice for love, work, money, and health situations." />
    <meta name="keywords" content="${card.enName.toLowerCase()} tarot yes or no, ${card.enName.toLowerCase()} tarot meaning, ${card.enName.toLowerCase()} tarot upright reversed, yes no tarot, major arcana ${card.numeral.toLowerCase()}" />
    <link rel="canonical" href="https://yesorno-tarot.vercel.app/blog/en/${card.file}.html" />
    <link rel="alternate" hreflang="ko" href="https://yesorno-tarot.vercel.app/blog/${card.file}.html" />
    <link rel="alternate" hreflang="en" href="https://yesorno-tarot.vercel.app/blog/en/${card.file}.html" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${card.enName} Tarot YES or NO | Yes or No Tarot Reading" />
    <meta property="og:description" content="Drew ${card.enName}? That's ${verdictEn}. Get the full upright, reversed, and situation-specific reading here." />
    <meta property="og:url" content="https://yesorno-tarot.vercel.app/blog/en/${card.file}.html" />
    <meta property="og:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="ko_KR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${card.enName} Tarot YES or NO" />
    <meta name="twitter:description" content="Drew ${card.enName}? That's ${verdictEn}. Full upright, reversed, and situation advice." />
    <meta name="twitter:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${card.enName} Tarot YES or NO — Complete Reading",
        "description": "${card.enName} tarot card YES or NO verdict, upright and reversed meanings, and advice for love, work, money, and health.",
        "url": "https://yesorno-tarot.vercel.app/blog/en/${card.file}.html",
        "inLanguage": "en",
        "author": { "@type": "Organization", "name": "Yes or No Tarot" },
        "publisher": { "@type": "Organization", "name": "Yes or No Tarot", "url": "https://yesorno-tarot.vercel.app/" }
      }
    <\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../../style.css" />
    <style>${SHARED_STYLE}</style>
  </head>
  <body id="app">
    <div class="blog-wrap">
      <div class="topbar">
        <a href="../../index.html" class="site-logo">YES or NO ✦</a>
        <div class="topbar-right">
          <a href="../${card.file}.html" class="lang-switch">한국어</a>
          <button class="dark-toggle" id="darkBtn" onclick="toggleDark()">🌙 Dark</button>
        </div>
      </div>
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="../../index.html">Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="../index.html">Blog</a>
        <span class="breadcrumb-sep">›</span>
        <span>${card.enName}</span>
      </nav>
      <div class="hero">
        <div class="card-display">
          ${svgEl(SVG_DEFS[card.key])}
        </div>
        <div class="hero-text">
          <div class="card-number">Major Arcana · Card ${card.numeral}</div>
          <div class="card-title-big">${card.enName}</div>
          <div class="verdict-badge">${verdictEn}</div>
        </div>
      </div>
      <h1 class="section-heading">What is ${card.enName}?</h1>
      <p class="prose">${card.introEn}</p>
      <h2 class="section-heading">YES or NO Verdict</h2>
      <p class="prose">${card.enName} is <strong>${verdictEn}</strong>. ${en.descs[6]}</p>
      <h2 class="section-heading">Upright / Reversed</h2>
      <div class="direction-grid">
        <div class="direction-card">
          <div class="direction-label">▲ UPRIGHT</div>
          <div class="direction-text">${card.uprightEn}</div>
        </div>
        <div class="direction-card">
          <div class="direction-label">▼ REVERSED</div>
          <div class="direction-text">${card.reversedEn}</div>
        </div>
      </div>
      <h2 class="section-heading">Advice by Situation</h2>
      <ul class="situation-list">
${situations}
      </ul>
      <div class="cta-box">
        <div class="cta-heading">Draw your own card now</div>
        <p class="cta-sub">What card will answer your question today?<br/>Draw up to three free YES or NO tarot readings per day.</p>
        <a href="../../index.html" class="cta-btn">Try it yourself →</a>
      </div>
      <footer class="blog-footer">
        <span>© 2025 Yes or No Tarot</span>
        <span>
          <a href="../index.html">All posts</a>
          &nbsp;·&nbsp;
          <a href="../../index.html">Go to app</a>
          &nbsp;·&nbsp;
          <a href="../../privacy.html">Privacy</a>
        </span>
      </footer>
    </div>
    ${DARK_SCRIPT_EN}
  </body>
</html>`;
}

// ──────────────────────────────────────────────
// 인덱스 페이지용 전체 카드 메타 (순서 포함)
// ──────────────────────────────────────────────
const ALL_CARDS = [
  { numeral:"0",    koName:"바보",            enName:"The Fool",          file:"the-fool-yes-no",             verdictKo:"가벼운 YES",      verdictEn:"A gentle YES",         isYes:true  },
  { numeral:"I",    koName:"마법사",          enName:"The Magician",      file:"the-magician-yes-no",         verdictKo:"강한 YES",        verdictEn:"A strong YES",         isYes:true  },
  { numeral:"II",   koName:"여사제",          enName:"The High Priestess",file:"the-high-priestess-yes-no",   verdictKo:"조용한 NO",       verdictEn:"A quiet NO",           isYes:false },
  { numeral:"III",  koName:"여황제",          enName:"The Empress",       file:"the-empress-yes-no",          verdictKo:"풍요로운 YES",    verdictEn:"An abundant YES",      isYes:true  },
  { numeral:"IV",   koName:"황제",            enName:"The Emperor",       file:"the-emperor-yes-no",          verdictKo:"단단한 YES",      verdictEn:"A solid YES",          isYes:true  },
  { numeral:"V",    koName:"교황",            enName:"The Hierophant",    file:"the-hierophant-yes-no",       verdictKo:"안정적인 YES",    verdictEn:"A steady YES",         isYes:true  },
  { numeral:"VI",   koName:"연인",            enName:"The Lovers",        file:"the-lovers-yes-no",           verdictKo:"설레는 YES",      verdictEn:"An exciting YES",      isYes:true  },
  { numeral:"VII",  koName:"전차",            enName:"The Chariot",       file:"the-chariot-yes-no",          verdictKo:"돌파하는 YES",    verdictEn:"A breakthrough YES",   isYes:true  },
  { numeral:"VIII", koName:"힘",              enName:"Strength",          file:"the-strength-yes-no",         verdictKo:"차분한 YES",      verdictEn:"A calm YES",           isYes:true  },
  { numeral:"IX",   koName:"은둔자",          enName:"The Hermit",        file:"the-hermit-yes-no",           verdictKo:"아직은 NO",       verdictEn:"Not yet — NO",         isYes:false },
  { numeral:"X",    koName:"운명의 수레바퀴", enName:"Wheel of Fortune",  file:"the-wheel-of-fortune-yes-no", verdictKo:"운이 도는 YES",   verdictEn:"The tide is turning",  isYes:true  },
  { numeral:"XI",   koName:"정의",            enName:"Justice",           file:"the-justice-yes-no",          verdictKo:"이성적인 YES",    verdictEn:"A rational YES",       isYes:true  },
  { numeral:"XII",  koName:"매달린 사람",     enName:"The Hanged Man",    file:"the-hanged-man-yes-no",       verdictKo:"지금은 NO",       verdictEn:"Not yet — NO",         isYes:false },
  { numeral:"XIII", koName:"죽음",            enName:"Death",             file:"the-death-yes-no",            verdictKo:"끝내는 NO",       verdictEn:"Time to end it",       isYes:false },
  { numeral:"XIV",  koName:"절제",            enName:"Temperance",        file:"the-temperance-yes-no",       verdictKo:"무난한 YES",      verdictEn:"A measured YES",       isYes:true  },
  { numeral:"XV",   koName:"악마",            enName:"The Devil",         file:"the-devil-yes-no",            verdictKo:"유혹의 NO",       verdictEn:"A tempting NO",        isYes:false },
  { numeral:"XVI",  koName:"탑",              enName:"The Tower",         file:"the-tower-yes-no",            verdictKo:"강력한 NO",       verdictEn:"A sharp NO",           isYes:false },
  { numeral:"XVII", koName:"별",              enName:"The Star",          file:"the-star-yes-no",             verdictKo:"YES",             verdictEn:"YES",                  isYes:true  },
  { numeral:"XVIII",koName:"달",              enName:"The Moon",          file:"the-moon-yes-no",             verdictKo:"아직은 NO",       verdictEn:"Not quite — NO",       isYes:false },
  { numeral:"XIX",  koName:"태양",            enName:"The Sun",           file:"the-sun-yes-no",              verdictKo:"강력한 YES",      verdictEn:"A powerful YES",       isYes:true  },
  { numeral:"XX",   koName:"심판",            enName:"Judgement",         file:"the-judgement-yes-no",        verdictKo:"깨닫는 YES",      verdictEn:"An awakening YES",     isYes:true  },
  { numeral:"XXI",  koName:"세계",            enName:"The World",         file:"the-world-yes-no",            verdictKo:"완전한 YES",      verdictEn:"A complete YES",       isYes:true  },
];

const INDEX_STYLE = `
      .blog-wrap { max-width: 720px; margin: 0 auto; padding: 2rem 1.4rem 6rem; }
      .topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.6rem; gap: 0.75rem; }
      .site-logo { font-family: "Caveat", cursive; font-size: 1.4rem; font-weight: 700; color: var(--fg); text-decoration: none; }
      .site-logo:hover { opacity: 0.75; }
      .topbar-right { display: flex; gap: 0.5rem; align-items: center; }
      .lang-switch { font-family: "IsYun", sans-serif; font-size: 0.82rem; padding: 0.3rem 0.75rem; border: 1.5px solid var(--border); background: var(--bg2); color: var(--fg2); text-decoration: none; box-shadow: var(--shadow-sm); transition: transform 0.1s, box-shadow 0.1s; }
      .lang-switch:hover { transform: translate(-1px,-1px); box-shadow: 3px 3px 0 var(--border); color: var(--fg); }
      .dark-toggle { font-family: "IsYun", sans-serif; font-size: 0.82rem; padding: 0.3rem 0.75rem; border: 1.5px solid var(--border); background: var(--btn-bg); color: var(--btn-fg); cursor: pointer; box-shadow: var(--shadow-sm); transition: transform 0.1s, box-shadow 0.1s; }
      .dark-toggle:hover { transform: translate(-1px,-1px); box-shadow: 3px 3px 0 var(--border); }
      .dark-toggle:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--border); }
      .breadcrumb { font-size: 0.82rem; color: var(--fg3); margin-bottom: 1rem; display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap; }
      .breadcrumb a { color: var(--fg2); text-decoration: none; border-bottom: 1px solid var(--border); }
      .breadcrumb a:hover { color: var(--fg); }
      .breadcrumb-sep { opacity: 0.4; }
      .page-title { font-family: "Caveat", cursive; font-size: 2rem; font-weight: 700; margin: 1.2rem 0 0.4rem; }
      .page-sub { font-size: 0.95rem; color: var(--fg2); margin-bottom: 2rem; line-height: 1.7; }
      .filter-row { display: flex; gap: 0.5rem; margin-bottom: 1.4rem; flex-wrap: wrap; }
      .filter-btn { font-family: "IsYun", sans-serif; font-size: 0.82rem; padding: 0.3rem 0.9rem; border: 1.5px solid var(--border); background: var(--bg2); color: var(--fg2); cursor: pointer; box-shadow: var(--shadow-sm); transition: transform 0.1s, box-shadow 0.1s; }
      .filter-btn.active, .filter-btn:hover { background: var(--btn-bg); color: var(--btn-fg); transform: translate(-1px,-1px); box-shadow: 3px 3px 0 var(--border); }
      .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
      .card-item { display: flex; flex-direction: column; border: 1.5px solid var(--border); background: var(--card-bg); text-decoration: none; color: var(--fg); transition: transform 0.12s, box-shadow 0.12s; box-shadow: var(--shadow-sm); }
      .card-item:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 var(--border); }
      .card-thumb { width: 100%; aspect-ratio: 5/8; overflow: hidden; border-bottom: 1.5px solid var(--border); background: var(--bg2); }
      .card-thumb svg { width: 100%; height: 100%; display: block; }
      .card-info { padding: 0.65rem 0.75rem 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; flex: 1; }
      .card-num { font-size: 0.72rem; color: var(--fg3); letter-spacing: 1px; }
      .card-name { font-family: "Caveat", cursive; font-size: 1.15rem; font-weight: 700; line-height: 1.2; }
      .card-verdict { display: inline-block; font-size: 0.72rem; font-weight: 700; padding: 0.1rem 0.5rem; border: 1.5px solid var(--border); background: var(--bg2); margin-top: 0.2rem; align-self: flex-start; }
      .card-verdict.yes { border-color: #1a1a1a; }
      .card-verdict.no  { opacity: 0.65; }
      .cta-box { margin-top: 2.8rem; padding: 1.4rem 1.2rem; border: 1.5px solid var(--border); background: var(--bg2); text-align: center; box-shadow: var(--shadow); }
      .cta-heading { font-family: "Caveat", cursive; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem; }
      .cta-sub { font-size: 0.9rem; color: var(--fg2); margin-bottom: 1rem; line-height: 1.6; }
      .cta-btn { display: inline-block; font-family: "IsYun", sans-serif; font-size: 1rem; font-weight: 700; padding: 0.65rem 1.8rem; border: 1.5px solid var(--border); background: var(--btn-bg); color: var(--btn-fg); text-decoration: none; box-shadow: var(--shadow); transition: transform 0.1s, box-shadow 0.1s; }
      .cta-btn:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 var(--border); }
      .cta-btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--border); }
      .blog-footer { margin-top: 4rem; padding-top: 1.2rem; border-top: 1.5px solid var(--border); font-size: 0.82rem; color: var(--fg3); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
      .blog-footer a { color: var(--fg2); text-decoration: none; border-bottom: 1px solid var(--fg3); }
      .blog-footer a:hover { color: var(--fg); }
      @media (max-width: 540px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 340px) { .card-grid { grid-template-columns: 1fr; } }
`;

function genIndexKo() {
  const items = ALL_CARDS.map((c) => {
    const svgKey = Object.keys(SVG_DEFS).find(
      (k) => k.toLowerCase().replace(/\s/g, "") === c.enName.toLowerCase().replace(/the |of |\s/g, "")
    ) || c.file.replace(/-yes-no$/, "").replace(/-/g, "").replace(/the/g, "");
    // map file slug back to SVG key
    const slugToKey = {
      "the-fool-yes-no": "fool", "the-magician-yes-no": "magician",
      "the-high-priestess-yes-no": "highPriestess", "the-empress-yes-no": "empress",
      "the-emperor-yes-no": "emperor", "the-hierophant-yes-no": "hierophant",
      "the-lovers-yes-no": "lovers", "the-chariot-yes-no": "chariot",
      "the-strength-yes-no": "strength", "the-hermit-yes-no": "hermit",
      "the-wheel-of-fortune-yes-no": "wheeloffortune", "the-justice-yes-no": "justice",
      "the-hanged-man-yes-no": "hangedMan", "the-death-yes-no": "death",
      "the-temperance-yes-no": "temperance", "the-devil-yes-no": "devil",
      "the-tower-yes-no": "tower", "the-star-yes-no": "star",
      "the-moon-yes-no": "moon", "the-sun-yes-no": "sun",
      "the-judgement-yes-no": "judgement", "the-world-yes-no": "world",
    };
    const key = slugToKey[c.file];
    return `      <a href="./${c.file}.html" class="card-item" data-yn="${c.isYes ? "yes" : "no"}">
        <div class="card-thumb">
          <svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">${SVG_DEFS[key]}</svg>
        </div>
        <div class="card-info">
          <span class="card-num">${c.numeral}</span>
          <span class="card-name">${c.koName}</span>
          <span class="card-verdict ${c.isYes ? "yes" : "no"}">${c.verdictKo}</span>
        </div>
      </a>`;
  }).join("\n");

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>타로카드 YES or NO 해석 모음 | 양자택일 타로 블로그</title>
    <meta name="description" content="메이저 아르카나 22장 전체의 YES or NO 타로 해석을 한곳에서 확인하세요. 정방향·역방향 의미와 연애·직장·돈·건강 상황별 조언 수록." />
    <meta name="keywords" content="타로카드 yes no, 양자택일 타로 해석, 메이저 아르카나 해석, 타로 정방향 역방향" />
    <link rel="canonical" href="https://yesorno-tarot.vercel.app/blog/index.html" />
    <link rel="alternate" hreflang="ko" href="https://yesorno-tarot.vercel.app/blog/index.html" />
    <link rel="alternate" hreflang="en" href="https://yesorno-tarot.vercel.app/blog/en/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="타로카드 YES or NO 해석 모음 | 양자택일 타로 블로그" />
    <meta property="og:description" content="메이저 아르카나 22장 전체의 YES or NO 타로 해석을 한곳에서 확인하세요." />
    <meta property="og:url" content="https://yesorno-tarot.vercel.app/blog/index.html" />
    <meta property="og:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <meta property="og:locale" content="ko_KR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="타로카드 YES or NO 해석 모음 | 양자택일 타로 블로그" />
    <meta name="twitter:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "양자택일 타로 블로그",
        "description": "메이저 아르카나 22장 YES or NO 타로 해석 모음",
        "url": "https://yesorno-tarot.vercel.app/blog/index.html",
        "inLanguage": "ko"
      }
    <\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../style.css" />
    <style>${INDEX_STYLE}</style>
  </head>
  <body id="app">
    <div class="blog-wrap">
      <div class="topbar">
        <a href="../index.html" class="site-logo">YES or NO ✦</a>
        <div class="topbar-right">
          <a href="./en/index.html" class="lang-switch">EN</a>
          <button class="dark-toggle" id="darkBtn" onclick="toggleDark()">🌙 다크</button>
        </div>
      </div>
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="../index.html">홈</a>
        <span class="breadcrumb-sep">›</span>
        <span>블로그</span>
      </nav>
      <h1 class="page-title">타로카드 YES or NO 해석</h1>
      <p class="page-sub">메이저 아르카나 22장 전체 — 정방향·역방향 의미와 연애·직장·돈·건강 상황별 조언을 카드별로 확인하세요.</p>
      <div class="filter-row">
        <button class="filter-btn active" onclick="filter('all', this)">전체 (22)</button>
        <button class="filter-btn" onclick="filter('yes', this)">YES 카드</button>
        <button class="filter-btn" onclick="filter('no', this)">NO 카드</button>
      </div>
      <div class="card-grid" id="grid">
${items}
      </div>
      <div class="cta-box">
        <div class="cta-heading">지금 바로 카드를 뽑아보세요</div>
        <p class="cta-sub">오늘 내 질문에 어떤 카드가 답할까요?<br/>하루 세 번 무료로 양자택일 타로를 뽑을 수 있습니다.</p>
        <a href="../index.html" class="cta-btn">직접 뽑아보기 →</a>
      </div>
      <footer class="blog-footer">
        <span>© 2025 양자택일 타로</span>
        <span>
          <a href="../index.html">앱으로 이동</a>
          &nbsp;·&nbsp;
          <a href="../privacy.html">개인정보처리방침</a>
        </span>
      </footer>
    </div>
    <script>
      (function () {
        if (localStorage.getItem("dark") === "1") {
          document.getElementById("app").setAttribute("data-dark", "1");
          document.getElementById("darkBtn").textContent = "☀️ 라이트";
        }
      })();
      function toggleDark() {
        const app = document.getElementById("app");
        const btn = document.getElementById("darkBtn");
        const isDark = app.getAttribute("data-dark") === "1";
        if (isDark) { app.removeAttribute("data-dark"); btn.textContent = "🌙 다크"; localStorage.setItem("dark", "0"); }
        else { app.setAttribute("data-dark", "1"); btn.textContent = "☀️ 라이트"; localStorage.setItem("dark", "1"); }
      }
      function filter(type, btn) {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".card-item").forEach(el => {
          el.style.display = (type === "all" || el.dataset.yn === type) ? "" : "none";
        });
      }
    <\/script>
  </body>
</html>`;
}

function genIndexEn() {
  const items = ALL_CARDS.map((c) => {
    const slugToKey = {
      "the-fool-yes-no": "fool", "the-magician-yes-no": "magician",
      "the-high-priestess-yes-no": "highPriestess", "the-empress-yes-no": "empress",
      "the-emperor-yes-no": "emperor", "the-hierophant-yes-no": "hierophant",
      "the-lovers-yes-no": "lovers", "the-chariot-yes-no": "chariot",
      "the-strength-yes-no": "strength", "the-hermit-yes-no": "hermit",
      "the-wheel-of-fortune-yes-no": "wheeloffortune", "the-justice-yes-no": "justice",
      "the-hanged-man-yes-no": "hangedMan", "the-death-yes-no": "death",
      "the-temperance-yes-no": "temperance", "the-devil-yes-no": "devil",
      "the-tower-yes-no": "tower", "the-star-yes-no": "star",
      "the-moon-yes-no": "moon", "the-sun-yes-no": "sun",
      "the-judgement-yes-no": "judgement", "the-world-yes-no": "world",
    };
    const key = slugToKey[c.file];
    return `      <a href="./${c.file}.html" class="card-item" data-yn="${c.isYes ? "yes" : "no"}">
        <div class="card-thumb">
          <svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">${SVG_DEFS[key]}</svg>
        </div>
        <div class="card-info">
          <span class="card-num">${c.numeral}</span>
          <span class="card-name">${c.enName}</span>
          <span class="card-verdict ${c.isYes ? "yes" : "no"}">${c.verdictEn}</span>
        </div>
      </a>`;
  }).join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tarot Card YES or NO Readings — Yes or No Tarot Blog</title>
    <meta name="description" content="YES or NO readings for all 22 Major Arcana tarot cards in one place. Upright and reversed meanings plus situation-specific advice for love, work, money, and health." />
    <meta name="keywords" content="tarot yes or no, major arcana yes no, tarot card meanings, yes no tarot readings" />
    <link rel="canonical" href="https://yesorno-tarot.vercel.app/blog/en/index.html" />
    <link rel="alternate" hreflang="ko" href="https://yesorno-tarot.vercel.app/blog/index.html" />
    <link rel="alternate" hreflang="en" href="https://yesorno-tarot.vercel.app/blog/en/index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Tarot Card YES or NO Readings — Yes or No Tarot Blog" />
    <meta property="og:description" content="YES or NO readings for all 22 Major Arcana tarot cards in one place." />
    <meta property="og:url" content="https://yesorno-tarot.vercel.app/blog/en/index.html" />
    <meta property="og:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tarot Card YES or NO Readings — Yes or No Tarot Blog" />
    <meta name="twitter:image" content="https://yesorno-tarot.vercel.app/og-image.png" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Yes or No Tarot Blog",
        "description": "YES or NO readings for all 22 Major Arcana tarot cards",
        "url": "https://yesorno-tarot.vercel.app/blog/en/index.html",
        "inLanguage": "en"
      }
    <\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../../style.css" />
    <style>${INDEX_STYLE}</style>
  </head>
  <body id="app">
    <div class="blog-wrap">
      <div class="topbar">
        <a href="../../index.html" class="site-logo">YES or NO ✦</a>
        <div class="topbar-right">
          <a href="../index.html" class="lang-switch">한국어</a>
          <button class="dark-toggle" id="darkBtn" onclick="toggleDark()">🌙 Dark</button>
        </div>
      </div>
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="../../index.html">Home</a>
        <span class="breadcrumb-sep">›</span>
        <span>Blog</span>
      </nav>
      <h1 class="page-title">Tarot Card YES or NO Readings</h1>
      <p class="page-sub">All 22 Major Arcana cards — upright and reversed meanings plus advice for love, work, money, and health, one card at a time.</p>
      <div class="filter-row">
        <button class="filter-btn active" onclick="filter('all', this)">All (22)</button>
        <button class="filter-btn" onclick="filter('yes', this)">YES cards</button>
        <button class="filter-btn" onclick="filter('no', this)">NO cards</button>
      </div>
      <div class="card-grid" id="grid">
${items}
      </div>
      <div class="cta-box">
        <div class="cta-heading">Draw your own card now</div>
        <p class="cta-sub">What card will answer your question today?<br/>Draw up to three free YES or NO tarot readings per day.</p>
        <a href="../../index.html" class="cta-btn">Try it yourself →</a>
      </div>
      <footer class="blog-footer">
        <span>© 2025 Yes or No Tarot</span>
        <span>
          <a href="../../index.html">Go to app</a>
          &nbsp;·&nbsp;
          <a href="../../privacy.html">Privacy</a>
        </span>
      </footer>
    </div>
    <script>
      (function () {
        if (localStorage.getItem("dark") === "1") {
          document.getElementById("app").setAttribute("data-dark", "1");
          document.getElementById("darkBtn").textContent = "☀️ Light";
        }
      })();
      function toggleDark() {
        const app = document.getElementById("app");
        const btn = document.getElementById("darkBtn");
        const isDark = app.getAttribute("data-dark") === "1";
        if (isDark) { app.removeAttribute("data-dark"); btn.textContent = "🌙 Dark"; localStorage.setItem("dark", "0"); }
        else { app.setAttribute("data-dark", "1"); btn.textContent = "☀️ Light"; localStorage.setItem("dark", "1"); }
      }
      function filter(type, btn) {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".card-item").forEach(el => {
          el.style.display = (type === "all" || el.dataset.yn === type) ? "" : "none";
        });
      }
    <\/script>
  </body>
</html>`;
}

// ──────────────────────────────────────────────
// 파일 생성
// ──────────────────────────────────────────────
const blogDir = __dirname;
const enDir = path.join(blogDir, "en");
if (!fs.existsSync(enDir)) fs.mkdirSync(enDir);

let count = 0;
for (const card of CARDS) {
  const koPath = path.join(blogDir, `${card.file}.html`);
  const enPath = path.join(enDir, `${card.file}.html`);
  fs.writeFileSync(koPath, genKo(card), "utf8");
  fs.writeFileSync(enPath, genEn(card), "utf8");
  count += 2;
  console.log(`✓ ${card.koName} (${card.enName}) — KO + EN`);
}

// 인덱스 페이지
fs.writeFileSync(path.join(blogDir, "index.html"), genIndexKo(), "utf8");
fs.writeFileSync(path.join(enDir, "index.html"), genIndexEn(), "utf8");
count += 2;
console.log(`✓ 블로그 인덱스 — KO + EN`);

console.log(`\n완료: ${count}개 파일 생성됨`);
