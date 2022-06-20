---
title: kabisat checker
---

# check years is kabisat

this method for check tahun kabisat

```php
use Nagara\Src\Str\StringMagic;

$str = new StringMagic;
$str->isKabisat(2000); // return tahun kabisat
echo "<br>";
$str->isKabisat(2001); // return bukan tahun kabisat
```
