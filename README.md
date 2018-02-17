# CoreUpgrade 2018
## Reto 2 Web - Backend

### Librerías utilizadas
* [yargs](https://github.com/yargs/yargs)

### Ejemplos
Añadir un contacto
```bash
node server.js add --name='Lucas' --number=915271232
# Resultado
Contact created
--
name: Lucas
number: 915271232
```

Listar todos los contactos guardados
```bash
node server.js list
# Resultado
Printing 4 contacts(s).
--
name: Lucas
number: 915271232
--
name: Megumin
number: 124761238
--
name: Rem
number: 812398123
```

Leer un contacto
```bash
node server.js read --name='Megumin'
# Resultado
Contact found
--
name: Megumin
number: 124761238
```

Remover un contacto
```bash
node server.js remove --name='Rem'
Contact was removed
```

### Observaciones
Para el manejo de arrays se usó los métodos ya incorporados de Array.prototype
