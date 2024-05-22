## Adventus

> Get liturgical information about a given day.

## Getting Started

```shell
$ yarn add adventus
```

## Usage

```typescript
import { today } from 'adventus';

const liturgicalInfo = today(new Date(2024, 11, 25));
```

```json
{
  "date": "2024-12-25",
  "season": "christmas",
  "weekOfSeason": 1,
  "dayOfSeason": 1,
  "feasts": [
    {
      "name": "The Nativity of the Lord",
      "rank": "solemnity"
    }
  ]
}
```