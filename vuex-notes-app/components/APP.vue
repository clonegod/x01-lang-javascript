<template>
    <div>
        <toolbar></toolbar>
        <notes-list></notes-list>
        <editor></editor>
    </div>
</template>

<script>
import Toolbar from "./Toolbar.vue"
import NotesList from "./NotesList.vue"
import Editor from "./Editor.vue"

// 根组件 App 会 import 其余三个组件：Toolbar, NotesList 和 Editor
export default {
    components: {
        Toolbar,
        NotesList,
        Editor
    }
}

</script>