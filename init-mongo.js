// Cambia a la base de datos CRMgraphQL
db = db.getSiblingDB('CRMgraphQL');

// Crea una colección de ejemplo (opcional, si la necesitas)
//db.createCollection('exampleCollection');

// Crea un usuario con permisos de lectura y escritura
db.createUser({
  user: 'adminClient',
  pwd: 'UCRMgraphQL1!', // Cambia esto a una contraseña segura
  roles: [
    { role: 'readWrite', db: 'CRMgraphQL' }
  ]
});