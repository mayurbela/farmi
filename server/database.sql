CREATE TABLE products(
	id serial primary key,
	name varchar(100),
	price varchar(40),
	sp varchar(40),
	cat varchar(100),
	subcat varchar(100),
	img varchar(200),
	star integer,
	details text
);


SELECT * FROM products 
WHERE subcat='fruit'

INSERT INTO products (name,price, sp,cat,subcat,img,star,details)
VALUES ('Egg','60/Doz','50/Doz','dairy&deli','poultry','/images/products/egg.jpeg',4,'best eggs');

INSERT INTO products (name,price, sp,cat,subcat,img,star,details)
VALUES ('Apple','100/Kg','80/Kg','fruit&veg','fruit','/images/products/apple.jpeg',4,'best apple');

create table login(
id serial primary key,
username varchar(50),
password varchar(50)
);


CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,         -- Unique identifier for each cart item
    user_id INT NOT NULL,          -- Identifier for the user
    product_id INT NOT NULL,       -- Identifier for the product
    quantity INT NOT NULL DEFAULT 1, -- Quantity of the product in the cart
    FOREIGN KEY (user_id) REFERENCES users(id), -- Foreign key constraint linking to users table
    FOREIGN KEY (product_id) REFERENCES products(id) -- Foreign key constraint linking to products table
);

SELECT ci.id, ci.user_id, ci.product_id, ci.quantity, 
       p.name, p.sp,p.img
FROM cart_items AS ci
JOIN products AS p ON ci.product_id = p.id
WHERE ci.user_id = 41;

