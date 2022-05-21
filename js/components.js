const components = {}; //// dùng để lưu màn hình giao diện của mình ( màn 1)
components.welcomeScreen = ` 
<h1>Welcome to Chat app</h1>
`; // welcomescreen : thêm thuộc tính vào object (components).
components.registerScreen = `
<div class="register-container">
        <div class="aside-right">
            <div class="header">
                <h3 style="color: #ffffff;">Đăng web chat</h3>
            </div>

            <form id="register-form">
                <div class="input-name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="firstName" placeholder="Tên của bạn">
                        <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="lastName" placeholder="Họ của bạn">
                        <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="email" placeholder="Email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Mật khẩu">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="confirmPassword" placeholder="Xác nhận lại mật khẩu">
                    <div class="error" id="confirm-password-error"></div>
                </div>
                <div class="form-action">
                    <span class = "cursor" id="redirect-to-login">
                        Nếu đã có sẵn tài khoản. Đăng nhập tại đây
                    </span>
                    <button class="btn" type="submit">
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    </div>`;
///// loginScreen
components.loginScreen = `
<div class="login-container">
<div class="aside-right">
    <div class="header">
        <h3 id = "loginScreen-content" style="color: white;">Đăng web chat</h3>
    </div>
    
    <form id="login-form">
        <div class="input-wrapper">
            <input type="text" name="email" placeholder="Email">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Mật khẩu">
            <div class="error" id="password-error"></div>
        </div>

        <div class="form-action">
            <span class = "cursor" id="redirect-to-register">
                Nếu không có tài khoản. Đăng ký tại đây
            </span>
            <button id = "redirect-to-chatScreen" class="btn" type="submit">
                Đăng nhập
            </button>
        </div>
    </form>
</div>
</div>

`;

components.chatScreen = `
<div class="chat-container">
        <div class="main">
            <div class="aside-left">
                <div class="create-conversation">
                    <button class="btn">
                        Tạo thêm đoạn chat
                    </button>
                </div>
                <div class="list-conversation">
                    
                </div>

                <div class="setting-page">
                    <div>
                        <button data-modal-target="#modal" style="border-radius: 5px; height: 30px;font-size: 10px; border: solid 1px black;background-color: rgb(207, 23, 23); padding: 1px">Cài đặt</button>
                        <div class="modal" id="modal">
                            <div class="modal-header">
                                <div class="title">Bảng cài đặt</div>
                                <button data-close-button class="close-button">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div id="dark-mode" style="margin-bottom: 10px">
                                    <p>Chế độ buổi tối:</p>
                                    <span class="change">Tắt</span>
                                </div>

                                <div id="change-font-size">                                 
                                    <input type="number" id="font-size-value" placeholder = "Chỉnh cỡ chữ">
                                    <button id="change-font-size">Chuyển đổi</button>
                                    <p id="font-size-now"></p>
                                </div>
                            </div>
                        </div>
                        <div id="overlay"></div>
                    </div>

                    <div id="sign-out" class="cursor">
                        Đăng xuất
                    </div>
                </div>
            </div>
            
            <div class="conversation-detail">
                <div class="conversation-header">
                    First conversation
                </div>
                <div class="list-messages">
                    <div class="message-container mine">
                        <div class="content">
                            hello world
                        </div>
                    </div>

                    <div class="message-container their">
                        <div class="owner">
                            abcxyz@gmail.com
                        </div>
                        <div class="content">
                            hiiiiiiiiiiiiiiii
                        </div>
                    </div>
                </div>
                <form id="send-messages-form">
                    <div class="input-wrapper">
                        <input type="text" name="message" placeholder="Nhập tin nhắn" id="chat-messange-input">
                    </div>
                    <button type="submit">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
            <div class="aside-right">
                <div class="list-users">
                </div>
                <form id = "add-user-form">
                    <div class="input-wrapper">
                        <input type="text" placeholder="Nhập email bạn bè" name="email">
                        <div class="error" id="add-user-email-error"></div>
                    </div>
                    <button class="btn" type="submit">Lưu</button>
                </form>
            </div>
        </div>
</div>
`;
components.createConversation = `
 <div class="create-conversation-container">
        <div class="header">
            Đăng web chat
        </div>
        <div class="main" style="padding: 50px 30%">
            <form id="create-conversation-form">
                <div>
                    Tạo đoạn chat
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Tên đoạn chat" name="conversationTitle">
                    <div class="error" id="conversation-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Email bạn bè" name="conversationEmail">
                    <div class="error" id="conversation-email-error"></div>
                </div>
                <button class="btn" type="submit">Lưu</button>
                <button class="btn btn-light" type="button" id="back-to-chat">Hủy</button>
            </form>
        </div>
    </div>
`;