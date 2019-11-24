### Given

CSV file with client purchases.

### Backend

Implement worker which stream every 5 seconds some chunk of purchases to internal JSON storage. Let it be 20 purchases by default. Every purchase has the name, category, brand and price. Brand and category may be blank.

Every purchases should has such JSON document for internal representation:

```
{
  id:
  processing_date:
  name:
  category:
  brand:
  price:
}
```

Provide such endpoints:

```
GET /categories
list of categories

GET /category/{category_name}/purchases
list of purchases for selected category

GET /brands
list of brands

GET /brand/{brand_name}/purchases
list of purchases for selected brand
```

### Frontend

Show list of all categroies and list of all brands. For every category and brand show corresponding purchases. Data should update without reload.
