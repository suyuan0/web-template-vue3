<template>
    <main class="main">
        <AnalyseNav />
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
</template>

<script setup lang="ts">
import AnalyseNav from './components/AnalyseNav.vue'
</script>
