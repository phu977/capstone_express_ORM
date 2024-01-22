create table nguoi_dung(
	nguoi_dung_id int PRIMARY KEY AUTO_INCREMENT,
	email varchar(100),
	mat_khau varchar(100),
	ho_ten varchar(100),
	tuoi int,
	anh_dai_dien varchar(100)
)

INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien)
VALUES
('nguoidung1@email.com', 'mk123456', 'Người Dùng 1', 25, 'avatar1.jpg'),
('nguoidung2@email.com', 'password123', 'Người Dùng 2', 30, 'avatar2.jpg'),
('nguoidung3@email.com', 'abc@123', 'Người Dùng 3', 22, 'avatar3.jpg'),
('nguoidung4@email.com', 'securepass', 'Người Dùng 4', 28, 'avatar4.jpg'),
('nguoidung5@email.com', 'userpass', 'Người Dùng 5', 35, 'avatar5.jpg'),
('nguoidung6@email.com', 'test123', 'Người Dùng 6', 29, 'avatar6.jpg'),
('nguoidung7@email.com', 'pass1234', 'Người Dùng 7', 26, 'avatar7.jpg'),
('nguoidung8@email.com', 'password456', 'Người Dùng 8', 31, 'avatar8.jpg'),
('nguoidung9@email.com', 'securepass', 'Người Dùng 9', 24, 'avatar9.jpg'),
('nguoidung10@email.com', 'userpass', 'Người Dùng 10', 32, 'avatar10.jpg'),
('nguoidung11@email.com', 'test123', 'Người Dùng 11', 27, 'avatar11.jpg'),
('nguoidung12@email.com', 'pass1234', 'Người Dùng 12', 23, 'avatar12.jpg'),
('nguoidung13@email.com', 'password456', 'Người Dùng 13', 33, 'avatar13.jpg'),
('nguoidung14@email.com', 'securepass', 'Người Dùng 14', 28, 'avatar14.jpg'),
('nguoidung15@email.com', 'userpass', 'Người Dùng 15', 26, 'avatar15.jpg'),
('nguoidung16@email.com', 'test123', 'Người Dùng 16', 29, 'avatar16.jpg'),
('nguoidung17@email.com', 'pass1234', 'Người Dùng 17', 31, 'avatar17.jpg'),
('nguoidung18@email.com', 'password456', 'Người Dùng 18', 27, 'avatar18.jpg'),
('nguoidung19@email.com', 'securepass', 'Người Dùng 19', 30, 'avatar19.jpg'),
('nguoidung20@email.com', 'userpass', 'Người Dùng 20', 25, 'avatar20.jpg');

create table binh_luan(
	binh_luan_id int primary key auto_increment,
	nguoi_dung_id int,
    hinh_id int,	
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id),
	ngay_binh_luan date,
	noi_dung varchar(255)
)

INSERT INTO binh_luan (nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung)
VALUES
(1, 1, '2024-01-22', 'Bình luận 1'),
(2, 2, '2024-01-22', 'Bình luận 2'),
(3, 3, '2024-01-22', 'Bình luận 3'),
(4, 4, '2024-01-22', 'Bình luận 4'),
(5, 5, '2024-01-22', 'Bình luận 5'),
(6, 6, '2024-01-22', 'Bình luận 6'),
(7, 7, '2024-01-22', 'Bình luận 7'),
(8, 8, '2024-01-22', 'Bình luận 8'),
(9, 9, '2024-01-22', 'Bình luận 9'),
(10, 10, '2024-01-22', 'Bình luận 10'),
(11, 11, '2024-01-22', 'Bình luận 11'),
(12, 12, '2024-01-22', 'Bình luận 12'),
(13, 13, '2024-01-22', 'Bình luận 13'),
(14, 14, '2024-01-22', 'Bình luận 14'),
(15, 15, '2024-01-22', 'Bình luận 15'),
(16, 16, '2024-01-22', 'Bình luận 16'),
(17, 17, '2024-01-22', 'Bình luận 17'),
(18, 18, '2024-01-22', 'Bình luận 18'),
(19, 19, '2024-01-22', 'Bình luận 19'),
(20, 20, '2024-01-22', 'Bình luận 20');

create table hinh_anh(
	hinh_id int primary key auto_increment,
	ten_hinh VARCHAR(200),
	duong_dan varchar(200),
	mo_ta varchar(255),
	nguoi_dung_id int,
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)
)

INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id)
VALUES
('Hình 1', 'images/hinh1.jpg', 'Mô tả hình 1', 1),
('Hình 2', 'images/hinh2.jpg', 'Mô tả hình 2', 2),
('Hình 3', 'images/hinh3.jpg', 'Mô tả hình 3', 3),
('Hình 4', 'images/hinh4.jpg', 'Mô tả hình 4', 4),
('Hình 5', 'images/hinh5.jpg', 'Mô tả hình 5', 5),
('Hình 6', 'images/hinh6.jpg', 'Mô tả hình 6', 6),
('Hình 7', 'images/hinh7.jpg', 'Mô tả hình 7', 7),
('Hình 8', 'images/hinh8.jpg', 'Mô tả hình 8', 8),
('Hình 9', 'images/hinh9.jpg', 'Mô tả hình 9', 9),
('Hình 10', 'images/hinh10.jpg', 'Mô tả hình 10', 10),
('Hình 11', 'images/hinh11.jpg', 'Mô tả hình 11', 11),
('Hình 12', 'images/hinh12.jpg', 'Mô tả hình 12', 12),
('Hình 13', 'images/hinh13.jpg', 'Mô tả hình 13', 13),
('Hình 14', 'images/hinh14.jpg', 'Mô tả hình 14', 14),
('Hình 15', 'images/hinh15.jpg', 'Mô tả hình 15', 15),
('Hình 16', 'images/hinh16.jpg', 'Mô tả hình 16', 16),
('Hình 17', 'images/hinh17.jpg', 'Mô tả hình 17', 17),
('Hình 18', 'images/hinh18.jpg', 'Mô tả hình 18', 18),
('Hình 19', 'images/hinh19.jpg', 'Mô tả hình 19', 19),
('Hình 20', 'images/hinh20.jpg', 'Mô tả hình 20', 20);

create table luu_anh(
	luu_anh_id int primary key auto_increment,
	nguoi_dung_id int,
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	hinh_id int,
	FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id),
	ngay_luu date
)


INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu)
VALUES
(1, 1, '2024-01-22'),
(2, 2, '2024-01-23'),
(3, 3, '2024-01-25'),
(4, 4, '2024-01-12'),
(5, 5, '2024-01-12'),
(6, 6, '2024-01-22'),
(7, 7, '2024-01-30'),
(8, 8, '2024-02-1'),
(9, 9, '2024-01-2'),
(10, 10, '2024-01-1'),
(11, 11, '2024-01-5'),
(12, 12, '2024-05-7'),
(13, 13, '2024-01-22'),
(14, 14, '2024-01-22'),
(15, 15, '2024-01-4'),
(16, 16, '2024-01-9'),
(17, 17, '2024-02-12'),
(18, 18, '2024-04-12'),
(19, 19, '2024-01-22'),
(20, 20, '2024-01-22');