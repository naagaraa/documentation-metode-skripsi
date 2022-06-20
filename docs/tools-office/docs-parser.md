---
title: docx parser
---

# DOCX PARSER

Docx parser is class docx data extraction by answer at stackoverflow

- _note name document can't have a space_

```php
// init
use Nagara\Src\Doc\DocumentDocx;

// create object
$docx = new DocumentDocx;

// save data to string
$data = $docx->parseFile("filename.docx");
echo $data;

```
