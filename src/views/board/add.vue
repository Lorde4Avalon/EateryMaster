<template>
  <PageWrapper>
    <div class="p-4">
      <Card title="添加餐桌">
        <Form :model="formState" v-bind="layout" name="nest-messages" @finish="onFinish">
          <FormItem :name="['name']" label="餐桌名字" :rules="[{ required: true }]">
            <a-input v-model:value="formState.name" />
          </FormItem>
          <FormItem :wrapper-col="{ ...layout.wrapperCol, offset: 5 }">
            <a-button type="primary" html-type="submit">提交</a-button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { Card, Form, FormItem } from 'ant-design-vue'
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { addBoardApi } from '/@/api/restaurant/board'
  import { PageWrapper } from '/@/components/Page'

  const router = useRouter()

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  }

  const formState = reactive({
    name: '',
  })

  const onFinish = async (values: any) => {
    try {
      values.storeId = router.currentRoute.value.params.id
      const result = await addBoardApi(values)
      console.log('Success:', values, result)
      router.back()
    } catch (e) {
      console.log(e)
    }
  }
</script>
