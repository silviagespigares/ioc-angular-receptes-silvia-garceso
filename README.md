# Receptes de Silvia Garceso

## Autora

Silvia Garceso

## Descripció

Aplicació web desenvolupada amb Angular per consultar, filtrar i seleccionar receptes de cuina.

El projecte forma part dels exercicis d'avaluació contínua (EAC) i es desenvolupa progressivament mitjançant components reutilitzables, comunicació entre components, filtres i millores d'accessibilitat.

## Versions utilitzades

- Node.js: 24.20.0
- npm: 11.19.0
- Angular CLI: 22.2.0
- Angular: 22.2.0
- TypeScript: 6.0.3
- Git: 2.54.0

## Instal·lació i execució

Instal·lar les dependències:

```bash
npm install
```

Iniciar l'aplicació en mode desenvolupament:

```bash
ng serve
```

Obrir al navegador:

```text
http://localhost:4200/
```

Generar una compilació de producció:

```bash
ng build
```

Els canvis realitzats durant el desenvolupament s'actualitzen automàticament al navegador quan és possible.

## Components creats

- **ReceptaLlistaComponent:** mostra el llistat de receptes i gestiona els estats de llista amb resultats o sense resultats.
- **ReceptaTargetaComponent:** mostra la informació de cada recepta i permet seleccionar-la.
- **CategoriaEtiquetaComponent:** mostra la categoria d'una recepta.
- **ReceptaFiltresComponent:** permet cercar receptes per nom o descripció i filtrar-les per categoria.

## Funcionalitats implementades

- Model de dades `Recepta` i dades de prova.
- Comunicació entre components mitjançant propietats d'entrada i esdeveniments de sortida.
- Cerca per nom o descripció i filtre per categoria.
- Validació del formulari de cerca: camp obligatori i mínim de tres caràcters.
- Restabliment dels filtres.
- Visualització del nombre de receptes i missatge quan no hi ha resultats.
- Selecció d'una recepta i visualització del seu detall.
- Format de dates amb `DatePipe`.
- Control de flux d'Angular amb `@if` i `@for`.
- Accessibilitat: enllaç per saltar al contingut principal, etiquetes associades als camps, indicadors de focus i missatges accessibles.
- Disseny responsive amb CSS Grid i regles `@media` per adaptar la interfície a pantalles petites.

## Branca de treball

Branca utilitzada per al desenvolupament de l'EAC2:

```text
ra2-components
```

## Estat del projecte

- **EAC1:** projecte Angular creat, configurat i personalitzat.
- **EAC2:** model i dades de receptes, components, comunicació entre components, filtres, detall de receptes, accessibilitat i adaptació responsive.

## Repositori

https://github.com/silviagespigares/ioc-angular-receptes-silvia-garceso
