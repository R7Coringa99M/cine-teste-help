import { SeatSchema } from '#database/schema'
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Seat extends SeatSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare roomId: number

  @column()
  declare seatNumber: number

  @column()
  declare seatRow: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}