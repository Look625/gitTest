<template>
  <div class="hello">
    <KForm :model='model' :rules="rules" ref="logForm">
      <KFormItem label="用户名" prop="name">
        <KInput v-model="model.name" placeholder="请输入用户名"></KInput>
        <!-- <KInput :value.sync="model.name" placeholder="请输入用户名"></KInput> -->
      </KFormItem>
      <KFormItem label="密码" prop="pw">
        <KInput v-model="model.pw" type="password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onSubmit">提交</button>
      </KFormItem>
    </KForm>
    <h1>vue传值方式</h1>
    <h2>1.props</h2>
    <c1 name="vscode"></c1>
    <h2>2.$attrs</h2>
    <c2 v-bind="$attrs" computer="samsung" phone="iphone"></c2>
    <h2>3.$refs</h2>
    <c3 ref="msg"></c3>
    <h2>4.$children</h2>
    <c4 ref="c4"></c4>
     <button @click="parent_child_fun">children调用子组件的方法</button>
  </div>
</template>

<script>
import KInput from '../components/KInput'
import KFormItem from '../components/KFormItem'
import KForm from '../components/KForm'
import c1 from '../components/child1'
import c2 from '../components/child2'
import c3 from '../components/child3'
import c4 from '../components/child4'
export default {
  components:{KInput,KFormItem,KForm,c1,c2,c3,c4},
  data(){
    return{
      model:{name:'',pw:''},
      rules:{name:[{required:true,message:'用户名不能为空'}],
             pw:[{required:true,message:'密码不能为空'}]
            },
   
    }

  },  
  mounted: function () {
      this.$refs.msg.getMessage( 'iphone6')
    },
  methods:{
    parent_child_fun(){
      console.log(this.$refs.c4.getMessage('iphone7'));
      
    },
    onSubmit(){
      this.$refs.logForm.validate(isValidate=>{
        if(isValidate){
         alert('success')
        }else{
          alert('error')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
