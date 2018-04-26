import Vue from "vue"
import Vuex from  "vuex"

Vue.use(Vuex)

// store.js 里面的状态对象会包含所有应用级别的状态，也就是各个组件需要共享的状态。
// 把组件内部需要的数据对应到 store.js 里的 state。
const state = {
    notes: [],  // 所有笔记列表
    activeNote: {} // 当前激活的笔记对象
}

// mutations 更新state中的数据
const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note 无标题笔记',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

export default new Vuex.Store({
  state,
  mutations
})
