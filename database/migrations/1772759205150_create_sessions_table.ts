import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sessions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('room_id').notNullable()
      table.string('movie_name').notNullable()
      table.date('session_date').notNullable()
      table.time('session_time').notNullable()
      table.string('status').defaultTo('active')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}