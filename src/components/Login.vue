<template>
    <div>
		<div class="icon-back" @click="tologin">
		    <van-icon size="25" name="arrow-left" />
		</div>
		
       <div class="login-log">
		   <img src="img/appicon.png" alt="">
		   <br>
		   <span>登录中兴商城</span>
	   </div>
        <van-form>
            <van-field
                    v-model="username"
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                    
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                   
            />
            <div style="margin: 16px;">
                <van-button round block type="info"  native-type="submit" @click="onSubmit">登录</van-button>
            </div>
            <div class="reg">
                <div @click="toRegister">新用户注册</div>
            </div>
        </van-form>
		<van-checkbox v-model="checked">已阅读并同意</van-checkbox>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Login",
        data() {
            return {
				checked: false,
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmit() {
                /*console.log('submit', values);*/
                if(this.username=="123456"&&this.password=="123456"){
                    Toast.success('登录成功');
                }
                else if(this.username==""&&this.password==""){
                    Toast('请输入账号或密码');
                }
                else{
                    Toast.fail('账号或密码错误');
                }
            },
			tologin(){
			    this.$router.go(-1);
			},
            toRegister(){
                this.$router.push('/Register')
            }
        }
    }

</script>

<style scoped>
    .title {
        /* border-radius: 15px; */
        size:1px;
        height: 50px;
        line-height: 50px;
        background-color: #20a0ff;
        color: #fff;
        text-align: center;
    }
	.login-log img{
		width: 20vw;
		padding: 2vw 40vw;
	}
	.login-log span{
		padding: 0vw 37vw;
	}
	.reg{
		margin-left: 5vw;
	}

</style>