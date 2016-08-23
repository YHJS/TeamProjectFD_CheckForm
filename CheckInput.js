/**
 * Created by NEKTA on 22.08.2016.
 */
"use strict"
function CheckInput() {
var firstMember,
    secondMember,
    thirdMember,
    fourthMember,
    fifthMember,
    sixthMember;
 
    if (FormCheckTeam.firstMemberTeam.value.toLowerCase().trim()  == 'хиневич' || FormCheckTeam.firstMemberTeam.value.toLowerCase().trim()  == 'хиневич юрий')
    {firstMember = 'Хиневич Юрий'}
    else {firstMember = 'этот человек не из нашей комманды, проверьте правильность ввода фамилии и имени' }

    if (FormCheckTeam.secondMemberTeam.value.toLowerCase().trim() == 'позняк' || FormCheckTeam.secondMemberTeam.value.toLowerCase() == 'позняк богдан')
    {secondMember = 'Позняк Богдан'}
    else {secondMember = 'этот человек не из нашей комманды, проверьте правильность ввода фамилии и имени' }

    if (FormCheckTeam.thirdMemberTeam.value.toLowerCase().trim() == 'капуза' || FormCheckTeam.thirdMemberTeam.value.toLowerCase() == 'капуза артур')
    {thirdMember = 'Капуза Артур'}
    else {thirdMember = 'этот человек не из нашей комманды, проверьте правильность ввода фамилии и имени' }

    if (FormCheckTeam.fourthMemberTeam.value.toLowerCase().trim() == 'майорчик' || FormCheckTeam.fourthMemberTeam.value.toLowerCase() == 'майорчик егор')
    {fourthMember = 'Майорчик Егор'}
    else {fourthMember = 'этот человек не из нашей комманды, проверьте правильность ввода фамилии и имени' }

    if (FormCheckTeam.fifthMemberTeam.value.toLowerCase().trim() == 'глоба' || FormCheckTeam.fifthMemberTeam.value.toLowerCase() == 'глоба евгений')
    {fifthMember = 'Глоба Евгений'}
    else {fifthMember = 'этот человек не из нашей комманды, проверьте правильность ввода фамилии и имени' }

    if (FormCheckTeam.sixthMemberTeam.value.toLowerCase().trim() == 'волчек' || FormCheckTeam.sixthMemberTeam.value.toLowerCase() == 'волчек дмитрий')
    {sixthMember = 'Волчек Дмитрий'}
    else {sixthMember = 'этот человек не из нашей комманды, проверьте правильность ввода фамилии и имени' }
    
    resultOutputArea.innerHTML =
        '1. ' + firstMember  +  '<br>' +
        '2. ' + secondMember +  '<br>' +
        '3. ' + thirdMember  +  '<br>' +
        '4. ' + fourthMember +  '<br>' +
        '5. ' + fifthMember  +  '<br>' +
        '6. ' + sixthMember;
}

function ClearForm() {
    resultOutputArea.innerHTML = '';
}