# Wie schreibe ich mein eigenes Node-Modul

> Ein Talk über dir Grundlagen der Entwicklung für node.js

## Agenda

- Node.js, was ist das?
- CommonJS: Grundlagen
- Node-Module mit NPM verwalten
- Aufbau der package.json

## Node.js, was ist das?

Node.js ist eine JavaScript Laufzeitumgebung, die auf der V8 Engine aufbaut. Diese wurde ursprünglich für Google Chrome entwickelt.

Zentrale Idee hinter node.js ist, dass es nur einen Prozess gibt, der den Großteil der Arbeit erledigt. Es ist so, dass Berechnungen und Programmabläufe meistens nicht den größten Teil der Rechenzeit in Anspruch nehmen, sondern andere, langsamere Tasks den Prozessor blockieren ohne dass dieser Arbeit verrichtet. Daher werden alle langsamen Aufgaben, wie beispielsweise Datenbankabfragen oder IO im allgemeinen asynchron ausgeführt. Programmteile, die auf die entsprechenden Daten warten werden dann in einem Callback ausgeführt.

## CommonJS: Grundlagen

CommonJS ist eine Art der Modulspezifikation. Sie ist für das Einbinden von Modulen in node.js Applikationen elementar. Es gibt einige Grundregeln zu beachten:

- Module werden über `module.exports` oder `exports` bekannt gemacht.
- Module werden mittels der Funktion `require` inkludiert.

Beispiel:

```javascript
var module = require( './external-module.js' );

module.exports = function() {
    module.foo();
};
```

## Node-Module mit NPM verwalten

NPM steht für Node Package Manager. NPM ist ein fester Bestandteil einer normalen node.js Installation. Es handelt sich hierbei, genau wie bei node.js selbst um ein Konsolen-Tool. In der Datei `package.json` werden alle nötigen Informationen hinterlegt und alle Abhängigkeiten definiert. Es wird zwischen mehreren Arten von Abhängigkeiten unterschieden:

- `dependencies`
- `devDependencies`
- `peerDependencies`
- `bundledDependencies`
- `optionalDependencies`

Sie unterscheiden sich in der Art wo und wann sie installiert werden.

### `dependencies`

Normale Abhängigkeiten, die zur Funktion der Applikation benötigt werden und immer installiert werden sollen, werden in der Eigenschaft `dependencies` in der `package.json` angegeben.

### `devDependencies`

Abhängigkeiten, die nur für die Entwicklung benötigt werden, werden innerhalb der `devDependencies` spezifiziert. Meistens werden hier Pakete für das Testing oder den Build-Prozess angegeben, bspw. `grunt`. Wird ein Paket direkt aus der Konsole installiert (`npm install`), dann werden sowohl die `devDependencies`, als auch die `dependencies` installiert. Wird ein Paket als Anbhängigkeit eines anderen Paketes installiert, dann werden die `devDependencies` nicht mit installiert.

### `peerDependencies`

`peerDependencies` werden auch bei jeder Art der Installation mit geladen. Allerdings werden sie nicht wie normale Abhängigkeiten lokal im Ordner `node_modules` installiert, sondern sie werden eine Ebene darüber abgelegt. Auch werden sie automatisch mit in die `package.json` des entahltenden Paketes aufgenommen.

### Weitere Arten der Abhängigkeiten

Die weiteren Arten der Abhängigkeiten (`bundledDependencies` und `optionalDependencies`) können in der [Dokumentation](https://docs.npmjs.com/files/package.json#bundleddependencies) eingesehen werden.

## Aufbau der package.json

In der `package.json` sind nicht nur Abhängigkeiten zu finden, sondern auch Informationen zum Paket, wie bspw. Paketname, Beschreibung, Autor oder Lizenz.

Hier gibt es auch die Möglichkeit verschiedene Konsolen-Befehle als Abkürzungen bzw. Aliases anzugeben. Das geschieht im `scripts`-Block.
