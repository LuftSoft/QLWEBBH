var eventHandler = function (e) {
    e.preventDefault()
}
function validate() {
    var regex_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var regex_cmnd = /(([0-9]{9})\b)/g;
    var regex_cccd = /(([0-9]{12})\b)/g;
    var regex_name = /^[a-zA-Z ]{8,30}$/g;
    let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var name = $('#staffname').val().trim()
    name = name.toLowerCase();
    name = name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    name = name.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    name = name.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    name = name.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    name = name.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    name = name.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    name = name.replace(/đ/g, "d");
    var phone = $('#staffphone').val().trim()
    var date = $('#staffdate').val().trim()
    var email = $('#staffemail').val().trim()
    var cmnd = $('#staffcmnd').val().trim()
    if (!regex_name.test(name)) { $('#staffname').addClass('warning-border'); $('#warning_text').text("Tên đăng nhập không hợp lệ"); return false }
    else {
        $('#staffname').removeClass('warning-border');
        $('#warning_text').text("")
    }
    if (!regex_email.test(email) && email != '') {
        $('#staffemail').addClass('warning-border'); $('#warning_text').text("Địa chỉ email không hợp lệ!!"); return false
    } else {
        $('#staffemail').removeClass('warning-border');
        $('#warning_text').text("")
    }
    if (!regex_phone.test(phone)) {
        $('#staffphone').addClass('warning-border'); $('#warning_text').text("Số điện thoại không đúng!!"); return false
    } else {
        $('#staffphone').removeClass('warning-border');
        $('#warning_text').text("")
    }
    if (new Date(date) > new Date()) {
        $('#staffdate').addClass('warning-border'); $('#warning_text').text("Ngày không đúng!!"); return false
    } else {
        $('#staffdate').removeClass('warning-border');
        $('#warning_text').text("")
    }

    if (!regex_cmnd.test(cmnd) && !regex_cccd.test(cmnd)) {
        $('#staffcmnd').addClass('warning-border'); $('#warning_text').text("Số cmnd/cccd không đúng!!"); return false
    } else {
        $('#staffcmnd').removeClass('warning-border');
        $('#warning_text').text("")
    }
    return true
}
// $('#btn_submit_form_staff').click(function (e) {
//     $('#btn_submit_form_staff').bind("submit", () => { e.preventDefault() })
//     $('#btn_submit_form_staff').bind("click", () => { e.preventDefault() })
//     console.log('submit form ne')
//     var regex_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
//     var regex_cmnd = /(([0-9]{9})\b)/g;
//     var regex_cccd = /(([0-9]{12})\b)/g;
//     var regex_name = /^[a-zA-Z ]{8,30}$/g;
//     let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var name = $('#staffname').val().trim()
//     name = name.toLowerCase();
//     name = name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//     name = name.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//     name = name.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//     name = name.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//     name = name.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//     name = name.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//     name = name.replace(/đ/g, "d");
//     var phone = $('#staffphone').val().trim()
//     var date = $('#staffdate').val().trim()
//     var email = $('#staffemail').val().trim()
//     var cmnd = $('#staffcmnd').val().trim()
//     if (!regex_name.test(name)) { $('#staffname').addClass('warning-border'); $('#warning_text').text("Tên đăng nhập không hợp lệ"); return }
//     else {
//         $('#staffname').removeClass('warning-border');
//         $('#warning_text').text("")
//     }
//     if (!regex_email.test(email) && email != '') {
//         $('#staffemail').addClass('warning-border'); $('#warning_text').text("Địa chỉ email không hợp lệ!!"); return
//     } else {
//         $('#staffemail').removeClass('warning-border');
//         $('#warning_text').text("")
//     }
//     if (!regex_phone.test(phone)) {
//         $('#staffphone').addClass('warning-border'); $('#warning_text').text("Số điện thoại không đúng!!"); return
//     } else {
//         $('#staffphone').removeClass('warning-border');
//         $('#warning_text').text("")
//     }
//     if (new Date(date) > new Date()) {
//         $('#staffdate').addClass('warning-border'); $('#warning_text').text("Ngày không đúng!!"); return
//     } else {
//         $('#staffdate').removeClass('warning-border');
//         $('#warning_text').text("")
//     }

//     if (!regex_cmnd.test(cmnd) && !regex_cccd.test(cmnd)) {
//         $('#staffcmnd').addClass('warning-border'); $('#warning_text').text("Số cmnd/cccd không đúng!!"); return
//     } else {
//         $('#staffcmnd').removeClass('warning-border');
//         $('#warning_text').text("")
//     }
//     $('#btn_submit_form_staff').unbind("submit", () => { e.preventDefault() })
//     $('#btn_submit_form_staff').unbind("click", () => { e.preventDefault() })
// });
