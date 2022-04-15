var num = 1;

var q = {
    1: {"title": "질문 1.나는 사람들에게 엄청난 영향력을 주는 존재다.", "type": "q-1", "A": "Yes", "B": "NO"},
    2: {"title": "질문 2.나는 누구든 내가 바라는대로 설득할 수 있다.", "type": "q-2", "A": "Yes", "B": "NO"},
    3: {"title": "질문 3.나는 사람들에게 주목받는 것을 좋아한다.", "type": "q-3", "A": "Yes", "B": "NO"},
    4: {"title": "질문 4.나는 스스로 자랑하거나 과시하지 않으려고 노력한다.", "type": "q-4", "A": "Yes", "B": "NO"},
    5: {"title": "질문 5.나는 솔직히 평범한 사람인 것 같다.", "type": "q-5", "A": "Yes", "B": "NO"},
    6: {"title": "질문 6.사람들은 내 이야기를 듣고 싶어 한다.", "type": "q-6", "A": "Yes", "B": "NO"},
    7: {"title": "질문 7.나는 누구에게나 인정받는 대단한 사람이 될 것이다.", "type": "q-7", "A": "Yes", "B": "NO"},
    8: {"title": "질문 8.나는 다른 사람들보다 유능한 편이다.", "type": "q-8", "A": "Yes", "B": "NO"}

}
var result = {
    8 : {"titleResult": "'나는 나를 제일 사랑해' 1등급 나르시스트", "expResult" : "스스로를 많이 사랑하고 가끔은 본인이 남과 다른 특별함을 가지고 있다고 생각하기도 해요. 자기 자신을 사랑하는 것은 건강하고 행복한 삶을 살아가는데 아주 중요한 부분입니다. 스스로를 사랑하지 못하는 사람은 남들도 사랑할 수 없고 남들에게도 사랑받기 어렵습니다. 당신은 자기 자신이 이 세상에 하나 뿐인 존재이고 얼마나 소중한지 잘 알고 있는 사람입니다. 인생에 있어 아주 중요한 자신감과 자존감을 충분히 가지고 있네요."

    , "imgResult": "images/medal.png"},
    7 : {"titleResult": "나는 나를 제일 사랑해' 1등급 나르시스트", "expResult" : "스스로를 많이 사랑하고 가끔은 본인이 남과 다른 특별함을 가지고 있다고 생각하기도 해요. 자기 자신을 사랑하는 것은 건강하고 행복한 삶을 살아가는데 아주 중요한 부분입니다. 스스로를 사랑하지 못하는 사람은 남들도 사랑할 수 없고 남들에게도 사랑받기 어렵습니다. 당신은 자기 자신이 이 세상에 하나 뿐인 존재이고 얼마나 소중한지 잘 알고 있는 사람입니다. 인생에 있어 아주 중요한 자신감과 자존감을 충분히 가지고 있네요."
    , "imgResult": "images/medal.png"},

    6 : {"titleResult": "나는 나를 제일 사랑해' 1등급 나르시스트", "expResult" : "당신은 자신이 가지고 있는 재능과 능력을 사랑하며, 이를 통해 많은 것을 성취할 수 있다는 자신감이 있는 사람입니다. 물론 당신이라고 항상 긍정적인 것은 아니겠지만 중요한 건 평균적인 사람들 이상의 자신감을 가지고 있다는 점이예요. 자기자신을 믿고 존중하는 것은 건강하고 행복한 삶을 살아가는데 중요한 부분입니다. 스스로를 믿지 못한다면 누구도 당신을 믿어주지 못할 것입니다. 당신의 이러한 당당함은 앞으로 당신이 삶을 살아가는데 큰 자산이 될 것입니다.", "imgResult": "images/medal.png"},

    5 : {"titleResult": "평균 이상의 자신감 2등급 나르시스트", "expResult" : "당신은 자신이 가지고 있는 재능과 능력을 사랑하며, 이를 통해 많은 것을 성취할 수 있다는 자신감이 있는 사람입니다. 물론 당신이라고 항상 긍정적인 것은 아니겠지만 중요한 건 평균적인 사람들 이상의 자신감을 가지고 있다는 점이예요. 자기자신을 믿고 존중하는 것은 건강하고 행복한 삶을 살아가는데 중요한 부분입니다. 스스로를 믿지 못한다면 누구도 당신을 믿어주지 못할 것입니다. 당신의 이러한 당당함은 앞으로 당신이 삶을 살아가는데 큰 자산이 될 것입니다.", "imgResult": "images/medal_(1).png"},

    4 : {"titleResult": "평균 이상의 자신감 2등급 나르시스트", "expResult" : "당신은 자신이 가지고 있는 재능과 능력을 사랑하며, 이를 통해 많은 것을 성취할 수 있다는 자신감이 있는 사람입니다. 물론 당신이라고 항상 긍정적인 것은 아니겠지만 중요한 건 평균적인 사람들 이상의 자신감을 가지고 있다는 점이예요. 자기자신을 믿고 존중하는 것은 건강하고 행복한 삶을 살아가는데 중요한 부분입니다. 스스로를 믿지 못한다면 누구도 당신을 믿어주지 못할 것입니다. 당신의 이러한 당당함은 앞으로 당신이 삶을 살아가는데 큰 자산이 될 것입니다.", "imgResult": "images/medal_(1).png"},

    3 : {"titleResult": "자신을 평범하다고 생각하는 3등급 나르시스트", "expResult" : "당신은 스스로를 평범한 사람이라고 믿고 있습니다. 아마도 남들과 비교해 크게 특출난 것도, 크게 부족한 것도 없을 거라고 생각하고 있을 것입니다. 항상 평범함 속에 비범함이 숨어 있듯, 당신이 생각하는 그 평범함 속에는 당신만의 재능과 역량이 자리해 있을 것입니다. 스스로를 드러내기보다는 스스로를 평범하다고 낮추는 당신이 어쩌면 진짜 특별한 사람일지도 모릅니다. 당신의 특별한 평범함을 응원합니다.", 
    "imgResult": "images/medal_(2).png"},
    2 : {"titleResult": "자신을 평범하다고 생각하는 3등급 나르시스트", "expResult" : "당신은 스스로를 평범한 사람이라고 믿고 있습니다. 아마도 남들과 비교해 크게 특출난 것도, 크게 부족한 것도 없을 거라고 생각하고 있을 것입니다. 항상 평범함 속에 비범함이 숨어 있듯, 당신이 생각하는 그 평범함 속에는 당신만의 재능과 역량이 자리해 있을 것입니다. 스스로를 드러내기보다는 스스로를 평범하다고 낮추는 당신이 어쩌면 진짜 특별한 사람일지도 모릅니다. 당신의 특별한 평범함을 응원합니다.", 
    "imgResult": "images/medal_(2).png"},
    1 : {"titleResult": "자신의 특별함을 잘 모르시는군요!", "expResult" : "당신은 절대로 남들과 비교해 부족한 사람이 아닙니다. 무지개를 이루는 일곱 가지 색깔의 아름다움을 서로 비교할 수 없듯이, 당신은 이미 존재만으로도 특별한 사람이며 당신이 주목하지 않은 장점들이 당신의 내면에서 빛을 발하고 있음을 잘 모르고 있는 것 뿐입니다.나를 사랑할 수 있도록 이미지 속 박수를 꼭 따라해주세요!", "imgResult": "images/clap.jpg"},
    0 : {"titleResult": "자신의 특별함을 잘 모르시는군요!", "expResult" : "당신은 절대로 남들과 비교해 부족한 사람이 아닙니다. 무지개를 이루는 일곱 가지 색깔의 아름다움을 서로 비교할 수 없듯이, 당신은 이미 존재만으로도 특별한 사람이며 당신이 주목하지 않은 장점들이 당신의 내면에서 빛을 발하고 있음을 잘 모르고 있는 것 뿐입니다.나를 사랑할 수 있도록 이미지 속 박수를 꼭 따라해주세요!", "imgResult": "images/clap.jpg"}
}


function start() {
    const close = document.querySelector("#start-wrap");
    close.style.display = 'none';
    
    const open = document.querySelector("#question-wrap"); 
    open.style.display = 'block';
    
    next();
}

/* 버튼 선택 */
document.getElementById("A").onclick = function() {
    var type = document.querySelector("#type").value;   /* r값: q-1 ~~~ */

    /* 이전 값 가져오기 */
    var preValue =  document.querySelector('#'+type).value;
    
    $("#"+type).val(parseInt(preValue)+1);
    next();
}; 

document.getElementById("B").onclick = function() {
    next();
}; 

/* 다음으로 넘기기 */
function next() {
    const question = document.querySelector(".question-wrap"); 
    const resultwrap = document.querySelector(".result-wrap"); 
    var point = 0;
    
    if(num == 9) {
        question.style.display = 'none';
        resultwrap.style.display = 'block';
        
        /* no를 눌렀을 때 점수가 입력됨 */
        ( $("#q-1").val() < 1) ?  point+=0 : point+=1;
        ( $("#q-2").val() < 1) ?  point+=0 : point+=1;
        ( $("#q-3").val() < 1) ?  point+=0 : point+=1;
        ( $("#q-4").val() < 1) ?  point+=0 : point+=1;
        ( $("#q-5").val() < 1) ?  point+=0 : point+=1;
        ( $("#q-6").val() < 1) ?  point+=0 : point+=1;
        ( $("#q-7").val() < 1) ?  point+=0 : point+=1;
        ( $("#q-8").val() < 1) ?  point+=0 : point+=1;
        
        $("#imgResult").attr("src",result[point]["imgResult"]);
        $("#titleResult").html(result[point]["titleResult"]);
        $("#expResult").html(result[point]["expResult"]);
    } else {
        /* 문제 영역 */
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
    console.log(num);    
    console.log(num);    
}
console.log(result);