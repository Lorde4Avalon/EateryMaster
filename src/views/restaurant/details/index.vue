<template>
  <PageWrapper>
    <template #headerContent>
      <div class="lg:flex">
        <img
          class="h-full w-full lg:w-1/4 lg:h-auto"
          alt="restaurant.image"
          :src="restaurantDetail?.image ? restaurantDetail.image : ''"
        />
        <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
          <h1 class="text-xl">{{ restaurantDetail?.name }}</h1>
          <p class="text-secondary"> {{ restaurantDetail?.description }} </p>
        </div>
        <div class="flex flex-1 justify-end md:mt-0 mt-4">
          <div class="flex flex-col justify-center text-right">
            <span class="text-secondary"> 菜品 </span>
            <span class="text-2xl">10</span>
          </div>

          <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
            <span class="text-secondary"> 餐桌 </span>
            <span class="text-2xl">8</span>
          </div>
          <div class="flex flex-col justify-center text-right md:mr-10 mr-4">
            <span class="text-secondary"> 店员 </span>
            <span class="text-2xl">300</span>
          </div>
        </div>
        <a
          @click="
            () => {
              router.push(`/order/all/${id}`)
            }
          "
          >全部订单</a
        >
      </div>
    </template>
    <div class="p-4 w-full flex flex-col lg:flex-row gap-10">
      <Card title="菜品管理" class="w-full">
        <template #extra>
          <div class="action flex gap-3">
            <PlusOutlined class="cursor-pointer text-lg" key="add" @click="goToAddDish" />
            <EllipsisOutlined class="cursor-pointer text-lg" key="ellipsis" />
          </div>
        </template>
        <Table :columns="dishColumns" :data-source="dishList">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span> Name </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a @click="goToDetailRestaurant(record.id)">Detail</a>
                <Divider type="vertical" />
                <a @click="goToEditDish(record.id)">Edit</a>
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
      </Card>
      <Card title="餐桌管理" class="w-full">
        <template #extra>
          <div class="action flex gap-3">
            <PlusOutlined class="cursor-pointer text-lg" key="add" @click="goToAddBoard" />
            <EllipsisOutlined class="cursor-pointer text-lg" key="ellipsis" />
          </div>
        </template>
        <Table :columns="boardColumns" :data-source="boardList">
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
            <template v-else-if="column.key === 'action'">
              <span>
                <a @click="goToDetailRestaurant(record.id)">Detail</a>
                <Divider type="vertical" />
                <a @click="goToEditBoard(record.id)">Edit</a>
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
      </Card>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { Card, Table, Divider } from 'ant-design-vue'
  import { ref, onMounted, watchEffect } from 'vue'
  import { PlusOutlined, EllipsisOutlined, DownOutlined } from '@ant-design/icons-vue'
  import { useRoute, useRouter } from 'vue-router'
  import { RestaurantModel } from '/@/api/restaurant/model/restaurantModel'
  import { getRestaurantByIdApi } from '/@/api/restaurant/restaurant'
  import { PageWrapper } from '/@/components/Page'
  import { DishModel } from '/@/api/restaurant/model/dishModel'
  import { BoardModel } from '/@/api/restaurant/model/boardModel'
  import { getDishListApi } from '/@/api/restaurant/dish'
  import { getCategoryListApi } from '/@/api/restaurant/category'
  import { getBoardListApi } from '/@/api/restaurant/board'
  import { CategoryModel } from '/@/api/restaurant/model/categoryModel'

  const route = useRoute()
  const router = useRouter()
  const { id } = route.params

  const dishColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ]

  const boardColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ]

  const restaurantDetail = ref<RestaurantModel>()
  const categoryList = ref<CategoryModel[]>([])
  const dishList = ref<DishModel[]>([])
  const boardList = ref<BoardModel[]>([])

  const categoryId = ref<string>('')

  onMounted(async () => {
    restaurantDetail.value = await getRestaurantByIdApi(id as string)
    categoryList.value = await getCategoryListApi(id as string).then((res) => res.content)
    categoryId.value = categoryList.value[0].id as string
    dishList.value = await getDishListApi(categoryId.value).then((res) => res.content)
    boardList.value = await getBoardListApi(id as string).then((res) => res.content)
  })

  watchEffect(async () => {
    dishList.value.forEach((dish) => {
      dish.categoryName = categoryList.value.find(
        (category) => category.id === dish.categoryId,
      )?.name
    })
  })

  const goToAddDish = () => {
    router.push(`/dish/add/${categoryId.value}`)
  }

  const goToEditDish = (id: string) => {
    router.push(`/dish/edit/${id}`)
  }

  const goToAddBoard = () => {
    router.push(`/board/add/${id}`)
  }

  const goToEditBoard = (id: string) => {
    router.push(`/board/edit/${id}`)
  }
</script>
