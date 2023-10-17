import VideoService from '@/services/videoService.js'

export const namespaced = true

export const state = () => {
  return {
    vidoes: [],
    video: {},
  }
}

export const mutations = {
  SET_VIDEOS(state, list) {
    state.vidoes = list
  },
  SET_VIDEO(state, video) {
    state.video = video
  },
}
export const actions = {
  fetchVidoes({ commit }) {
    return VideoService.getCategories()
      .then((response) => {
        commit('SET_VIDEOS', response.data)
      })
      .catch((error) => {
        commit('SET_ERROR', { isError: true, errMsg: error })
      })
  },
  fetchVideo({ commit }, payload) {
    return VideoService.getVideo(payload.catId).then((response) => {
      const allVideos = response.data
      const video = allVideos.thumbnails.find(
        (video) => video.id === payload.id
      )
      commit('SET_VIDEO', video)
      return video
    })
  },
}

export const getters = {
  getVideosByCategory(state) {
    return state.vidoes
  },
  getVideoByid: () => (catId, id) => {},
  getVideo(state) {
    return state.video
  },
}
