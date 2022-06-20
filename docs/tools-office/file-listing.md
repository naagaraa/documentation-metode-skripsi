---
title: listing file
---

# File Manager Listing

listing directory

```php

use Nagara\Src\Doc\FileManager;

$file =  new FileManager;

echo "listing files";
dump($file->listing_files("src"));
echo "listing directory";
dump($file->listing_directory("src"));


```
