---
title: image parser
---

# image parser

#### basic usage

```php

use Nagara\Src\Img\ImgParser;

// create object
$img = new ImgParser;

// put path image file
$img->parseFile("indonesia.jpg"); # default no lang
$img->parseFile("germany.jpg", "deu"); # spesific lang


// print lang support
$img->printLangSupport();

// print about this tool
$img->printAbout();

```

recognition type :
ini akan memakan waktu untuk mengenali text secara random

```php
use Nagara\Src\Img\ImgParser;

# recognition
$img = new ImgParser('path/to/tesseract'); # example path exe'C:\Program Files\Tesseract-OCR\tesseract.exe'
$img->parseFile("english.jpg", "recognition"); # return array

# result
// $data = [
// "status" => false,
// "result" => $th->getMessage()
// ]

# cathing error
$img = new ImgParser('path/to/tesseract'); # example path exe'C:\Program Files\Tesseract-OCR\tesseract.exe'
$text = $img->parseFile("english.jpg", "recognition"); # return array

# error message
if ($text['status'] == false) {
   echo "gambar tidak mengandung text";
}else{
   echo "gambar mengandung text";
}

```

language support :

1. deu
2. eng
3. fra
4. ita
5. jpn
6. spa
