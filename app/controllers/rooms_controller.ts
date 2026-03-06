import type { HttpContext } from '@adonisjs/core/http'
import Room from '#models/room'

export default class RoomsController {
  async getAll({ serialize }: HttpContext) {

    return serialize({
      rooms: await Room.all(),
      response: 200
    })
  }
  
  async get({ params, serialize }: HttpContext) {
    const room = await Room.find(params.id)

    return serialize({
      room: room,
      response: 200
    })
  }
  
  async post({ request, serialize }: HttpContext) {
    const body = await request.body();
    const room = await Room.create({ 
        name: body.name, 
        seats: body.seats 
    })

    return serialize({
      room: room,
      message: "Sala inserida com sucesso!",
      response: 200
    })
  }
    
    async put({ params, request, serialize }: HttpContext) {
      const body = await request.body();
      const room = await Room.findOrFail(params.id)
  
      room.name = body.name
      room.seats = body.seats
  
      await room.save()
  
      return serialize({
        room: room,
        message: "Sala atualizada com sucesso!",
      response: 200
      })
    }
    
    async delete({ params, serialize }: HttpContext) {
      const room = await Room.findOrFail(params.id)
  
      await room.delete()
  
      return serialize({
        message: "Sala deletada com sucesso!",
      response: 200
      })
    }
}