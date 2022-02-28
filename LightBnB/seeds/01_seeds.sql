INSERT INTO users
  (name, email, password)
VALUES
  ('Tobi Bello', 'name@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Jane Doe', 'test@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Rob Smith', 'unknown@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Michael Jordan', 'random@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties
  (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
VALUES
  (1, '#9845984', 'description' , 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 25, 1, 1, 2, 'Canada', 'rue guy', 'Montreal', 'QC', 'H13 6F5'),
  (2, '#9846344', 'description' , 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 35, 2, 2, 3, 'Canada', 'rue sheebrook', 'Montreal', 'QC', 'H12 4R5'),
  (4, '#4464366', 'description' , 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 20, 0, 1, 2, 'Canada', 'rue louis-pare', 'Montreal', 'QC', 'H24 6G5'),
  (3, '#3466463', 'description' , 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 30, 1, 2, 3, 'Canada', 'rue atwater', 'Montreal', 'QC', 'H24 2T7');


INSERT INTO reservations
  (guest_id, property_id, start_date, end_date)
VALUES
  (1, 3, '2018-09-11', '2018-09-26'),
  (3, 2, '2019-01-04', '2019-02-01'),
  (4, 1, '2019-01-04', '2019-02-01'),
  (2, 4, '2021-10-01', '2021-10-14');

INSERT INTO property_reviews
  (guest_id, property_id, reservation_id, rating, message)
VALUES
  (4, 1, 3, 3.5 , 'message'),
  (3, 2, 2, 3 , 'message'),
  (1, 3, 1, 4.5, 'message'),
  (2, 4, 4, 5, 'message');
