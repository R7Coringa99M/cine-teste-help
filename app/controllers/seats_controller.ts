import Seat from '#models/seat';
import type { HttpContext } from '@adonisjs/core/http'

export default class SeatsController {
  async getAll({ serialize }: HttpContext) {
    return serialize({
      seats: await Seat.all(),
      response: 200
    })
  }

  async get({ params, serialize }: HttpContext) {
    const seat = await Seat.find(params.id)

    return serialize({
      seat: seat,
      response: 200
    })
  }
  

  async post({ request, serialize }: HttpContext) {
    const body = await request.body();
    const seat = await Seat.create({ 
        roomId: body.room_id, 
        seatNumber: body.seat_number, 
        seatRow: body.seat_row
    })

    //verificar qtd de lugares

    return serialize({
      seat: seat,
      message: "Poltrona inserida com sucesso!",
      response: 200
    })
  }
  
  async put({ params, request, serialize }: HttpContext) {
    const body = await request.body();
    const seat = await Seat.findOrFail(params.id)

    seat.roomId = body.room_id
    seat.seatNumber = body.seat_number
    seat.seatRow = body.seat_row

    await seat.save()

    return serialize({
      rooms: seat,
      message: "Poltrona atualizada com sucesso!",
      response: 200
    })
  }
  
  async delete({ params, serialize }: HttpContext) {
    const seat = await Seat.findOrFail(params.id)

    await seat.delete()

    //Atualizar numero de lugares

    return serialize({
      message: "Poltrona deletada com sucesso!",
      response: 200
    })
  }

  async getByRoom({ params, serialize }: HttpContext) {
    const seat = await Seat.findManyBy('roomId', params.id)

    return serialize({
      seat: seat,
      response: 200
    })
  }
}