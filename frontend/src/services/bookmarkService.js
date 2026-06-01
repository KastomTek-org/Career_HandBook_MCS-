import api from './api'
export const getBookmarks = () => api.get('/bookmarks')
export const addBookmark = (unitId) => api.post('/bookmarks', { unitId })
export const removeBookmark = (unitId) => api.delete(`/bookmarks/${unitId}`)
