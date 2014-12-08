angular
	.module("adoptionApp")
	.controller("TigersController", TigersControllerFunc);

	function TigersControllerFunc(){

	this.tigerList =[
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	];

		// 	this.catName = catName;
		// 	this.monthsOld = monthsOld;
		// 	this.gender = gender;
		// 	this.adopted = adopted;

		// function catName (){
		// this.tigerList({catName:this.text, adopted: false});
		// that.text = null;
		// }

		// function monthsOld (){
		// this.tigerList({monthsOld:this.text, adopted false});
		// that.text = null;
		// }

		// function gender

}