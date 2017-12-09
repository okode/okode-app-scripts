# Okode App Scripts

App Build Scripts for Okode Projects

## Install dependencies

```
$ npm install
```

## Compile TypeScript

This command will compile `src/*.ts` to `dist/{*.js | *.d.ts}`

```
$ npm run build
```

## CSV2JSON

* Convert JSON to Excel using http://www.convertcsv.com/json-to-csv.htm
* Open generated Excel and transpose rows to columns (copy & paste special...)
* Send Excel to translate service
* Receive Excel from translate service
* Export as CSV (File > Save as... > Comma separated values (.csv))
* Open in text editor (i.e. TextMate) and select Encoding Western - Mac OS Roman
* Save as UNICODE - UTF-8 with CRLF
* Use CSV2JSON to convert to JSON:

```
$ npm run okode:csv2json [file.csv]
```

