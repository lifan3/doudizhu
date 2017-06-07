import {axPost} from '../../common/HttpBean'
import userStore from '../stores/UserStores'

export function zhuce(form,thisa){
		axPost('http://localhost:3000/users/zhuce',$(form).serialize(),function(res){
				//alert(res.data);
				if(res.data==1){
					thisa.$router.push('/gamehall');
					return;
				}
				userStore.commit('zhuce',res.data);
			},function(err){
				alert(err);
		});
};

export function login(form,thisa){
		
				//console.log('111111111111111111111111111111111111111111111111111111111111111111111111111');
		axPost('http://localhost:3000/users/login',$(form).serialize(),function(res){
			
			//console.log('2222222222222222222222222222'+res.data);
				if(res.data==1){
					thisa.$router.push('/gamehall');
					return;
				}else{
					alert('账号/密码错误');
				}
				alert(res.data);
				userStore.commit('login',res.data);
			});
};