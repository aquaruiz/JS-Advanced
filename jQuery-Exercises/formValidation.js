function validate() {
    let submitBtn = $("#submit")
        .on("click", validate);

    let checkBox = $("#company")
        .on("change", showCompany);

    function validate(event) {
        event.preventDefault();

        let usernameRegex = /^[0-9a-zA-Z]{3,20}$/;
        let passwordRegex = /^\w{5,15}$/;
        let emailRegex = /^.*?@.*?\..*?$/;
        let compNumRegex = /^[1-9][0-9]{3}$/;

        let isValid = true;
        
        if (!usernameRegex.test($("#username").val())) {
            isValid = false;
            $("#username").css("border-color", "red");
        } else {
            $("#username").css("border-color", "");
        }

        if ($("#password").val() !== $("#confirm-password").val()){
            isValid = false;
            $("#confirm-password").css("border-color", "red");
            $("#password").css("border-color", "red");
        } else {
            if (!passwordRegex.test($("#password").val())) {
                isValid = false;
                $("#password").css("border-color", "red");
            } else  {
                $("#password").css("border-color", "");
            }

            if (!passwordRegex.test($("#confirm-password").val())) {
                isValid = false;
                $("#confirm-password").css("border-color", "red");
            } else {
                $("#confirm-password").css("border-color", "");
            }
        }

        if (!emailRegex.test($("#email").val())) {
            isValid = false;
            $("#email").css("border-color", "red");
        } else {
            $("#email").css("border-color", "");
        }

        if ($("#companyInfo").css("display") === "block") {
            if (!compNumRegex.test($("#companyNumber").val())) {
                isValid = false;
                $("#companyNumber").css("border-color", "red");
            } else {
                $("#companyNumber").css("border-color", "");
            }
        }

        if (isValid){
            $("#valid").css("display", "block");
        }
    }

    function showCompany() {
        let companyField = $("#companyInfo").css("display");

        if (companyField === "none"){
            $("#companyInfo").css("display", "block");
        } else {
            $("#companyInfo").css("display", "none");
        }
    }
}
