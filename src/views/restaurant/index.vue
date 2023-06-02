<template>
  <div class="p-4">
    <Card title="所有门店">
      <template #extra>
        <div class="action flex gap-3">
          <PlusOutlined class="cursor-pointer text-lg" key="add" @click="goToAddRestaurant" />
          <EllipsisOutlined class="cursor-pointer text-lg" key="ellipsis" />
        </div>
      </template>
      <div>
        <Table :columns="columns" :data-source="restaurantList">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <smile-outlined />
                Name
              </span>
            </template>
          </template>

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
                <a @click="goToDetailRestaurant(record.id)">Detail</a>
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
  import {
    PlusOutlined,
    EllipsisOutlined,
    DownOutlined,
    SmileOutlined,
  } from '@ant-design/icons-vue'
  import { onMounted, ref } from 'vue'
  import { RestaurantModel } from '/@/api/restaurant/model/restaurantModel'
  import { deleteRestaurantApi, getRestaurantListApi } from '/@/api/restaurant/restaurant'
  import { useRouter } from 'vue-router'
  import { columns } from './data'

  const restaurantList = ref<RestaurantModel[]>([])

  const router = useRouter()

  onMounted(async () => {
    restaurantList.value = await getRestaurantList()
    console.log('restaurantList', restaurantList.value)
  })

  const goToAddRestaurant = () => {
    router.push('/restaurant/add')
  }

  const goToEditRestaurant = (id: string) => {
    router.push(`/restaurant/edit/${id}`)
  }

  const goToDetailRestaurant = (id: string) => {
    router.push(`/restaurant/detail/${id}`)
  }

  const deleteRestaurant = async (id: number) => {
    console.log('deleteRestaurant', id)
    try {
      await deleteRestaurantApi(id)
      //flush page
      restaurantList.value = await getRestaurantList()
    } catch (e) {
      console.log(e)
    }
  }

  async function getRestaurantList(): Promise<RestaurantModel[]> {
    const { content: data } = await getRestaurantListApi()

    return data ? data : []
  }
</script>
