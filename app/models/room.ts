import { RoomSchema } from '#database/schema'
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Room extends RoomSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare seats: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}