
const controller = {};
// định nghĩa hàm register:
controller.register = (data) => {
    if (data.firstName.trim() === "") {
        document.getElementById("first-name-error").
            innerText = '*Vui lòng nhập tên của bạn';
    }
    else {
        document.getElementById("first-name-error").
            innerText = '';
    }
    if (data.lastName.trim() === "") {
        document.getElementById("last-name-error").
            innerText = `*Vui lòng nhập họ của bạn`
    }
    else {
        document.getElementById("last-name-error").
            innerText = '';
    }
    if (data.email.trim() === "") {
        document.getElementById("email-error").
            innerText = `*Vui lòng nhập email của bạn`
    }
    else {
        document.getElementById("email-error").
            innerText = '';
    }
    if (data.password === "") {
        document.getElementById("password-error").
            innerText = `*Vui lòng nhập mật khẩu`
    }
    else {
        document.getElementById("password-error").
            innerText = '';
    }
    if (data.confirmPassword === "") {
        document.getElementById("confirm-password-error").
            innerText = `*Vui lòng xác nhận lại mật khẩu`
    }
    else {
        document.getElementById("confirm-password-error").
            innerText = '';
    }


    ////// confirm password: toan tu confirmpassword    
    data.password !== data.confirmPassword ? document.getElementById("confirm-password-error").
        innerText = 'Mật khẩu không chính xác' : document.getElementById("confirm-password-error").
            innerText = '';

    /////////////// tạo user: 
    if (data.firstName !== '' && data.lastName !== "" &&
        data.email !== "" &&
        data.password !== "" &&
        data.confirmPassword !== "" &&
        data.password === data.confirmPassword) {
        model.register(data)
    }

};
//////// thao tác trong login 
controller.login = (dataLogin) => {
    if (dataLogin.email.trim() === "") {
        document.getElementById("email-error").
            innerText = `*Vui lòng nhập email`
    }
    else {
        document.getElementById("email-error").
            innerText = '';
    }
    if (dataLogin.password === "") {
        document.getElementById("password-error").
            innerText = `*Vui lòng nhập mật khẩu`
    }
    else {
        document.getElementById("password-error").
            innerText = '';
    }

    if (dataLogin.email !== "" &&
        dataLogin.password !== "") {
        model.login(dataLogin);
    }

};

controller.createConversationScreen = (newConversation) => { // nhận vào 1 giá trị data ( là object bắn ra từ conversation)
    if (newConversation.conversationTitle.trim() === '') {
        document.getElementById('conversation-name-error').innerText = 'Vui lòng nhập tên đoạn chat'
    } else {
        document.getElementById('conversation-name-error').innerText = ''
    }
    if (newConversation.conversationEmail.trim() === '') {
        document.getElementById('conversation-email-error').innerText = 'Vui lòng nhập email bạn bè'
    } else {
        document.getElementById('conversation-email-error').innerText = ''
    }

    if (newConversation.conversationTitle.trim() !== "" && newConversation.conversationEmail.trim() !== "") {
        const data = {
            title: newConversation.conversationTitle,
            users: [newConversation.conversationEmail, model.currentUser.email],
            createdAt: (new Date()).toISOString(),
            messages: []
        }
        model.createConversation(data);
    }
};


controller.addUserConversation = (user) => {
    if (user.trim() === "") {
        view.setErrorMessage('add-user-email-error', 'Vui lòng nhập email bạn bè');
    } else {
        view.setErrorMessage('add-user-email-error', "");
    }

    if (user.trim() !== "") {
        model.addUser(user);
    }
}