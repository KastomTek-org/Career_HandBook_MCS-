import api from './api'
export const getProgram = () => api.get('/handbook/program')
export const updateProgram = (payload) => api.put('/handbook/program', payload)
