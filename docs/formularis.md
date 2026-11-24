# Documentació dels formularis

## Component de filtres

**Fitxers:**

- `src/app/components/recepta-filtres/recepta-filtres.component.ts`
- `src/app/components/recepta-filtres/recepta-filtres.component.html`
- `src/app/components/recepta-filtres/recepta-filtres.component.scss`

El component `ReceptaFiltresComponent` utilitza formularis reactius d'Angular mitjançant `ReactiveFormsModule`.

El formulari permet cercar receptes per nom o descripció i filtrar-les per categoria.

## Camps del formulari

### Text de cerca

Control: `textCerca`

- Permet introduir el terme de cerca.
- Aplica una validació síncrona de longitud mínima de tres caràcters mitjançant `Validators.minLength(3)`.
- Aplica una validació asíncrona amb `termeExisteixValidator()`.
- Si no hi ha cap recepta relacionada amb el terme, mostra un missatge d'error.
- Mentre es comprova el terme, mostra un missatge d'estat.

El camp no és obligatori: si queda buit, es pot utilitzar el filtre de categoria sense cercar per text.

### Categoria

Control: `categoria`

Permet seleccionar una categoria concreta o mantenir l'opció de totes les categories.

## Validació asíncrona

**Fitxer:** `src/app/validators/terme-existeix.validator.ts`

La funció `termeExisteixValidator()` comprova si el terme escrit existeix al nom o a la descripció d'alguna recepta.

Abans de consultar el servei espera 500 mil·lisegons mitjançant `timer(500)`. Això evita fer una consulta immediata per cada pulsació. Angular cancel·la la validació anterior quan el valor del camp canvia.

El validador utilitza `switchMap` per consultar `ReceptesApiService.comprovarTerme()` i `catchError` per gestionar errors de consulta.

Els errors es representen amb aquestes claus:

- `senseResultats`: no s'ha trobat cap recepta relacionada.
- `errorConsulta`: no s'ha pogut completar la consulta.

## Aplicació i restabliment dels filtres

El mètode `aplicarFiltre()` comprova que el formulari sigui vàlid i que no hi hagi cap validació pendent. Després emet els valors de cerca i categoria mitjançant l'esdeveniment `filtreAplicat`.

El mètode `restablirFiltres()` neteja els controls i emet els valors buits per eliminar els filtres aplicats.

## Historial de cerques

L'historial es desa al navegador amb `localStorage`, utilitzant la clau:

`historialCercaReceptes`

Característiques:

- Només es desen termes de cerca vàlids de tres caràcters o més.
- Es conserven fins a cinc termes.
- S'eviten duplicats consecutius.
- Es recupera l'historial quan s'inicialitza el component.
- Es pot recuperar un terme prement el botó corresponent.
- Les operacions de lectura i escriptura estan protegides amb `try/catch` per gestionar possibles errors de `localStorage`.

## Accessibilitat

Els camps disposen d'etiquetes associades mitjançant els atributs `for` i `id`.

Els missatges de validació utilitzen `role="alert"` i els missatges d'espera `role="status"`. També s'utilitza `aria-live` per facilitar que les tecnologies d'assistència anunciïn els canvis.

## Mòdul utilitzat

El component importa `ReactiveFormsModule` per utilitzar `FormGroup`, `FormControl` i els validadors d'Angular.