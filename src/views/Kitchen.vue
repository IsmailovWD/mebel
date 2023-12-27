<template>
    <div style="display: grid; grid-template-columns: 70% 30%; position: relative;">
        <div style="position: relative;">
            <div style="position: absolute; top: 170px; left: 400px; z-index: 200;">
                <n-button @click="tops = true, lefts = false, rights = false, bottoms = false" size="large" strong circle :type="tops ? 'error':'primary'">
                    <template #icon>
                        <n-icon><PencilSharp /></n-icon>
                    </template>
                </n-button>
            </div>
            <div style="position: absolute; top: 320px; left: 100px; z-index: 200;">
                <n-button @click="tops = false, lefts = true, rights = false, bottoms = false" size="large" strong circle :type="lefts ? 'error':'primary'">
                    <template #icon>
                        <n-icon><PencilSharp /></n-icon>
                    </template>
                </n-button>
            </div>
            <div style="position: absolute; top: 500px; left: 250px; z-index: 200;">
                <n-button @click="tops = false, lefts = false, rights = false, bottoms = true" size="large" strong circle :type="bottoms ? 'error':'primary'">
                    <template #icon>
                        <n-icon><PencilSharp /></n-icon>
                    </template>
                </n-button>
            </div>
            <div style="position: absolute; top: 380px; left: 450px; z-index: 200;">
                <n-button @click="tops = false, lefts = false, rights = true, bottoms = false" size="large" strong circle :type="rights ? 'error':'primary'">
                    <template #icon>
                        <n-icon><PencilSharp /></n-icon>
                    </template>
                </n-button>
            </div>
            <img style="width: 100%;" src="../assets/image/Kitchen/default.jpg" alt="">
            <img v-if="topactive" style="position: absolute;top: 0; left: 0; width: 100%;" :src="topactive" alt="">
            <img v-if="leftactive" style="position: absolute;top: 0; left: 0; width: 100%;" :src="leftactive" alt="">
            <img v-if="bottomactive" style="position: absolute;top: 0; left: 0; width: 100%;" :src="bottomactive" alt="">
            <img v-if="rightactive" style="position: absolute;top: 0; left: 0; width: 100%;" :src="rightactive" alt="">
        </div>
        <div style="height: 100vh; position: sticky; top: 0;">
            <div v-if="tops" id="top" style="display: flex; flex-direction: column;">
                <div style="height: 90px; overflow: hidden; cursor: pointer;" @click="topactive = '/src/assets/image/Kitchen/top/result/1.png'">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/top/1.jpg" alt="">
                </div>
                <div @click="topactive = '/src/assets/image/Kitchen/top/result/2.png'" style="height: 90px; overflow: hidden; cursor: pointer;">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/top/2.jpg" alt="">
                </div>
                <div @click="topactive = '/src/assets/image/Kitchen/top/result/3.png'" style="height: 90px; overflow: hidden; cursor: pointer;">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/top/3.jpg" alt="">
                </div>
                <div @click="topactive = '/src/assets/image/Kitchen/top/result/4.png'" style="height: 90px; overflow: hidden; cursor: pointer;">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/top/4.jpg" alt="">
                </div>
            </div>
            <div v-if="lefts" id="top" style="display: flex; flex-direction: column;">
                <div style="height: 90px; overflow: hidden; cursor: pointer;" @click="leftactive = '/src/assets/image/Kitchen/left/result/1.png'">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/left/1.jpg" alt="">
                </div>
                <div @click="leftactive = '/src/assets/image/Kitchen/left/result/2.png'" style="height: 90px; overflow: hidden; cursor: pointer;">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/left/2.jpg" alt="">
                </div>
            </div>
            <div v-if="bottoms" id="top" style="display: flex; flex-direction: column;">
                <div style="height: 90px; overflow: hidden; cursor: pointer;" @click="bottomactive = '/src/assets/image/Kitchen/bottom/result/1.png'">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/top/1.jpg" alt="">
                </div>
                <div @click="bottomactive = '/src/assets/image/Kitchen/bottom/result/2.png'" style="height: 90px; overflow: hidden; cursor: pointer;">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/top/4.jpg" alt="">
                </div>
            </div>
            <div v-if="rights" id="top" style="display: flex; flex-direction: column;">
                <div style="height: 90px; overflow: hidden; cursor: pointer;" @click="rightactive = '/src/assets/image/Kitchen/right/result/1.png'">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/right/1.jpg" alt="">
                </div>
                <div @click="rightactive = '/src/assets/image/Kitchen/bottom/right/2.png'" style="height: 90px; overflow: hidden; cursor: pointer;">
                    <img style="width: 100%; height: 100px;" src="../assets/image/Kitchen/right/2.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { PencilSharp } from '@vicons/ionicons5'
const topactive = ref<any>(null)
const leftactive = ref<any>(null)
const bottomactive = ref<any>(null)
const rightactive = ref<any>(null)
const tops = ref(false)
const lefts = ref(false)
const rights = ref(false)
const bottoms = ref(false)
</script>