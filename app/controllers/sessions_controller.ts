import type { HttpContext } from '@adonisjs/core/http'
import Session from "#models/session";
import Room from '#models/room';
import Seat from '#models/seat';

export default class SessionsController {
  async getAll({ serialize }: HttpContext) {
    return serialize({
      sessions: await Session.all(),
      response: 200
    })
  }

  async get({ params, serialize }: HttpContext) {
    const session = await Session.find(params.id)

    const room = await Room.find(session?.roomId);

    const retorno = {
      session,
      room
    }

    return serialize({
      retorno: retorno,
      response: 200
    })
  }
  
  async post({ request, serialize }: HttpContext) {
    const body = await request.body();

    //verificar data

    //sala

    const session = await Session.create({ 
        roomId: body.room_id, 
        movieName: body.movie_name, 
        sessionDate: body.session_date, 
        sessionTime: body.session_time,
        status: body.status
    })

    return serialize({
      session: session,
      message: "Sessão inserida com sucesso!",
      response: 200
    })
  }
  
  async put({ params, request, serialize }: HttpContext) {
    const body = await request.body();
    const session = await Session.findOrFail(params.id)

    session.movieName = body.movie_name
    session.roomId = body.room_id
    session.sessionDate = body.session_date
    session.sessionTime = body.session_time
    session.status = body.status

    //verificar data

    //sala

    await session.save()

    return serialize({
      rooms: session,
      message: "Sessão atualizada com sucesso!",
      response: 200
    })
  }
  
  async delete({ params, serialize }: HttpContext) {
    const session = await Session.findOrFail(params.id)

    await session.delete()

    return serialize({
      message: "Sessão deletada com sucesso!",
      response: 200
    })
  }
}