<template>
  <navbar title="订单详情11111">
    <template #left>
<!--      <div>返回</div>-->
    </template>
    <template #right>
<!--      <nut-icon class="right" name="share-n"></nut-icon>-->
    </template>
  </navbar>
  <div>
    <nut-button type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button type="success">成功按钮</nut-button>
  </div>
  <!-- <ul class="infiniteUl" id="scroll"  style='height: 90vh;'>
    <nut-infiniteloading
      containerId = 'scroll'
      :use-window='false'
      :has-more="hasMore"
      @load-more="loadMore"
      @refresh="refresh"
    >
      <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</li>
    </nut-infiniteloading>
  </ul> -->
  <div class="a">
    <div class="b"></div>
  </div>
</template>

<script lang="ts">
import { ref,reactive,onMounted,toRefs,getCurrentInstance} from 'vue';
import navbar from '@/components/navbar.vue'
interface data {
  defultList: string[]
}
export default {
  components:{
    navbar
  },
  setup(props) {
    console.log(props);
    
    const proxy: any = getCurrentInstance()!.proxy
    const hasMore = ref(true);
    const data: data = reactive({
      defultList: []
    });
    const loadMore = (done: any) => {
      setTimeout(() => {
        const curLen: number = data.defultList.length;
        for (let i = curLen; i < curLen + 10; i++) {
          data.defultList.push(`${i}`);
        }
        if (data.defultList.length > 30) hasMore.value = false;
        done()
      }, 500);
    };
    const init = () => {
      proxy.$toast.success('请求成功');
      for (let i: number = 0; i < 10; i++) {
        data.defultList.push(`${i}`);
      }
    }
    const refresh = (done: any) => {
      setTimeout(()=>{
        proxy.$toast.success('刷新成功');
        done()
      },1000)
    }
    onMounted(() => {
      init()
    });
    return { loadMore, hasMore, ...toRefs(data),refresh };
  }
}
</script>

<style lang="less">
.infiniteUl {
  height: 300px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background:#eee
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
.a {
  width: 100%;
  height: 40px;
  background-color: red;
  .b {
    background: #fff;
  }
}
</style>
