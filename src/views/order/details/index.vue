<template>
  <div class="p-4">
    <Card title="订单详情">
      <template #extra>
        <div class="action flex gap-3">
          <EllipsisOutlined class="cursor-pointer text-lg" key="ellipsis" />
        </div>
      </template>
      <div>
        <Table :columns="columns" :data-source="orderDetail">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a @click="deleteRestaurant(record.id)">Delete</a>
                <Divider type="vertical" />
                <a class="ant-dropdown-link">
                  More actions
                  <DownOutlined />
                </a>
              </span>
            </template>
          </template>
        </Table>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
  import { Card, Table, Divider } from 'ant-design-vue'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { getOrderByIdApi } from '/@/api/restaurant/order'
  import { OrderModel } from '/@/api/restaurant/model/orderModel'

  const route = useRoute()

  const { orderId } = route.params

  const columns = [
    {
      title: '菜品名称',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: '菜品数量',
      dataIndex: 'number',
      key: 'number',
      width: 100,
    },
    {
      title: '菜品口味',
      dataIndex: 'dishFlavor',
      key: 'dishFlavor',
      width: 100,
    },
    {
      title: '订单金额',
      dataIndex: 'amount',
      key: 'amount',
      width: 100,
    },
    {
      title: '操作',
      key: 'action',
    },
  ]

  const orderDetail = ref<OrderModel[]>()

  onMounted(async () => {
    const res = await getOrderByIdApi(orderId as string)
    orderDetail.value = res.detailSet
  })
</script>
