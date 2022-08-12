// 引入组件
// import 文件名字 from 地址
import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import index from '../../components/index.vue'
import type from '../../components/type.vue'
import my from '../../components/my.vue'
import shopcart from '../../components/shopcart.vue'
import Login from '../../components/Login.vue'
import Register from '../../components/Register.vue'
import Productdetails from '../../components/Productdetails.vue'
// export default 导出文件
var router= new VueRouter({
  routes:[
      {
          path:'/',
          component:first,
          children:[
              {
                  path:'/index',
                  component:index
              },
              {
                  path:'/type',
                  component:type
              },
			  {
			      path:'/shopcart',
			      component:shopcart
			  },
			  {
			      path:'/my',
			      component:my
			  }
          ],
          redirect:'/index'
      },
	  {
	      path:'/Login',
	      component:Login
	  },
	  {
	      path:'/Register',
	      component:Register
	  },
	  {
		path:'/Productdetails',
		  component:Productdetails
	  },
      {
          path:"/*",
          redirect:'/index'
      }
      
  ]
})
// 导出
export default router;