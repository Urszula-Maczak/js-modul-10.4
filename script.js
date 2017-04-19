//Pierwsz klasa

function Telefon(marka, cena, kolor, kraj, model) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.kraj = kraj;
	this.model = model;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");	
}

var GalaxyS6 = new Telefon("Samsung", 2079, "czarny", "koreńskim", "Samsung S6");
var iPhone6s = new Telefon("Apple", 2479, "złoty", "amerykańskim", "iPhone 6s");
var OnePlusOne = new Telefon("OnePlus", 1299, "biały", "chińskim", "OnePlus One");

GalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();

Telefon.prototype.infoPhone = function() {
	console.log(this.model + " jest produktem " + this.kraj + ".");
}

GalaxyS6.infoPhone();
iPhone6s.infoPhone();
OnePlusOne.infoPhone();

Telefon.prototype.bestPhone = function() {
	console.log(this.marka + " jest najbardziej popularną firmą produkującą smartfony wg portalu msmg.pl");
}
GalaxyS6.bestPhone();