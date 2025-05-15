create database shop_db;
use shop_db;

create table customers (
    customer_id int auto_increment primary key,
    name varchar(100),
    address varchar(100)
);

create table orders (
    order_id int auto_increment primary key,
    date date,
    shipping_address varchar(200),
    customer_id int,
    foreign key (customer_id) references customers(customer_id)
);

create table products (
    product_id int auto_increment primary key,
    description varchar(200),
    price decimal(10, 2),
    type varchar(50)
);

create table order_items (
    item_id int auto_increment primary key,
    order_id int,
    product_id int,
    quantity int,
    price decimal(10, 2),
    discount decimal(5, 2),
    foreign key (order_id) references orders(order_id),
    foreign key (product_id) references products(product_id)
);

insert into customers (customer_id, name, address) values
(1, 'Mark Ruiz', '0509 Austin Underpass, Austinfurt, NJ 54440'),
(2, 'Susan Montgomery', '14042 Mueller Cliffs Suite 350, South Nicholas, AR 15374'),
(3, 'James Burton', '980 Michael Overpass, Kevinburgh, TN 72053'),
(4, 'Kerry Webb', '281 Livingston Divide Suite 097, East Michelle, TN 53918'),
(5, 'James Ray', '35616 Christopher Shoals Suite 607, Jeffreyburgh, FL 20509'),
(6, 'Nancy Holloway', '283 Ortiz Trail, North Veronicaburgh, MN 62435'),
(7, 'Travis Tate', '4738 Carter Island, North Lisashire, NY 61109'),
(8, 'Wanda West', '1330 Linda Forks, New Michael, LA 61794'),
(9, 'Jacob Lee', '6394 Kimberly Mountain, Nicoleland, CT 08329'),
(10, 'Lori Adams', '1215 Samuel Field Apt. 834, Sheriborough, IA 39639'),
(11, 'Emily Lee', '19346 Anthony Viaduct, New Victor, MS 24149'),
(12, 'Lisa Nelson', 'Unit 3240 Box 2499, DPO AE 45149'),
(13, 'Autumn Dodson', '64515 Holland Lodge Suite 087, South Annfurt, IL 59284'),
(14, 'Keith Hernandez', '1861 Davis Meadow Apt. 086, Lake Mary, WA 94407'),
(15, 'Jacqueline Bean', 'USS Jackson, FPO AE 57703');


insert into products (product_id, description, price, type)values
(1, 'Including wear cost money.', 202.56, 'Electronics'),
(2, 'Thing class prevent.', 171.73, 'Books'),
(3, 'Off require.', 400.67, 'Books'),
(4, 'At mouth join reveal instead.', 188.80, 'Electronics'),
(5, 'Store also chance.', 285.13, 'Toys'),
(6, 'Wait participant.', 273.81, 'Electronics'),
(7, 'Tonight arrive popular.', 139.75, 'Groceries'),
(8, 'All happen food.', 399.53, 'Toys'),
(9, 'When they.', 173.59, 'Electronics'),
(10, 'Newspaper few budget.', 168.15, 'Groceries'),
(11, 'Stock guy few.', 161.62, 'Electronics'),
(12, 'Summer good of last.', 297.78, 'Toys'),
(13, 'We seem economic.', 15.01, 'Clothing'),
(14, 'Nice choose.', 274.65, 'Groceries'),
(15, 'Responsibility including draw eye their.', 227.04, 'Groceries');


insert into orders (order_id, date, shipping_address, customer_id)values
(1, '2024-10-06', '69659 Smith Pines, Jessicaburgh, TN 28265', 5),
(2, '2024-09-08', 'Unit 0349 Box 7734, DPO AA 32760', 15),
(3, '2025-05-06', '71627 Stephenson Ranch Apt. 759, West Dustin, ME 58907', 12),
(4, '2024-11-30', '821 Kimberly Terrace, Lake Willie, LA 39435', 15),
(5, '2024-12-16', '276 David Glens, Freemanville, RI 73945', 8),
(6, '2024-06-27', '583 Walker Curve Apt. 909, North Michaelbury, CT 02569', 7),
(7, '2024-07-19', '969 Martin Walk Suite 575, South Coryland, AL 83966', 12),
(8, '2024-12-03', '06591 Sanders Orchard Suite 183, North Sandra, AK 96471', 7),
(9, '2024-05-28', '945 Hayes Crossing Suite 675, Gabrielashire, AL 46638', 11),
(10, '2025-01-30', '254 Gonzalez Lakes Suite 773, Jamesland, MD 65751', 1),
(11, '2024-09-13', '476 Dale Groves, Nicolemouth, CT 26267', 7),
(12, '2024-10-26', '4246 Brown Avenue Apt. 829, North Tammy, NE 56457', 6),
(13, '2024-09-01', '49668 Brenda Via, Jackieberg, PA 00670', 6),
(14, '2025-01-03', 'Unit 2989 Box 3122, DPO AE 85133', 11),
(15, '2025-05-05', '401 Crystal Lock Suite 379, South Megan, NM 15467', 1);



insert into order_items (item_id, order_id, product_id, quantity, price, discount)values
(1, 7, 7, 4, 225.18, 5.79),
(2, 15, 11, 3, 124.93, 7.03),
(3, 2, 8, 2, 46.39, 3.06),
(4, 8, 3, 1, 279.29, 11.63),
(5, 14, 12, 3, 65.81, 5.24),
(6, 9, 6, 2, 149.91, 9.18),
(7, 5, 6, 4, 149.88, 15.79),
(8, 10, 7, 4, 26.44, 4.29),
(9, 5, 9, 2, 201.69, 0.22),
(10, 2, 6, 5, 110.97, 5.98),
(11, 15, 8, 3, 274.93, 5.97),
(12, 7, 13, 1, 212.24, 6.89),
(13, 4, 1, 1, 221.81, 2.61),
(14, 3, 6, 4, 55.75, 19.69),
(15, 8, 8, 1, 144.70, 18.54);

