export interface IUcompany {
	name: string;
	catchPhrase: string;
	bs: string;
}
export interface IUgeo {
	lat: string;
	lng: string;
}
export interface IUaddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IUgeo;
}
export interface IUser {
	id: string;
	name: string;
	username: string;
	email: string;
	address: IUaddress;
	phone: string;
	website: string;
	company: IUcompany;
}