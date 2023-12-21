
<template>
    <el-button @click="increment" type="primary">Count is: {{ count }}</el-button>
    <el-button text @click="dialogVisible = true">
        click to open the Dialog
    </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script  lang="ts" setup>
import { ref, onMounted } from 'vue';
import { ElButton, ElCarousel, ElMessageBox, ElDialog } from 'element-plus';
import 'element-plus/dist/index.css';

// 响应式状态
const count = ref(0)
const dialogVisible = ref(false)
// 用来修改状态、触发更新的函数
function increment() {
    count.value++
}
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
// 生命周期钩子
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})
</script>
