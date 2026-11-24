# Receptes de Silvia Garceso

## Autora

Silvia Garceso

## Descripció

Aplicació web desenvolupada amb Angular per consultar, cercar, filtrar i seleccionar receptes de cuina. El projecte incorpora una API local amb `json-server`, serveis HTTP, models i adaptadors de dades, formularis reactius amb validacions i historial de cerques.

## Versions utilitzades

- Node.js: 24.20.0
- npm: 11.19.0
- Angular CLI: 22.2.0
- Angular: 22.2.0
- TypeScript: 6.0.3
- Git: 2.54.0

## Instal·lació

Clonar el repositori:

```bash
git clone https://github.com/silviagespigares/ioc-angular-receptes-silvia-garceso.git
cd ioc-angular-receptes-silvia-garceso
```

Instal·lar les dependències:

```bash
npm install
```

## Execució del projecte

Cal iniciar l'API i l'aplicació Angular en dos terminals diferents.

**Terminal 1 — API local:**

```bash
npm run api
```

L'API s'executa al port `3000`.

- Llistat de receptes: `http://localhost:3000/receptes`
- Recepta per identificador: `http://localhost:3000/receptes/1`

Les dades de l'API es troben a `server/db.json`.

**Terminal 2 — Aplicació Angular:**

```bash
ng serve
```

Obrir l'aplicació a:

```text
http://localhost:4200/
```

## Compilació

Per comprovar que el projecte compila correctament:

```bash
npm run build
```

## API, serveis i dades

- `server/db.json`: base de dades local amb 10 receptes.
- `src/app/config/api.config.ts`: configuració de la URL base de l'API (`http://localhost:3000`).
- `src/app/services/receptes-api.service.ts`: servei HTTP per consultar i crear receptes, gestionar estats de càrrega i errors, repetir consultes i comprovar termes de cerca.
- `src/app/models/recepta-api.model.ts`: model de les dades rebudes de l'API.
- `src/app/models/recepta.model.ts`: model intern de recepta.
- `src/app/adapters/recepta.adapter.ts`: adaptador que normalitza les dades de l'API abans d'utilitzar-les a l'aplicació.

## Formularis i validacions

El component `ReceptaFiltresComponent` utilitza formularis reactius amb `ReactiveFormsModule`.

Inclou:

- Cerca per nom o descripció.
- Filtre per categoria.
- Validació síncrona de longitud mínima de tres caràcters.
- Validació asíncrona per comprovar si existeixen receptes relacionades amb el terme.
- Espera de 500 ms abans de consultar l'API per evitar consultes excessives mentre s'escriu.
- Missatges d'error i estat de comprovació.
- Botó per netejar els filtres.
- Historial de fins a cinc cerques desat a `localStorage`, amb recuperació de termes i prevenció de duplicats consecutius.

## Components principals

- `ReceptaLlistaComponent`: mostra el llistat de receptes.
- `ReceptaTargetaComponent`: mostra la informació de cada recepta i permet seleccionar-la.
- `CategoriaEtiquetaComponent`: mostra la categoria d'una recepta.
- `ReceptaFiltresComponent`: gestiona la cerca, el filtre per categoria, les validacions i l'historial.

## Gestió d'errors i accessibilitat

L'aplicació mostra un missatge d'error quan no es pot accedir a l'API i ofereix el botó `Reintentar` per repetir l'última consulta.

Les plantilles utilitzen el control de flux d'Angular (`@if`, `@else` i `@for`), etiquetes associades als camps de formulari i atributs accessibles com `role="status"`, `role="alert"` i `aria-live` quan correspon.

El disseny utilitza CSS responsive per adaptar-se a pantalles d'escriptori i mòbil.

## Documentació tècnica

- `docs/serveis.md`: serveis HTTP, operacions, estats i gestió d'errors.
- `docs/models.md`: models de dades i adaptadors.
- `docs/formularis.md`: formularis reactius, validacions i historial de cerques.

## Branca de treball

Branca de desenvolupament de l'EAC3:

```text
ra3-serveis
```

## Estat del projecte

- **EAC1:** projecte Angular creat, configurat i personalitzat.
- **EAC2:** models, components, comunicació entre components, filtres, detall de receptes, accessibilitat i disseny responsive.
- **EAC3:** API local amb `json-server`, serveis HTTP amb GET i POST, models i adaptadors, gestió d'estats i errors, formularis reactius, validació síncrona i asíncrona i historial de cerques.

## Repositori

https://github.com/silviagespigares/ioc-angular-receptes-silvia-garceso