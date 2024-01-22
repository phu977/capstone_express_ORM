create table nguoi_dung(
	nguoi_dung_id int PRIMARY KEY AUTO_INCREMENT,
	email varchar(100),
	mat_khau varchar(100),
	ho_ten varchar(100),
	tuoi int,
	anh_dai_dien varchar(100)
)

create table binh_luan(
	binh_luan_id int primary key auto_increment,
	nguoi_dung_id int,
hinh_id int,	
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id),
	ngay_binh_luan date,
	noi_dung varchar(255)
)

create table hinh_anh(
	hinh_id int primary key auto_increment,
	ten_hinh VARCHAR(200),
	duong_dan varchar(200),
	mo_ta varchar(255),
	nguoi_dung_id int,
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)
)

create table luu_anh(
	luu_anh_id int primary key auto_increment,
	nguoi_dung_id int,
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	hinh_id int,
	FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id),
	ngay_luu date
)

