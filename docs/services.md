
# Servei d'accés a l'API de receptes

## Servei implementat

El servei principal de comunicació amb l'API és:

`src/app/services/receptes-api.service.ts`

Aquest servei utilitza `HttpClient` d'Angular per comunicar-se amb l'API local creada amb json-server.

L'adreça base de l'API està definida a:

`src/app/config/api.config.ts`

## Mètodes del servei

| Mètode | Tipus de petició | Descripció |
|---|---|---|
| `obtenirReceptes()` | GET | Recupera les receptes de l'API i adapta les dades al model intern |
| `crearRecepta()` | POST | Envia una recepta nova i adapta la resposta del servidor |
| `reintentar()` | — | Repeteix l'última consulta realitzada |

## Gestió dels estats

El servei utilitza Angular Signals per exposar els estats de l'aplicació:

- `receptes`: llista de receptes obtingudes de l'API.
- `carregant`: indica si hi ha una petició en curs.
- `error`: conté el missatge d'error quan una petició falla.

Els components poden consultar aquests estats sense accedir directament a les peticions HTTP.

## Ús de RxJS i switchMap

El mètode `obtenirReceptes()` utilitza els operadors RxJS següents:

- `Subject`: permet emetre una nova petició quan es vol repetir la consulta.
- `startWith()`: inicia automàticament la primera consulta.
- `switchMap()`: cancel·la la petició anterior si arriba una nova consulta.
- `map()`: transforma les dades de l'API mitjançant l'adaptador.
- `catchError()`: captura els errors i retorna una llista buida.
- `finalize()`: actualitza l'estat de càrrega quan finalitza la petició.

## Integració amb els components

El component principal:

`src/app/app.component.ts`

Inicia la càrrega de receptes amb `obtenirReceptes()` i utilitza `crearRecepta()` per enviar una recepta nova.

La plantilla:

`src/app/app.component.html`

Mostra l'estat de càrrega, els missatges d'error, el botó de reintent i els resultats.

## Proves realitzades

S'han realitzat les proves següents:

1. Recuperació de les receptes mitjançant GET.
2. Creació d'una recepta nova mitjançant POST.
3. Comprovació de la resposta HTTP 200 de la petició GET.
4. Simulació d'un error aturant temporalment el servidor API.
5. Recuperació de la connexió mitjançant el botó de reintent.
6. Comprovació del funcionament de `switchMap()` al servei.

Les proves s'han realitzat amb Angular i json-server en funcionament local.
