<template>
  <PageWrapper>
    <div class="p-4">
      <Card title="添加门店">
        <Form :model="formState" v-bind="layout" name="nest-messages" @finish="onFinish">
          <FormItem :name="['name']" label="门店名字" :rules="[{ required: true }]">
            <a-input v-model:value="formState.name" />
          </FormItem>
          <FormItem :name="['address']" label="门店地址">
            <a-input v-model:value="formState.address" />
          </FormItem>
          <FormItem :name="['description']" label="门店介绍">
            <a-textarea v-model:value="formState.description" />
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
  import { addRestaurantApi } from '/@/api/restaurant/restaurant'
  import { PageWrapper } from '/@/components/Page'

  const router = useRouter()

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  }

  const formState = reactive({
    name: '',
    address: '',
    description: '',
  })

  const onFinish = async (values: any) => {
    try {
      const result = await addRestaurantApi(values)
      console.log('Success:', values, result)
      router.replace('/restaurant/all')
    } catch (e) {
      console.log(e)
    }
  }
</script>
