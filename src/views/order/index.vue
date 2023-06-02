<template>
  <div class="p-4">
    <Card title="全部订单">
      <template #extra>
        <div class="action flex gap-3">
          <EllipsisOutlined class="cursor-pointer text-lg" key="ellipsis" />
        </div>
      </template>
      <div>
        <Table :columns="columns" :data-source="orderList">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'tags'">
              <span> </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a @click="goToOrderDetail(record.id)">Detail</a>
                <Divider type="vertical" />
                <a @click="goToEditRestaurant(record.id)">Edit</a>
                <Divider type="vertical" />
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
  import { useRoute, useRouter } from 'vue-router'
  import { getOrderListApi } from '/@/api/restaurant/order'
  import { OrderModel } from '/@/api/restaurant/model/orderModel'

  const route = useRoute()
  const router = useRouter()

  const restaurantId = route.params.id

  const columns = [
    {
      title: '订单号',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: '订单状态',
      dataIndex: 'tags',
      key: 'tags',
      width: 100,
    },
    {
      title: '订单金额',
      dataIndex: 'amount',
      key: 'amount',
      width: 100,
    },
    {
      title: '下单用户',
      dataIndex: 'userName',
      key: 'userName',
      width: 100,
    },
    {
      title: '下单时间',
      dataIndex: 'orderTime',
      key: 'orderTime',
    },
    {
      title: '操作',
      key: 'action',
    },
  ]

  const orderList = ref<OrderModel[]>([])

  onMounted(async () => {
    orderList.value = await getOrderList()
  })

  const goToOrderDetail = (orderId: string) => {
    router.push(`/order/detail/${restaurantId}/${orderId}`)
  }

  async function getOrderList(): Promise<OrderModel[]> {
    const { content: data } = await getOrderListApi(restaurantId as string)

    return data ? data : []
  }
</script>
