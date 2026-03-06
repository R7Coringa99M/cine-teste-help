/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import RoomsController from '#controllers/rooms_controller'
import SessionsController from '#controllers/sessions_controller'
import SeatsController from '#controllers/seats_controller'
import ReservationsController from '#controllers/reservations_controller'

router.get('/', () => {
  return { hello: 'world' }
})

// router
//   .group(() => {
//     router
//       .group(() => {
//         router.post('signup', [controllers.NewAccount, 'store'])
//         router.post('login', [controllers.AccessToken, 'store'])
//         router.post('logout', [controllers.AccessToken, 'destroy']).use(middleware.auth())
//       })
//       .prefix('auth')
//       .as('auth')

//     router
//       .group(() => {
//         router.get('/profile', [controllers.Profile, 'show'])
//       })
//       .prefix('account')
//       .as('profile')
//       .use(middleware.auth())
//   })
//   .prefix('/api/v1')
router
  .group(() => {
    router.get('/get_all', [RoomsController, 'getAll'])
    router.post('/post', [RoomsController, 'post'])
    router.get('/get/:id', [RoomsController, 'get'])
    router.put('/put/:id', [RoomsController, 'put'])
    router.delete('/delete/:id', [RoomsController, 'delete'])
  })
  .prefix('/rooms')

router
  .group(() => {
    router.get('/get_all', [SessionsController, 'getAll'])
    router.post('/post', [SessionsController, 'post'])
    router.get('/get/:id', [SessionsController, 'get'])
    router.put('/put/:id', [SessionsController, 'put'])
    router.delete('/delete/:id', [SessionsController, 'delete'])
  })
  .prefix('/sessions')
  
router
  .group(() => {
    router.get('/getAll', [SeatsController, 'getAll'])
    router.post('/post', [SeatsController, 'post'])
    router.get('/get/:id', [SeatsController, 'get'])
    router.put('/put/:id', [SeatsController, 'put'])
    router.delete('/delete/:id', [SeatsController, 'delete'])
    router.get('/get_by_room/:id', [SeatsController, 'getByRoom'])
  })
  .prefix('/seats')

router
  .group(() => {
    router.get('/getAll', [ReservationsController, 'getAll'])
    router.post('/post', [ReservationsController, 'post'])
    router.get('/get/:id', [ReservationsController, 'get'])
    router.put('/put/:id', [ReservationsController, 'put'])
    router.delete('/delete/:id', [ReservationsController, 'delete'])
    router.get('/get_by_session/:id', [ReservationsController, 'getBySession'])
  })
  .prefix('/seats')
