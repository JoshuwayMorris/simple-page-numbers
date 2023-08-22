
# Simple Page Numbers

A simple JavaScript/TypeScript function that generates a spread of page numbers, based on the desired spread and the total number of pages.

For example, if you have 53 pages, and your current page is 21, with a spread of 2 pages, the function will output:

```
{
    "previousPage": 20,
    "nextPage": 21,
    "totalPages": 53,
    "pages": [
        19,
        20,
        21,
        22,
        23
    ]
}
```

## Usage

You can install this package using NPM.

```
npm install simple-page-numbers --save-dev
```

Then use the function in your files.

```
import { paginate } from "simple-page-numbers";
const pagination = paginate(currentPage, totalPages, spread)
```

## Returns
```
const pagination = paginate(2, 9, 2);
```

