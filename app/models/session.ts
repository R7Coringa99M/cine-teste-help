import { SessionSchema } from '#database/schema'
import { DateTime } from 'luxon'
import { column } from '@adonisjs/lucid/orm'
// import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Session extends SessionSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare roomId: number

  @column()
  declare movieName: string

  @column()
  declare sessionDate: DateTime

  @column()
  declare sessionTime: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}