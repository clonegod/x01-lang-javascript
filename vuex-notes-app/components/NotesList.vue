<template>
    <div id="notes-list">

        <div id="list-header">
            <h2>Notes | coligo</h2>
            <div class="btn-group btn-group-justified" role="group">
                <!-- All Notes button -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default"
                        @click="showType = 'all'"
                        :class="{active: showType === 'all'}">
                        All Notes
                    </button>
                </div>
                <!-- Favorites Button -->
                 <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default"
                        @click="showType = 'favorites'"
                        :class="{active: showType === 'favorites'}">
                        Favorites
                    </button>
                </div>
            </div>
        </div>
        <!-- render notes in a list -->
        <div class="container">
            <div class="list-group">
                <a v-for="note in filteredNotes"
                class="list-group-item" href="#"
                :class="{active: activeNote === note}"
                @click="updateActiveNote(note)">
                <h4 class="list-group-item-heading">
                    {{note.text.trim().substring(0, 30)}}
                </h4>
                </a>
            </div>
        </div>
        
    </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'

export default {
    // 组件内部属性：showType
    data() {
        return {
            showType: "all" // 默认显示所有Note，显示列表时调用“计算属性”时用该值决定是否对Notes进行过滤
        }
    },
    vuex : {
        getters: {
            notes: state => state.notes,
            activeNote: state => state.activeNote
        },
        actions: {
            updateActiveNote // 当用户点击一条笔记，该笔记变成当前选中笔记
        }
    },
    // 使用计算属性返回Note列表，内部根据showType来决定是否执行过滤操作
    computed: {
        filteredNotes() {
            if(this.showType === "all") {
                return this.notes
            } else if(this.showType === "favorites") {
                return this.notes.filter(note => note.favorite)
            }
        }
    }
}
</script>