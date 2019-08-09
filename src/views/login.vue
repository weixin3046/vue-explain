<template>
    <div class="login">
        <div class="login-brand">
            <img src="../assets/images/kodinger.jpg" alt="logo">
        </div>
        <div class="login-wrapper">
            <div v-show="login" class="login-box login-login">
                <form class="login-box-inner">
                    <p>登录以继续</p>
                    <div class="login-group">
                        <label>用户名</label>
                        <div class="login-input">
                            <i class="blog iconicon_signal"></i>
                            <input type="text" v-model="userName" name="email">
                        </div>
                    </div>
                    <div class="login-group password-group">
                        <label>密码 <span class="f-r link">忘记密码?</span></label>
                        <div class="login-input">
                            <i class="blog iconicon_signal"></i>
                            <input type="password"  v-model="password" name="password" autocomplete="current-password" >
                        </div>
                    </div>
                    <button class="login-btn login-btn"  @click="onlogin">
                        登录
                    </button>
                    <div class="text-foot">
                        没有帐户? <span class="link">立即注册</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import getTest from "@/global/request.js"
export default {
    name: 'login',
    data() {
        return {
            forget: false,
            login: true,
            userName: '',
            password: ''
        }
    },
    methods: {
        onlogin: function() {
            console.log(!this.userName)
            console.log(!this.password)
            return;
            // getTest('post','/login',{
            //   // accesstoken : '9bde836d-4216-4bff-b6b0-a056b8ecb0af'
            // }).then(response => {
            //     this.$router.push({name:'home'})
            //   //this.reponseData = response.data;
            // });
        }
    }
}
</script>
<style scoped>
.login {
    --color-primary: #44a0b3;
    --color-grey: rgba(68, 160, 179, .06);
    --color-dark: rgba(68, 160, 179, .5);
    --color-semidark: rgba(68, 160, 179, .5);
    margin: 60px 0 0 0;
    font-size: 14px;
}
.login *{
    box-sizing: border-box;
}
.login .login-brand {
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: 0 auto -50px auto;
    border-radius: 50%;
    -webkit-box-shadow: 0 4px 40px rgba(0, 0, 0, .07);
    box-shadow: 0 4px 40px rgba(0, 0, 0, .07);
    padding: 10px;
    background-color: #fff;
    position: relative;
}

.login .login-wrapper {
    width: 360px;
    margin: 0 auto;
}
.login .link {
    color: var(--color-primary);
    text-decoration: none;
    border-bottom: 1px dashed var(--color-semidark);
    margin-top: -3px;
    padding-bottom: 2px;
    cursor: pointer;
}
.login .login-box {
    width: 100%;
    left: 0;
}
.login .login-box-inner {
    background-color: #fff;
    -webkit-box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
    box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
    padding: 60px 25px 25px 25px;
    border-radius: 3px;
}
.login .login-box p {
    color: var(--color-semidark);
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
}
.login .login-box .login-group {
    margin-bottom: 30px;
}
.login .login-box label {
    margin-bottom: 5px;
    display: inline-block;
    width: 100%;
    color: var(--color-semidark);
    font-weight: 700;
}
.login .login-box .login-input {
    position: relative;
    width: 100%;
}
.login-input input {
    border: none;
    width: 100%;
    background-color: var(--color-grey);
    color: var(--color-dark);
    padding: 15px 20px 15px 0;
    outline: 0;
    padding-left: 35px;
}
.login-input i {
    position: absolute;
    left: 10px;
    top: 14px;
    color: var(--color-dark);
}
input::-webkit-input-placeholder {
    color: #969696;
}
input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #969696;
}
input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #969696;
}
input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #969696;
}

.login .login-box .login-btn {
    display: inline-block;
    width: 100%;
    border: none;
    color: #fff;
    padding: 15px;
    border-radius: 3px;
    background-color: var(--color-primary);
    -webkit-box-shadow: 0 2px 7px var(--color-semidark);
    box-shadow: 0 2px 7px var(--color-semidark);
    font-weight: 700;
    outline: 0;
    cursor: pointer;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.login .login-box .login-btn:active {
    -webkit-box-shadow: none;
    box-shadow: none;
}
.login .login-box .login-btn:hover {
    opacity: .9;
}

.login .text-foot {
    text-align: center;
    padding: 10px;
    font-weight: 700;
    margin-top: 20px;
    color: var(--color-semidark);
}
.login .login-footer {
    text-align: center;
    margin: 30px 0;
    font-size: 12px;
    color: var(--color-semidark);
    font-weight: 700;
}



.login .login-back-link {
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}

@media screen and (max-width: 320px) {
    .login .login-wrapper {
        width: 100%;
    }

    .login .login-box {
        padding: 0 10px;
    }
}
</style>
<!-- 
<div v-show="!login" class="login-box login-register">
        <div class="login-box-inner">
          <form>
            <p>我们来创建您的帐户</p>
            <div class="login-group">
              <label>用户名</label>
              <input type="text" name="name" autocomplete="name" class="login-input">
            </div>
            <div class="login-group">
              <label>电子邮件</label>
              <input type="email" autocomplete="email" name="email" class="login-input">
            </div>
            <div class="login-group">
              <label>密码</label>
              <input type="password" name="password" autocomplete="current-password" class="login-input">
            </div>
            <button class="login-btn">
              注册
            </button>
            <div class="text-foot">
              已经有账号? <span @click="login=!login" class="link">立即登录</span>
            </div>
          </form>
        </div>
      </div> -->