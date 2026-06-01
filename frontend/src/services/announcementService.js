import api from './api'
export const getAnnouncements = () => api.get('/announcements')
export const createAnnouncement = (payload) => api.post('/announcements', payload)
