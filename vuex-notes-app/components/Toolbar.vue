<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star"
            :class="{starred: activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script>
// Toolbar 组件需要知道「当前选中的笔记」是哪一条，这样我们才能删除、收藏/取消收藏它。
import { addNote, deleteNote, toggleFavorite } from '../vuex/actions'

export default {
    vuex: {
        getters: {
            activeNote: state => state.activeNote
        },
        actions: {
            addNote,
            deleteNote,
            toggleFavorite
        }
    }
}
</script>