
# Models TypeScript i adaptador de receptes

## Models utilitzats

- **Model API:** `src/app/models/recepta-api.model.ts`
- **Model intern:** `src/app/models/recepta.model.ts`
- **Adaptador:** `src/app/adapters/recepta.adapter.ts`

## Taula de mapatge API -> model intern

| Camp API | Tipus API | Camp intern | Transformació |
|---|---|---|---|
| id | number o string | id | Conversió segura a número |
| nom | string | nom | trim() i valor per defecte |
| descripcio | string | descripcio | trim() i valor per defecte |
| categoria | string | categoria | trim(), minúscules i valor per defecte |
| dataCreacio | string | dataCreacio | trim() i data actual si falta |
| tempsPreparacio | number o string | tempsPreparacio | Conversió numèrica i comprovació de validesa |
| destacada | boolean | destacada | Valor per defecte false |

## Normalitzacions aplicades

L'adaptador `adaptarRecepta()` aplica les normalitzacions següents:

1. Neteja els espais inicials i finals dels textos amb `trim()`.
2. Converteix l'identificador i el temps de preparació a nombres amb `Number()`.
3. Comprova que el temps de preparació sigui un nombre vàlid i no negatiu.
4. Assigna textos per defecte quan falten el nom, la descripció o la categoria.
5. Normalitza les categories a minúscules.
6. Assigna la data actual quan no hi ha data de creació.
7. Assigna `false` quan el camp `destacada` no està informat.

## Flux de les dades

L'aplicació obté les receptes mitjançant `ReceptesApiService`.
El servei rep les dades com a `ReceptaApi[]` i utilitza l'adaptador
`adaptarReceptes()` abans de retornar-les com a `Recepta[]`.

D'aquesta manera, els components de la vista treballen amb el model
intern i no directament amb la resposta de l'API.
