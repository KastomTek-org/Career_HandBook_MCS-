import api from './api'
export const getUnits = (params={}) => api.get('/curriculum/units', { params })
export const getUnit = (id) => api.get(`/curriculum/units/${id}`)
export const createUnit = (payload) => api.post('/curriculum/units', payload)
export const updateUnit = (id, payload) => api.put(`/curriculum/units/${id}`, payload)
export const deleteUnit = (id) => api.delete(`/curriculum/units/${id}`)
