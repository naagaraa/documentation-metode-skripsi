---
title: image magic
---

# Image Magic

untuk mempermudah process image processing gue update class baru dan method untuk tambahan yaitu image magic, untuk dasar PHP kalian harus >= 7.4 dan telah menginstall module imagick php dan pastikan sudah ready GD image. karena syarat adalh itu.

#### MakeThumbnail

```php

use Nagara\Src\Img\ImgMagic;

$image = new ImgMagic;

$path =  "naruto.jpg";
$image->MakeThumbnail($path); // return thumbnail


```

#### Convert Image jpg or png to PNG, GIF or BMP

```php
use Nagara\Src\Img\ImgMagic;

$image = new ImgMagic;

$path =  "naruto.jpg";
$image->convert($path, "png"); // baut file baru dengan extension png

```

#### Image Filter

filter yang tersedia

- grayscale
- gaussian_blur
- selective_blur
- emboss
- negatif

```php
use Nagara\Src\Img\ImgMagic;

$image = new ImgMagic;

$path =  "naruto.jpg";
$image->filter($path, "grayscale");

```
