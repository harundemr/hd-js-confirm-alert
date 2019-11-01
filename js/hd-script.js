
var hd_bg = document.getElementById('hd-bg');
var hd_container = document.getElementById('hd-confirm-dialogbox');
var hd_img = document.getElementById('hd-img-img');
var hd_header = document.getElementById('hd-header-h');
var hd_description = document.getElementById('hd-description-p');
var hd_button_ok = document.getElementById('hd-button-ok');
var hd_button_cancel = document.getElementById('hd-button-cancel');

var options = {
    //delete window options
    delete_img :"./img/delete.svg",
    delete_title : "Are You Sure?",
    delete_description : "Do you really want to delete these records? This process cannot be undone.",
    delete_button_ok_text : "Delete",
    delete_button_ok_color : "#E21B1B",
    delete_button_cancel_text : "Cancel",
    delete_button_cancel_color : "#262626",

    //information window options
    info_img : "./img/info.svg",
    info_title : "İnformation",
    info_description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    info_button_ok_text : "Ok",
    info_button_ok_color : "#48a0dc",

    //warning window options
    warning_img : "./img/warning.svg",
    warning_title : "Warning",
    warning_description : "he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters making it look like readable English.",
    warning_button_ok_text : "Ok",
    warning_button_ok_color : "#ffcc00",

    //error window options
    error_img : "./img/error.svg",
    error_title : "Error",
    error_description : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    error_button_ok_text : "Ok",
    error_button_ok_color : "#E21B1B",

    //success window options
    success_img : "./img/success.svg",
    success_title : "Success",
    success_description : "Check your email for a looking confirmation. We'll see you soon!",
    success_button_ok_text : "Ok",
    success_button_ok_color : "#25ae88"
}

function hd_dialogbox(type){
    
    hd_container.className = hd_container.className !== 'show' ? 'show' : 'hide';
    if (hd_container.className === 'show') {
        
        if(type == "delete"){
            hd_img.src = options.delete_img;
            hd_header.innerText = options.delete_title;
            hd_description.innerText = options.delete_description;
            hd_button_ok.style.display = "block";
            hd_button_ok.style.borderBottomLeftRadius = "0px";
            hd_button_ok.style.borderBottomRightRadius = "0px";
            hd_button_ok.style.color = options.delete_button_ok_color;
            hd_button_ok.innerText = options.delete_button_ok_text;
            hd_button_cancel.style.display = "block";
            hd_button_cancel.style.borderBottomLeftRadius = "12px";
            hd_button_cancel.style.borderBottomRightRadius = "12px";
            hd_button_cancel.innerText = options.delete_button_cancel_text;
        }
        else if(type == "info"){
            hd_img.src = options.info_img;
            hd_header.innerText = options.info_title;
            hd_description.innerText = options.info_description;
            hd_button_ok.style.display = "block";
            hd_button_ok.style.borderBottomLeftRadius = "12px";
            hd_button_ok.style.borderBottomRightRadius = "12px";
            hd_button_ok.style.color = options.info_button_ok_color;
            hd_button_ok.innerText = options.info_button_ok_text;
            hd_button_cancel.style.display = "none";
            hd_button_cancel.style.borderBottomLeftRadius = "0px";
            hd_button_cancel.style.borderBottomRightRadius = "0px";
            hd_button_cancel.innerText = "";
        }
        else if(type == "warning"){
            hd_img.src = options.warning_img;
            hd_header.innerText = options.warning_title;
            hd_description.innerText = options.warning_description;
            hd_button_ok.style.display = "block";
            hd_button_ok.style.borderBottomLeftRadius = "12px";
            hd_button_ok.style.borderBottomRightRadius = "12px";
            hd_button_ok.style.color = options.warning_button_ok_color;
            hd_button_ok.innerText = options.warning_button_ok_text;
            hd_button_cancel.style.display = "none";
            hd_button_cancel.style.borderBottomLeftRadius = "0px";
            hd_button_cancel.style.borderBottomRightRadius = "0px";
            hd_button_cancel.innerText = "";
        }
        else if(type == "error"){
            hd_img.src = options.error_img;
            hd_header.innerText = options.error_title;
            hd_description.innerText = options.error_description;
            hd_button_ok.style.display = "block";
            hd_button_ok.style.borderBottomLeftRadius = "12px";
            hd_button_ok.style.borderBottomRightRadius = "12px";
            hd_button_ok.style.color = options.error_button_ok_color;
            hd_button_ok.innerText = options.error_button_ok_text;
            hd_button_cancel.style.display = "none";
            hd_button_cancel.style.borderBottomLeftRadius = "0px";
            hd_button_cancel.style.borderBottomRightRadius = "0px";
            hd_button_cancel.innerText = "";
        }
        else if(type == "success"){
            hd_img.src = options.success_img;
            hd_header.innerText = options.success_title;
            hd_description.innerText = options.success_description;
            hd_button_ok.style.display = "block";
            hd_button_ok.style.borderBottomLeftRadius = "12px";
            hd_button_ok.style.borderBottomRightRadius = "12px";
            hd_button_ok.style.color = options.success_button_ok_color;
            hd_button_ok.innerText = options.success_button_ok_text;
            hd_button_cancel.style.display = "none";
            hd_button_cancel.style.borderBottomLeftRadius = "0px";
            hd_button_cancel.style.borderBottomRightRadius = "0px";
            hd_button_cancel.innerText = "";
        }
        hd_bg.style.zIndex = 21;
        hd_bg.style.display = "block";
        hd_container.style.display = 'block';
        
        window.setTimeout(function(){
            hd_container.style.opacity = 1;
            hd_container.style.transform = 'scale(1)';
        },0);
    }
    if (hd_container.className === 'hide') {    
        hd_container.style.opacity = 0;
        hd_container.style.transform = 'scale(0)';
        window.setTimeout(function(){
            hd_container.style.display = 'none';
            hd_bg.style.display = "none";
            hd_bg.style.zIndex = -1;
        },300);
    }

}