---
title: number currency
---

# NumberCurrency

Number Currency class adalah object class yang dibuat khusus untuk melakkukan format string number menjadi format mata uang.

**note** : saat ini yang masih tersedia hanya rupiah saja

#### basi usage

```php
use Nagara\Src\Math\NumberCurrency;

$money = new NumberCurrency();
echo $money->rupiah(2500000); # untuk rupiah
echo "<br>";
echo $duit->dollar(123.46); # untuk dollar
```
