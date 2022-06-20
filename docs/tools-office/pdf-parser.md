---
title: pdf parser
---

# PDF PARSER

pdf parser is class pdf data extraction by Sebastien MALOT class for file

- _note name document can't have a space_

### basic usage

```php

// init
use Nagara\Src\Doc\PdfParser;

// create object
$pdf = new PdfParser;

// save data to string
$data = $pdf->parseFile("filename.pdf");
dump($data);
echo $data;
```
