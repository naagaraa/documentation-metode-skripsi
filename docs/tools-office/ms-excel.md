---
title: excel dan csv
---

# DOCUMENT EXCEL CLASS

### format file excel atau CSV

- nama column berada pada ROW 1 [A1,B1,C1,D1 ... E - n]
- data yang berupa value atau dimulai dari ROW 2

atau untuk contoh nyata bentuk file csv example bisa check ini adalah file example yang diambil dari kaggle untuk public data penelitian data science atau research of data science jakarta.csv untuk file example pada libraries saya

### method available

```php
$excel = new DocumentExcel;
$excel->read("filename.csv");
$excel->execute();

// show
$excel->showColumn();
$excel->showRow();
$excel->showByColumn("column-name");

```

### basic usage

```php

use Nagara\Src\Doc\DocumentExcel; //load libraries

// init or read file
$excel = new DocumentExcel;
$jakarta = $excel->read("jakarta.csv"); // read file excel
$excel->execute();


// show by column
$column = $excel->showColumn();
$row = $excel->showRow();
$bycolumn = $excel->showByColumn("hospitalized"); //insert column name


// debug field array
dump($column);
dump($row);
dump($bycolumn);

```
