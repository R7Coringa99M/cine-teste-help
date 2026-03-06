/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'rooms.get_all': {
    methods: ["GET","HEAD"],
    pattern: '/rooms/get_all',
    tokens: [{"old":"/rooms/get_all","type":0,"val":"rooms","end":""},{"old":"/rooms/get_all","type":0,"val":"get_all","end":""}],
    types: placeholder as Registry['rooms.get_all']['types'],
  },
  'rooms.post': {
    methods: ["POST"],
    pattern: '/rooms/post',
    tokens: [{"old":"/rooms/post","type":0,"val":"rooms","end":""},{"old":"/rooms/post","type":0,"val":"post","end":""}],
    types: placeholder as Registry['rooms.post']['types'],
  },
  'rooms.get': {
    methods: ["GET","HEAD"],
    pattern: '/rooms/get/:id',
    tokens: [{"old":"/rooms/get/:id","type":0,"val":"rooms","end":""},{"old":"/rooms/get/:id","type":0,"val":"get","end":""},{"old":"/rooms/get/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['rooms.get']['types'],
  },
  'rooms.put': {
    methods: ["PUT"],
    pattern: '/rooms/put/:id',
    tokens: [{"old":"/rooms/put/:id","type":0,"val":"rooms","end":""},{"old":"/rooms/put/:id","type":0,"val":"put","end":""},{"old":"/rooms/put/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['rooms.put']['types'],
  },
  'rooms.delete': {
    methods: ["DELETE"],
    pattern: '/rooms/delete/:id',
    tokens: [{"old":"/rooms/delete/:id","type":0,"val":"rooms","end":""},{"old":"/rooms/delete/:id","type":0,"val":"delete","end":""},{"old":"/rooms/delete/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['rooms.delete']['types'],
  },
  'sessions.get_all': {
    methods: ["GET","HEAD"],
    pattern: '/sessions/get_all',
    tokens: [{"old":"/sessions/get_all","type":0,"val":"sessions","end":""},{"old":"/sessions/get_all","type":0,"val":"get_all","end":""}],
    types: placeholder as Registry['sessions.get_all']['types'],
  },
  'sessions.post': {
    methods: ["POST"],
    pattern: '/sessions/post',
    tokens: [{"old":"/sessions/post","type":0,"val":"sessions","end":""},{"old":"/sessions/post","type":0,"val":"post","end":""}],
    types: placeholder as Registry['sessions.post']['types'],
  },
  'sessions.get': {
    methods: ["GET","HEAD"],
    pattern: '/sessions/get/:id',
    tokens: [{"old":"/sessions/get/:id","type":0,"val":"sessions","end":""},{"old":"/sessions/get/:id","type":0,"val":"get","end":""},{"old":"/sessions/get/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['sessions.get']['types'],
  },
  'sessions.put': {
    methods: ["PUT"],
    pattern: '/sessions/put/:id',
    tokens: [{"old":"/sessions/put/:id","type":0,"val":"sessions","end":""},{"old":"/sessions/put/:id","type":0,"val":"put","end":""},{"old":"/sessions/put/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['sessions.put']['types'],
  },
  'sessions.delete': {
    methods: ["DELETE"],
    pattern: '/sessions/delete/:id',
    tokens: [{"old":"/sessions/delete/:id","type":0,"val":"sessions","end":""},{"old":"/sessions/delete/:id","type":0,"val":"delete","end":""},{"old":"/sessions/delete/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['sessions.delete']['types'],
  },
  'seats.get_all': {
    methods: ["GET","HEAD"],
    pattern: '/seats/getAll',
    tokens: [{"old":"/seats/getAll","type":0,"val":"seats","end":""},{"old":"/seats/getAll","type":0,"val":"getAll","end":""}],
    types: placeholder as Registry['seats.get_all']['types'],
  },
  'seats.post': {
    methods: ["POST"],
    pattern: '/seats/post',
    tokens: [{"old":"/seats/post","type":0,"val":"seats","end":""},{"old":"/seats/post","type":0,"val":"post","end":""}],
    types: placeholder as Registry['seats.post']['types'],
  },
  'seats.get': {
    methods: ["GET","HEAD"],
    pattern: '/seats/get/:id',
    tokens: [{"old":"/seats/get/:id","type":0,"val":"seats","end":""},{"old":"/seats/get/:id","type":0,"val":"get","end":""},{"old":"/seats/get/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['seats.get']['types'],
  },
  'seats.put': {
    methods: ["PUT"],
    pattern: '/seats/put/:id',
    tokens: [{"old":"/seats/put/:id","type":0,"val":"seats","end":""},{"old":"/seats/put/:id","type":0,"val":"put","end":""},{"old":"/seats/put/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['seats.put']['types'],
  },
  'seats.delete': {
    methods: ["DELETE"],
    pattern: '/seats/delete/:id',
    tokens: [{"old":"/seats/delete/:id","type":0,"val":"seats","end":""},{"old":"/seats/delete/:id","type":0,"val":"delete","end":""},{"old":"/seats/delete/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['seats.delete']['types'],
  },
  'seats.get_by_room': {
    methods: ["GET","HEAD"],
    pattern: '/seats/get_by_room/:id',
    tokens: [{"old":"/seats/get_by_room/:id","type":0,"val":"seats","end":""},{"old":"/seats/get_by_room/:id","type":0,"val":"get_by_room","end":""},{"old":"/seats/get_by_room/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['seats.get_by_room']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
