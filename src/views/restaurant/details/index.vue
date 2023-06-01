<template>
  <PageWrapper>
    <template #headerContent>
      <div class="lg:flex">
        <h1></h1>
        <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
          <span class="text-secondary"> 今日晴，20℃ - 32℃！ </span>
        </div>
        <div class="flex flex-1 justify-end md:mt-0 mt-4">
          <div class="flex flex-col justify-center text-right">
            <span class="text-secondary"> 待办 </span>
            <span class="text-2xl">2/10</span>
          </div>

          <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
            <span class="text-secondary"> 项目 </span>
            <span class="text-2xl">8</span>
          </div>
          <div class="flex flex-col justify-center text-right md:mr-10 mr-4">
            <span class="text-secondary"> 团队 </span>
            <span class="text-2xl">300</span>
          </div>
        </div>
      </div>
    </template>
    <div class="p-4">
      <Card title="门店详情">
        test
        {{ id }}
      </Card>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue'
  import { useRoute } from 'vue-router'
  import { PageWrapper } from '/@/components/Page'

  const route = useRoute()
  const { id } = route.params
</script>
