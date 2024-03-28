<template>

    <el-timeline style="max-width: 600px">
      <el-timeline-item v-for="i in data" :key="i.id" :timestamp="i.timestamp" placement="top">
        <el-card>
          <p>{{ i.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>


  </template>
<script setup>
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElTimelineItem ,ElTimeline,ElCard} from 'element-plus';
const props = defineProps(['data'])

</script>