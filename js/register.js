//表单验证
$(function () {
    $("[type='text'],[type='password']").focusin(
        function () {
            $(this).attr("placeholder", "")
        });
    $("[type='text'],[type='password']").focusout(function () {
        if($(this).attr("type") == "text"){
            $(this).attr("placeholder","请输入手机号码");
        }else if($(this).attr("data-a")=="a1"){
            $(this).attr("placeholder","请输入密码");
        }else if($(this).attr("data-a")=="a2"){
            $(this).attr("placeholder","请确认密码");
        }
    })
});
