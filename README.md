AdonisJS
NodeJS                 - v24.14.0
npm                    - 11.9.0
PostgreSQL             - 18

Rodar o sistema        - npm run dev
Criar as tabelas       - node ace migration:run

Tem todos os crud das tabelas, faltou algumas verificações para adicionar alguns dados no banco, como verificar quantidade de lugares, entre outros, não realizei as fk pq dai eu teria que fazer mais migrations pq ele só deixa adicionar se a tabela já estiver criada, isso facilitaria as controller pq dai dava pra buscar tudo numa só query, falta de tempo me prejudicou um pouco

Eu pensei na parte de reservas, comparar os lugares da sessão com as reservas, dai só seria selecionável os que não tivessem reservas, faz a reserva só com o nome mesmo, bem simples

Exemplo de objeto das tabelas:
Room = {
	name: 'teste',
	seats: 10 
}
Session = {	
	room_id: 1 
	movie_name: 'teste',
	session_date: '10/04/2026',
	session_time: '19:00',
	status: 'active'
}
Seat = {	
	room_id: 1
	seat_number: 1,
	seat_row: 'a'
}
Seat = {	
	status: 'active'
	user: 'Teste',
	session_id: 1,
	seat_id: 1
}
