      const DESCS = {
        fool: {
          yes: true,
          confidence: "가벼운 YES",
          descs: [
            "생각보다 가볍게 시작해도 괜찮습니다. 사랑은 때때로 용기보다 순수한 마음에서 시작됩니다.",
            "조금 서툴러도 괜찮습니다. 새로운 관계의 문이 열릴 가능성이 있습니다.",
            "완벽히 준비되지 않았더라도 일단 발을 내디뎌 보세요. 의외의 기회가 기다리고 있습니다.",
            "처음이라 불안해도 괜찮습니다. 가볍게 부딪쳐 보는 경험이 오히려 도움이 됩니다.",
            "큰 계산보다 작은 시도가 더 유리할 수 있습니다. 다만 무모함과 용기는 구분하세요.",
            "새로운 루틴이나 가벼운 습관 개선을 시작하기 좋습니다. 너무 과한 목표는 피하세요.",
            "해도 됩니다. 다만 결과를 다 통제하려 하지 말고 흐름을 경험해 보세요.",
          ],
        },
        magician: {
          yes: true,
          confidence: "강한 YES",
          descs: [
            "당신에게는 이미 매력을 보여줄 힘이 있습니다. 자신 있게 표현하면 흐름이 움직입니다.",
            "상황을 바꿀 열쇠는 당신 손에 있습니다. 말과 행동이 관계를 새롭게 만듭니다.",
            "지금은 실력을 보여주기 좋은 타이밍입니다. 가진 자원을 적극적으로 활용하세요.",
            "집중력과 실행력이 살아나는 시기입니다. 아는 것을 제대로 꺼내면 충분히 통합니다.",
            "정보와 판단력이 모두 따라주는 흐름입니다. 계산된 선택은 좋은 결과로 이어질 수 있습니다.",
            "의지만 있다면 생활 패턴을 바로잡을 수 있습니다. 오늘 시작한 관리가 효과를 냅니다.",
            "할 수 있습니다. 지금은 망설임보다 실행이 답입니다.",
          ],
        },
        highPriestess: {
          yes: false,
          confidence: "조용한 NO",
          descs: [
            "겉으로 보이는 반응만으로 판단하기엔 이릅니다. 아직 숨겨진 마음이 많습니다.",
            "지금은 말을 많이 하기보다 분위기를 읽어야 할 때입니다. 섣부른 개입은 오히려 역효과입니다.",
            "드러난 정보만으로 결정하기엔 부족합니다. 조금 더 관찰하고 맥락을 읽으세요.",
            "답을 서둘러 찾기보다 개념과 흐름을 깊게 이해해야 합니다. 조용한 집중이 필요합니다.",
            "아직 공개되지 않은 변수들이 있습니다. 성급한 투자나 결정은 피하는 편이 좋습니다.",
            "겉으론 멀쩡해 보여도 몸의 밸런스가 흔들릴 수 있습니다. 휴식과 점검이 먼저입니다.",
            "지금은 나서기보다 기다리는 편이 낫습니다. 아직 드러나지 않은 부분이 있습니다.",
          ],
        },
        empress: {
          yes: true,
          confidence: "풍요로운 YES",
          descs: [
            "애정이 자라날 가능성이 큽니다. 따뜻하게 표현할수록 관계가 더 풍성해집니다.",
            "관계를 돌보고 키워낼 힘이 있습니다. 배려가 좋은 흐름을 만듭니다.",
            "성과를 만들어낼 토양이 이미 갖춰져 있습니다. 꾸준히 밀면 안정적인 결과가 납니다.",
            "억지로 몰아붙이지 않아도 실력이 자랍니다. 잘 먹고 잘 쉬며 꾸준히 가는 것이 정답입니다.",
            "수익이나 실속을 기대해 볼 만합니다. 무리한 확장보다 건강한 성장에 집중하세요.",
            "회복과 안정의 흐름이 좋습니다. 몸을 돌보는 만큼 컨디션도 살아납니다.",
            "좋은 흐름입니다. 키우고 돌보면 분명히 결실이 따라옵니다.",
          ],
        },
        emperor: {
          yes: true,
          confidence: "단단한 YES",
          descs: [
            "감정보다 태도와 책임감이 더 중요한 시기입니다. 안정적인 관계로 갈 가능성이 있습니다.",
            "선을 분명히 할수록 관계가 오히려 건강해집니다. 중심을 잡는 사람이 필요합니다.",
            "주도권을 잡고 구조를 세우면 좋은 결과가 납니다. 지금은 리더십이 먹히는 때입니다.",
            "계획표와 기준을 세우면 성적이 따라옵니다. 감보다 시스템이 이깁니다.",
            "원칙과 기준을 지키는 선택이 유리합니다. 무리한 베팅보다 관리가 답입니다.",
            "생활 리듬을 바로잡아야 합니다. 규칙성이 회복의 핵심입니다.",
            "좋습니다. 흐트러짐 없이 밀고 가면 원하는 방향으로 정리됩니다.",
          ],
        },
        hierophant: {
          yes: true,
          confidence: "안정적인 YES",
          descs: [
            "가벼운 감정보다 진지한 관계로 이어질 가능성이 있습니다. 전통적인 방식이 오히려 잘 맞습니다.",
            "믿을 만한 조언과 기준이 도움이 됩니다. 관계의 룰을 맞춰가면 좋아집니다.",
            "검증된 방법을 따를수록 유리합니다. 기본을 지키는 사람이 인정받습니다.",
            "정석대로 가는 것이 가장 강합니다. 기본서, 기출, 루틴이 답을 줍니다.",
            "익숙하고 안전한 선택이 더 유리합니다. 원칙을 벗어난 모험은 지금은 비추천입니다.",
            "민간요법보다 검증된 관리가 필요합니다. 몸은 기본으로 돌아갈수록 안정됩니다.",
            "지금은 정공법이 맞습니다. 익숙한 기준과 검증된 길을 따르세요.",
          ],
        },
        lovers: {
          yes: true,
          confidence: "설레는 YES",
          descs: [
            "마음이 서로 통할 가능성이 큽니다. 다만 진심 어린 선택이 동반되어야 합니다.",
            "좋은 관계는 선택에서 시작됩니다. 억지로 맞추기보다 서로의 진심을 확인하세요.",
            "갈림길 앞에 있다면 마음과 가치관이 맞는 쪽을 고르세요. 좋은 선택이 됩니다.",
            "무작정 많이 하기보다 자신에게 맞는 방향을 고르는 것이 중요합니다.",
            "조건만 보지 말고 본인의 기준에 맞는 선택을 하세요. 장기적으로 더 만족스럽습니다.",
            "몸이 좋아하는 방식과 습관을 고르는 것이 중요합니다. 억지 관리보다 지속 가능성이 핵심입니다.",
            "좋습니다. 다만 아무거나가 아니라, 진짜 원하는 쪽을 분명히 선택해야 합니다.",
          ],
        },
        chariot: {
          yes: true,
          confidence: "돌파하는 YES",
          descs: [
            "망설임을 줄이고 방향을 정하면 관계가 빠르게 진전될 수 있습니다.",
            "감정에 끌려가기보다 중심을 잡으세요. 주도권을 잡는 쪽이 흐름을 이깁니다.",
            "밀어붙일 힘이 있습니다. 지금은 추진력이 결과를 만드는 시기입니다.",
            "집중이 흐트러지지만 않는다면 충분히 돌파 가능합니다. 끝까지 핸들을 놓지 마세요.",
            "과감한 실행이 수익이나 기회를 가져올 수 있습니다. 다만 목표는 분명해야 합니다.",
            "의욕은 충분합니다. 무리만 조절하면 좋은 페이스로 회복과 관리가 가능합니다.",
            "갑니다. 흔들리지 않고 밀면 길이 열립니다.",
          ],
        },
        strength: {
          yes: true,
          confidence: "차분한 YES",
          descs: [
            "강하게 밀어붙이기보다 부드럽게 다가갈수록 관계가 풀립니다.",
            "감정을 힘으로 누르지 말고 다루세요. 침착함이 관계를 지켜줍니다.",
            "실력은 이미 있습니다. 조급함만 다스리면 원하는 결과에 가까워집니다.",
            "불안은 있어도 충분히 해낼 수 있습니다. 끝까지 버티는 힘이 당신 편입니다.",
            "욕심보다 절제가 중요합니다. 감정적 매매보다 침착한 관리가 유리합니다.",
            "당장 큰 변화보다 꾸준한 회복력이 중요합니다. 천천히 하지만 분명히 좋아집니다.",
            "됩니다. 다만 힘으로 누르지 말고 차분하게 다뤄야 합니다.",
          ],
        },
        wheeloffortune: {
          yes: true,
          confidence: "운이 도는 YES",
          descs: [
            "뜻밖의 전환점이 찾아올 수 있습니다. 흐름이 당신 쪽으로 기울고 있습니다.",
            "관계의 분위기가 바뀔 수 있습니다. 답답했던 흐름도 의외로 풀릴 가능성이 있습니다.",
            "기회가 갑자기 굴러들어올 수 있습니다. 준비된 사람에게 운이 붙습니다.",
            "예상 밖의 문제가 나올 수도 있지만, 반대로 예상 밖의 행운도 있습니다. 흐름을 타세요.",
            "시장이나 상황의 변동성이 커질 수 있습니다. 잘만 타면 기회가 됩니다.",
            "컨디션의 오르내림이 있더라도 전체 흐름은 나쁘지 않습니다. 리듬을 잘 타는 것이 중요합니다.",
            "좋습니다. 지금은 정체보다 변화가 이득이 되는 시기입니다.",
          ],
        },
        justice: {
          yes: true,
          confidence: "이성적인 YES",
          descs: [
            "감정만이 아니라 균형과 책임을 함께 봐야 합니다. 정직할수록 좋은 답이 나옵니다.",
            "누가 맞고 틀렸는지보다 공정함이 중요합니다. 균형 잡힌 태도가 관계를 바로 세웁니다.",
            "평가받을 만한 결과를 만들어온 상태입니다. 논리와 근거로 승부하면 유리합니다.",
            "운보다 실력이 더 반영됩니다. 아는 만큼, 준비한 만큼 결과가 돌아옵니다.",
            "계산과 기준이 분명하다면 괜찮습니다. 감정이 아니라 숫자로 판단하세요.",
            "몸 상태를 객관적으로 봐야 합니다. 정확한 진단과 균형 잡힌 관리가 필요합니다.",
            "됩니다. 다만 감정이 아니라 기준과 사실에 따라 결정해야 합니다.",
          ],
        },
        hangedMan: {
          yes: false,
          confidence: "지금은 NO",
          descs: [
            "지금 억지로 진도를 빼기보다 다른 시각에서 이 관계를 봐야 합니다.",
            "답답하더라도 잠시 멈춤이 필요합니다. 지금은 밀어붙일수록 더 꼬일 수 있습니다.",
            "정체처럼 보여도 재정비의 시간입니다. 방향을 바꾸지 않으면 결과도 바뀌지 않습니다.",
            "같은 방식으로는 한계가 있습니다. 잠시 멈춰서 공부법을 바꿔보세요.",
            "지금은 수익보다 보류와 관망이 나을 수 있습니다. 서두르면 손해 보기 쉽습니다.",
            "회복을 위해서는 속도를 늦춰야 합니다. 무리하면 오히려 더 오래 갑니다.",
            "지금은 아닙니다. 멈춤이 곧 후퇴는 아니니, 관점을 바꾸는 시간이 필요합니다.",
          ],
        },
        death: {
          yes: false,
          confidence: "끝내는 NO",
          descs: [
            "지금의 방식이나 관계는 그대로 이어지기 어렵습니다. 끝내야 새 흐름이 옵니다.",
            "억지로 유지하는 인연이라면 놓아줄 때가 되었습니다. 정리가 회복의 시작입니다.",
            "한 챕터가 끝나고 있습니다. 낡은 방식은 버려야 다음 단계로 갑니다.",
            "지금 공부법이나 태도를 바꾸지 않으면 같은 결과가 반복됩니다. 과감한 전환이 필요합니다.",
            "손절 또는 구조조정이 필요한 흐름입니다. 미련보다 정리가 이익일 수 있습니다.",
            "안 좋은 습관을 끊어내야 합니다. 그대로 두면 회복이 더뎌집니다.",
            "지금 상태 그대로는 어렵습니다. 끝낼 것은 끝내야 새 가능성이 열립니다.",
          ],
        },
        temperance: {
          yes: true,
          confidence: "무난한 YES",
          descs: [
            "천천히 맞춰가면 충분히 좋은 관계가 될 수 있습니다. 급할수록 흐름이 깨집니다.",
            "다름을 조율할 수 있다면 관계는 안정됩니다. 적당한 거리와 균형이 중요합니다.",
            "여러 요소를 잘 조합하면 성과가 납니다. 협업과 조율 능력이 빛나는 시기입니다.",
            "무리한 벼락치기보다 꾸준한 밸런스가 성적을 만듭니다. 페이스 조절이 핵심입니다.",
            "분산과 균형이 중요합니다. 한쪽에 몰지 말고 안정적으로 운영하세요.",
            "회복은 급하지 않게, 그러나 꾸준하게 가는 것이 맞습니다. 균형이 약입니다.",
            "좋습니다. 다만 천천히, 적절하게, 균형 있게 가야 합니다.",
          ],
        },
        devil: {
          yes: false,
          confidence: "유혹의 NO",
          descs: [
            "끌림은 강하지만 건강한 관계인지 다시 봐야 합니다. 집착과 사랑은 다릅니다.",
            "감정 소모가 큰 관계일 수 있습니다. 익숙함 때문에 놓지 못하는 건 아닌지 보세요.",
            "조건이나 압박에 묶여 있을 가능성이 있습니다. 자유롭지 않다면 경계해야 합니다.",
            "미루기, 중독, 불안이 발목을 잡고 있습니다. 의지보다 환경 통제가 먼저입니다.",
            "달콤해 보여도 함정일 수 있습니다. 욕심이 판단을 흐리고 있습니다.",
            "나쁜 습관이나 과로가 몸을 붙잡고 있습니다. 이대로 두면 더 깊어질 수 있습니다.",
            "아니요. 지금은 욕망이나 집착이 섞여 있어, 그대로 가면 후회할 가능성이 큽니다.",
          ],
        },
        star: {
          yes: true,
          confidence: "YES",
          descs: [
            "작은 신호들을 놓치지 마세요. 그 사람의 마음이 당신을 향하고 있습니다.",
            "진심은 반드시 전해집니다. 기다려온 화해의 실마리가 보이기 시작합니다.",
            "희망을 가져도 좋습니다. 지금의 노력은 먼 미래에도 빛나는 결과가 될 것입니다.",
            "포기하지 않은 당신에게 기회가 옵니다. 방향을 잃지 마세요.",
            "급하게 움직이지 않아도 됩니다. 꾸준히 쌓아온 것들이 조용히 빛나고 있습니다.",
            "회복의 기운이 찾아오고 있습니다. 몸의 신호에 귀 기울이며 천천히 나아가세요.",
            "원하는 방향으로 가도 좋습니다. 길이 열려 있습니다.",
          ],
        },
        moon: {
          yes: false,
          confidence: "아직은 NO",
          descs: [
            "지금은 상대의 진심을 알기 어려운 시기입니다. 좀 더 지켜보세요.",
            "보이는 것이 전부가 아닙니다. 오해나 착각이 있을 수 있으니 섣불리 판단하지 마세요.",
            "방향이 흐릿합니다. 중요한 결정은 조금 더 미루는 것이 현명합니다.",
            "지금의 불안은 자연스러운 것입니다. 무리한 도전보다 복습과 정리가 필요합니다.",
            "정보가 불충분하거나 리스크가 숨어 있습니다. 충동적인 결정은 금물입니다.",
            "몸이 보내는 신호를 무시하지 마세요. 방치하면 더 커질 수 있습니다.",
            "아직 때가 아닙니다. 혼란이 가라앉을 때까지 기다리는 것이 지혜입니다.",
          ],
        },
        sun: {
          yes: true,
          confidence: "강력한 YES",
          descs: [
            "두 사람 사이에 따뜻한 빛이 비칩니다. 솔직한 마음을 전하세요, 지금이 바로 그 순간입니다.",
            "오해가 있었다면 녹아내릴 것입니다. 먼저 손 내미는 사람이 이 관계를 빛나게 만듭니다.",
            "당신의 능력이 주목받을 타이밍입니다. 망설이지 말고 앞으로 나서세요.",
            "노력이 결실을 맺는 시기입니다. 시험장에 들어서는 순간, 태양이 당신 편입니다.",
            "투자한 것들이 빛을 발할 때입니다. 긍정적인 흐름이 이어지고 있습니다.",
            "몸과 마음 모두 활력이 넘치는 시기입니다. 꾸준히 유지하면 더 좋아집니다.",
            "지금 하려는 것, 해도 좋습니다. 운이 당신 손을 잡고 있습니다.",
          ],
        },
        tower: {
          yes: false,
          confidence: "강력한 NO",
          descs: [
            "억지로 붙잡으려 할수록 더 크게 무너질 수 있습니다.",
            "감정적으로 대응하면 돌이킬 수 없는 상처가 남습니다. 냉정하게 판단하세요.",
            "지금 움직이는 것은 위험합니다. 흔들리는 기반 위의 결정은 후회로 이어집니다.",
            "준비가 덜 된 상태입니다. 지금 시도하면 무너집니다. 기초부터 다시 다지세요.",
            "큰 손실의 징조가 보입니다. 지금 당장 멈추고 리스크를 재점검하세요.",
            "몸에 이상 신호가 있습니다. 더 이상 미루지 말고 전문가에게 확인을 받으세요.",
            "지금 밀어붙이면 후회합니다. 잠시 멈추고 상황을 재정비하세요.",
          ],
        },
        hermit: {
          yes: false,
          confidence: "아직은 NO",
          descs: [
            "지금 당장의 답보다 자신의 마음을 먼저 들여다보세요.",
            "모든 관계에 에너지를 쏟지 마세요. 진짜 중요한 것을 고르세요.",
            "서두르지 마세요. 드러내는 것보다 준비가 먼저입니다.",
            "속도보다 깊이가 중요합니다. 자신만의 속도로 나아가세요.",
            "충동적인 결정을 피하세요. 장기적으로 계획을 세울 때입니다.",
            "몸이 쉬라고 신호를 보내고 있습니다. 억지로 밀어붙이는 것은 금물입니다.",
            "답은 이미 내 안에 있습니다. 조용히 내면의 소리에 귀 기울여 보세요.",
          ],
        },
        judgement: {
          yes: true,
          confidence: "깨닫는 YES",
          descs: [
            "다시 한 번 기회가 올 수 있습니다. 과거를 정리하고 나면 관계가 새롭게 보입니다.",
            "오해를 풀고 관계를 되살릴 수 있는 시기입니다. 솔직한 대화가 전환점이 됩니다.",
            "이제는 그동안의 경험을 바탕으로 한 단계 올라갈 때입니다. 부름에 응답하세요.",
            "그동안 쌓은 것이 시험장에서 살아납니다. 중요한 순간에 실력이 깨어납니다.",
            "과거의 선택을 점검하고 다시 정리하면 더 나은 판단이 가능합니다.",
            "회복의 전환점이 올 수 있습니다. 몸의 신호를 무시하지 말고 다시 바로잡으세요.",
            "좋습니다. 이제는 미루던 결정을 내리고 다음 단계로 넘어갈 때입니다.",
          ],
        },
        world: {
          yes: true,
          confidence: "완전한 YES",
          descs: [
            "이 인연은 하나의 완전한 이야기가 될 것입니다.",
            "오랫동안 쌓아온 신뢰가 완성되는 순간입니다. 이 관계는 당신 삶의 자산입니다.",
            "모든 준비가 갖춰졌습니다. 이 기회를 잡으면 커리어의 새 챕터가 열립니다.",
            "완전한 준비가 되어 있습니다. 결과를 두려워하지 마세요, 당신은 이미 충분합니다.",
            "노력의 결실이 눈앞에 있습니다. 계획한 대로 마무리하면 만족스러운 결과가 기다립니다.",
            "오래된 고민이 마침표를 찍을 때입니다. 건강한 루틴이 자리를 잡기 시작했습니다.",
            "완벽한 타이밍입니다. 주저하지 말고 마무리하세요.",
          ],
        },
      };
      const CARD_KEYS = [
        "fool",
        "magician",
        "highPriestess",
        "empress",
        "emperor",
        "hierophant",
        "lovers",
        "chariot",
        "strength",
        "hermit",
        "wheeloffortune",
        "justice",
        "hangedMan",
        "death",
        "temperance",
        "devil",
        "tower",
        "star",
        "moon",
        "sun",
        "judgement",
        "world",
      ];
      const SVG_DEFS = {
        // 0 THE FOOL
        fool: `<rect width="200" height="320" fill="#fdfdf5"/><circle cx="100" cy="90" r="28" fill="none" stroke="#111" stroke-width="2"/><line x1="100" y1="118" x2="100" y2="210" stroke="#111" stroke-width="2"/><line x1="100" y1="155" x2="70" y2="185" stroke="#111" stroke-width="1.5"/><line x1="100" y1="155" x2="130" y2="185" stroke="#111" stroke-width="1.5"/><line x1="100" y1="210" x2="72" y2="245" stroke="#111" stroke-width="1.5"/><line x1="100" y1="210" x2="128" y2="245" stroke="#111" stroke-width="1.5"/><line x1="100" y1="140" x2="148" y2="108" stroke="#111" stroke-width="1.5"/><circle cx="158" cy="102" r="8" fill="#ffe600" stroke="#111" stroke-width="1.5"/><path d="M148,108 Q155,95 162,102" fill="none" stroke="#111" stroke-width="1.2"/><circle cx="70" cy="258" r="5" fill="#111" opacity="0.2"/><circle cx="130" cy="252" r="3.5" fill="#111" opacity="0.15"/><text x="100" y="272" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE FOOL</text><text x="100" y="292" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">0</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // I THE MAGICIAN
        magician: `<rect width="200" height="320" fill="#fffef0"/><circle cx="100" cy="72" r="16" fill="none" stroke="#111" stroke-width="1.5"/><line x1="100" y1="88" x2="100" y2="175" stroke="#111" stroke-width="2"/><line x1="100" y1="120" x2="68" y2="150" stroke="#111" stroke-width="1.5"/><line x1="100" y1="120" x2="132" y2="150" stroke="#111" stroke-width="1.5"/><line x1="100" y1="175" x2="76" y2="208" stroke="#111" stroke-width="1.5"/><line x1="100" y1="175" x2="124" y2="208" stroke="#111" stroke-width="1.5"/><line x1="100" y1="56" x2="100" y2="44" stroke="#111" stroke-width="1.5"/><path d="M88,44 Q100,38 112,44" fill="none" stroke="#111" stroke-width="1.5"/><g fill="none" stroke="#111" stroke-width="1.2"><rect x="56" y="220" width="14" height="14"/><circle cx="100" cy="227" r="7"/><polygon points="130,220 137,234 123,234"/><path d="M148,220 Q156,227 148,234" stroke-width="1.2"/></g><text x="100" y="260" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="2">THE MAGICIAN</text><text x="100" y="280" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">I</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // II THE HIGH PRIESTESS
        highpriestess: `<rect width="200" height="320" fill="#f8f4ff"/><rect x="72" y="48" width="56" height="80" fill="none" stroke="#111" stroke-width="1.5"/><polygon points="100,48 72,48 72,38 100,30 128,38 128,48" fill="none" stroke="#111" stroke-width="1.5"/><line x1="72" y1="128" x2="72" y2="210" stroke="#111" stroke-width="1.5"/><line x1="128" y1="128" x2="128" y2="210" stroke="#111" stroke-width="1.5"/><ellipse cx="100" cy="88" rx="18" ry="22" fill="none" stroke="#111" stroke-width="1.5"/><rect x="88" y="100" width="24" height="32" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="3 2"/><path d="M60,210 Q100,195 140,210" fill="none" stroke="#111" stroke-width="1.2"/><path d="M60,218 Q100,203 140,218" fill="none" stroke="#111" stroke-width="0.8" opacity="0.4"/><text x="100" y="248" text-anchor="middle" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#111" letter-spacing="1.5">THE HIGH PRIESTESS</text><text x="100" y="268" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">II</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // III THE EMPRESS
        empress: `<rect width="200" height="320" fill="#fff8f0"/><circle cx="100" cy="85" r="30" fill="none" stroke="#111" stroke-width="1.5"/><ellipse cx="100" cy="85" rx="18" ry="22" fill="none" stroke="#111" stroke-width="1"/><g fill="none" stroke="#111" stroke-width="1.2"><path d="M76,115 Q60,140 65,175 Q70,195 100,200 Q130,195 135,175 Q140,140 124,115"/></g><g stroke="#111" stroke-width="1" opacity="0.5"><line x1="65" y1="175" x2="50" y2="190"/><line x1="135" y1="175" x2="150" y2="190"/></g><g fill="#ffe600" stroke="#111" stroke-width="1"><polygon points="82,52 85,42 88,52 78,46 92,46"/><polygon points="100,46 103,36 106,46 96,40 110,40"/><polygon points="118,52 121,42 124,52 114,46 128,46"/></g><path d="M72,210 Q100,200 128,210" fill="none" stroke="#111" stroke-width="1"/><text x="100" y="248" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE EMPRESS</text><text x="100" y="268" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">III</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // IV THE EMPEROR
        emperor: `<rect width="200" height="320" fill="#fff5f0"/><rect x="70" y="55" width="60" height="75" fill="none" stroke="#111" stroke-width="1.5"/><polygon points="70,55 100,38 130,55" fill="none" stroke="#111" stroke-width="1.5"/><rect x="82" y="130" width="36" height="55" fill="none" stroke="#111" stroke-width="1.5"/><line x1="70" y1="130" x2="50" y2="165" stroke="#111" stroke-width="1.5"/><line x1="130" y1="130" x2="150" y2="165" stroke="#111" stroke-width="1.5"/><line x1="82" y1="185" x2="70" y2="215" stroke="#111" stroke-width="1.5"/><line x1="118" y1="185" x2="130" y2="215" stroke="#111" stroke-width="1.5"/><rect x="88" y="38" width="24" height="10" fill="#ffe600" stroke="#111" stroke-width="1"/><circle cx="100" cy="88" r="12" fill="none" stroke="#111" stroke-width="1.2"/><text x="100" y="250" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE EMPEROR</text><text x="100" y="270" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">IV</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // V THE HIEROPHANT
        hierophant: `<rect width="200" height="320" fill="#fdf8ee"/><rect x="78" y="50" width="44" height="60" fill="none" stroke="#111" stroke-width="1.5"/><polygon points="78,50 100,32 122,50" fill="none" stroke="#111" stroke-width="1.5"/><line x1="100" y1="110" x2="100" y2="195" stroke="#111" stroke-width="2"/><line x1="100" y1="140" x2="72" y2="165" stroke="#111" stroke-width="1.5"/><line x1="100" y1="140" x2="128" y2="165" stroke="#111" stroke-width="1.5"/><line x1="80" y1="128" x2="120" y2="128" stroke="#111" stroke-width="1.5"/><line x1="80" y1="120" x2="120" y2="120" stroke="#111" stroke-width="1"/><g fill="none" stroke="#111" stroke-width="1.2"><circle cx="68" cy="205" r="8"/><circle cx="132" cy="205" r="8"/></g><line x1="76" y1="205" x2="124" y2="205" stroke="#111" stroke-width="1" stroke-dasharray="3 2"/><text x="100" y="248" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="2">THE HIEROPHANT</text><text x="100" y="268" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">V</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // VI THE LOVERS
        lovers: `<rect width="200" height="320" fill="#fff0f5"/><circle cx="72" cy="120" r="22" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="128" cy="120" r="22" fill="none" stroke="#111" stroke-width="1.5"/><line x1="72" y1="142" x2="72" y2="200" stroke="#111" stroke-width="1.5"/><line x1="128" y1="142" x2="128" y2="200" stroke="#111" stroke-width="1.5"/><line x1="72" y1="165" x2="55" y2="188" stroke="#111" stroke-width="1.2"/><line x1="72" y1="165" x2="89" y2="188" stroke="#111" stroke-width="1.2"/><line x1="128" y1="165" x2="111" y2="188" stroke="#111" stroke-width="1.2"/><line x1="128" y1="165" x2="145" y2="188" stroke="#111" stroke-width="1.2"/><path d="M86,108 Q100,92 114,108" fill="none" stroke="#111" stroke-width="1.5"/><polygon points="100,58 104,70 116,70 107,78 110,90 100,82 90,90 93,78 84,70 96,70" fill="#ff3b00" opacity="0.7"/><text x="100" y="238" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE LOVERS</text><text x="100" y="258" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">VI</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // VII THE CHARIOT
        chariot: `<rect width="200" height="320" fill="#f5f8ff"/><rect x="55" y="130" width="90" height="70" fill="none" stroke="#111" stroke-width="2"/><line x1="55" y1="130" x2="55" y2="80" stroke="#111" stroke-width="1.5"/><line x1="145" y1="130" x2="145" y2="80" stroke="#111" stroke-width="1.5"/><line x1="55" y1="80" x2="145" y2="80" stroke="#111" stroke-width="1.5"/><circle cx="100" cy="92" r="18" fill="none" stroke="#111" stroke-width="1.5"/><ellipse cx="100" cy="92" rx="8" ry="10" fill="none" stroke="#111" stroke-width="1"/><circle cx="68" cy="215" r="18" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="132" cy="215" r="18" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="68" cy="215" r="6" fill="#111"/><circle cx="132" cy="215" r="6" fill="#111"/><line x1="55" y1="200" x2="55" y2="215" stroke="#111" stroke-width="1.5"/><line x1="145" y1="200" x2="145" y2="215" stroke="#111" stroke-width="1.5"/><text x="100" y="258" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE CHARIOT</text><text x="100" y="278" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">VII</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // VIII STRENGTH
        strength: `<rect width="200" height="320" fill="#fffbf0"/><circle cx="100" cy="95" r="25" fill="none" stroke="#111" stroke-width="1.5"/><path d="M75,120 Q55,150 60,180 Q65,210 100,215 Q135,210 140,180 Q145,150 125,120" fill="none" stroke="#111" stroke-width="1.5"/><path d="M80,120 Q100,108 120,120" fill="none" stroke="#111" stroke-width="1.5"/><path d="M65,155 Q55,168 60,180" fill="none" stroke="#111" stroke-width="1" opacity="0.5"/><path d="M135,155 Q145,168 140,180" fill="none" stroke="#111" stroke-width="1" opacity="0.5"/><path d="M82,58 Q100,42 118,58" fill="none" stroke="#111" stroke-width="1.5"/><polygon points="100,42 103,52 113,52 105,58 108,68 100,62 92,68 95,58 87,52 97,52" fill="#ffe600" stroke="#111" stroke-width="1"/><text x="100" y="252" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">STRENGTH</text><text x="100" y="272" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">VIII</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // IX THE HERMIT
        hermit: `<rect width="200" height="320" fill="#f5f0e8"/><circle cx="100" cy="100" r="24" fill="none" stroke="#111" stroke-width="2"/><line x1="100" y1="124" x2="100" y2="215" stroke="#111" stroke-width="2"/><line x1="100" y1="158" x2="72" y2="190" stroke="#111" stroke-width="1.5"/><line x1="100" y1="158" x2="128" y2="190" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="76" y2="245" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="124" y2="245" stroke="#111" stroke-width="1.5"/><line x1="128" y1="170" x2="148" y2="148" stroke="#111" stroke-width="1.5"/><circle cx="152" cy="144" r="6" fill="#ffe600" stroke="#111" stroke-width="1.5"/><text x="100" y="270" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE HERMIT</text><text x="100" y="290" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">IX</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // X WHEEL OF FORTUNE
        wheeloffortune: `<rect width="200" height="320" fill="#f0fff8"/><circle cx="100" cy="130" r="65" fill="none" stroke="#111" stroke-width="2"/><circle cx="100" cy="130" r="45" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="100" cy="130" r="20" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="100" cy="130" r="6" fill="#111"/><g stroke="#111" stroke-width="1" opacity="0.6"><line x1="100" y1="65" x2="100" y2="85"/><line x1="100" y1="175" x2="100" y2="195"/><line x1="35" y1="130" x2="55" y2="130"/><line x1="145" y1="130" x2="165" y2="130"/><line x1="54" y1="84" x2="68" y2="98"/><line x1="132" y1="162" x2="146" y2="176"/><line x1="146" y1="84" x2="132" y2="98"/><line x1="68" y1="162" x2="54" y2="176"/></g><polygon points="100,68 103,78 113,78 105,84 108,94 100,88 92,94 95,84 87,78 97,78" fill="#ff3b00" opacity="0.8"/><text x="100" y="228" text-anchor="middle" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#111" letter-spacing="2">WHEEL OF FORTUNE</text><text x="100" y="248" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">X</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XI JUSTICE
        justice: `<rect width="200" height="320" fill="#f8fff8"/><line x1="100" y1="55" x2="100" y2="215" stroke="#111" stroke-width="2"/><line x1="72" y1="100" x2="128" y2="100" stroke="#111" stroke-width="2"/><line x1="72" y1="100" x2="52" y2="130" stroke="#111" stroke-width="1.5"/><line x1="128" y1="100" x2="148" y2="130" stroke="#111" stroke-width="1.5"/><circle cx="52" cy="136" r="10" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="148" cy="136" r="10" fill="none" stroke="#111" stroke-width="1.5"/><rect x="86" y="42" width="28" height="16" fill="#ffe600" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="78" y2="245" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="122" y2="245" stroke="#111" stroke-width="1.5"/><text x="100" y="268" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="4">JUSTICE</text><text x="100" y="288" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XI</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XII THE HANGED MAN
        hangedman: `<rect width="200" height="320" fill="#f0f8ff"/><line x1="60" y1="65" x2="140" y2="65" stroke="#111" stroke-width="2"/><line x1="60" y1="52" x2="60" y2="65" stroke="#111" stroke-width="2"/><line x1="140" y1="52" x2="140" y2="65" stroke="#111" stroke-width="2"/><line x1="100" y1="65" x2="100" y2="95" stroke="#111" stroke-width="1.5"/><circle cx="100" cy="112" r="18" fill="none" stroke="#111" stroke-width="1.5"/><line x1="100" y1="130" x2="100" y2="185" stroke="#111" stroke-width="1.5"/><line x1="100" y1="152" x2="72" y2="130" stroke="#111" stroke-width="1.5"/><line x1="100" y1="152" x2="128" y2="130" stroke="#111" stroke-width="1.5"/><line x1="100" y1="185" x2="80" y2="165" stroke="#111" stroke-width="1.5"/><line x1="100" y1="185" x2="120" y2="165" stroke="#111" stroke-width="1.5"/><polygon points="100,88 103,80 100,68 97,80" fill="#ffe600" stroke="#111" stroke-width="1"/><text x="100" y="232" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="2">THE HANGED MAN</text><text x="100" y="252" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XII</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XIII DEATH
        death: `<rect width="200" height="320" fill="#f0f0f0"/><line x1="100" y1="48" x2="100" y2="215" stroke="#111" stroke-width="2"/><line x1="100" y1="90" x2="65" y2="125" stroke="#111" stroke-width="1.5"/><line x1="100" y1="90" x2="135" y2="125" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="75" y2="248" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="125" y2="248" stroke="#111" stroke-width="1.5"/><circle cx="100" cy="68" r="20" fill="none" stroke="#111" stroke-width="1.5"/><g opacity="0.25" fill="#111"><ellipse cx="100" cy="64" rx="7" ry="5"/><ellipse cx="92" cy="72" rx="3" ry="2"/><ellipse cx="108" cy="72" rx="3" ry="2"/></g><polygon points="100,36 103,48 113,48 105,54 108,64 100,58 92,64 95,54 87,48 97,48" fill="#111" opacity="0.9"/><path d="M68,210 Q100,195 132,210" fill="none" stroke="#111" stroke-width="1" opacity="0.4"/><text x="100" y="270" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="5">DEATH</text><text x="100" y="290" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XIII</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XIV TEMPERANCE
        temperance: `<rect width="200" height="320" fill="#f0faff"/><circle cx="100" cy="100" r="35" fill="none" stroke="#111" stroke-width="1.5"/><ellipse cx="100" cy="100" rx="35" ry="20" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="4 3"/><rect x="78" y="60" width="16" height="28" fill="none" stroke="#111" stroke-width="1.5"/><rect x="106" y="68" width="16" height="28" fill="none" stroke="#111" stroke-width="1.5"/><path d="M94,68 Q100,55 106,68" fill="none" stroke="#111" stroke-width="1.5"/><line x1="100" y1="135" x2="100" y2="210" stroke="#111" stroke-width="2"/><line x1="100" y1="168" x2="74" y2="195" stroke="#111" stroke-width="1.5"/><line x1="100" y1="168" x2="126" y2="195" stroke="#111" stroke-width="1.5"/><path d="M74,195 Q100,215 126,195" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="3 2"/><text x="100" y="248" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="2">TEMPERANCE</text><text x="100" y="268" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XIV</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XV THE DEVIL
        devil: `<rect width="200" height="320" fill="#f5f0f8"/><polygon points="100,48 130,95 70,95" fill="none" stroke="#111" stroke-width="2"/><circle cx="100" cy="85" r="18" fill="none" stroke="#111" stroke-width="1.5"/><line x1="84" y1="68" x2="78" y2="54" stroke="#111" stroke-width="1.5"/><line x1="116" y1="68" x2="122" y2="54" stroke="#111" stroke-width="1.5"/><line x1="100" y1="48" x2="100" y2="40" stroke="#111" stroke-width="2"/><line x1="100" y1="103" x2="100" y2="175" stroke="#111" stroke-width="2"/><line x1="100" y1="135" x2="68" y2="160" stroke="#111" stroke-width="1.5"/><line x1="100" y1="135" x2="132" y2="160" stroke="#111" stroke-width="1.5"/><circle cx="72" cy="188" r="10" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="128" cy="188" r="10" fill="none" stroke="#111" stroke-width="1.5"/><line x1="78" y1="182" x2="122" y2="182" stroke="#111" stroke-width="1" stroke-dasharray="3 2"/><circle cx="100" cy="38" r="4" fill="#ff3b00"/><text x="100" y="230" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="4">THE DEVIL</text><text x="100" y="250" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XV</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XVI THE TOWER
        tower: `<rect width="200" height="320" fill="#fff0ee"/><rect x="78" y="82" width="44" height="122" fill="none" stroke="#111" stroke-width="2"/><polygon points="78,82 100,52 122,82" fill="none" stroke="#111" stroke-width="2"/><rect x="89" y="122" width="22" height="28" fill="#ff3b00" opacity="0.7"/><g stroke="#111" stroke-width="1.5"><line x1="78" y1="204" x2="122" y2="204"/><line x1="56" y1="72" x2="68" y2="84"/><line x1="144" y1="72" x2="132" y2="84"/><line x1="150" y1="92" x2="136" y2="98"/><line x1="50" y1="92" x2="64" y2="98"/></g><polygon points="57,68 60,60 54,57" fill="#ffe600" stroke="#111" stroke-width="1"/><polygon points="143,68 146,60 140,57" fill="#ffe600" stroke="#111" stroke-width="1"/><text x="100" y="262" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE TOWER</text><text x="100" y="282" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XVI</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XVII THE STAR
        star: `<rect width="200" height="320" fill="#eef4ff"/><g fill="#111"><polygon points="100,48 105,66 123,66 109,77 114,95 100,84 86,95 91,77 77,66 95,66"/><polygon points="44,92 47,102 57,102 49,108 52,118 44,112 36,118 39,108 31,102 41,102" opacity="0.5"/><polygon points="158,78 161,88 171,88 163,94 166,104 158,98 150,104 153,94 145,88 155,88" opacity="0.5"/><polygon points="30,155 33,163 41,163 35,168 37,176 30,171 23,176 25,168 19,163 27,163" opacity="0.35"/><polygon points="172,140 175,148 183,148 177,153 179,161 172,156 165,161 167,153 161,148 169,148" opacity="0.35"/></g><circle cx="100" cy="170" r="32" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="100" cy="170" r="5" fill="#ff3b00"/><text x="100" y="230" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="4">THE STAR</text><text x="100" y="250" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XVII</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XVIII THE MOON
        moon: `<rect width="200" height="320" fill="#f0eeff"/><circle cx="100" cy="118" r="50" fill="none" stroke="#111" stroke-width="2"/><circle cx="122" cy="106" r="36" fill="#f0eeff" stroke="#111" stroke-width="1.5"/><g fill="#111" opacity="0.25"><circle cx="80" cy="112" r="3"/><circle cx="93" cy="98" r="2"/><circle cx="72" cy="130" r="2.5"/></g><path d="M55,215 Q65,200 75,215 Q85,200 95,215 Q105,200 115,215 Q125,200 135,215 Q145,200 155,215" fill="none" stroke="#111" stroke-width="1.5"/><text x="100" y="270" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE MOON</text><text x="100" y="290" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XVIII</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XIX THE SUN
        sun: `<rect width="200" height="320" fill="#fff9e6"/><circle cx="100" cy="120" r="55" fill="none" stroke="#111" stroke-width="2"/><circle cx="100" cy="120" r="40" fill="#ffe600" stroke="#111" stroke-width="1.5"/><circle cx="100" cy="120" r="22" fill="#ff3b00"/><g stroke="#111" stroke-width="2">${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => `<line x1="${100 + 46 * Math.cos((a * Math.PI) / 180)}" y1="${120 + 46 * Math.sin((a * Math.PI) / 180)}" x2="${100 + 60 * Math.cos((a * Math.PI) / 180)}" y2="${120 + 60 * Math.sin((a * Math.PI) / 180)}"/>`).join("")}</g><text x="100" y="214" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="4">THE SUN</text><text x="100" y="234" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XIX</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XX JUDGEMENT
        judgement: `<rect width="200" height="320" fill="#fff8f0"/><path d="M60,80 Q100,55 140,80 Q140,130 100,150 Q60,130 60,80Z" fill="none" stroke="#111" stroke-width="1.5"/><line x1="100" y1="55" x2="100" y2="42" stroke="#111" stroke-width="2"/><g stroke="#111" stroke-width="1.2" fill="none"><path d="M80,65 Q70,60 68,70"/><path d="M120,65 Q130,60 132,70"/></g><circle cx="100" cy="100" r="14" fill="none" stroke="#111" stroke-width="1.5"/><line x1="100" y1="150" x2="100" y2="215" stroke="#111" stroke-width="2"/><line x1="100" y1="178" x2="74" y2="200" stroke="#111" stroke-width="1.5"/><line x1="100" y1="178" x2="126" y2="200" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="78" y2="245" stroke="#111" stroke-width="1.5"/><line x1="100" y1="215" x2="122" y2="245" stroke="#111" stroke-width="1.5"/><polygon points="100,38 103,30 106,38 98,33 108,33" fill="#ffe600" stroke="#111" stroke-width="1"/><text x="100" y="268" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">JUDGEMENT</text><text x="100" y="288" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XX</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,

        // XXI THE WORLD
        world: `<rect width="200" height="320" fill="#efffee"/><ellipse cx="100" cy="148" rx="54" ry="72" fill="none" stroke="#111" stroke-width="2"/><ellipse cx="100" cy="148" rx="36" ry="50" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="4 3"/><circle cx="100" cy="148" r="14" fill="#111"/><circle cx="100" cy="148" r="7" fill="#ffe600"/><g fill="#111" opacity="0.6"><polygon points="38,82 41,90 49,90 43,95 45,103 38,98 31,103 33,95 27,90 35,90"/><polygon points="162,82 165,90 173,90 167,95 169,103 162,98 155,103 157,95 151,90 159,90"/><polygon points="38,222 41,230 49,230 43,235 45,243 38,238 31,243 33,235 27,230 35,230"/><polygon points="162,222 165,230 173,230 167,235 169,243 162,238 155,243 157,235 151,230 159,230"/></g><text x="100" y="258" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#111" letter-spacing="3">THE WORLD</text><text x="100" y="278" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#ff3b00">XXI</text><rect x="8" y="8" width="184" height="304" fill="none" stroke="#111" stroke-width="2"/>`,
      };