<template>
    <div class="sft-table-container">
        <el-scrollbar height="100%">
            <!-- 表格 -->
            <table class="table-main">
                <!-- 表头 -->
                <thead class="table-main__header">
                    <!-- 表头行 -->
                    <tr class="table-main__header-tr">
                        <!-- 序号列 -->
                        <th v-if="number" class="table-main__header-tr__item index">序号</th>
                        <!-- 列 -->
                        <th class="table-main__header-tr__item value" v-for="(item, index) in columns" :key="index">
                            {{ item.label }}
                        </th>
                        <th v-if="action" class="table-main__header-tr__item">操作</th>
                    </tr>
                </thead>
                <!-- 表体 -->
                <tbody class="table-main__body">
                    <!-- 表体行 -->
                    <tr class="table-main__body-tr" v-for="(item, index) in data" :key="index">
                        <!-- 序号列 -->
                        <td v-if="number" class="table-main__body-tr__item index">
                            {{ index + 1 }}
                        </td>
                        <!-- 列 -->
                        <td class="table-main__body-tr__item value" v-for="(columnItem, columnIndex) in columns" :key="columnIndex">
                            <el-tooltip placement="top" :content="item[columnItem.prop as keyof typeof item]">
                                {{ item[columnItem.prop as keyof typeof item] }}
                            </el-tooltip>
                        </td>
                        <td v-if="action" class="table-main__body-tr__item">
                            <slot name="action" :index="index" :row="item"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { ColumnProps } from './interface'

interface Props {
    columns: ColumnProps[]
    data: any[]
    number?: boolean
    action?: boolean
}

withDefaults(defineProps<Props>(), {
    number: false,
    action: false
})
</script>

<style scoped lang="scss">
@import './index.scss';

/* For both header and body cells */
.table-main__header-tr__item.value,
.table-main__body-tr__item.value {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;

    /* Allow the cells to grow based on content */
    white-space: nowrap;
}
</style>
