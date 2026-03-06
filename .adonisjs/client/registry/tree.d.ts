/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  rooms: {
    getAll: typeof routes['rooms.get_all']
    post: typeof routes['rooms.post']
    get: typeof routes['rooms.get']
    put: typeof routes['rooms.put']
    delete: typeof routes['rooms.delete']
  }
  sessions: {
    getAll: typeof routes['sessions.get_all']
    post: typeof routes['sessions.post']
    get: typeof routes['sessions.get']
    put: typeof routes['sessions.put']
    delete: typeof routes['sessions.delete']
  }
  seats: {
    getAll: typeof routes['seats.get_all']
    post: typeof routes['seats.post']
    get: typeof routes['seats.get']
    put: typeof routes['seats.put']
    delete: typeof routes['seats.delete']
    getByRoom: typeof routes['seats.get_by_room']
  }
}
