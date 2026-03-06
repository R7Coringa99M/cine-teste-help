/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'rooms.get_all': {
    methods: ["GET","HEAD"]
    pattern: '/rooms/get_all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'rooms.post': {
    methods: ["POST"]
    pattern: '/rooms/post'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'rooms.get': {
    methods: ["GET","HEAD"]
    pattern: '/rooms/get/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'rooms.put': {
    methods: ["PUT"]
    pattern: '/rooms/put/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'rooms.delete': {
    methods: ["DELETE"]
    pattern: '/rooms/delete/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'sessions.get_all': {
    methods: ["GET","HEAD"]
    pattern: '/sessions/get_all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'sessions.post': {
    methods: ["POST"]
    pattern: '/sessions/post'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'sessions.get': {
    methods: ["GET","HEAD"]
    pattern: '/sessions/get/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'sessions.put': {
    methods: ["PUT"]
    pattern: '/sessions/put/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'sessions.delete': {
    methods: ["DELETE"]
    pattern: '/sessions/delete/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'seats.get_all': {
    methods: ["GET","HEAD"]
    pattern: '/seats/getAll'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'seats.post': {
    methods: ["POST"]
    pattern: '/seats/post'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'seats.get': {
    methods: ["GET","HEAD"]
    pattern: '/seats/get/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'seats.put': {
    methods: ["PUT"]
    pattern: '/seats/put/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'seats.delete': {
    methods: ["DELETE"]
    pattern: '/seats/delete/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'seats.get_by_room': {
    methods: ["GET","HEAD"]
    pattern: '/seats/get_by_room/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
}
