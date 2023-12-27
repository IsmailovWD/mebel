<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { MenuOption } from 'naive-ui';
import { RouterLink, RouterView , useRoute} from 'vue-router'

const route = useRoute()
const menuOptions = ref<MenuOption[]>([
    {
        key: 'kitchen',
        label: 'Oshxona'
    }
])
const activeKey = ref<any>(null)
onMounted(() => {
    activeKey.value = (route?.name ? route.name : null)
})
</script>

<template>
    <n-page-header>
        <template #title>
            <div style="display: flex; align-items: center; gap: 10px;">
                <a href="https://anyway.fm/" style="text-decoration: none; color: #fff">
                    Logo
                </a>
                <div>
                    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" responsive />
                </div>
            </div>
        </template>
        <template #avatar>
            <n-avatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
        </template>
    </n-page-header>
    <RouterView />
</template>
