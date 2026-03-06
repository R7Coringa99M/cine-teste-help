import Reservation from '#models/reservation'
import type { HttpContext } from '@adonisjs/core/http'

export default class ReservationsController {
  async getAll({ serialize }: HttpContext) {
    return serialize({
      reservations: await Reservation.all(),
      response: 200
    })
  }

  async get({ params, serialize }: HttpContext) {
    const reservation = await Reservation.find(params.id)

    return serialize({
      reservation: reservation,
      response: 200
    })
  }
  

  async post({ request, serialize }: HttpContext) {
    const body = await request.body();
    const reservation = await Reservation.create({ 
        status: body.status, 
        user: body.user, 
        sessionId: body.session_id,
        seatId: body.seat_id,
    })

    return serialize({
      reservation: reservation,
      message: "Reserva realizada com sucesso!",
      response: 200
    })
  }
  
  async put({ params, request, serialize }: HttpContext) {
    const body = await request.body();
    const reservation = await Reservation.findOrFail(params.id)

    reservation.status = body.status
    reservation.user = body.user
    reservation.sessionId = body.session_id
    reservation.seatId = body.seat_id

    await reservation.save()

    return serialize({
      rooms: reservation,
      message: "Reserva Atualizada com sucesso!",
      response: 200
    })
  }
  
  async delete({ params, serialize }: HttpContext) {
    const reservation = await Reservation.findOrFail(params.id)

    await reservation.delete()

    return serialize({
      message: "Poltrona deletada com sucesso!",
      response: 200
    })
  }

  async getBySession({ params, serialize }: HttpContext) {
    const reservation = await Reservation.findManyBy('sessionId', params.id)

    return serialize({
      reservation: reservation,
      response: 200
    })
  }
}