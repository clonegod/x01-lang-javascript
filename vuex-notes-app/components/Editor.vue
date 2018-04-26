<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
/**
 * Editor 组件是最简单的，它只做两件事：
 * 1. 从 store 获取当前笔记 activeNote ，把它的内容展示在 textarea
 * 2. 在用户更新笔记的时候，调用 editNote() action
*/
import { editNote } from "../vuex/actions"

export default {
  vuex: {
    getters: {
      activeNoteText: state => state.activeNote.text
    },
    actions: {
      editNote
    }
  }
}
</script>