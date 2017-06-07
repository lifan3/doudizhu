<template>
	<el>
		
	</el>
	<div>
	游戏大厅
	</div>
</template>
<script>
import {getRoomList} from '../../vuex/actions/HallAction'
import Levelanv from './Levelnav'
import RoomList from './RoomList'
	export default {
		mounted:function(){ 
       		//axios向服务器发请求,获取房间列表
       		getRoomList(this);
  		},
  		components:{
  			levelnav:Levelanv,
  			roomlist:getRoomList
  		}
	}
</script>