<script setup>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

const selectedKeys1 = ref(['2'])
const selectedKeys2 = ref(['1'])
const openKeys = ref(['sub1', 'sub2', 'sub3'])
const router = useRouter()
</script>

<template>
  <a-layout>
    <a-layout-header class="header page-width">
      <div class="logo">
        <img src="@/assets/logo.png" />
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="page-width">
      <a-breadcrumb style="margin: 16px 0;">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff;">
        <a-layout-sider width="200" style="background: #fff;">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%;"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  subnav 1
                </span>
              </template>
              <a-menu-item key="1" @click="router.push('/')">
                VueDemo
              </a-menu-item>
              <a-menu-item key="2" @click="router.push('/provide')">
                provide inject
              </a-menu-item>
              <a-menu-item key="3" @click="router.push('/message')">
                message
              </a-menu-item>
              <a-menu-item key="4" @click="router.push('/todo-index')">
                todo-index
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  subnav 2
                </span>
              </template>
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                  subnav 3
                </span>
              </template>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center;">
      Ant Design 2022 Created by sweeney chen
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped>
.page-width {
  padding: 0 50px;
}
.logo {
  float: left;
  height: 100%;
  margin: 1px 24px 5px 0;
  img {
    height: 45px;
  }
}
</style>
