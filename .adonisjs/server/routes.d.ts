import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'rooms.get_all': { paramsTuple?: []; params?: {} }
    'rooms.post': { paramsTuple?: []; params?: {} }
    'rooms.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'rooms.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sessions.get_all': { paramsTuple?: []; params?: {} }
    'sessions.post': { paramsTuple?: []; params?: {} }
    'sessions.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sessions.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sessions.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.get_all': { paramsTuple?: []; params?: {} }
    'seats.post': { paramsTuple?: []; params?: {} }
    'seats.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.get_by_room': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'rooms.get_all': { paramsTuple?: []; params?: {} }
    'rooms.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sessions.get_all': { paramsTuple?: []; params?: {} }
    'sessions.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.get_all': { paramsTuple?: []; params?: {} }
    'seats.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.get_by_room': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'rooms.get_all': { paramsTuple?: []; params?: {} }
    'rooms.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sessions.get_all': { paramsTuple?: []; params?: {} }
    'sessions.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.get_all': { paramsTuple?: []; params?: {} }
    'seats.get': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.get_by_room': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'rooms.post': { paramsTuple?: []; params?: {} }
    'sessions.post': { paramsTuple?: []; params?: {} }
    'seats.post': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'rooms.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sessions.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'rooms.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'sessions.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'seats.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}