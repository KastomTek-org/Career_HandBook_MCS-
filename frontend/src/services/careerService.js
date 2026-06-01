import api from './api'
export const getCareers = () => api.get('/careers')
export const createCareer = (payload) => api.post('/careers', payload)
