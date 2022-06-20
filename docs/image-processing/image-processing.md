---
sidebar_position: 1
title: image processing
---

## IMG PROCESSING Class

:warning: only support for format image jpg or png

##### IMAGE OCR - Tesseract

IMG class adalah class khusus untuk optical character recognition, dibangun menggunakan teserract ocr php, tesseract OCR Enggine sendiri merupakan software Open source yang dikembangkan oleh google team dengan bahasa c++ .
reference :

- https://opensource.google/projects/tesseract
- https://github.com/tesseract-ocr/tesseract
- https://github.com/thiagoalessio/tesseract-ocr-for-php

##### Note

disini saya menggunakan windows sebagai OS, jadi saya termasuk windows users, untuk temen temen lain yang ingin menggunakan OCR wajib menginstall capture2text version 3.9 recommend menggunakan chocolately packages for windows. selengkapnya bisa read di sini

_full doc about tesseract ocr for php_

- https://github.com/thiagoalessio/tesseract-ocr-for-php#-note-for-windows-users

_for install choco_

- https://chocolatey.org/install

_install used administrative powershell_

```powershell
choco install capture2text --version 3.9
```

_file test_
untuk file test bisa di check di halaman ini

- [image test](https://github.com/naagaraa/metode-skriphit/tree/main/src/example/image)

### Image Processing

1. Rescaling | done
2. binarisation | done
3. noise removal | done
4. dilation / erotion | beta
5. rotation / deskewing | not ready
6. borders | not ready
7. transparancy / alpha channel | not ready

#### usage

basic usage image processing my librar and you need install imagick php and gdimage2

##### basic usage

paramter optional for image processing :

- rescaling default

  - 1200 DPI

- Binarisation default :

  - threshold = 0.44
  - channel = 1

- NoiseRemoval
  - quality = 5

```php
include "vendor/autoload.php";

use Nagara\Src\Img\ImgMagic;
use Nagara\Src\Img\ImageProcessing;

// convert image to black and white step 1
$image = new ImgMagic;
$path =  "kk2.png";
$image->filter($path, "grayscale");

// image processing step 2 # example 1
$imgProcess = new ImageProcessing($path);
$imgProcess->Rescaling(1500)->Binarisation()->NoiseRemoval();
$imgProcess->showImage(); # return image


// image processing step 2 # example 2
$imgProcess = new ImageProcessing($path);
$imgProcess->Rescaling(1500); # only rescaling
$imgProcess->ShowImage(); # return image

```

##### get info

basic get information

```php
$path =  "kk2.png";
$imgProcess = new ImageProcessing($path);
$imgProcess->GetDimension(); # return only string with and height

```

##### MIX with Tesseract OCR

```php

include "vendor/autoload.php";
use Nagara\Src\Img\ImgParser;
use Nagara\Src\Img\ImgMagic;
use Nagara\Src\Img\ImageProcessing;

// convert image to black and white
$image = new ImgMagic;
$path =  "indonesia.png";
$image->filter($path, "grayscale");

// image processing
$imgProcess = new ImageProcessing($path);
$imgProcess->Rescaling(1500)->Binarisation()->NoiseRemoval();
// $imgProcess->showImage();

// ocr
$img = new ImgParser('C:\Program Files\Tesseract-OCR\tesseract.exe'); # example path exe'C:\Program Files\Tesseract-OCR\tesseract.exe'
$img->parseFile($path, "recognition");


```

https://mlocati.github.io/articles/php-windows-imagick.html
https://windows.php.net/downloads/pecl/releases/imagick/
https://www.php.net/manual/en/imagick.requirements.php
https://windows.php.net/downloads/pecl/

# tesseract setup

install capture2text for windows

```
choco install capture2text --version 3.9
```

install tesseract lang

```
choco install tesseract --force `tesseract-lang
```

# Maintenner

this code maintenace by me miyuki nagara

- [miyuki nagara](https://github.com/naagaraa/)
