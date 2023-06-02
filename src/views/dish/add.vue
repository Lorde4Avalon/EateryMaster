<template>
  <PageWrapper>
    <div class="p-4">
      <Card title="添加菜品">
        <Form :model="formState" v-bind="layout" name="nest-messages" @finish="onFinish">
          <FormItem :name="['name']" label="菜品名字" :rules="[{ required: true }]">
            <a-input v-model:value="formState.name" />
          </FormItem>
          <FormItem :name="['price']" label="菜品价格">
            <a-input v-model:value="formState.price" />
          </FormItem>
          <FormItem :name="['description']" label="菜品介绍">
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
  import { addDishApi } from '/@/api/restaurant/dish'
  import { PageWrapper } from '/@/components/Page'

  const router = useRouter()

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  }

  const formState = reactive({
    name: '',
    price: '',
    description: '',
  })

  const onFinish = async (values: any) => {
    try {
      values.categoryId = router.currentRoute.value.params.id
      const result = await addDishApi(values)
      console.log('Success:', values, result)
      router.back()
    } catch (e) {
      console.log(e)
    }
  }
</script>
