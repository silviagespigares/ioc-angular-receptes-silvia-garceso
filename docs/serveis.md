# Documentació dels serveis

## Servei de receptes

**Fitxer:** `src/app/services/receptes-api.service.ts`

El servei `ReceptesApiService` centralitza la comunicació entre l'aplicació Angular i l'API local de `json-server`. Utilitza `HttpClient` i observables de RxJS.

La URL base està definida a:

`src/app/config/api.config.ts`

```typescript
export const API_BASE_URL = 'http://localhost:3000';
```

## Operacions HTTP

### Obtenir receptes (GET)

El mètode `obtenirReceptes(terme = '')` consulta l'endpoint:

`GET http://localhost:3000/receptes`

Les dades rebudes es transformen mitjançant l'adaptador `adaptarReceptes()` abans de retornar-les a la resta de l'aplicació.

El mètode utilitza `switchMap` per gestionar les consultes i permet repetir l'última cerca.

### Crear una recepta (POST)

El mètode `crearRecepta()` envia una nova recepta a:

`POST http://localhost:3000/receptes`

La resposta de l'API es transforma amb `adaptarRecepta()` i la recepta creada s'incorpora a l'estat local del servei.

## Gestió d'estats

El servei utilitza signals d'Angular per exposar tres estats:

- `receptes`: llista de receptes carregades.
- `carregant`: indica si hi ha una operació en curs.
- `error`: conté el missatge d'error o `null` si no hi ha cap error.

Els signals interns es mantenen privats i es publiquen com a signals de només lectura.

## Gestió d'errors i reintent

Si la consulta GET falla, el servei actualitza l'estat `error` i retorna una llista buida perquè l'aplicació pugui gestionar la situació.

El mètode `reintentar()` emet de nou l'últim terme de cerca. Això provoca que `obtenirReceptes()` repeteixi la consulta HTTP.

La interfície mostra el missatge d'error i un botó `Reintentar` quan la petició no es pot completar.

## Operadors RxJS

- `map`: transforma les dades rebudes de l'API.
- `tap`: actualitza els signals d'estat.
- `switchMap`: gestiona les noves consultes i substitueix l'observable anterior.
- `catchError`: captura errors de comunicació.
- `finalize`: actualitza l'estat de càrrega quan finalitza una petició.
- `startWith`: inicia la consulta amb el terme indicat.
- `Subject`: permet activar una nova consulta en prémer el botó de reintent.

## Comprovació de termes

El mètode `comprovarTerme()` consulta les receptes de l'API i comprova si el terme indicat apareix al nom o a la descripció d'alguna recepta. Retorna un observable booleà i s'utilitza en la validació asíncrona del formulari.

## Configuració HTTP

El client HTTP d'Angular s'activa a `src/app/app.config.ts` mitjançant `provideHttpClient()`.

## Execució de l'API

Des de l'arrel del projecte:

```bash
npm run api
```

L'API utilitza el fitxer `server/db.json` i escolta al port `3000`.