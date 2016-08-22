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
 
    if (FormCheckTeam.firstMemberTeam.value.toLowerCase()  == 'хиневич' || FormCheckTeam.firstMemberTeam.value.toLowerCase()  == 'хиневич юрий')
    {firstMember = 'Хиневич Юрий'}
    else {firstMember = 'этот человек не из нащей комманды, проверьте правильность ввода ФИО' }

    if (FormCheckTeam.secondMemberTeam.value.toLowerCase() == 'позняк' || FormCheckTeam.secondMemberTeam.value.toLowerCase() == 'позняк богдан')
    {secondMember = 'Позняк Богдан'}
    else {secondMember = 'этот человек не из нащей комманды, проверьте правильность ввода ФИО' }

    if (FormCheckTeam.thirdMemberTeam.value.toLowerCase() == 'капуза' || FormCheckTeam.thirdMemberTeam.value.toLowerCase() == 'капуза артур')
    {thirdMember = 'Капуза Артур'}
    else {thirdMember = 'этот человек не из нащей комманды, проверьте правильность ввода ФИО' }

    if (FormCheckTeam.fourthMemberTeam.value.toLowerCase() == 'майорчик' || FormCheckTeam.fourthMemberTeam.value.toLowerCase() == 'майорчик егор')
    {fourthMember = 'Майорчик Егор'}
    else {fourthMember = 'этот человек не из нащей комманды, проверьте правильность ввода ФИО' }

    if (FormCheckTeam.fifthMemberTeam.value.toLowerCase() == 'глоба' || FormCheckTeam.fifthMemberTeam.value.toLowerCase() == 'глоба евгений')
    {fifthMember = 'Глоба Евгений'}
    else {fifthMember = 'этот человек не из нащей комманды, проверьте правильность ввода ФИО' }

    if (FormCheckTeam.sixthMemberTeam.value.toLowerCase() == 'волчек' || FormCheckTeam.sixthMemberTeam.value.toLowerCase() == 'волчек дмитрий')
    {sixthMember = 'Волчек Дмитрий'}
    else {sixthMember = 'этот человек не из нащей комманды, проверьте правильность ввода ФИО' }
    
    resultOutputArea.innerHTML = 'Результат:'+ '<br>'+
        '1.' + firstMember  +  '<br>' +
        '2.' + secondMember +  '<br>' +
        '3.' + thirdMember  +  '<br>' + 
        '4.' + fourthMember +  '<br>' + 
        '5.' + fifthMember  +  '<br>' + 
        '6.' + sixthMember;
}

function ClearForm() {
    resultOutputArea.innerHTML = '';
}